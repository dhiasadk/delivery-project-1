import deliveryImage from "../assets/bachground.jpg";
import { useNavigate } from "react-router-dom";
import logoWasselli from "../assets/logo_wasselli_transparent.png";

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
                    <img src={logoWasselli} alt="Wasselli Logo" className="w-50 h-12" />
                </div>
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
                            className="mt-1 w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-[#FF8C00] focus:border-[#FF8C00] placeholder-gray-400" style={{ width: '300px' }}
                        />                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Confirm Password
                        </label>
                        <input
                            type="password"
                            placeholder="Confirm new password"
                            name="confirmPassword"
                            className="mt-1 w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-[#FF8C00] focus:border-[#FF8C00] placeholder-gray-400" style={{ width: '300px' }}
                        />
                    </div>
                    <button
                        type="submit"

                        className="mt-4 w-full bg-[#FF8C00] text-white py-2 rounded-lg hover:bg-[#FFA500] hover:shadow-xl transition duration-200 font-bold"
                    >
                        Reset Password
                    </button>
                </form>
                <div className="mt-6 text-center">
                    <a
                        href="/"
                        className="block text-[#FF8C00] mt-4 hover:text-[#FFA500] hover:underline font-medium transition duration-200"
                    >
                        Back to Login
                    </a>
                </div>
            </main>
        </article>
    )
}
