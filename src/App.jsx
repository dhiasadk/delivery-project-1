import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './Compenants/Header';
import LoginPage from './Pages/LoginPage';
import Footer from './Compenants/Footer';
import SignUpPage from './Pages/SignupPage';
import { BsRouter } from "react-icons/bs";
import ForgotPasswordPage from "./Pages/ForgotPasswordPage";
import ResetPasswordPage from "./Pages/ResetPasswordPage";
import PasswordChangedPage from "./Pages/PasswordChangedPage";
import ClientDashbord from "./ClientPages/ClientDashboard";
import HeaderDashboard from "./Dashboards/Header";
import FooterDashboard from "./Dashboards/Footer";


function App() {
  return (
    <div >

      <HeaderDashboard />
      <ClientDashbord />
      <FooterDashboard />
    </div>
    // <Router >
    //   <div className="min-h-screen flex flex-col">
    //     <Header />

    //     <main className="flex-1 flex items-center justify-center w-full ">
    //       <Routes>
    //         <Route path="/" element={<LoginPage />} />
    //         <Route path="/signup" element={<SignUpPage />} />
    //         <Route path="/forgot-password" element={<ForgotPasswordPage />} />
    //         <Route path="/reset-password" element={<ResetPasswordPage />} />
    //         <Route path="/password-changed" element={<PasswordChangedPage />} />
    //       </Routes>
    //     </main>

    //     <Footer />
    //   </div>
    // </Router>
  );
}

export default App;
