import { Link } from "react-router-dom";
import { Home, Search, ArrowLeft } from "lucide-react";

function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-b from-[#fdfbf7] to-[#fffaf3] px-5 py-20">
      <div className="mx-auto max-w-2xl text-center">
        <div className="mb-8 inline-flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-[#d6ad60] to-[#b8893b] text-white shadow-[0_30px_80px_rgba(184,137,59,0.3)]">
          <Search size={40} />
        </div>

        <h1 className="text-8xl font-bold text-[#b8893b] md:text-9xl">404</h1>

        <h2 className="mt-6 text-3xl font-semibold tracking-[-0.03em] text-[#17120c] md:text-4xl">
          Sayfa Bulunamadı
        </h2>

        <p className="mx-auto mt-5 max-w-xl text-base leading-8 text-[#6f6252]">
          Aradığınız sayfa mevcut değil veya taşınmış olabilir. Ana sayfaya
          dönebilir veya koleksiyonlarımıza göz atabilirsiniz.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#b8893b] px-7 py-4 text-sm font-semibold text-white shadow-lg transition hover:bg-[#17120c]"
          >
            <Home size={18} />
            Ana Sayfaya Dön
          </Link>

          <Link
            to="/koleksiyonlar"
            className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#d6ad60]/40 bg-white px-7 py-4 text-sm font-semibold text-[#17120c] transition hover:border-[#b8893b] hover:text-[#b8893b]"
          >
            <ArrowLeft size={18} />
            Koleksiyonlar
          </Link>
        </div>

        <div className="mt-16 grid gap-4 sm:grid-cols-3">
          <Link
            to="/"
            className="rounded-2xl border border-[#d6ad60]/20 bg-white p-5 text-center transition hover:shadow-lg"
          >
            <p className="text-sm font-semibold text-[#17120c]">Ana Sayfa</p>
            <p className="mt-1 text-xs text-[#6f6252]">Tüm koleksiyonlar</p>
          </Link>

          <Link
            to="/hakkimizda"
            className="rounded-2xl border border-[#d6ad60]/20 bg-white p-5 text-center transition hover:shadow-lg"
          >
            <p className="text-sm font-semibold text-[#17120c]">Hakkımızda</p>
            <p className="mt-1 text-xs text-[#6f6252]">Marka hikayemiz</p>
          </Link>

          <Link
            to="/iletisim"
            className="rounded-2xl border border-[#d6ad60]/20 bg-white p-5 text-center transition hover:shadow-lg"
          >
            <p className="text-sm font-semibold text-[#17120c]">İletişim</p>
            <p className="mt-1 text-xs text-[#6f6252]">Bize ulaşın</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
