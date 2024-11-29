import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { MdDashboard, MdPerson, MdLocalShipping, MdBarChart, MdDeliveryDining, MdPayment, MdHelp, MdNotifications, MdSettings } from "react-icons/md";
import logoWasselli from "../assets/logo_wasselli_transparent.png";
import deliveryImage from "../assets/bachground.jpg";

export default function ClientProfil() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (

        <div
            className="flex h-screen overflow-hidden bg-cover bg-center"
            style={{
                backgroundImage: `url(${deliveryImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
        >
            <div className="flex h-screen bg-cover bg-center">
                {isSidebarOpen && (
                    <nav
                        className="bg-white text-black w-64 shadow-lg fixed z-40 top-0 h-full transition-transform transform"
                    >
                        <div className="pb-8 pt-6 flex justify-center">
                            <img
                                src={logoWasselli}
                                alt="Wasselli Logo"
                                className="w-48 h-12"
                            />
                        </div>
                        <ul className="space-y-2">
                            <li className="flex items-center space-x-3 hover:bg-[#FF6A00] p-2 pl-6 rounded-md">
                                <MdDashboard />
                                <span>Dashboard</span>
                            </li>
                            <li className="flex items-center space-x-3 hover:bg-[#FF6A00] p-2 pl-6 rounded-md">
                                <MdPerson />
                                <span>Profile</span>
                            </li>
                            <li className="flex items-center space-x-3 hover:bg-[#FF6A00] p-2 pl-6 rounded-md">
                                <MdLocalShipping />
                                <span>My Parcels</span>
                            </li>
                            <li className="flex items-center space-x-3 hover:bg-[#FF6A00] p-2 pl-6 rounded-md">
                                <MdBarChart />
                                <span>Statistics</span>
                            </li>
                            <li className="flex items-center space-x-3 hover:bg-[#FF6A00] p-2 pl-6 rounded-md">
                                <MdDeliveryDining />
                                <span>Delivery</span>
                            </li>
                            <li className="flex items-center space-x-3 hover:bg-[#FF6A00] p-2 pl-6 rounded-md">
                                <MdPayment />
                                <span>Payments</span>
                            </li>
                            <li className="flex items-center space-x-3 hover:bg-[#FF6A00] p-2 pl-6 rounded-md">
                                <MdNotifications />
                                <span>Notifications</span>
                            </li>
                            <li className="flex items-center space-x-3 hover:bg-[#FF6A00] p-2 pl-6 rounded-md">
                                <MdSettings />
                                <span>Settings</span>
                            </li>
                            <li className="flex items-center space-x-3 hover:bg-[#FF6A00] p-2 pl-6 rounded-md">
                                <MdHelp />
                                <span>Help & Support</span>
                            </li>
                        </ul>
                    </nav>
                )}

                <button
                    onClick={toggleSidebar}
                    className={`bg-black rounded-br-lg fixed z-50 ${isSidebarOpen ? "p-2  bg-[#FF6A00] top-0" : "pl-1.5 pb-4 pt-4"
                        }`}
                    style={{ width: "30px" }}
                >
                    {isSidebarOpen ? (
                        <FaTimes style={{ fontSize: "16px", color: "#fff" }} />
                    ) : (
                        <FaBars style={{ fontSize: "16px", color: "#fff" }} />
                    )}
                </button>


                <main
                    className={`flex-1 p-8 overflow-y-scroll transition-all duration-300 ${isSidebarOpen ? "ml-64" : "ml-0"
                        }`}
                >
                    <header className="mb-6">
                        <h1 className="pl-4 text-4xl font-bold text-gray-800">Profile</h1>
                        <p className="pl-4 text-gray-600">
                            Manage your personal information and account settings.
                        </p>
                    </header>

                    <section className="bg-white/80 text-black rounded-lg shadow p-6 mb-8">
                        <h2 className="text-xl font-semibold mb-4">Personal Information</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                    defaultValue="John Doe"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                    defaultValue="johndoe@example.com"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    Phone
                                </label>
                                <input
                                    type="tel"
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                    defaultValue="+123456789"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    Address
                                </label>
                                <input
                                    type="text"
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                    defaultValue="123 Street, City, Country"
                                />
                            </div>
                        </div>
                        <div className="mt-6">
                            <button className="bg-[#FF8C00] hover:bg-[#e67a00] text-white font-semibold py-2 px-4 rounded">
                                Save Changes
                            </button>
                        </div>
                    </section>

                    {/* Account Settings Section */}
                    <section className="bg-white/80 text-black rounded-lg shadow p-6">
                        <h2 className="text-xl font-semibold mb-4">Account Settings</h2>
                        <div className="grid grid-cols-1 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    Change Password
                                </label>
                                <input
                                    type="password"
                                    placeholder="Enter new password"
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    Confirm Password
                                </label>
                                <input
                                    type="password"
                                    placeholder="Confirm new password"
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                />
                            </div>
                        </div>
                        <div className="mt-6">
                            <button className="bg-[#FF8C00] hover:bg-[#e67a00] text-white font-semibold py-2 px-4 rounded">
                                Update Password
                            </button>
                        </div>
                    </section>
                </main>
            </div>
        </div>
    );
}
