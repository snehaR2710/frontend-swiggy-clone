import logo from "../../assets/logo1.png";

import { Search, MapPin, ChevronDown, Menu, UserRound } from "lucide-react";
import Cart from "../Cart/Cart";
import { useState } from "react";
import MobileMenu from "./MobileMenu";
import { Link } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext";
import LoginModal from "../Auth/LoginModal";
import UserMenu from "../Auth/UserMenu";

function Navbar({ setIsCartOpen }) {
  const [showUserMenu, setShowUserMenu] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const { user, logout } = useAuth();

  return (
    <nav className="bg-white shadow-md px-6 py-4 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center md:px-6 py-3 md:py-4">
        {/* Left Side */}
        <div className="flex items-center gap-4 md:8">
          <button
            onClick={() => setIsMenuOpen(true)}
            className="md:hidden cursor-pointer"
          >
            <Menu size={28} />
          </button>

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
            <MapPin size={20} className="text-[#FC8019]" />

            <div className="flex items-center gap-1">
              <span className="font-bold border-b-2 border-black group-hover:text-[#FC8019] group-hover:border-[#FC8019] transition">
                Gurgaon
              </span>

              <ChevronDown size={18} className="text-[#FC8019]" />
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-10 md:gap-10">
          {/* Search */}
          <Link
            to="/search"
            className="hidden md:flex items-center gap-2 font-medium hover:text-[#FC8019] text-lg transition cursor-pointer"
          >
            <Search size={23} />

            <span>Search</span>
          </Link>

          {/* Cart */}
          <Cart setIsCartOpen={setIsCartOpen} />

          {/* Login */}

          <div className="relative hidden md:block">
            {user ? (
             
              <div>
                <button onClick={() => setShowUserMenu(!showUserMenu)} className="flex items-center gap-2 font-medium hover:text-[#FC8019] transition cursor-pointer">
                  <UserRound size={18} />
                  <span>{user.name}</span>
                  <ChevronDown size={16} />
                </button>
                {
                  showUserMenu && (
                    <UserMenu onClose={() => setShowUserMenu(false)} />
                  )}
              </div>
            ) : (
              <button
                onClick={() => setIsLoginOpen(true)}
                className="hidden md:flex items-center gap-2 font-medium text-gray-800 hover:text-[#FC8019] transition cursor-pointer"
              >
                <UserRound size={18} strokeWidth={2} />
                <span>Sign In</span>
              </button>
            )}
          </div>
        </div>
      </div>
      <MobileMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      {isLoginOpen && <LoginModal onClose={() => setIsLoginOpen(false)} />}
    </nav>
  );
}

export default Navbar;
