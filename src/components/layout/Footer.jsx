import { Link } from "react-router-dom";
import { Gem, Instagram, Facebook, Mail, MapPin, Phone, Send } from "lucide-react";

function Footer() {
  return (
    <footer className="border-t border-[#d6ad60]/20 bg-[#fdfbf7]">
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="mb-5 flex items-center gap-2">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#d6ad60]/30 bg-[#b8893b]/10">
                <Gem className="h-6 w-6 text-[#b8893b]" />
              </div>
              <div>
                <p className="text-xl font-bold tracking-[0.22em] text-[#17120c]">
                  AURALYA
                </p>
                <p className="-mt-1 text-[10px] uppercase tracking-[0.35em] text-[#b8893b]">
                  Jewelry
                </p>
              </div>
            </div>

            <p className="max-w-md text-sm leading-7 text-[#6f6252]">
              Auralya, zarif tasarım anlayışını kaliteli işçilikle buluşturan
              modern bir mücevher markasıdır. Her parça, özel anlarınıza değer
              ve ışıltı katmak için tasarlanır.
            </p>

            <div className="mt-8">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#b8893b]">
                Bülten
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="E-posta adresiniz"
                  className="flex-1 rounded-full border border-[#d6ad60]/30 bg-white px-5 py-3 text-sm text-[#17120c] placeholder:text-[#6f6252]/50 focus:border-[#b8893b] focus:outline-none"
                />
                <button className="flex h-12 w-12 items-center justify-center rounded-full bg-[#b8893b] text-white transition hover:bg-[#17120c]">
                  <Send size={18} />
                </button>
              </div>
            </div>

            <div className="mt-6 flex gap-3">
              <a
                href="#"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-[#d6ad60]/25 text-[#6f6252] transition hover:border-[#b8893b] hover:bg-[#b8893b]/10 hover:text-[#b8893b]"
              >
                <Instagram size={19} />
              </a>
              <a
                href="#"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-[#d6ad60]/25 text-[#6f6252] transition hover:border-[#b8893b] hover:bg-[#b8893b]/10 hover:text-[#b8893b]"
              >
                <Facebook size={19} />
              </a>
            </div>
          </div>

          <div className="lg:col-span-2">
            <h3 className="mb-5 text-sm font-bold uppercase tracking-[0.22em] text-[#b8893b]">
              Hızlı Linkler
            </h3>

            <div className="flex flex-col gap-3 text-sm text-[#6f6252]">
              <Link to="/" className="transition hover:text-[#b8893b]">
                Ana Sayfa
              </Link>
              <Link to="/koleksiyonlar" className="transition hover:text-[#b8893b]">
                Koleksiyonlar
              </Link>
              <Link to="/hakkimizda" className="transition hover:text-[#b8893b]">
                Hakkımızda
              </Link>
              <Link to="/iletisim" className="transition hover:text-[#b8893b]">
                İletişim
              </Link>
            </div>
          </div>

          <div className="lg:col-span-2">
            <h3 className="mb-5 text-sm font-bold uppercase tracking-[0.22em] text-[#b8893b]">
              Kategoriler
            </h3>

            <div className="flex flex-col gap-3 text-sm text-[#6f6252]">
              <a href="#" className="transition hover:text-[#b8893b]">
                Yüzükler
              </a>
              <a href="#" className="transition hover:text-[#b8893b]">
                Kolyeler
              </a>
              <a href="#" className="transition hover:text-[#b8893b]">
                Küpeler
              </a>
              <a href="#" className="transition hover:text-[#b8893b]">
                Özel Tasarımlar
              </a>
            </div>
          </div>

          <div className="lg:col-span-3">
            <h3 className="mb-5 text-sm font-bold uppercase tracking-[0.22em] text-[#b8893b]">
              İletişim
            </h3>

            <div className="flex flex-col gap-4 text-sm text-[#6f6252]">
              <p className="flex items-start gap-3">
                <MapPin size={18} className="mt-0.5 text-[#b8893b]" />
                <span>İstanbul, Türkiye</span>
              </p>
              <p className="flex items-center gap-3">
                <Mail size={18} className="text-[#b8893b]" />
                info@auralya.com
              </p>
              <p className="flex items-center gap-3">
                <Phone size={18} className="text-[#b8893b]" />
                +90 555 000 00 00
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-[#d6ad60]/20 px-5 py-6 text-center text-xs text-[#6f6252]">
        © 2026 Auralya. Tüm hakları saklıdır.
      </div>
    </footer>
  );
}

export default Footer;
