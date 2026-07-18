import { Search } from "lucide-react";

export default function SearchBar({ searchTerm, setSearchTerm }) {

    return (

        <div className="max-w-4xl mx-auto px-4 md:px-0">

            <div
                className="
                h-12 md:h-14
                rounded-xl
                bg-gray-100
                flex
                items-center
                justify-between
                px-4 md:px-6
            "
            >

                <input type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="bg-transparent outline-none text-gray-700 text-base md:text-lg placeholder-gray-500 w-full" />

                <Search size={20} className="md:w-6 md:h-6 text-gray-600"/>

            </div>

        </div>

    );

}