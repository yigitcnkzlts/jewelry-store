import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import FloatingWhatsApp from "../ui/FloatingWhatsApp";
import ScrollToTop from "../ui/ScrollToTop";

function Layout() {
  return (
    <div className="min-h-screen bg-cream-100 text-dark-900">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <ScrollToTop />
    </div>
  );
}

export default Layout;
