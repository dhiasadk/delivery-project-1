import { FaFacebook, FaInstagram, FaEnvelope } from 'react-icons/fa';
import styles from "./Footer.module.css";

export default function Footer() {
    return (
        <footer className="w-full p-6 bg-gray-900 text-white text-center flex flex-col justify-center items-center space-y-4" >
            <div className="flex space-x-4">
                <a href="#" className="hover:text-gray-400">About</a>
                <a href="#" className="hover:text-gray-400">Support</a>
                <a href="#" className="hover:text-gray-400">Terms of Service</a>
                <a href="#" className="hover:text-gray-400">Privacy Policy</a>
            </div>
            <div className="flex space-x-6 text-2xl">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
                    <FaFacebook />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500">
                    <FaInstagram />
                </a>
                <a href="mailto:example@gmail.com" className="hover:text-red-500">
                    <FaEnvelope />
                </a>
            </div>
            <p className="text-gray-400 text-sm">© 2024 Wasselli. All rights reserved.</p>
        </footer>
    );
}
