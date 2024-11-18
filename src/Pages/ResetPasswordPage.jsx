import deliveryImage from "../assets/Delivery.jpg";
import { useNavigate } from "react-router-dom";

export default function ResetPasswordPage() {
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Password reset successful!");
        navigate("/password-changed");
    };
    return (
        <article
            className="relative flex justify-center items-center w-screen h-screen"
            style={{
                backgroundImage: `url(${deliveryImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
        >
            <main className="relative z-10 flex flex-col items-center bg-white bg-opacity-80 p-8 rounded-lg shadow-md w-full md:w-1/3 max-w-md">
                <div className="flex justify-center mb-6">
                    < img
                        src="#"
                        alt="Company Logo"
                        className="w-16 h-16"
                    />                </div>
                <h1 className="text-2xl font-bold text-gray-800 mb-4 text-center">Reset Your Password</h1>
                <p className="text-gray-600 text-center mb-6"> Please enter your new password below</p>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            New Password
                        </label>
                        <input
                            type="password"
                            placeholder="Enter new password"
                            name="newPassword"
                            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                        />                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Confirm Password
                        </label>
                        <input
                            type="password"
                            placeholder="Confirm new password"
                            name="confirmPassword"
                            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-purple-600 text-white py-2 rounded-lg font-semibold hover:bg-purple-700 transition duration-200"
                    >
                        Reset Password
                    </button>
                </form>
                <div className="mt-6 text-center">
                    <a
                        href="/"
                        className="text-purple-600 text-sm font-medium hover:underline"
                    >
                        Back to Login
                    </a>
                </div>
            </main>
        </article>
    )
}