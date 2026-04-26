import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import FloatingWhatsApp from "../ui/FloatingWhatsApp";

function Layout() {
  return (
    <div className="min-h-screen bg-cream-100 text-dark-900">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default Layout;
