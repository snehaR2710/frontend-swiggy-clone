
export default function FilterButtons({ activeFilter, setActiveFilter }) {

    // if in case user clicks on the same filter then the off that filter(toggle behavior)
    const handleClick = (filter) => {
        setActiveFilter((prev) => (prev === filter ? null : filter))
    }

    return (

        <div className="max-w-4xl mx-auto mt-8">

            <div className="flex gap-3 overflow-x-auto scrollbar-hide pb-2">

                <button
                    onClick={() => handleClick("veg")}
                    className={`px-4 md:px-5 py-2 whitespace-nowrap rounded-full border transition cursor-pointer ${activeFilter === "veg"
                        ? "bg-green-600 text-white border-green-600"
                        : "bg-white hover:bg-gray-100"
                    }`}
                >
                    🟢 Veg
                </button>

                <button
                    onClick={() => handleClick("nonveg")}
                    className={`px-4 md:px-5 py-2 whitespace-nowrap rounded-full border transition cursor-pointer ${
                        activeFilter === "nonveg"
                        ? "bg-red-600 text-white border-red-600"
                        : "bg-white hover:bg-gray-100"
                    }`}
                >
                    🔺 Non Veg
                </button>

                <button
                    onClick={() => handleClick("bestseller")}
                    className={`px-4 md:px-5 py-2 whitespace-nowrap rounded-full border transition cursor-pointer ${
                        activeFilter === "bestseller"
                        ? "bg-orange-500 text-white border-orange-500"
                        : "bg-white hover:bg-gray-100"
                    }`}
                >
                    Bestseller
                </button>

            </div>

        </div>

    );

}