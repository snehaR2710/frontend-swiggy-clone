import Breadcrumb from "./Breadcrumb"

function RestaurantHero({ restaurant }) {
    // console.log("hero", restaurant);
    
    return (
        <div className="max-w-4xl mx-auto ">
            <Breadcrumb restaurantName={restaurant.name} />
            {/* image */}
            <img 
               src={restaurant.image} 
               alt={restaurant.name}
               className="w-full h-[380px] rounded-3xl object-cover"
            />
            {/* other details */}
            <div className="mt-6">
                <h1 className="text-5xl font-bold">{restaurant.name}</h1>
                <p className="text-gray-500 text-xl mt-3">{restaurant.cuisine}</p>
            </div>
            <div className="mt-6 bg-white shadow-md rounded-2xl p-5 flex gap-8">
                <div>⭐{restaurant.rating}</div>
                <div>🕒{restaurant.deliveryTime} mins</div>
                <div>💰{restaurant.costForTwo}</div>
            </div>
        </div>
    )
}

export default RestaurantHero