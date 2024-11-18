import styles from "./LoginPage.module.css";
import deliveryImage from "../assets/Delivery.jpg";
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
            className="relative flex flex-col md:flex-row justify-center items-center w-screen h-screen p-6 space-y-6 md:space-y-0 md:space-x-8"
            style={{
                backgroundImage: `url(${deliveryImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
        >
            <div className="absolute inset-0 bg-black opacity-10"></div>


            <div className="relative z-10 flex flex-col items-center text-center bg-white bg-opacity-70 p-8 rounded-lg shadow-md w-full md:w-1/2 max-w-md" >
                <h2 className="text-2xl font-bold text-gray-800 mb-2">Description</h2>
                <p className="text-gray-600">Welcome to our application. Please log in or sign up to continue.</p>
            </div>


            <div className="relative z-10 flex flex-col items-center bg-white bg-opacity-80 p-8 rounded-lg shadow-md w-full md:w-1/3 max-w-md">

                <h1 className="text-2xl font-bold text-gray-800 mb-4">Welcome</h1>
                <p className="text-sm text-gray-600 mb-4">You don't have an account yet ?
                    <Link to="/signup" className="text-purple-600 hover:underline"> Create acount</Link>
                </p>
                <form className="w-full space-y-4"
                    onSubmit={handleSubmit}
                >
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={fromData.email}
                            onChange={handleChange}
                            placeholder="email@wasselni.tn"
                            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-purple-500" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Password</label>

                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={fromData.password}
                            onChange={handleChange}
                            placeholder="*********"
                            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-purple-500" />

                    </div>
                    <button
                        type="submit"
                        className="hover-grow mt-4 w-full bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700 transition duration-200 shadow-lg font-semibold">
                        Login
                    </button>
                </form>
                <Link to="/forgot-password" className="block text-purple-600 mt-4 hover:underline">Forgot your password ?</Link>

            </div>
        </article>

    )
}