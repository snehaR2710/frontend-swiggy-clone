
function CartRestaurant({ cartItems }) {

    if (cartItems.length === 0) return null;

    const restaurant = cartItems[0]

    return (
        <div className="flex items-center gap-4 border-b border-gray-200 pb-5 mb-5">
            <img src={restaurant.image} alt={restaurant.name} className="w-20 h-20 rounded-lg object-cover" />
            <div>
                <h2 className="text-2xl font-bold text-gray-800">{restaurant.name}</h2>
                <p className="text-gray-500 mt-1">{restaurant.location}</p>
                <button className="mt-3 text-[#5B8BD9] text-sm font-bold hover:underline">VIEW FULL MENU</button>
            </div>
        </div>
    )

}

export default CartRestaurant