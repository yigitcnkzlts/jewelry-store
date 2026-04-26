import { MessageCircle } from "lucide-react";

function FloatingWhatsApp() {
  const whatsappUrl = "https://wa.me/905550000000";

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full border-2 border-[#d6ad60]/30 bg-gradient-to-br from-[#17120c] to-[#2a2218] text-[#d6ad60] shadow-[0_20px_60px_rgba(23,18,12,0.4)] transition-all duration-300 hover:scale-110 hover:border-[#d6ad60] hover:shadow-[0_25px_70px_rgba(23,18,12,0.5)] md:h-16 md:w-16"
      aria-label="WhatsApp ile iletişime geç"
    >
      <MessageCircle size={24} className="md:h-7 md:w-7" />
    </a>
  );
}

export default FloatingWhatsApp;
