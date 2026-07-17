
export default function ShimarCard() {
    return(
        <div className="bg-white rounded-3xl overflow-hidden shadow-lg animate-pulse">
            {/* Image skeleton */}
            <div className="w-full h-48 bg-gray-300"></div>
            {/* Content */}
            <div className="p-5">

                {/* Title */}
                <div className="h-6 bg-gray-300 rounded w-3/4"></div>

                {/* Rating */}
                <div className="flex gap-3 mt-4">
                    <div className="h-8 w-16 bg-gray-300 rounded-lg"></div>
                    <div className=" h-8 w-24 bg-gray-300 rounded-lg"></div>
                </div>
                {/* Cuisine */}
                <div className="h-4 bg-gray-300 rounded w-2/3 mt-4"></div>
            </div>
        </div>
    )
}
 
