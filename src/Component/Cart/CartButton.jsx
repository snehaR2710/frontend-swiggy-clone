import { useNavigate } from "react-router-dom";
import { useCartContext } from "../../Context/CartContext";
import CartIcon from "./CartIcon";

function CartButton({ isCartHovered }) {

    const navigate = useNavigate()

  const { cartItems } = useCartContext();

  const itemCount = cartItems.reduce((total, item) => {
    return total + item.quantity;
  }, 0);

  return (
    
      <button onClick={() => navigate("/cart")} className="group flex items-center gap-1 cursor-pointer font-medium">
        <CartIcon itemCount={itemCount} isCartHovered={isCartHovered} />
        <span className="group-hover:text-[#FC8019] text-lg">Cart</span>
      </button>
  );
}

export default CartButton;
