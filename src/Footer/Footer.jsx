import mealgologo from "../assets/mealgo-logo.png";

function Footer() {
  return (
    <footer className="bg-gray-100 mt-16 ">

      <div className="max-w-7xl mx-auto border-t border-gray-400"></div>

      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row justify-between gap-10">
          <div>
            <img src={mealgologo} alt="Logo" className="w-14" />

            <p className="mt-3 text-gray-600">
              Swiggy Clone built with React & Tailwind CSS.
            </p>

            <p className="mt-2 text-gray-500 text-sm">Created by Sneha</p>
          </div>

          <div>
            <h3 className="font-bold mb-3">Company</h3>

            <ul className="space-y-2 text-gray-600">
              <li>About</li>
              <li>Contact</li>
              <li>Privacy</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-3">Explore</h3>

            <ul className="space-y-2 text-gray-600">
              <li>Restaurants</li>
              <li>Offers</li>
              <li>Help</li>
            </ul>
          </div>
        </div>

        <div className=" mt-10 pt-6 text-center text-sm text-gray-500">
          © 2026 Swiggy Clone. Built for learning purposes.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
