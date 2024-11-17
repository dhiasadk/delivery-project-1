import styles from "./header.module.css";
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header className="flex justify-between items-center w-full p-4 bg-purple-500 shadow-md" >

            <img src="https://via.placeholder.com/40" alt="logo" className="w-10 h-10" />


            <div className="space-x-4">
                <Link to="/" className="px-4 py-2 bg-white text-purple-700 rounded-md border border-purple-700 hover:bg-purple-100 transition">Login</Link>
                <Link to="/signup" className="px-4 py-2 bg-purple-700 text-white rounded-md hover:bg-purple-800 transition">Sign up</Link>
            </div>
        </header>
    )
}

