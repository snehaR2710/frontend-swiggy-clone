import useCart from "../hooks/useCart";
import { createContext, useContext } from "react";

export const CartContext = createContext()

export const useCartContext = () => {
    return useContext(CartContext);
};

function CartProvider ({ children }) {

    const cart = useCart();

    return (
        <CartContext.Provider value={cart}>
            {children}
        </CartContext.Provider>

    )
}

export default CartProvider