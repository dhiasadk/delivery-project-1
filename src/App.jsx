import "./App.css";
import Header from './Compenants/Header';
import Article from './Pages/Article';
import Footer from './Compenants/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <Header />

      {/* Main Content Area */}
      <main className="flex-1 flex items-center justify-center w-full">
        <Article />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
