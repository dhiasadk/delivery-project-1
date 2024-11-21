import deliveryImage from "../assets/bachground.jpg";

export default function PasswordChangedPage() {
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
            <main className="w-full max-w-md bg-white bg-opacity-90 p-8 rounded-lg shadow-xl text-center">

                <div className="flex justify-center mb-6">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-16 h-16 text-green-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9 12l2 2 4-4M5 12a7 7 0 1114 0 7 7 0 01-14 0z"
                        />
                    </svg>
                </div>

                <h1 className="text-3xl font-bold text-black mb-4">
                    Password Successfully Changed!
                </h1>
                <p className="text-black mb-6">
                    Your password has been updated. You can now log in with your new credentials.
                </p>

                <div>
                    <a
                        href="/"
                        className="inline-block w-full bg-orange-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-orange-600 transition duration-300"
                    >
                        Back to Login
                    </a>
                </div>
            </main>
        </article>
    );
}
