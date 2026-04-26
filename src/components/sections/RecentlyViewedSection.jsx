import { useRecentlyViewed } from "../../hooks/useRecentlyViewed";
import { Eye, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

function RecentlyViewedSection() {
  const { recentlyViewed } = useRecentlyViewed();

  if (recentlyViewed.length === 0) return null;

  return (
    <section className="border-t border-[#d6ad60]/20 bg-[#fffaf3] px-5 py-16 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#f2e4ce] text-[#b8893b]">
              <Eye size={22} />
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-[#17120c]">
                Son Görüntülenenler
              </h2>
              <p className="text-sm text-[#6f6252]">
                Yakın zamanda incelediğiniz ürünler
              </p>
            </div>
          </div>

          <Link
            to="/koleksiyonlar"
            className="hidden items-center gap-1 text-sm font-semibold text-[#b8893b] transition hover:gap-2 hover:text-[#17120c] md:flex"
          >
            Tümünü Gör
            <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
          {recentlyViewed.map((product) => (
            <Link
              key={product.id}
              to="/koleksiyonlar"
              className="group overflow-hidden rounded-2xl border border-[#d6ad60]/20 bg-white shadow-sm transition hover:-translate-y-2 hover:shadow-lg"
            >
              <div className="relative h-40 overflow-hidden bg-gradient-to-br from-[#fffaf3] via-[#f4e3c4] to-[#caa66a]">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
              </div>

              <div className="p-4">
                <h3 className="line-clamp-1 text-sm font-semibold text-[#17120c]">
                  {product.name}
                </h3>
                <p className="mt-1 text-sm font-bold text-[#b8893b]">
                  {product.price}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default RecentlyViewedSection;
