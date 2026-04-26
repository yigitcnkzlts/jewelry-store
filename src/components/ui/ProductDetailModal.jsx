import { X, MessageCircle, Gem, Award, Ruler, ZoomIn, Share2, Ruler as RulerIcon } from "lucide-react";
import { useState, useEffect } from "react";
import { useRecentlyViewed } from "../../hooks/useRecentlyViewed";
import SizeGuideModal from "./SizeGuideModal";

function ProductDetailModal({ product, isOpen, onClose }) {
  const [isZoomed, setIsZoomed] = useState(false);
  const [isSizeGuideOpen, setIsSizeGuideOpen] = useState(false);
  const { addToRecentlyViewed } = useRecentlyViewed();

  useEffect(() => {
    if (isOpen && product) {
      addToRecentlyViewed(product);
    }
  }, [isOpen, product, addToRecentlyViewed]);

  if (!isOpen) return null;

  const whatsappMessage = `Merhaba, ${product.name} hakkında bilgi almak istiyorum.`;
  const whatsappUrl = `https://wa.me/905550000000?text=${encodeURIComponent(whatsappMessage)}`;

  const shareUrl = window.location.href;
  const shareText = `${product.name} - ${product.price}`;

  const handleShare = (platform) => {
    let url = "";
    switch (platform) {
      case "facebook":
        url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`;
        break;
      case "twitter":
        url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`;
        break;
      case "whatsapp":
        url = `https://wa.me/?text=${encodeURIComponent(shareText + " " + shareUrl)}`;
        break;
      case "pinterest":
        url = `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(shareUrl)}&description=${encodeURIComponent(shareText)}`;
        break;
    }
    window.open(url, "_blank", "width=600,height=400");
  };

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
                <div className="flex flex-1 items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold text-[#17120c]">Ölçü</p>
                    <p className="mt-1 text-sm text-[#6f6252]">
                      {product.sizeInfo}
                    </p>
                  </div>
                  <button
                    onClick={() => setIsSizeGuideOpen(true)}
                    className="text-xs font-semibold text-[#b8893b] transition hover:text-[#17120c]"
                  >
                    Ölçü Rehberi
                  </button>
                </div>
              </div>
            </div>

            <div className="mt-6 rounded-2xl border border-[#d6ad60]/20 bg-[#fdfbf7] p-4">
              <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-[#17120c]">
                <Share2 size={16} />
                Paylaş
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => handleShare("facebook")}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-[#d6ad60]/30 text-[#6f6252] transition hover:border-[#b8893b] hover:bg-[#b8893b] hover:text-white"
                >
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </button>
                <button
                  onClick={() => handleShare("twitter")}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-[#d6ad60]/30 text-[#6f6252] transition hover:border-[#b8893b] hover:bg-[#b8893b] hover:text-white"
                >
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </button>
                <button
                  onClick={() => handleShare("whatsapp")}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-[#d6ad60]/30 text-[#6f6252] transition hover:border-[#b8893b] hover:bg-[#b8893b] hover:text-white"
                >
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                </button>
                <button
                  onClick={() => handleShare("pinterest")}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-[#d6ad60]/30 text-[#6f6252] transition hover:border-[#b8893b] hover:bg-[#b8893b] hover:text-white"
                >
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z"/>
                  </svg>
                </button>
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

      <SizeGuideModal
        isOpen={isSizeGuideOpen}
        onClose={() => setIsSizeGuideOpen(false)}
        category={product.category}
      />
    </div>
  );
}

export default ProductDetailModal;
