import { Link } from "react-router-dom";

function RestaurantCard({ food, addToCart, cartItems, decreaseQuantity }) {
  // const navigate = useNavigate()

  // const cartItem = cartItems.find((item) => item.id === food.id);
  // console.log("food", food);

  return (
    <Link
      className="block cursor-pointer transition-transform duration-300 hover:scale-95"
      to={`/restaurant/${food.id}`}
    >
     {/* Image */}
      <div className="relative">
        <img
          src={food.image}
          alt={food.name}
          className="w-full h-44 object-cover rounded-2xl"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent rounded-2xl"></div>

        {/* Offer */}
        <div className="absolute bottom-3 left-4 text-white font-bold text-2xl">
          <p>
            {food.header}
            {food.subHeader}
          </p>
        </div>
      </div>

      {/* Restaurant Name */}
      <h3 className="mt-3 text-lg font-bold text-gray-800">
        {food.name}
      </h3>

      {/* Rating & Delivery Time */}
      <div className="flex items-center gap-1 mt-1">
        <div className="w-5 h-5 rounded-full bg-green-700 text-white text-[15px] flex justify-center items-center">
          ★
        </div>

        <span className="font-medium">{food.rating}</span>

        <span>•</span>

        <span>{food.deliveryTime}</span>
      </div>

      {/* Cuisine */}
      <p className="text-gray-500 mt-1 truncate">
        {food.cuisine || food.cuisines}
      </p>

      {/* Location */}
      <p className="text-gray-500 truncate">
        {food.location}
      </p>

      {/* Image */}
      {/* <img
        src={food.image}
        alt={food.name}
        className="w-full h-48 object-cover"
      /> */}
      {/* Content */}
      {/* <div className="p-5"> */}
      {/* name */}
      {/* <h2 className="text-md font-bold tracking-tight">{food.name}</h2> */}
      {/* Rating + Time */}
      {/* <div className="flex justify-between items-center gap-3 mt-3">
          <span className="bg-green-500 text-white px-2 py-2 rounded-lg font-medium text-sm">
            ⭐{food.rating}({food.ratingCount})
          </span>
          <span className="text-gray-500 font-medium">
            {food.deliveryTime} mins
          </span>
          <span className="text-gray-500 font-medium">{food.costForTwo}</span>
        </div> */}
      {/* Cuisine */}
      {/* <div className="text-gray-400 mt-3 text-sm">{food.cuisine}</div> */}

      {/* add to cart function */}
      {/* {cartItem ? (
          <div className="flex items-center justify-between mt-5 bg-[#FC8019] rounded-xl text-white px-4 py-2">
            {/* decrement the quantity */}
      {/* <button
              onClick={(e) => {
                e.preventDefault(); // stop link navigaation
                e.stopPropagation(); //stop event bubble
                decreaseQuantity(food.id)
              }}
              className="text-2xl font-bold cursor-pointer"
            >
              -
            </button> */}

      {/* <span>{cartItem.quantity}</span> */}

      {/* increament qantity */}
      {/* <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                addToCart(food)
              }}
              className="text-2xl font-bold cursor-pointer"
            >
              +
            </button> */}
      {/* </div>
        ) : (
          <button
            onClick={(e) => {
              e.preventDefault()
              e.stopPropagation()
              addToCart(food)
            }}
            className="w-full mt-5 bg-[#FC8019] rounded-xl text-white py-3 font-medium hover:bg-[#E46F12] transition cursor-pointer"
          >
            {" "}
            Add To Cart
          </button>
        )} */}
      {/* </div> */}
    </Link>
  );
}

export default RestaurantCard;
