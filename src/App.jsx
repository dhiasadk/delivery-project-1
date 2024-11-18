import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './Compenants/Header';
import LoginPage from './Pages/LoginPage';
import Footer from './Compenants/Footer';
import SignUpPage from './Pages/SignupPage';
import { BsRouter } from "react-icons/bs";


function App() {
  return (
    <Router >
      <div className="min-h-screen flex flex-col">
        {/* Header */}
        <Header />

        <main className="flex-1 flex items-center justify-center w-full ">
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/signup" element={<SignUpPage />} />


          </Routes>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
