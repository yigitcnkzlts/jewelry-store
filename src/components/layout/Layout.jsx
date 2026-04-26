import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import FloatingWhatsApp from "../ui/FloatingWhatsApp";
import ScrollToTop from "../ui/ScrollToTop";
import CookieConsent from "../ui/CookieConsent";
import LiveChat from "../ui/LiveChat";
import ComparisonFloatingButton from "../ui/ComparisonFloatingButton";

function Layout() {
  return (
    <div className="min-h-screen bg-cream-100 text-dark-900">
      <Navbar />
      <main className="animate-fade-in">
        <Outlet />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <ScrollToTop />
      <CookieConsent />
      <LiveChat />
      <ComparisonFloatingButton />
    </div>
  );
}

export default Layout;
