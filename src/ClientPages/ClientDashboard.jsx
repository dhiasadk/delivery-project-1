import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { MdDashboard, MdPerson, MdLocalShipping, MdBarChart, MdDeliveryDining, MdPayment, MdHelp, MdNotifications, MdSettings } from "react-icons/md";
import logoWasselli from "../assets/logo_wasselli_transparent.png";
import deliveryImage from "../assets/bachground.jpg";

export default function ClientDashboard() {
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
            {isSidebarOpen && (
                <nav
                    className="bg-white text-black w-64 shadow-lg fixed z-40 top-0 h-full transition-transform transform"
                >
                    <div className="pb-8 pt-6">
                        <img
                            src={logoWasselli}
                            alt="Wasselli Logo"
                            className="w-55 h-12"
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
                className={`bg-black rounded-br-lg fixed z-50 ${isSidebarOpen ? "p-2  bg-[#FF6A00] top-0" : "pl-1.5 pb-4 pt-4 "}`}
                style={{ width: "30px" }}
            >
                {isSidebarOpen ? (
                    <FaTimes style={{ fontSize: "16px", color: "#fff" }} />
                ) : (
                    <FaBars style={{ fontSize: "16px", color: "#fff" }} />
                )}
            </button>

            <main
                className={`flex-1 p-8 transition-all duration-300 ${isSidebarOpen ? "ml-64" : "ml-0"}`}
            >
                <header className="mb-6">
                    <h1 className="pl-4 text-4xl font-bold text-black-800">
                        Client Dashboard
                    </h1>
                    <p className="pl-4 text-gray-800 ">
                        Welcome to your dashboard. Monitor your deliveries and statistics.
                    </p>
                </header>

                <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="bg-white/80 text-black rounded-lg shadow p-6">
                        <h3 className="text-lg font-semibold">Total Orders</h3>
                        <p className="text-3xl font-bold text-[#FF8C00]">1,245</p>
                        <p className="text-sm">Orders created this month</p>
                    </div>
                    <div className="bg-white/80 text-black rounded-lg shadow p-6">
                        <h3 className="text-lg font-semibold">Delivered</h3>
                        <p className="text-3xl font-bold text-green-500">890</p>
                        <p className="text-sm">Successfully delivered parcels</p>
                    </div>
                    <div className="bg-white/80 text-black rounded-lg shadow p-6">
                        <h3 className="text-lg font-semibold">In Transit</h3>
                        <p className="text-3xl font-bold text-yellow-500">310</p>
                        <p className="text-sm">Parcels currently being delivered</p>
                    </div>
                    <div className="bg-white/80 text-black rounded-lg shadow p-6">
                        <h3 className="text-lg font-semibold">Canceled</h3>
                        <p className="text-3xl font-bold text-red-600">12</p>
                        <p className="text-sm">Orders canceled this month</p>
                    </div>
                    <div className="bg-white/80 text-black rounded-lg shadow p-6">
                        <h3 className="text-lg font-semibold">Returned</h3>
                        <p className="text-3xl font-bold text-purple-600">18</p>
                        <p className="text-sm">Parcels returned by customers</p>
                    </div>

                </section>

                <section className="mt-8 bg-white/80 text-black rounded-lg shadow p-6">
                    <h2 className="text-xl font-semibold mb-4">Recent Orders</h2>
                    <table className="w-full border-collapse">
                        <thead>
                            <tr className="text-left">
                                <th className="py-2">Order ID</th>
                                <th className="py-2">Status</th>
                                <th className="py-2">Date</th>
                                <th className="py-2">Details</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-t">
                                <td className="py-2">#1234</td>
                                <td className="py-2 text-green-500">Delivered</td>
                                <td className="py-2">2024-11-20</td>
                                <td className="py-2">
                                    <button className="text-blue-500 hover:underline">View</button>
                                </td>
                            </tr>
                            <tr className="border-t">
                                <td className="py-2">#1235</td>
                                <td className="py-2 text-yellow-500">In Transit</td>
                                <td className="py-2">2024-11-21</td>
                                <td className="py-2">
                                    <button className="text-blue-500 hover:underline">View</button>
                                </td>
                            </tr>
                            <tr className="border-t">
                                <td className="py-2">#1236</td>
                                <td className="py-2 text-red-600">Canceled</td>
                                <td className="py-2">2024-11-22</td>
                                <td className="py-2">
                                    <button className="text-blue-500 hover:underline">View</button>
                                </td>
                            </tr>
                            <tr className="border-t">
                                <td className="py-2">#1237</td>
                                <td className="py-2 text-purple-600">Returned</td>
                                <td className="py-2">2024-11-23</td>
                                <td className="py-2">
                                    <button className="text-blue-500 hover:underline">View</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </section>

            </main>
        </div>


    );
}
