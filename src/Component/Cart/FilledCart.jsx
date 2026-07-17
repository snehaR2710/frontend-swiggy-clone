import { useCartContext } from "../../Context/CartContext";
import CartItem from "./CartItem";
import CartRestaurant from "./CartRestaurant";


function FilledCart({setIsCartOpen}) {

    const { cartItems } = useCartContext()

    return (
        <div className="p-6">
            <CartRestaurant cartItems={cartItems} />
            <div className="mt-6 space-y-5">
                {cartItems.map((item) => (
                    <CartItem key={item.id} item={item} />
                ))}
            </div>
            <button onClick={() => setIsCartOpen(true)} className="w-full mt-6 py-3 bg-[#FC8019] hover:bg-[#E46F12]">View Cart</button>
        </div>
    );
}

export default FilledCart;