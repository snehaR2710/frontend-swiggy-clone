
import { Link } from "react-router-dom";
import emptyCartImage from "../../assets/empty-cart.png";

function EmptyCartPage() {
  return (
    <div className="min-h-[70vh] flex flex-col justify-center items-center px-4">

      <img
        src={emptyCartImage}
        alt="Empty Cart"
        className="w-72"
      />

      <h2 className="text-4xl font-bold mt-8">
        Your cart is empty
      </h2>

      <p className="text-gray-500 text-center mt-3 leading-7">
        You can go to home page to view more restaurants
      </p>

      <Link
        to="/"
        className="mt-8 bg-[#FC8019] text-white font-bold px-10 py-4 hover:bg-orange-600 transition"
      >
        SEE RESTAURANTS NEAR YOU
      </Link>

    </div>
  );
}

export default EmptyCartPage;