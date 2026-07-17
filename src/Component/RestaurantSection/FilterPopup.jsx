import { useState } from "react";

function FilterPopup({ sortBy, setSortBy, closePopup }) {

    const [selected, setSelected] = useState(sortBy);

  const options = [
    {
      label: "Relevance (Default)",
      value: "",
    },
    {
      label: "Delivery Time",
      value: "delivery",
    },
    {
      label: "Rating",
      value: "rating",
    },
    {
      label: "Cost: Low to High",
      value: "lowToHigh",
    },
    {
      label: "Cost: High to Low",
      value: "highToLow",
    },
  ];

   const applyFilter = () => {
    setSortBy(selected);
    closePopup();
  };
  return (
    <div className="absolute top-13 left-0 w-[210px] bg-white rounded-3xl shadow-2xl z-50 ">

        <div className="p-6 space-y-6">
            {options.map((option) => (
                <label key={option.value} className="flex justify-between items-center cursor-pointer">
                    <span className="text-[15px] text-gray-700 font-medium">{option.label}</span>
                    <input type="radio" name="sort" value={option.value} checked={selected === option.value} onChange={() => setSelected(option.value)} className="accent-amber-500 w-4 h-4 cursor-pointer" />
                </label>
            ))}
        </div>

        <div className="border-t border-gray-400 py-2 flex justify-center">
            <button onClick={applyFilter} className="text-orange-500 font-bold text-md cursor-pointer">Apply</button>
        </div>
      
    </div>
  );
}

export default FilterPopup;
