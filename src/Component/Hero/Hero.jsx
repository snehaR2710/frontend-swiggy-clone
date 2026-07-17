import { Search } from "lucide-react";

function Hero() {
  return (
    <section className="bg-gradient-to-r from-[#FC8019] to-[#ff9f43] min-h-[500px] flex items-center">
      <div className="max-w-7xl mx-auto px-6 w-full">
        {/* hero section */}
        <div className="max-w-3xl">
          {/* Heading */}
          <h1 className="text-5xl md:text-xl font-bold text-white leading-tight">
            Order food & groceries. <br />
            Discover best restaurants
          </h1>
          {/* Subjects */}
          <p className="text-white/90 text-lg mt-6">
            Fast delivery at your doorsteps from your favourite restaurants.
          </p>
          {/* search Bar */}
          <div className="bg-white mt-10 rounded-2xl p-3 flex items-center shadow-2xl">
            <Search size={24} 
                    className="text-gray-400 ml-2"
            />
            <input type="text"
            placeholder="Search for foods and restaurants"
            className="w-full px-4 py-3 outline-none text-lg"
            />
            <button className="text-white bg-[#FC8019] hover:bg-[#E46F12] rounded-xl px-8 py-3 transition cursor-pointer">Search</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
