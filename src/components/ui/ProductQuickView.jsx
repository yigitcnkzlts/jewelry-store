import { X, MessageCircle, Eye } from "lucide-react";

function ProductQuickView({ product, isOpen, onClose, onViewDetails }) {
  if (!isOpen) return null;

  const whatsappMessage = `Merhaba, ${product.name} hakkında bilgi almak istiyorum.`;
  const whatsappUrl = `https://wa.me/905550000000?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-[#17120c]/40 backdrop-blur-sm" />

      <div
        className="relative z-10 w-full max-w-2xl overflow-hidden rounded-[2rem] border border-[#d6ad60]/30 bg-white shadow-[0_30px_90px_rgba(23,18,12,0.3)]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-[#17120c] shadow-lg backdrop-blur transition hover:bg-[#17120c] hover:text-white"
        >
          <X size={18} />
        </button>

        <div className="grid gap-6 p-6 md:grid-cols-2">
          <div className="relative overflow-hidden rounded-2xl border border-[#d6ad60]/20 bg-gradient-to-br from-[#fffaf3] via-[#f4e3c4] to-[#caa66a]">
            <div className="relative aspect-square">
              <img
                src={product.image}
                alt={product.name}
                className="h-full w-full object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />

              {product.badge && (
                <div className="absolute left-3 top-3 rounded-full bg-[#b8893b] px-3 py-1.5 text-xs font-semibold text-white">
                  {product.badge}
                </div>
              )}
            </div>
          </div>

          <div className="flex flex-col">
            <div className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#b8893b]">
              {product.category}
            </div>

            <h3 className="text-2xl font-semibold tracking-[-0.03em] text-[#17120c]">
              {product.name}
            </h3>

            <p className="mt-3 text-2xl font-bold text-[#b8893b]">
              {product.price}
            </p>

            <p className="mt-4 line-clamp-3 text-sm leading-6 text-[#6f6252]">
              {product.description}
            </p>

            <div className="mt-6 space-y-2 text-sm">
              <div className="flex justify-between rounded-xl bg-[#fdfbf7] p-3">
                <span className="text-[#6f6252]">Malzeme:</span>
                <span className="font-semibold text-[#17120c]">
                  {product.material}
                </span>
              </div>

              <div className="flex justify-between rounded-xl bg-[#fdfbf7] p-3">
                <span className="text-[#6f6252]">Taş:</span>
                <span className="font-semibold text-[#17120c]">
                  {product.stone}
                </span>
              </div>
            </div>

            <div className="mt-6 flex gap-2">
              <button
                onClick={onViewDetails}
                className="flex-1 rounded-full border border-[#d6ad60]/30 bg-white px-5 py-3 text-sm font-semibold text-[#17120c] transition hover:border-[#b8893b] hover:text-[#b8893b]"
              >
                <Eye size={16} className="mr-2 inline" />
                Tüm Detaylar
              </button>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="flex-1 rounded-full bg-[#b8893b] px-5 py-3 text-center text-sm font-semibold text-white transition hover:bg-[#17120c]"
              >
                <MessageCircle size={16} className="mr-2 inline" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductQuickView;
