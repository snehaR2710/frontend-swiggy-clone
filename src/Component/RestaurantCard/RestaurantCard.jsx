import { Link } from "react-router-dom";

function RestaurantCard({ food }) {

  return (
    <Link
      className="block cursor-pointer transition-transform duration-300 hover:scale-95 active:scale-95"
      to={`/restaurant/${food.id}`}
    >
     {/* Image */}
      <div className="relative">
        <img
          src={food.image}
          alt={food.name}
          className="w-full h-40 md:h-44 object-cover rounded-2xl"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent rounded-2xl"></div>

        {/* Offer */}
        <div className="absolute bottom-3 left-3 md:left-4 text-white font-bold text-lg md:text-2xl">
          <p>
            {food.header}
            {food.subHeader}
          </p>
        </div>
      </div>

      {/* Restaurant Name */}
      <h3 className="mt-3 text-base md:text-lg font-bold text-gray-800 line-clamp-1">
        {food.name}
      </h3>

      {/* Rating & Delivery Time */}
      <div className="flex items-center gap-1 mt-1">
        <div className="w-4 h-4 md:w-5 md:h-5 rounded-full bg-green-700 text-white text-[11px] md:text-[15px] flex justify-center items-center">
          ★
        </div>

        <span className="font-medium text-sm md:text-base">{food.rating}</span>

        <span>•</span>

        <span className="text-sm md:text-base">{food.deliveryTime}</span>
      </div>

      {/* Cuisine */}
      <p className="text-gray-500 text-sm md:text-base mt-1 truncate">
        {food.cuisine || food.cuisines}
      </p>

      {/* Location */}
      <p className="text-gray-500 text-sm md:text-base truncate">
        {food.location}
      </p>
    </Link>
  );
}

export default RestaurantCard;
