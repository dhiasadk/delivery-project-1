import styles from "./header.module.css";
import { Link } from "react-router-dom";
import logoWasselli from "../assets/logo wasselli transparent.png";

export default function Header() {
    return (
        <header className="flex justify-between items-center w-full p-4 bg-[#FFFFFF] " >

            <img src={logoWasselli} alt="Wasselli Logo" className="w-50 h-12" />


            <div className="space-x-4">
                <Link
                    to="/"
                    className="px-4 py-2 bg-white text-[#FF8C00] rounded-md border border-[#FF8C00] hover:bg-[#FF8C00] hover:text-white transition">Login</Link>
                <Link
                    to="/signup"
                    className="px-4 py-2 bg-[#FF6A00] text-white rounded-md hover:bg-[#FF4500] transition">Sign up</Link>
            </div>
        </header>
    )
}

