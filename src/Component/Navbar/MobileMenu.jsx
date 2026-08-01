import { X } from "lucide-react";
import { Link } from "react-router-dom";

function MobileMenu({ isMenuOpen, setIsMenuOpen }) {

  return (
    <>
      {/* Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Side Drawer */}
      <div
        className={`
          fixed top-0 left-0 h-full w-[250px] bg-white z-50
          transform transition-transform duration-300
          ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}
          md:hidden
        `}
      >
        {/* Header */}
        <div className="flex justify-between items-center p-5 border-b">
          <h2 className="text-xl font-bold">Menu</h2>

          <button
            onClick={() => setIsMenuOpen(false)}
            className="cursor-pointer"
          >
            <X size={28} />
          </button>
        </div>

        {/* Navigation */}
        <div className="flex flex-col p-5 gap-6">

          <Link to="/" onClick={() => setIsMenuOpen(false)} className="text-left text-gray-800 font-semibold text-xl hover:text-[#FC8019] cursor-pointer">
            Home
          </Link>

          <Link to="/search" onClick={() => setIsMenuOpen(false)} className="text-left text-gray-800 text-xl font-semibold hover:text-[#FC8019] cursor-pointer">
            Search
          </Link>

          <Link to="/signin" className="text-left text-gray-800 text-xl font-semibold hover:text-[#FC8019] cursor-pointer">
            Sign In
          </Link>

        </div>
      </div>
    </>
  );
}

export default MobileMenu;