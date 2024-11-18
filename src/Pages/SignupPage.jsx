import { useState } from "react";
import { useNavigate } from "react-router-dom";
import deliveryImage from "../assets/Delivery.jpg";


export default function SignUpPage() {
    const [formData, setFormData] = useState({
        companyName: "",
        activityField: "",
        ville: "",
        email: "",
        password: "",
    });
    const navigate = useNavigate();
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData, [name]: value,

        }))
        console.log({ name, value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Submitted:", formData);
        alert("Account Created Successfully!");
        navigate("/");
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


            <main className="w-full max-w-lg bg-white p-6 rounded-lg shadow-lg">


                <div className="flex justify-center mb-6">
                    <img
                        src="#"
                        alt="Company Logo"
                        className="w-20 h-20"
                    />
                </div>

                <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Create Your Account</h1>

                <form className="space-y-6"
                    onSubmit={handleSubmit}>

                    <div className="grid grid-cols-2 gap-4">

                        <div >
                            <label className="block text-sm font-medium text-gray-700">CompanyName</label>
                            <input
                                type="text"
                                placeholder="Exp: MyCompany"
                                name="companyName"
                                value={formData.companyName}
                                onChange={handleChange}
                                className="mt-1 w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500" />
                        </div>



                        <div >
                            <label className="block text-sm font-medium text-gray-700">Activity Field</label>
                            <input
                                type="text"
                                placeholder="Exp: Clothes"
                                name="activityField"
                                value={formData.activityField}
                                onChange={handleChange}
                                className="mt-1 w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500" />
                        </div>

                        <div    >
                            <label className="block text-sm font-medium text-gray-700">Ville</label>
                            <input
                                type="text"
                                placeholder="Exp: Tunis, EL Manar 1"
                                name="ville"
                                value={formData.ville}
                                onChange={handleChange}
                                className="mt-1 w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500" />
                        </div>

                        <div >
                            <label className="block text-sm font-medium text-gray-700">Email</label>
                            <input
                                type="email"
                                placeholder="Xxxx@Wasselli.tn"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="mt-1 w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500" />
                        </div>

                        <div >
                            <label className="block text-sm font-medium text-gray-700">Password</label>
                            <input
                                type="password"
                                placeholder="**********"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                className="mt-1 w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500" />
                        </div>

                        <button type="submit"
                            className="hover-grow mt-4 w-full bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700 transition duration-200 shadow-lg font-semibold">Create account

                        </button>

                    </div>

                </form>

                <div className="mt-6 text-center text-sm text-gray-600">
                    Already have an account?{" "}
                    <a href="/" className="text-purple-600 hover:underline">
                        Login
                    </a>
                </div>


            </main>
        </ article >
    )
}