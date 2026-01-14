import { ShoppingCart } from "lucide-react";
import { useNavigate } from "react-router";

function CartButton() {

  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate("/user/cart")}
      className="relative flex items-center justify-center p-2 rounded-full 
                 hover:bg-gray-100 transition"
      aria-label="Cart"
    >
      <ShoppingCart className="w-5 h-5 text-gray-700" />
    </button>
  );
}

export default CartButton;
