import { useState } from "react";
import RestaurantCard from "../RestaurantCard/RestaurantCard";
import ShimarCard from "../ShimarCard/ShimarCard";
// import { useContext } from "react";
// import { RestaurantContext } from "../../Context/RestaurentContext";
import FilterBar from "./FilterBar";
import restaurantCarouselData from "../../data/restaurantCarouselData";

function RestaurantSection({ addToCart, decreaseQuantity, cartItems, activeCategory,  }) {

  // const { restaurants } = useContext(RestaurantContext);

  const [sortBy, setSortBy] = useState("");

// Cuisine ke hisaab se filter - agar "All" hai to sab dikhao,
// warna sirf wahi restaurants jinke cuisine mein ye naam ho
  const filteredRestaurants = restaurantCarouselData.filter((restaurant) => {
    if(!activeCategory || activeCategory === "All") return true

    return (
      restaurant.cuisines
        ?.toLowerCase()
        .includes(activeCategory.toLowerCase())
    )
  })
  const sortedRestaurants = [...filteredRestaurants];

  // shorting the buttons
switch (sortBy) {
  case "rating":
    sortedRestaurants.sort((a, b) => b.rating - a.rating);
    break;

  case "delivery":
    sortedRestaurants.sort((a, b) => a.deliveryTime - b.deliveryTime);
    break;

  case "highToLow":
    sortedRestaurants.sort((a, b) => b.price - a.price);
    break;

  case "lowToHigh":
    sortedRestaurants.sort((a, b) => a.price - b.price);
    break;

  default:
    break;
}

  return (
    <section className="bg-white pt-6 md:pt-10 pb-12 md:pb-16" id="restaurants">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="border-t border-gray-200 border-1 mb-5"></div>
        {/* Heading */}
        <h2 className="text-xl md:text-3xl font-bold mb-5">
          {activeCategory && activeCategory !== "All"
             ? `${activeCategory} Restaurants in Gurgaon`
             : "Restaurants with online food delivery in Gurgaon"
          }
        </h2>

        <div className="mb-6 md:mb-8">
          <FilterBar sortBy={sortBy} setSortBy={setSortBy} />
        </div>

        {/* grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
          {restaurantCarouselData.length === 0 ? (
            Array(8)
              .fill("")
              .map((_, index) => <ShimarCard key={index} />)
          ) : sortedRestaurants.length > 0 ? (
            sortedRestaurants.map((food) => (
              <RestaurantCard
                key={food.id}
                food={food}
                addToCart={addToCart}
                cartItems={cartItems}
                decreaseQuantity={decreaseQuantity}
              />
            ))
          ) : (
            <div className="col-span-full flex flex-col justify-center items-center py-20">
              {/* Circle Icon */}
              <div className="w-28 h-28 md:w-40 md:h-40 rounded-full bg-gray-200 flex justify-center items-center">
                <div className="w-6 h-6 rounded-full border-4 border-gray-400"></div>
              </div>

              {/* Heading */}BN/               <h2 className="text-2xl md:text-4xl font-bold text-gray-400 mt-8">
                No Result Found
              </h2>

              {/* Subtext */}
              <p className="text-gray-400 text-base md:text-xl mt-3">
                Try searching something else
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default RestaurantSection;