import { ArrowLeft, Search } from "lucide-react";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { RestaurantContext } from "../Context/RestaurentContext"
import RestaurantCard from "../Component/RestaurantCard/RestaurantCard"

function SearchPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const { restaurants } = useContext(RestaurantContext);

  const filteredRestaurants = restaurants.filter((restaurant) => {
    if(!searchTerm.trim()) return false;

    return (
        restaurant.name
          .toLowerCase()
          .includes(searchTerm.toLowerCase()) ||

          restaurant.cuisine
            ?.toLowerCase()
            .includes(searchTerm.toLowerCase())
    )
  })

  return (
    <div className="max-w-5xl mx-auto px-6 py-10 min-h-screen">

      {/* Header */}
      <div className="flex items-center gap-4 mb-8">
        <Link to="/">
          <ArrowLeft
            size={28}
            className="cursor-pointer hover:text-[#FC8019] transition"
          />
        </Link>

        <h1 className="text-3xl font-bold">
          Search
        </h1>
      </div>

      {/* Search Box */}
      <div className="relative">

        <input
          type="text"
          placeholder="Search for restaurants and food"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="
            w-full
            border
            border-gray-300
            rounded-xl
            py-4
            pl-14
            pr-4
            text-lg
            outline-none
            focus:border-[#FC8019]
          "
        />

        <Search
          size={22}
          className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400"
        />

      </div>

      {/* Popular Searches */}
      {/* {!searchTerm && (
        <div className="mt-12">

          <h2 className="text-xl font-bold mb-5">
            Popular Searches
          </h2>

          <div className="flex flex-wrap gap-4">

            {[
              "Pizza",
              "Burger",
              "Biryani",
              "Rolls",
              "Coffee",
              "Momos",
              "Cake",
              "Chinese",
            ].map((item) => (
              <button
                key={item}
                onClick={() => setSearchTerm(item)}
                className="
                  px-5
                  py-3
                  rounded-full
                  bg-gray-100
                  hover:bg-[#FC8019]
                  hover:text-white
                  transition
                  cursor-pointer
                "
              >
                {item}
              </button>
            ))}

          </div>

        </div>
      )} */}

      {searchTerm && (
        <div className="mt-10">
            <h2 className="text-2xl font-bold mb-6">Search Results</h2>

            {filteredRestaurants.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"> 
                    {filteredRestaurants.map((restaurant) => (
                        <RestaurantCard 
                          key={restaurant.id}
                          food={restaurant}
                          cartItem={[]}
                          addToCart={() => {}}
                          decreaseQuantity={() => {}}
                        />
                    ))}
                </div>
            ) : (
                <div className="text-center py-20">
                    <h2 className="text-3xl font-bold text-gray-400">No restaurants found</h2>
                    <p className="text-gray-500 mt-2">Try searching something else.</p>
                </div>
            )}
        </div>
      )}
    </div>
  );
}

export default SearchPage;