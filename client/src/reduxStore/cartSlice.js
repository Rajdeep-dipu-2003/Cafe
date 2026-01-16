import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "@lib/axios"

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: []
    },
    reducers: {
        addToCart(state, action) {
            const product = action.payload;

            const existingItem = state.items.find(
                item => item._id == product._id
            );

            if (existingItem) {
                existingItem.quantity += 1;
            }
            else {
                state.items.push({
                    ...product, 
                    quantity : 1
                });
            }
        },
        removeFromCart(state, action) {

            const product = action.payload;

            const existingItem = state.items.find(
                item => item._id == product._id
            );

            if (existingItem.quantity > 1) {
                existingItem.quantity -= 1;
            }
            else {
                state.items = state.items.filter(
                    item => item._id !== product._id
                );
            }
        },
    }
})

export const addToCartAsync = createAsyncThunk(
    "cart/addToCartAsync",
    async(product, { dispatch }) => {
        dispatch(addToCart(product)); // immediately update the redux store

        // persist in the backend
        // TODO : update the quantity logic
        await api.post("/user/add-to-cart", {
            productId: product._id,
        });
    }
)

export const removeFromCartAsync = createAsyncThunk(
    "carrt/removeFromCart",
    async(product, { dispatch }) => {
        dispatch(removeFromCart(product));

        await api.post("/user/remove-from-cart", {
            productId: product._id,
        })
    }
    
)

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;