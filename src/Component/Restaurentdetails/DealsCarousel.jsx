import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const deals = [
  {
    id: 1,
    tag: "DEAL OF THE DAY",
    tagColor: "bg-red-500",
    title: "Items At ₹79",
    subtitle: "ON SELECT ITEMS |",
    icon: "🏷️",
  },
  {
    id: 2,
    tag: null,
    title: "10% Off Upto ₹75",
    subtitle: "USE VISAPLATINUMCC",
    icon: "💳",
    iconLabel: "VISA",
  },
  {
    id: 3,
    tag: null,
    title: "10% Off Upto ₹75",
    subtitle: "USE VISAPLATINUMCC",
    icon: "💳",
    iconLabel: "VISA",
  },
  {
    id: 4,
    tag: null,
    title: "Flat ₹120 Off",
    subtitle: "USE TRYNEW",
    icon: "🎉",
  },
];

function DealsCarousel({ restaurant }) {    

    const [dealIndex, setDealIndex] = useState(0)
    const visibleDeals = 3

    const handlePrev = () => {
        setDealIndex((prev) => Math.max(prev - 1, 0))
    }

    const handleNext = () => {
        setDealIndex((prev) => Math.min(prev + 1, deals.length - visibleDeals))
    }

    return (
        <div className="max-w-3xl mx-auto px-4 py-8">

      {/* ── Info Card ── */}
      <div className="bg-white rounded-2xl shadow-md p-5 mb-6">

        {/* Rating + Cost */}
        <div className="flex items-center gap-2 text-sm text-gray-700 font-medium mb-3">
          <span className="flex items-center gap-1">
            <span className="text-green-600 text-base">⭐</span>
            <span className="font-bold text-gray-800">
              {restaurant?.rating}
            </span>
            <span className="text-gray-400">
              ({restaurant?.ratingCount})
            </span>
          </span>
          <span className="text-gray-300">•</span>
          <span>{restaurant?.costForTwo}</span>
        </div>

        {/* Cuisine — orange link style */}
        <p className="text-[#FC8019] font-semibold text-sm mb-4 cursor-pointer hover:underline">
          {restaurant?.cuisine}
        </p>

        {/* Divider */}
        <hr className="border-dashed border-gray-200 mb-4" />

        {/* Outlet */}
        <div className="flex items-start gap-3">
          {/* Vertical dotted line */}
          <div className="flex flex-col items-center pt-1">
            <div className="w-2 h-2 rounded-full bg-gray-400" />
            <div className="w-px h-6 bg-gray-300 my-1" />
            <div className="w-2 h-2 rounded-full bg-gray-400" />
          </div>

          {/* Outlet info */}
          <div className="flex flex-col gap-3 text-sm text-gray-600">
            <div className="flex items-center gap-1 font-medium">
              <span className="text-gray-800">Outlet</span>
              <span className="ml-2">Sadar Bazar</span>
              <ChevronDown size={14} className="text-[#FC8019]" />
            </div>
            <div>{restaurant?.deliveryTime} mins</div>
          </div>
        </div>
      </div>

      {/* ── Deals For You ── */}
      <div>
        {/* Header */}
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-lg font-bold text-gray-800">Deals for you</h2>
          <div className="flex gap-2">
            <button
              onClick={handlePrev}
              disabled={dealIndex === 0}
              className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center
                         disabled:opacity-30 hover:bg-gray-100 transition cursor-pointer"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              onClick={handleNext}
              disabled={dealIndex >= deals.length - visibleDeals}
              className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center
                         disabled:opacity-30 hover:bg-gray-100 transition cursor-pointer"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>

        {/* Deals Slider */}
        <div className="overflow-hidden">
          <div
            className="flex gap-3 transition-transform duration-300"
            style={{ transform: `translateX(-${dealIndex * 220}px)` }}
          >
            {deals.map((deal) => (
              <div
                key={deal.id}
                className="min-w-[200px] bg-white border border-gray-200 rounded-2xl p-4 flex items-center gap-3 shadow-sm flex-shrink-0"
              >
                {/* Icon box */}
                <div className="relative w-12 h-12 flex-shrink-0">
                  {deal.tag && (
                    <span className="absolute -top-2 -left-1 bg-red-500 text-white text-[8px] font-bold px-1 py-0.5 rounded leading-tight">
                      {deal.tag}
                    </span>
                  )}
                  <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center text-xl">
                    {deal.iconLabel ? (
                      <span className="text-blue-700 font-bold text-xs">
                        {deal.iconLabel}
                      </span>
                    ) : (
                      deal.icon
                    )}
                  </div>
                </div>

                {/* Text */}
                <div>
                  <p className="text-sm font-bold text-gray-800 leading-tight">
                    {deal.title}
                  </p>
                  <p className="text-xs text-gray-400 mt-0.5">
                    {deal.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
}

export default DealsCarousel;