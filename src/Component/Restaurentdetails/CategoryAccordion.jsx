import { useState } from "react";
import MenuItem from "./MenuItem";
import menuData from "../../data/menuData";


export default function CategoryAccordion({
  cartItems,
  addToCart,
  decreaseQuantity,
  searchTerm,
  activeFilter
}){

  const [openCategories, setOpenCategories] = useState({ Recommended: true});

  const toggleCategory = (category) => {
    setOpenCategories((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  // this function filter's every category's items based on search + filter
  const getFilteredItems = (items) => {
    return items.filter((item) => {
      const matchSearch = item.name
          .toLowerCase()
          .includes(searchTerm.toLowerCase());

      let matchFilter = true;
      if(activeFilter === "veg") matchFilter = item.isVeg === true;
      if(activeFilter === "nonveg") matchFilter = item.isVeg === false;
      if(activeFilter === "bestseller") matchFilter = item.rating >= 4.3;

      return matchSearch && matchFilter;
    })
  }


return(

  <div className="max-w-3xl mx-auto px-4 md:px-0">
    {menuData.map((section) => {
      const filteredItems = getFilteredItems(section.items)
      if (filteredItems.length === 0 ) return null

      const isOpen = !!openCategories[section.category];

      return (
        <div key={section.category} className="mb-4">
          <div onClick={() => toggleCategory(section.category)} className="flex justify-between items-center cursor-pointer py-4 border-b border-gray-200">
            <h2 className="text-xl md:text-3xl font-bold">{section.category}({filteredItems.length})</h2>
            <span className={`text-xl md:text-2xl transition-transform duration-200 ${
              isOpen ? "rotate-180" : ""
            }`}>⌃</span>
          </div>

          {isOpen && (
            <div className="mt-2">
              {filteredItems.map((item) => (
                <MenuItem 
                         key={item.id}
                         item={item}
                         cartItems={cartItems}
                         addToCart={addToCart}
                         decreaseQuantity={decreaseQuantity}
                />
              ))}
            </div>
          )}
        </div>
      )
    })}
  </div>

);

}