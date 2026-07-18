import { Clock, Star, Wallet } from "lucide-react";
import Breadcrumb from "./Breadcrumb";

function RestaurantHero({ restaurant }) {
  return (
    <div className="max-w-4xl mx-auto px-4 md:px-0">
      <Breadcrumb restaurantName={restaurant.name} />
      {/* image */}
      <img
        src={restaurant.image}
        alt={restaurant.name}
        className="w-full h-56 md:h-[380px] rounded-3xl object-cover"
      />
      {/* other details */}
      <div className="mt-6">
        <h1 className="text-3xl md:text-5xl font-bold">{restaurant.name}</h1>
        <p className="text-gray-500 text-base md:text-xl mt-2 md:mt-3">
          {restaurant.cuisine}
        </p>
      </div>
      <div className="mt-6 bg-white shadow-md rounded-2xl p-4 md:p-5 flex flex-col md:flex-row gap-4 md:gap-8">

        <div className="flex items-center gap-2 font-medium">
          <Star size={18} className="fill-green-600 text-green-600" />
          <span>{restaurant.rating}</span>
        </div>

        <div className="flex items-center gap-2 font-medium">
          <Clock size={18} className="text-gray-700" />
          <span>{restaurant.deliveryTime} mins</span>
        </div>

        <div className="flex items-center gap-2 font-medium">
          <Wallet size={18} className="text-gray-700" />
          <span>{restaurant.costForTwo}</span>
        </div>
        
      </div>
    </div>
  );
}

export default RestaurantHero;
