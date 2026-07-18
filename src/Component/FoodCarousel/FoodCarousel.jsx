import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

function FoodCarousel({ foods, setActiveCategory }) {

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);


useEffect(() => {
  const handleResize = () => {
    setIsMobile(window.innerWidth < 768);
  };

  window.addEventListener("resize", handleResize);

  return () => window.removeEventListener("resize", handleResize);
}, []);

const visibleItems = isMobile ? 3 : 7;
  const nextSlide = () => {
    if (currentIndex < foods.length - visibleItems) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const ITEM_WIDTH = isMobile ? 110 : 160;

  // jb koi cuisine card pe click ho:
  // 1. RestaurantSection ka activeCategory  is naam pe set karo
  // 2. Page ko neeche "restaurants" section tak smoothly scroll karo

  const handleFoodClick = (foodName) => {
    setActiveCategory(foodName)

    const restaurantSection = document.getElementById("restaurants");
    if(restaurantSection) {
      restaurantSection.scrollIntoView({behavior: "smooth"})
    }

  }


  return (
    <div className="max-w-[1200px] mx-auto px-4 md:px-0 py-5">
      {/* Heading */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl md:text-3xl font-bold">What's on your mind?</h2>

        <div className="flex items-center gap-3">
          <button
            onClick={prevSlide}
            className="md:w-11 md:h-11 w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300 cursor-pointer "
          >
            <ArrowLeft size={isMobile ? 16 : 20} disabled={currentIndex === 0} />
          </button>

          <button
            onClick={nextSlide}
            className="w-11 h-11 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300 cursor-pointer"
          >
            <ArrowRight size={isMobile ? 16 : 20} />
          </button>
        </div>
      </div>

      {/* Slidebar */}
      <div className="overflow-hidden">
        <div
          className="flex gap-5 transition-all duration-300"
          style={{
            transform: `translateX(-${currentIndex * ITEM_WIDTH}px)`,
          }}
        >
          {foods.map((food) => (
            <div
              key={food.id}
              onClick={() => handleFoodClick(food.name)}
              className="flex flex-col items-center md:min-w-[140px] min-w-[95px] cursor-pointer"
            >
              <img
                src={food.image}
                alt={food.name}
                className="md:w-36 md:h-36 w-24 h-24 object-contain transition-transform duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
      <hr className="mt-7 border-gray-200 border-1" />
    </div>
  );
}

export default FoodCarousel;
