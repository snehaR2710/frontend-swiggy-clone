import { useState } from "react";
import toast from "react-hot-toast";

function useCart() {
    const [cartItems, setCartItems] = useState([])


    // remove from cart

    const removeFromCart = (foodId) => {

        const item = cartItems.find(
            (item) => item.id === foodId
        )

        setCartItems((prev) => 
            prev.filter((item) => item.id !== foodId)
        )

        if(item) {
            toast(`${item.name} removed from the cart`)
        }
    }

    // const removeFromCart = (foodId) => {
    //     setCartItems((prev) => 
    //         prev.filter((item) => item.id !== foodId)
    //     )

        
    // } 

    // Add items
    const addToCart = (food) => {

        setCartItems((prev) => {

            const existingItem = prev.find(
                (item) => item.id === food.id
            )
            if(existingItem) {
                return prev.map((item) =>
                    item.id === food.id
                       ? {...item, quantity: item.quantity + 1}
                       : item 
                )
            }

            toast.success(`${food.name} added to cart`);

            return [
                ...prev,
                {...food, quantity: 1}
            ]
        })
    }

    // Decrease quantity
    const decreaseQuantity = (foodId) => {
        setCartItems((prev) => 
            prev
                .map((item) => 
                    item.id === foodId
                    ? {...item, quantity: item.quantity - 1}
                    : item
            )
            .filter((item) => item.quantity > 0)
        )
    }

    return {
        cartItems,
        addToCart,
        decreaseQuantity,
        removeFromCart
    }
}

export default useCart;