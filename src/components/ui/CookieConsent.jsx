import { useState, useEffect } from "react";
import { Cookie, X } from "lucide-react";

function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setIsVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem("cookieConsent", "rejected");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 animate-slide-up">
      <div className="mx-auto max-w-7xl px-5 pb-5 lg:px-8">
        <div className="relative overflow-hidden rounded-[2rem] border border-[#d6ad60]/30 bg-white p-6 shadow-[0_20px_60px_rgba(23,18,12,0.15)] backdrop-blur-xl md:flex md:items-center md:justify-between md:gap-6">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#f2e4ce] text-[#b8893b]">
              <Cookie size={22} />
            </div>

            <div className="flex-1">
              <h3 className="text-base font-semibold text-[#17120c]">
                Çerez Kullanımı
              </h3>
              <p className="mt-2 text-sm leading-6 text-[#6f6252]">
                Web sitemizde deneyiminizi geliştirmek için çerezler
                kullanıyoruz. Siteyi kullanmaya devam ederek çerez
                politikamızı kabul etmiş olursunuz.
              </p>
            </div>
          </div>

          <div className="mt-5 flex gap-3 md:mt-0 md:shrink-0">
            <button
              onClick={handleReject}
              className="rounded-full border border-[#d6ad60]/30 bg-white px-6 py-2.5 text-sm font-semibold text-[#6f6252] transition hover:border-[#b8893b] hover:text-[#b8893b]"
            >
              Reddet
            </button>
            <button
              onClick={handleAccept}
              className="rounded-full bg-[#b8893b] px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-[#17120c]"
            >
              Kabul Et
            </button>
          </div>

          <button
            onClick={handleReject}
            className="absolute right-4 top-4 text-[#6f6252] transition hover:text-[#b8893b] md:hidden"
          >
            <X size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default CookieConsent;
