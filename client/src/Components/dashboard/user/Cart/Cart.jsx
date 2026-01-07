// CartPage.jsx
import { useState } from "react";
import CartItem from "./CartItem";

function Cart() {
    const [cartItems, setCartItems] = useState([
        {
            id: 1,
            name: "Chicken Biryani",
            description: "Aromatic basmati rice cooked with tender chicken.",
            price: 250,
            quantity: 1,
            image: "https://images.unsplash.com/photo-1600628422019-36c8b71c16c9"
        },
        {
            id: 2,
            name: "Veg Pizza",
            description: "Loaded with fresh vegetables and mozzarella cheese.",
            price: 199,
            quantity: 2,
            image: "https://images.unsplash.com/photo-1548365328-5d7c3b7c6e3f"
        }
    ]);

    const increaseQuantity = (id) => {
        setCartItems(items =>
            items.map(item =>
                item.id === id
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            )
        );
    };

    const decreaseQuantity = (id) => {
        setCartItems(items =>
            items
                .map(item =>
                    item.id === id
                        ? { ...item, quantity: item.quantity - 1 }
                        : item
                )
                .filter(item => item.quantity > 0)
        );
    };

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
                                onIncrease={increaseQuantity}
                                onDecrease={decreaseQuantity}
                            />
                        ))}
                    </div>

                    {/* Checkout Button */}
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
