import mealgologo from "../assets/mealgo-logo.png";

function Footer() {
  return (
    <footer className="bg-gray-100 mt-16">
      <div className="max-w-7xl mx-auto border-t border-gray-300"></div>

      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row justify-between gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <img
                src={mealgologo}
                alt="MealGo Logo"
                className="w-14 h-14 object-contain"
              />

              <h2 className="text-2xl font-bold text-orange-500">
                MealGo
              </h2>
            </div>

            <p className="mt-3 text-gray-600 max-w-xs">
              Delicious food delivered quickly to your doorstep.
            </p>

            <p className="mt-2 text-gray-500 text-sm">
              Created by Sneha
            </p>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-bold mb-3">Company</h3>

            <ul className="space-y-2 text-gray-600">
              <li>About</li>
              <li>Contact</li>
              <li>Privacy Policy</li>
            </ul>
          </div>

          {/* Explore */}
          <div>
            <h3 className="font-bold mb-3">Explore</h3>

            <ul className="space-y-2 text-gray-600">
              <li>Restaurants</li>
              <li>Offers</li>
              <li>Help Center</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-300 pt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} MealGo. Built with React & Tailwind CSS.
        </div>
      </div>
    </footer>
  );
}

export default Footer;