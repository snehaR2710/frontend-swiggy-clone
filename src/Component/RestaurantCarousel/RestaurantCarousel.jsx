import { ArrowLeft, ArrowRight } from "lucide-react";
import { useState } from "react";
import restaurantCarouselData from "../../data/restaurantCarouselData";

function RestaurantCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const restaurents = restaurantCarouselData;

  const visibleItem = 4;

  const nextSlide = () => {
    if (currentIndex < restaurents.length - visibleItem) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="max-w-[1200px] mx-auto py-8">
      <div className="flex justify-between items-center mb-8">
        <h2 className="font-bold text-xl">Top restaurant chains in Gurgaon</h2>

        <div className="flex items-center gap-3">
          <button
            onClick={prevSlide}
            className="w-11 h-11 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300 cursor-pointer"
          >
            <ArrowLeft size={20} />
          </button>

          <button
            onClick={nextSlide}
            className="w-11 h-11 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300 cursor-pointer "
          >
            <ArrowRight size={20} />
          </button>
        </div>
      </div>

      {/* Restaurant Slider */}
      <div className="overflow-hidden">
        <div
          className="flex gap-5 transition-transform duration-300"
          style={{ transform: `translateX(-${currentIndex * 300}px)` }}
        >
          {restaurents.map((restaurent) => (
            <div
              key={restaurent.id}
              className="min-w-[280px] cursor-pointer transition-transform duration-300 hover:scale-95"
            >
              <div className="relative">
                <img
                  src={restaurent.image}
                  alt={restaurent.name}
                  className="w-full h-44 object-cover rounded-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent rounded-2xl"></div>
                <div className="absolute bottom-3 left-4 text-white font-bold text-2xl ">
                  <p>{restaurent.offer}</p>
                </div>
              </div>
              <h3 className="mt-3 text-lg font-bold text-gray-800">
                {restaurent.name}
              </h3>

              <div className="flex items-center gap-1 mt-1">
                <div className="w-5 h-5 rounded-full bg-green-700 text-white text-[15px] flex justify-center items-center">
                  ★
                </div>
                <span className="font-medium">{restaurent.rating}</span>
                <span>•</span>
                <span>{restaurent.deliveryTime}</span>
              </div>
              <p className="text-gray-500 mt-1 truncate">
                {restaurent.cuisines}
              </p>
              <p className="text-gray-500 truncate">{restaurent.location}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default RestaurantCarousel;
