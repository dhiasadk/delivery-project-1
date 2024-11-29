import { useState } from "react";
import { useNavigate } from "react-router-dom";
import deliveryImage from "../assets/bachground.jpg";
import logoWasselli from "../assets/logo_wasselli_transparent.png";

export default function SignUpPage() {
    const [formData, setFormData] = useState({
        companyName: "",
        activityField: "",
        ville: "",
        email: "",
        password: "",
        confirmPassword: "", // Nouveau champ pour confirmer le mot de passe
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
        console.log({ name, value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Vérifier que les mots de passe correspondent
        if (formData.password !== formData.confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        console.log("Form Submitted:", formData);
        alert("Account Created Successfully!");
        navigate("/");
    };

    return (
        <article
            className="relative flex flex-col md:flex-row justify-center items-center w-screen h-screen p-6 space-y-8 md:space-y-0 md:space-x-8"
            style={{
                backgroundImage: `url(${deliveryImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
        >
            <main className="relative z-10 flex flex-col items-center bg-white bg-opacity-80 p-4 rounded-lg shadow-md w-full md:w-1/2">
                <div className="flex justify-center mb-8">
                    <img src={logoWasselli} alt="Wasselli Logo" className="w-50 h-12" />
                </div>

                <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
                    Create Your Account
                </h1>

                <form className="space-y-6" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Company Name
                            </label>
                            <input
                                type="text"
                                placeholder="Exp: MyCompany"
                                name="companyName"
                                value={formData.companyName}
                                onChange={handleChange}
                                className="mt-1 w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500" style={{ width: '300px' }}
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Activity Field
                            </label>
                            <input
                                type="text"
                                placeholder="Exp: Clothes"
                                name="activityField"
                                value={formData.activityField}
                                onChange={handleChange}
                                className="mt-1 w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Ville
                            </label>
                            <input
                                type="text"
                                placeholder="Exp: Tunis, EL Manar 1"
                                name="ville"
                                value={formData.ville}
                                onChange={handleChange}
                                className="mt-1 w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Email
                            </label>
                            <input
                                type="email"
                                placeholder="Xxxx@Wasselli.tn"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="mt-1 w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                            />
                        </div>


                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Password
                            </label>
                            <input
                                type="password"
                                placeholder="**********"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                className="mt-1 w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Confirm Password
                            </label>
                            <input
                                type="password"
                                placeholder="**********"
                                name="confirmPassword"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                className="mt-1 w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                            />
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="mt-4 w-full bg-[#FF8C00] text-white py-2 rounded-lg hover:bg-[#FFA500] hover:shadow-xl transition duration-200 font-bold"
                    >
                        Create account
                    </button>
                </form>

                <div className="mt-6 text-center text-sm text-gray-600">
                    Already have an account?{" "}
                    <a href="/" className="text-[#FF8C00] hover:text-[#FFA500] hover:underline font-medium transition duration-200">
                        Login
                    </a>
                </div>
            </main>
        </article>
    );
}
