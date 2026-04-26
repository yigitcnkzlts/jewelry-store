import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-24 right-6 z-40 flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#d6ad60]/30 bg-white text-[#b8893b] shadow-[0_20px_60px_rgba(120,82,24,0.3)] transition-all duration-300 hover:scale-110 hover:border-[#b8893b] hover:bg-[#b8893b] hover:text-white hover:shadow-[0_25px_70px_rgba(120,82,24,0.4)] md:h-14 md:w-14"
      aria-label="Yukarı çık"
    >
      <ArrowUp size={20} className="md:h-6 md:w-6" />
    </button>
  );
}

export default ScrollToTop;
