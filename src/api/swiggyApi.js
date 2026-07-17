
import axios from "axios"

const SWIGGY_URL = '/api/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING'

export const getRestaurants = async () => {
    try{
        const response = await axios.get(SWIGGY_URL)
        // console.log(response.data);
        return response.data;
        
    } catch(error) {
        console.error(error)
        
    }
}

// NOT WORKING - IF IT WILL WORKING THEN I WILL USE FOR MY PROJECT
export async function getRestaurantMenu(id) {
  try {
    const response = await axios.get(
      `/api/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.4645279&lng=77.0335614&restaurantId=${id}`
    );

    console.log("Menu Response:", response);

    return response.data;
  } catch (error) {
    console.log(error);
  }
}