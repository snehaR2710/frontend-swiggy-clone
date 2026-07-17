import { useState } from "react";

function MenuItem({ item, addToCart, cartItems, decreaseQuantity }) {

    const [expanded, setExpanded] = useState(false);

    const cartItem = cartItems.find((cartItem) => cartItem.id === item.id);

    // Discount tabhi hai jab originalPrice defined ho aur price se zyada ho
    const hasDiscount = item.originalPrice && item.originalPrice > item.price;
    const discountPercent = hasDiscount
        ? Math.round(((item.originalPrice - item.price) / item.originalPrice) * 100)
        : 0;

    const description = expanded 
      ? item.description
      : item.description.slice(0, 90) +
        (item.description.length > 90 ? "..." : "")


    return (
        <div className="flex justify-between gap-6 py-6 border-b border-gray-200">
              <div className="flex-1">
                {/* Veg / Non-Veg */}
                {item.isVeg ? (
                    <div className="w-5 h-5 border-2 border-green-600 rounded-sm flex items-center justify-center mb-2">
                        <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                    </div>
                ) :(
                    <div className="w-5 h-5 border-2 border-red-600 rounded-sm flex items-center justify-center mb-2">
                        <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                    </div>
                )}

                {/* Name */}
                <h3 className="text-gray-800 font-semibold">{item.name}</h3>

                {/* Prices — discount hone par strikethrough original price bhi dikhega */}
                <div className="flex items-center gap-2 mt-1">
                    <p className="font-medium">₹{item.price}</p>
                    {hasDiscount && (
                        <p className="text-gray-400 line-through text-sm">₹{item.originalPrice}</p>
                    )}
                </div>

                {/* Rating — Swiggy jaisa green star + count format */}
                <div className="flex items-center gap-1 text-sm mt-1">
                    <span className="text-green-600">★</span>
                    <span className="font-medium text-gray-700">{item.rating}</span>
                    <span className="text-gray-400">({item.ratingCount})</span>
                </div>

                {/* description */}
                <p className="text-sm text-gray-500 mt-2">
                    {description}
                    {item.description.length > 90 && (
                        <button
                        onClick={() => setExpanded(!expanded)}
                        className="ml-1 font-semibold text-gray-700 cursor-pointer"
                        >{expanded ? "less" : "more"}</button>
                    )}
                </p>
              </div>

              {/* Right side */}
              <div className="w-[156px] flex flex-col items-center relative">

                <div className="relative w-[156px] h-[144px]">
                    <img src={item.image} alt={item.name} className="w-full h-full rounded-2xl object-cover"/>

                    {/* Discount badge — top of image, jaisa Swiggy pe dikhta hai */}
                    {hasDiscount && (
                        <div className="absolute -top-2 left-2 bg-purple-700 text-white text-[10px] font-bold px-2 py-1 rounded shadow">
                            {discountPercent}% OFF
                        </div>
                    )}
                </div>

                {cartItem ? (
                    <div className="absolute bottom-[30px] bg-white border border-gray-300 rounded-xl px-3 py-2 flex items-center gap-3 text-green-600 font-bold shadow-md">
                        <button onClick={() => decreaseQuantity(item.id)} className="px-1 cursor-pointer">−</button>
                        <span>{cartItem.quantity}</span>
                        <button onClick={() => addToCart(item)} className="px-1 cursor-pointer">+</button>
                    </div>
                ) : (
                    <button
                        onClick={() => addToCart(item)}
                        className="absolute bottom-[30px] bg-white border border-gray-300 rounded-xl px-8 py-2 text-green-600 font-bold shadow-md cursor-pointer"
                    >
                        ADD
                    </button>
                )}

                {item.customisable && (
                    <p className="text-xs text-gray-400 mt-6">Customisable</p>
                )}
              </div>
        </div>
        
    )    
}

export default MenuItem;