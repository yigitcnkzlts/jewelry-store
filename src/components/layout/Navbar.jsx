import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Gem, Menu, X, Heart } from "lucide-react";
import { useWishlist } from "../../hooks/useWishlist";

const navLinks = [
  { label: "Ana Sayfa", path: "/" },
  { label: "Koleksiyonlar", path: "/koleksiyonlar" },
  { label: "Hakkımızda", path: "/hakkimizda" },
  { label: "İletişim", path: "/iletisim" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { wishlist } = useWishlist();

  const linkClass = ({ isActive }) =>
    `text-sm font-medium transition-colors duration-300 ${
      isActive ? "text-gold-600" : "text-dark-800 hover:text-gold-600"
    }`;

  return (
    <header className="fixed left-0 top-10 z-40 w-full border-b border-gold-600/25 bg-cream-50/90 backdrop-blur-xl shadow-sm">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <Link to="/" className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-full border border-gold-600/30 bg-gold-500/10">
            <Gem className="h-5 w-5 text-gold-600" />
          </div>

          <div>
            <p className="text-lg font-bold tracking-[0.22em] text-dark-900">
              AURALYA
            </p>
            <p className="-mt-1 text-[10px] uppercase tracking-[0.35em] text-gold-600">
              Jewelry
            </p>
          </div>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((item) => (
            <NavLink key={item.path} to={item.path} className={linkClass}>
              {item.label}
            </NavLink>
          ))}
        </div>

        <div className="hidden items-center gap-4 md:flex">
          <Link
            to="/favorilerim"
            className="relative flex h-10 w-10 items-center justify-center rounded-full border border-gold-600/20 text-dark-800 transition hover:border-gold-600 hover:bg-gold-500/10 hover:text-gold-600"
          >
            <Heart size={20} />
            {wishlist.length > 0 && (
              <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-gold-600 text-[10px] font-bold text-white">
                {wishlist.length}
              </span>
            )}
          </Link>

          <a
            href="https://wa.me/905550000000"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-gold-600/40 bg-gold-600 px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-gold-700 hover:shadow-lg"
          >
            WhatsApp
          </a>
        </div>

        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-gold-600/20 bg-cream-100 text-dark-900 md:hidden"
          aria-label="Menüyü aç veya kapat"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {isOpen && (
        <div className="border-t border-gold-600/20 bg-cream-50/95 px-5 py-5 md:hidden">
          <div className="flex flex-col gap-4">
            {navLinks.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={linkClass}
              >
                {item.label}
              </NavLink>
            ))}

            <NavLink
              to="/favorilerim"
              onClick={() => setIsOpen(false)}
              className={linkClass}
            >
              Favorilerim {wishlist.length > 0 && `(${wishlist.length})`}
            </NavLink>

            <a
              href="https://wa.me/905550000000"
              target="_blank"
              rel="noreferrer"
              className="mt-2 rounded-full bg-gold-600 px-5 py-3 text-center text-sm font-semibold text-white"
            >
              WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
