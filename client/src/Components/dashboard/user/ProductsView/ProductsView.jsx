// ProductView.jsx
import { useState } from "react";
import ProductCard from "./ProductCard";

function ProductView() {
    const [showGoToCart, setShowGoToCart] = useState(false);

    const products = [
        {
            id: 1,
            name: "Chicken Biryani",
            description: "Aromatic basmati rice cooked with tender chicken and spices.",
            price: 250,
            image: "https://images.unsplash.com/photo-1600628422019-36c8b71c16c9"
        },
        {
            id: 2,
            name: "Veg Pizza",
            description: "Loaded with fresh vegetables and mozzarella cheese.",
            price: 199,
            image: "https://images.unsplash.com/photo-1548365328-5d7c3b7c6e3f"
        },
        {
            id: 3,
            name: "Paneer Wrap",
            description: "Soft wrap filled with spicy paneer and veggies.",
            price: 149,
            image: "https://images.unsplash.com/photo-1604908177522-402f41a6c98c"
        }
    ];

    const handleAddToCart = () => {
        setShowGoToCart(true);
    };

    return (
        <div className="relative min-h-screen bg-gray-100 p-6">
            <h2 className="text-2xl font-semibold mb-6">Food Items</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {products.map(product => (
                    <ProductCard
                        key={product.id}
                        product={product}
                        onAddToCart={handleAddToCart}
                    />
                ))}
            </div>

            {/* Go to Cart Button */}
            {showGoToCart && (
                <div className="fixed bottom-6 left-1/2 -translate-x-1/2">
                    <button className="bg-green-600 text-white px-6 py-3 rounded-full shadow-lg">
                        Go to Cart
                    </button>
                </div>
            )}
        </div>
    );
}

export default ProductView;
