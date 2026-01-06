// ProductCard.jsx
function ProductCard({ product, onAddToCart }) {
    return (
        <div className="bg-white rounded-lg shadow-md p-4 flex flex-col">
            <img
                src={product.image}
                alt={product.name}
                className="h-40 w-full object-cover rounded-md"
            />

            <div className="mt-3 flex-1">
                <h3 className="text-lg font-semibold">{product.name}</h3>
                <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                    {product.description}
                </p>
            </div>

            <div className="mt-3 flex items-center justify-between">
                <span className="text-lg font-bold text-green-600">
                    ₹{product.price}
                </span>

                <button
                    onClick={onAddToCart}
                    className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md text-sm"
                >
                    Add to Cart
                </button>
            </div>
        </div>
    );
}

export default ProductCard;
