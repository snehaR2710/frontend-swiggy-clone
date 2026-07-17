import { Link } from "react-router-dom";

function Breadcrumb({ restaurantName }) {

    return (
        <div className="flex items-center font-semibold text-[15px] text-gray-500 gap-2 mb-7 mt-6 ml-3">
            <Link to="/" className="hover:text-[#FC8019]">Home</Link>
            <span className="mx-1">/</span>
            <span className="font-semibold text-gray-700 truncate">{restaurantName}</span>
        </div>
    )
}

export default Breadcrumb;