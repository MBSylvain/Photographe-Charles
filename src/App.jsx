import "./App.css";
import Gallery from "./pages/Gallery";
import Home from "./pages/Home";
import Pricing from "./pages/Pricing";
import Services from "./pages/Services";
import Contact from "./pages/contact";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Accroche from "./admin/accroche";
import AdminService from "./admin/adminServices";

export default function App() {
  return (
    <div className="App h-100">
      <Navbar />
      <Accroche />
      <AdminService />
      <Footer />
    </div>
  );
}
