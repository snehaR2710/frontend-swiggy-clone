import { ChevronDown } from "lucide-react";
import { useState } from "react";
import FilterPopup from "./FilterPopup";

function FilterBar({ sortBy, setSortBy }) {
 
//   control whether popup is open or closed
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative inline-block">
      <button onClick={() => setIsOpen(!isOpen)} className="flex items-center gap-1 px-2 py-1 mb-5 text-gray-700 rounded-full bg-white border-gray-300 border-1 shadow-sm cursor-pointer" >
        <span className="font-medium">Sort By</span>
        <ChevronDown size={18} className={`transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>
      {isOpen && (
        <FilterPopup sortBy={sortBy} setSortBy={setSortBy} closePopup={() => setIsOpen(false)} />
      )}
    </div>
  );
}

export default FilterBar;
