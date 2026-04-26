import { X, MessageCircle, Gem, Award, Ruler, ZoomIn } from "lucide-react";
import { useState, useEffect } from "react";
import { useRecentlyViewed } from "../../hooks/useRecentlyViewed";

function ProductDetailModal({ product, isOpen, onClose }) {
  const [isZoomed, setIsZoomed] = useState(false);
  const { addToRecentlyViewed } = useRecentlyViewed();

  useEffect(() => {
    if (isOpen && product) {
      addToRecentlyViewed(product);
    }
  }, [isOpen, product, addToRecentlyViewed]);

  if (!isOpen) return null;

  const whatsappMessage = `Merhaba, ${product.name} hakkında bilgi almak istiyorum.`;
  const whatsappUrl = `https://wa.me/905550000000?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-[#17120c]/60 backdrop-blur-sm" />

      <div
        className="relative z-10 w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-[2.5rem] border border-[#d6ad60]/30 bg-[#fdfbf7] shadow-[0_40px_120px_rgba(23,18,12,0.4)]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute right-6 top-6 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-[#17120c] shadow-lg backdrop-blur transition hover:bg-[#17120c] hover:text-white"
          aria-label="Kapat"
        >
          <X size={20} />
        </button>

        <div className="grid gap-8 p-6 md:grid-cols-2 md:p-10">
          <div className="relative overflow-hidden rounded-[2rem] border border-[#d6ad60]/20 bg-gradient-to-br from-[#fffaf3] via-[#f4e3c4] to-[#caa66a] shadow-lg">
            <div className="group relative aspect-square cursor-zoom-in" onClick={() => setIsZoomed(!isZoomed)}>
              <img
                src={product.image}
                alt={product.name}
                className={`h-full w-full object-cover transition-transform duration-300 ${
                  isZoomed ? "scale-150" : "scale-100"
                }`}
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />

              {!isZoomed && (
                <div className="absolute inset-0 flex items-center justify-center bg-[#17120c]/0 opacity-0 transition group-hover:bg-[#17120c]/20 group-hover:opacity-100">
                  <div className="rounded-full bg-white/90 p-3 backdrop-blur">
                    <ZoomIn size={24} className="text-[#17120c]" />
                  </div>
                </div>
              )}

              {product.badge && (
                <div className="absolute left-4 top-4 rounded-full bg-[#b8893b] px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white shadow-lg">
                  {product.badge}
                </div>
              )}
            </div>
          </div>

          <div className="flex flex-col">
            <div className="mb-3 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.25em] text-[#b8893b]">
              <Gem size={14} />
              {product.category}
            </div>

            <h2 className="text-3xl font-semibold tracking-[-0.03em] text-[#17120c] md:text-4xl">
              {product.name}
            </h2>

            <p className="mt-4 text-3xl font-bold text-[#b8893b]">
              {product.price}
            </p>

            <p className="mt-5 leading-7 text-[#6f6252]">
              {product.description}
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-3 rounded-2xl border border-[#d6ad60]/20 bg-white p-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#f2e4ce] text-[#b8893b]">
                  <Award size={20} />
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#17120c]">
                    Malzeme
                  </p>
                  <p className="mt-1 text-sm text-[#6f6252]">
                    {product.material}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-2xl border border-[#d6ad60]/20 bg-white p-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#f2e4ce] text-[#b8893b]">
                  <Gem size={20} />
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#17120c]">Taş</p>
                  <p className="mt-1 text-sm text-[#6f6252]">{product.stone}</p>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-2xl border border-[#d6ad60]/20 bg-white p-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#f2e4ce] text-[#b8893b]">
                  <Ruler size={20} />
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#17120c]">Ölçü</p>
                  <p className="mt-1 text-sm text-[#6f6252]">
                    {product.sizeInfo}
                  </p>
                </div>
              </div>
            </div>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-[#b8893b] px-6 py-4 text-sm font-semibold text-white shadow-lg transition hover:bg-[#17120c]"
            >
              <MessageCircle size={18} />
              WhatsApp ile Bilgi Al
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailModal;
