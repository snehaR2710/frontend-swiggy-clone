import { useEffect, useState } from "react";
import toast from "react-hot-toast";

function useCart() {

    const [cartItems, setCartItems] = useState(() => {
        const savedCart = localStorage.getItem("cart")

        if(savedCart){
            return JSON.parse(savedCart)
        }

        return []
    })
    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cartItems))
    }, [cartItems])

    function addToCart(item) {
        setCartItems((prevItems) => {
            const existingItem = prevItems.find(
                (cartItem) => cartItem.id === item.id
            )
            if(existingItem) {
                return prevItems.map((cartItem) =>
                    cartItem.id === item.id
                      ? {
                        ...cartItem,
                        quantity: cartItem.quantity + 1
                      }
                      : cartItem  
                )
            }
            toast.success(`${item.name} added to the cart`)

            return [
                ...prevItems,
                {
                    ...item,
                    quantity: 1,
                }
            ]

        })
    }

    // decrement logics 
    function decreaseQuantity(id) {
        setCartItems((prevItems) => 
            prevItems
               .map((item) => 
                 item.id === id
                   ? {
                      ...item,
                      quantity: item.quantity - 1,
                     }
                   : item
            )
            .filter((item) => item.quantity > 0)
        )
    }

    // removed items From Cart
    function removeFromCart(id) {
        setCartItems((prevItems) => 
            prevItems.filter((item) => item.id !== id)
        )

        toast.success(`item removed`)
    }

    function clearCart() {
        setCartItems([])
    }

    return {
        cartItems,
        addToCart,
        decreaseQuantity,
        removeFromCart,
        clearCart
    }
}

export default useCart;