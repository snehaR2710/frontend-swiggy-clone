import logo from "../../assets/logo1.png";

import {
  Search,
  MapPin,
  ChevronDown,
  Menu,
} from "lucide-react";
import Cart from "../Cart/Cart";
import { useState } from "react";
import MobileMenu from "./MobileMenu";
import { Link } from "react-router-dom";

function Navbar({ setIsCartOpen }) {

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="bg-white shadow-md px-6 py-4 sticky top-0 z-50">

      <div className="max-w-7xl mx-auto flex justify-between items-center md:px-6 py-3 md:py-4">

        {/* Left Side */}
        <div className="flex items-center gap-4 md:8">
          <button onClick={() => setIsMenuOpen(true)} className="md:hidden cursor-pointer"><Menu size={28} /></button>

          {/* Logo */}
          <div className="cursor-pointer">

            <img
              src={logo}
              alt="Swiggy Logo"
              className="w-14 h-14 object-contain md:w-14 md:h-14"
            />

          </div>

          {/* Location */}
          <div className="hidden md:flex items-center gap-2 cursor-pointer group">

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
        <div className="flex items-center gap-10 md:gap-10">

          {/* Search */}
          <Link to="/search" className="hidden md:flex items-center gap-2 font-medium hover:text-[#FC8019] text-lg transition cursor-pointer">

            <Search size={23} />

            <span>Search</span>

          </Link>

          {/* Cart */}
          <Cart setIsCartOpen={setIsCartOpen}/>
          
          {/* Login */}
          <button className="text-lg hidden md:block bg-[#FC8019] text-white px-5 py-2 rounded-lg hover:bg-[#E46F12] transition cursor-pointer">

            Login

          </button>

        </div>

      </div>
      <MobileMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

    </nav>
  );
}

export default Navbar;