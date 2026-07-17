import { useContext, useState } from "react"
// import Navbar from "../Component/Navbar/Navbar"
import RestaurantSection from "../Component/RestaurantSection/RestaurantSection"
import foodCarouselData from "../data/foodCarouselData"
// import CartSidebar from "../Component/Cart/CartSidebar"
import { CartContext } from "../Context/CartContext"
import FoodCarousel from "../Component/FoodCarousel/FoodCarousel"
import RestaurantCarousel from "../Component/RestaurantCarousel/RestaurantCarousel"

function HomePage() {

        const {cartItems, addToCart, decreaseQuantity} = useContext(CartContext)
        const [activeCategory, setActiveCategory] = useState("All")

    return(
        <>
         <FoodCarousel foods={foodCarouselData} setActiveCategory={setActiveCategory} />
         <RestaurantCarousel />
         <RestaurantSection addToCart={addToCart} cartItems={cartItems} decreaseQuantity={decreaseQuantity} activeCategory={activeCategory} />
         {/* <CartSidebar decreaseQuantity={decreaseQuantity} addToCart={addToCart} isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen} cartItems={cartItems} removeFromCart={removeFromCart} /> */}
        </>
    )
}

export default HomePage