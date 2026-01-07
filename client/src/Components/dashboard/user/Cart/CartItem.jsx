// CartItem.jsx
function CartItem({ item, onIncrease, onDecrease }) {
    return (
        <div className="flex items-center gap-4 bg-white p-4 rounded-lg shadow-sm">
            {/* Product Image */}
            <img
                src={item.image}
                alt={item.name}
                className="h-20 w-20 object-cover rounded-md"
            />

            {/* Product Details */}
            <div className="flex-1">
                <h3 className="font-semibold text-lg">{item.name}</h3>
                <p className="text-sm text-gray-600 line-clamp-2">
                    {item.description}
                </p>
                <p className="font-bold text-green-600 mt-1">
                    ₹{item.price}
                </p>
            </div>

            {/* Quantity Controls */}
            <div className="flex items-center gap-3">
                <button
                    onClick={() => onDecrease(item.id)}
                    className="w-8 h-8 flex items-center justify-center rounded-full border text-lg"
                >
                    −
                </button>

                <span className="w-6 text-center font-semibold">
                    {item.quantity}
                </span>

                <button
                    onClick={() => onIncrease(item.id)}
                    className="w-8 h-8 flex items-center justify-center rounded-full border text-lg"
                >
                    +
                </button>
            </div>
        </div>
    );
}

export default CartItem;
