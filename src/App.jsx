import "./App.css";
import Header from './Compenants/Header';
import LoginPage from './Pages/LoginPage';
import Footer from './Compenants/Footer';
import { BsRouter } from "react-icons/bs";

function App() {
  return (
    <Router >
      <div className="min-h-screen flex flex-col">
        {/* Header */}
        <Header />

        {/* Main Content Area */}
        <main className="flex-1 flex items-center justify-center w-full">
          <Route path="*" element={<h1 className="text-center text-red-500">404: Page Not Found</h1>} />

          <Route path="/" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
