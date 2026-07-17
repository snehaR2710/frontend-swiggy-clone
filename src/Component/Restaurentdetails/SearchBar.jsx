import { Search } from "lucide-react";

export default function SearchBar({ searchTerm, setSearchTerm }) {

    return (

        <div className="max-w-4xl mx-auto">

            <div
                className="
                h-14
                rounded-xl
                bg-gray-100
                flex
                items-center
                justify-between
                px-6
            "
            >

                <input type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="bg-transparent outline-none text-gray-700 text-lg placeholder-gray-500 w-full" />

                <Search size={24} className="text-gray-600"/>

            </div>

        </div>

    );

}