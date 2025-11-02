import "./App.css";
import MouseFollowerDot from "./components/MouseFolloerDot";
import Footer from "./layout/Footer";
import Navbar from "./layout/Navbar";
import AppRouter from "./router/AppRouter";

function App() {
  return (
    <div className="overflow-hidden">
        <Navbar />
        <AppRouter />
        <Footer />
        <MouseFollowerDot />
    </div>
  );
}

export default App;
