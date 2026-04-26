import { Heart, Trash2, ShoppingBag } from "lucide-react";
import { useWishlist } from "../hooks/useWishlist";
import ProductCard from "../components/ui/ProductCard";
import { Link } from "react-router-dom";
import Breadcrumb from "../components/ui/Breadcrumb";

function Wishlist() {
  const { wishlist, clearWishlist } = useWishlist();

  return (
    <section className="min-h-screen bg-gradient-to-b from-[#fdfbf7] to-[#fffaf3] px-5 pt-32 pb-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8">
          <Breadcrumb items={[{ label: "Favorilerim" }]} />
        </div>

        <div className="mb-12 flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-semibold tracking-[-0.03em] text-[#17120c] md:text-6xl">
              Favorilerim
            </h1>
            <p className="mt-3 text-base text-[#6f6252]">
              Beğendiğiniz ürünleri buradan takip edebilirsiniz
            </p>
          </div>

          {wishlist.length > 0 && (
            <button
              onClick={() => {
                if (
                  window.confirm(
                    "Tüm favorileri temizlemek istediğinizden emin misiniz?"
                  )
                ) {
                  clearWishlist();
                }
              }}
              className="flex items-center gap-2 rounded-full border border-[#d6ad60]/30 bg-white px-5 py-3 text-sm font-semibold text-[#6f6252] transition hover:border-red-400 hover:bg-red-50 hover:text-red-600"
            >
              <Trash2 size={16} />
              Tümünü Temizle
            </button>
          )}
        </div>

        {wishlist.length === 0 ? (
          <div className="flex min-h-[500px] items-center justify-center rounded-[3rem] border border-[#d6ad60]/20 bg-white p-12 text-center">
            <div>
              <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-[#f2e4ce] text-[#b8893b]">
                <Heart size={40} />
              </div>
              <h2 className="text-3xl font-semibold text-[#17120c]">
                Favori Listeniz Boş
              </h2>
              <p className="mt-4 text-base text-[#6f6252]">
                Beğendiğiniz ürünleri favorilere ekleyerek daha sonra
                inceleyebilirsiniz.
              </p>
              <Link
                to="/koleksiyonlar"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#b8893b] px-7 py-4 text-sm font-semibold text-white transition hover:bg-[#17120c]"
              >
                <ShoppingBag size={18} />
                Koleksiyonları İncele
              </Link>
            </div>
          </div>
        ) : (
          <>
            <div className="mb-6 text-sm text-[#6f6252]">
              <span className="font-semibold text-[#17120c]">
                {wishlist.length}
              </span>{" "}
              ürün favorilerinizde
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {wishlist.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}

export default Wishlist;
