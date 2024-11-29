import { useState } from "react";
import { FaSearch, FaBell } from "react-icons/fa";
import logoWasselli from "../assets/logo_wasselli_transparent.png";

export default function HeaderDashboard() {
    const [query, setQuery] = useState("");
    const [suggestions, setSuggestions] = useState([]);

    const handleChange = (e) => {
        const value = e.target.value;
        setQuery(value);

        const mockData = ["Result 1", "Result 2", "Result 3", "Result 4"];
        setSuggestions(
            value
                ? mockData.filter((item) =>
                    item.toLowerCase().includes(value.toLowerCase())
                )
                : []
        );
    };

    const handleSearch = (e) => {
        e.preventDefault();
        console.log("Searching for:", query);
    };

    const handleSuggestionClick = (suggestion) => {
        setQuery(suggestion);
        setSuggestions([]);
    };

    return (
        <header className="flex justify-between items-center w-full p-4 bg-white shadow-md">
            <div>
                <img
                    src={logoWasselli}
                    alt="Wasselli Logo"
                    className="w-45 h-10"
                />
            </div>

            <div className="relative flex items-center justify-center mx-4">
                <form onSubmit={handleSearch} className="relative flex items-center w-72">
                    <input
                        type="text"
                        placeholder="Search..."
                        value={query}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-1 focus:ring-[#FF8C00] placeholder-gray-400 text-sm"
                    />
                    <button
                        type="submit"
                        className="px-4 py-2 bg-[#FF8C00] text-white rounded-r-lg hover:bg-[#FFA500] transition duration-200"
                    >
                        <FaSearch size={23} />
                    </button>

                    {suggestions.length > 0 && (
                        <ul className="absolute left-0 top-full w-full bg-white border border-gray-300 rounded-md shadow-lg z-10 mt-1">
                            {suggestions.map((suggestion, index) => (
                                <li
                                    key={index}
                                    onClick={() =>
                                        handleSuggestionClick(suggestion)
                                    }
                                    className="p-2 cursor-pointer hover:bg-gray-100"
                                >
                                    {suggestion}
                                </li>
                            ))}
                        </ul>
                    )}
                </form>
            </div>

            <div className="flex items-center space-x-6">

                <button
                    type="button"
                    className="relative text-gray-600 hover:text-[#FF8C00] focus:outline-none"
                >
                    <FaBell size={20} />
                    <span className="absolute top-0 right-0 w-2.5 h-2.5 bg-red-600 rounded-full"></span>
                </button>

                <div className="flex items-center space-x-2">
                    <img
                        src="https://via.placeholder.com/40"
                        alt="User Avatar"
                        className="w-10 h-10 rounded-full border border-gray-300"
                    />
                    <span className="hidden md:inline text-gray-800 font-medium">
                        User Name
                    </span>
                </div>


                <button
                    type="button"
                    className="px-4 py-2 bg-[#FF4500] text-white rounded-lg hover:bg-[#FF6347] transition duration-200 text-sm"
                >
                    Logout
                </button>
            </div>
        </header>
    );
}
