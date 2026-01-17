import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeFromCartAsync,removeFromCart, setCart } from "../../../../reduxStore/cartSlice";
import CartItem from "./CartItem";
import { useEffect } from "react";
import api from "@lib/axios"

function Cart() {
    const dispatch = useDispatch();

    const cartItems = useSelector(state => state.cart.items);

    const handleIncrease = (product) => {
        dispatch(addToCart(product));
    };

    const handleDecrease = (product) => {
        dispatch(removeFromCartAsync(product));
    };

    useEffect(() => {
        const fetchCart = async () => {
            try {
                const response = await api.get("/user/get-user-cart");
                dispatch(setCart(response.data.cart.items));
            }
            catch (e) {
                console.log("Error", e)
            }
        };
        fetchCart();
    }, [dispatch])

    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <h2 className="text-2xl font-semibold mb-6">Your Cart</h2>

            {cartItems.length === 0 ? (
                <p className="text-gray-500 text-center">
                    Your cart is empty
                </p>
            ) : (
                <>
                    <div className="space-y-4 mb-28">
                        {cartItems.map(item => (
                            <CartItem
                                key={item.id}
                                item={item}
                                onIncrease={() => handleIncrease(item)}
                                onDecrease={() => handleDecrease(item)}
                            />
                        ))}
                    </div>

                    <div className="fixed bottom-0 left-0 right-0 bg-white p-4 shadow-md">
                        <button className="w-full bg-green-600 text-white py-3 rounded-lg text-lg font-semibold">
                            Proceed to Checkout
                        </button>
                    </div>
                </>
            )}
        </div>
    );
}

export default Cart;
