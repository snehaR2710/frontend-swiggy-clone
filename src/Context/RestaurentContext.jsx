import { useState, createContext, useEffect } from "react";
import { getRestaurants } from "../api/swiggyApi";

export const RestaurantContext = createContext();

function RestaurentProvider({ children }) {
  const [restaurants, setRestaurants] = useState([]);

//   console.log("provider Render");

//   console.log("Context Restaurants:", restaurants);

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const restaurentDataFromApi = await getRestaurants();
        const resData =
          restaurentDataFromApi.data.cards[4].card.card.gridElements
            .infoWithStyle.restaurants;
            

        const formattedRestaurants = resData.map((restaurant) => {
          const costForTwoText = restaurant.info.costForTwo; 

          const priceInNumber =
            parseInt(costForTwoText?.replace(/[^0-9]/g, "")) || 0;

          return {
            id: restaurant.info.id,
            name: restaurant.info.name,
            cuisine: restaurant.info.cuisines?.slice(0, 3).join(", "),
            rating: restaurant.info.avgRating,
            costForTwo: costForTwoText,
            price: priceInNumber,
            deliveryTime: restaurant.info.sla?.deliveryTime,
            ratingCount: restaurant.info.totalRatingsString,
            header: restaurant.info?.aggregatedDiscountInfoV3?.header,
            subHeader: restaurant.info?.aggregatedDiscountInfoV3?.subHeader,
            image: `https://media-assets.swiggy.com/swiggy/image/upload/${restaurant.info.cloudinaryImageId}`,
          };
        });

        setRestaurants(formattedRestaurants);
      } catch (error) {
        console.log(error);
      }
    };
    fetchRestaurants();
  }, []);

  return (
    <RestaurantContext.Provider
      value={{
        restaurants,
        setRestaurants,
      }}
    >
      {children}
    </RestaurantContext.Provider>
  );
}

export default RestaurentProvider;
