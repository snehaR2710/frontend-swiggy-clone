import { Link } from "react-router-dom"

function NotFound() {
    return (
        <div className="min-h-[80vh] flex flex-col items-center justify-center px-4 text-center">
            {/* Emoji */}
            <div className="text-8xl mb-6">🍔</div>

            {/* Heading */}
            <h1 className="text-5xl font-bold text-gray-800">404</h1>
            <h2 className="mt-3 text-3xl font-semibold text-gray-700">Oops! Page Not Found</h2>
            <p className="mt-4 max-w-md text-gray-500 leading-7">The page you're looking for doesn't exist or may have been moved.</p>
            <Link to="/" className="mt-8 bg-[#FC8019] text-white px-7 py-3 rounded-xl font-medium hover:bg-[#E46F12] transition">Back to home</Link>

        </div>
    )
}

export default NotFound