import logo from "../../assets/logo1.png";

import {
  Search,
  MapPin,
  ChevronDown,
} from "lucide-react";
import Cart from "../Cart/Cart";

function Navbar({ setIsCartOpen }) {

  return (
    <nav className="bg-white shadow-md px-6 py-4 sticky top-0 z-50">

      <div className="max-w-7xl mx-auto flex justify-between items-center">

        {/* Left Side */}
        <div className="flex items-center gap-8">

          {/* Logo */}
          <div className="cursor-pointer">

            <img
              src={logo}
              alt="Swiggy Logo"
              className="w-14 h-14 object-contain"
            />

          </div>

          {/* Location */}
          <div className="flex items-center gap-2 cursor-pointer group">

            <MapPin
              size={20}
              className="text-[#FC8019]"
            />

            <div className="flex items-center gap-1">

              <span className="font-bold border-b-2 border-black group-hover:text-[#FC8019] group-hover:border-[#FC8019] transition">
                Gurgaon
              </span>

              <ChevronDown
                size={18}
                className="text-[#FC8019]"
              />

            </div>

          </div>

        </div>

        {/* Right Side */}
        <div className="flex items-center gap-10">

          {/* Search */}
          <button className="flex items-center gap-2 font-medium hover:text-[#FC8019] transition">

            <Search size={23} />

            <span>Search</span>

          </button>

          {/* Cart */}
          <Cart setIsCartOpen={setIsCartOpen}/>
          
          {/* Login */}
          <button className="bg-[#FC8019] text-white px-5 py-2 rounded-lg hover:bg-[#E46F12] transition cursor-pointer">

            Login

          </button>

        </div>

      </div>

    </nav>
  );
}

export default Navbar;