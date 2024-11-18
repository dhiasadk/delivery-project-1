import deliveryImage from "../assets/Delivery.jpg";

export default function PasswordChangedPage() {
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
            <main className="w-full max-w-md bg-white bg-opacity-90 p-8 rounded-lg shadow-xl text-center">

                <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                        <svg
                            className="w-8 h-8 text-green-600"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 12l2 2 4-4M7 16l-4-4 4-4m10 8l4-4-4-4"
                            />
                        </svg>
                    </div>
                </div>

                <h1 className="text-2xl font-bold text-gray-800 mb-4">
                    Password Successfully Changed!
                </h1>
                <p className="text-gray-600 mb-6">
                    Your password has been updated. You can now log in with your new credentials.
                </p>

                {/* Action Button */}
                <div>
                    <a
                        href="/"
                        className="w-full inline-block bg-purple-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-purple-700 transition duration-200"
                    >
                        Back to Login
                    </a>
                </div>
            </main>
        </article>
    );
}