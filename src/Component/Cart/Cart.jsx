import { useState } from "react"
import CartButton from "./CartButton"
import CartHover from "./CartHover"

function Cart({ setIsCartOpen }) {

    const [isCartHovered, setIsCartHovered] = useState(false)

    return(
        <div className="relative" onMouseEnter={() => setIsCartHovered(true)} onMouseLeave={() => setIsCartHovered(false)}>
            <CartButton isCartHovered={isCartHovered} />
            { isCartHovered && <CartHover setIsCartOpen={setIsCartOpen} />}
        </div>
    )

}

export default Cart