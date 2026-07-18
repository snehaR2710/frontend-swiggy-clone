import { useCartContext } from "../../Context/CartContext";
import CartItem from "./CartItem";
import CartRestaurant from "./CartRestaurant";
import { useNavigate } from "react-router-dom";


function FilledCart({setIsCartOpen}) {

    const navigate = useNavigate()

    const { cartItems } = useCartContext()

    return (
        <div className="p-6">
            <CartRestaurant cartItems={cartItems} />
            <div className="mt-6 space-y-5">
                {cartItems.map((item) => (
                    <CartItem key={item.id} item={item} />
                ))}
            </div>
            {/* <Link to="/cart" className="block w-full text-center bg-[#FC8019] text-white py-3 rounded-lg font-medium hover:bg-orange-600">View Cart</Link> */}
            <button onClick={() => {
                setIsCartOpen(false)
                navigate("/cart")
            }}
             
              className="w-full mt-6 py-3 bg-[#FC8019] hover:bg-[#E46F12] cursor-pointer">
                View Cart
            </button>
        </div>
    );
}

export default FilledCart;