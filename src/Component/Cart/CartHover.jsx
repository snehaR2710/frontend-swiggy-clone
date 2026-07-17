import { useCartContext } from "../../Context/CartContext"
import EmptyCart from "./EmptyCart"
import FilledCart from "./FilledCart"

function CartHover({setIsCartOpen}) {
    const { cartItems } = useCartContext()

    return(
        <div className="absolute top-15 right-0 w-[360px] bg-white shadow-2xl border-t-2 border-[#FC8019] z-50">
            <div className="absolute -top-9 left-0 w-full h-10 bg-transparent"></div>
            <div className="absolute -top-3 right-9 w-5 h-5 bg-white border-t-2 border-l-2 border-[#FC8019] rotate-45"></div>
            <div className="relative bg-white">
                {cartItems.length === 0 ? (
                <EmptyCart />
            ) : (
                <FilledCart setIsCartOpen={setIsCartOpen} />
            )}
            </div>
        </div>
    )

}

export default CartHover 