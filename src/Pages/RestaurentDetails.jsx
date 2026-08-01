import { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { RestaurantContext } from "../Context/RestaurentContext";
import RestaurantHero from "../Component/Restaurentdetails/RestaurantHero";
import DealsCarousel from "../Component/Restaurentdetails/DealsCarousel";
import SearchBar from "../Component/Restaurentdetails/SearchBar";
import MenuHeading from "../Component/Restaurentdetails/MenuHeading";
import FilterButtons from "../Component/Restaurentdetails/FilterButtons";
import CategoryAccordion from "../Component/Restaurentdetails/CategoryAccordion";
import { CartContext } from "../Context/CartContext";
import NotFound from "./NotFound";
import restaurantCarouselData from "../data/restaurantCarouselData";

function Restaurentdetails() {

    const { id } = useParams()
    const { restaurants } = useContext(RestaurantContext)
    const { cartItems, addToCart, decreaseQuantity } = useContext(CartContext)
    const [searchTerm, setSearchTerm] = useState("")
    const [activeFilter, setActiveFilter] = useState(null)

    const restaurant = 
      restaurants.find((r) => String(r.id) === id) ||
      restaurantCarouselData.find((r) => String(r.id) === id)
      
    
// Restaurent are still loading
if(restaurants.length === 0){
  return (
    <div className="p-10 text-2xl">Loading Restaurant...</div>
  )
}

// Restaurant loaded, but this id doesn't esist
if (!restaurant) {
  return <NotFound />
}
    
    return (
        <>
          <RestaurantHero restaurant={restaurant} />
          <DealsCarousel />
          <MenuHeading />
          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          <FilterButtons activeFilter={activeFilter} setActiveFilter={setActiveFilter} />
          <CategoryAccordion 
            cartItems={cartItems}
            addToCart={addToCart}
            decreaseQuantity={decreaseQuantity}
            searchTerm={searchTerm}
            activeFilter={activeFilter}
          />
        </>
        
);
}
export default Restaurentdetails;