
function FoodItem({ item }) {
    return (
        <div className="flex flex-col items-center cursor-pointer">
            <img src={item.img} alt={item.name} className="w-36 h-36 object-contain" />
            <p className="mt-2 text-xl font-medium text-gray-700">{item.name}</p>
        </div>
    )
}

export default FoodItem