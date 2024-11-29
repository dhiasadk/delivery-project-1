import styles from "./LoginPage.module.css";
import deliveryImage from "../assets/bachground.jpg";
import { useState } from "react";
import { Link } from "react-router-dom"

export default function LoginPage() {
    const [fromData, setFromData] = useState({ email: "", password: "" });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFromData((prevData) => ({ ...prevData, [name]: value }))
        console.log({ name, value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Données du utlisateur:", fromData);
    };

    return (
        <article
            className="relative flex flex-col md:flex-row justify-end items-center w-screen h-screen p-6 space-y-8 md:space-y-0 md:space-x-8"
            style={{
                backgroundImage: `url(${deliveryImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
        >


            {/* <div className="relative z-10 flex flex-col items-center text-center bg-white bg-opacity-70 p-8 rounded-lg shadow-md w-full md:w-1/2 max-w-md" >
                <img src={logoWasselli} alt="Wasselli Logo" className="w-50 h-12" />

                <h2 className="text-2xl font-bold text-gray-800 mb-2">Description</h2>
                <p className="text-gray-600">Welcome to our application. Please log in or sign up to continue.</p>
            </div> */}


            <div id="id" className="relative z-10 flex flex-col items-center bg-white bg-opacity-80 p-8 rounded-lg shadow-md w-full md:w-1/3  " style={{ right: '100px' }}>

                <h1 className="text-2xl font-bold text-gray-800 mb-4">Welcome</h1>
                <p className="text-sm text-gray-600 mb-4">You don't have an account yet ?
                    <Link
                        to="/signup"
                        className="text-[#FF8C00] hover:text-[#FFA500] hover:underline font-medium transition duration-200"
                    > Create account
                    </Link>                </p>
                <form className="w-full space-y-4"
                    onSubmit={handleSubmit}
                >
                    <div >
                        <label className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                            type="email"
                            placeholder="Xxxx@Wasselli.tn"
                            name="email"
                            value={fromData.email}
                            onChange={handleChange}
                            className="mt-1 w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-[#FF8C00] focus:border-[#FF8C00] placeholder-gray-400"
                        />

                    </div>

                    <div >
                        <label className="block text-sm font-medium text-gray-700">Password</label>
                        <input
                            type="password"
                            placeholder="**********"
                            name="password"
                            value={fromData.password}
                            onChange={handleChange}
                            className="mt-1 w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-[#FF8C00] focus:border-[#FF8C00] placeholder-gray-400"   ></input>                 </div>
                    <button
                        type="submit"
                        className="mt-4 w-full bg-[#FF8C00] text-white py-2 rounded-lg hover:bg-[#FFA500] hover:shadow-xl transition duration-200 font-bold"
                    >
                        Login
                    </button>
                </form>
                <Link
                    to="/forgot-password"
                    className="block text-[#FF8C00] mt-4 hover:text-[#FFA500] hover:underline font-medium transition duration-200"
                >
                    Forgot your password?
                </Link>
            </div>
        </article>

    )
}