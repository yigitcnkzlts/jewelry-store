import { useState } from "react";
import { MessageCircle, ArrowRight } from "lucide-react";
import ProductDetailModal from "./ProductDetailModal";

function ProductCard({ product }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <article className="group overflow-hidden rounded-[2.5rem] border border-[#d6ad60]/20 bg-white shadow-[0_25px_70px_rgba(120,82,24,0.1)] transition duration-300 hover:-translate-y-3 hover:shadow-[0_35px_90px_rgba(120,82,24,0.16)]">
        <div className="relative h-80 overflow-hidden bg-gradient-to-br from-[#fff7ea] via-[#ead7b8] to-[#caa66a]">
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
            onError={(e) => {
              e.currentTarget.style.display = "none";
            }}
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />

          <div className="absolute left-6 top-6 flex items-center gap-3">
            <div className="rounded-full bg-white/90 px-4 py-2 text-xs font-semibold text-[#8a641f] backdrop-blur">
              {product.category}
            </div>

            {product.badge && (
              <div className="rounded-full bg-[#17120c] px-4 py-2 text-xs font-semibold text-[#d6ad60]">
                {product.badge}
              </div>
            )}
          </div>
        </div>

        <div className="p-7">
          <h3 className="text-xl font-semibold text-[#17120c]">
            {product.name}
          </h3>

          <p className="mt-3 min-h-[60px] text-sm leading-7 text-[#6f6252]">
            {product.description}
          </p>

          <div className="mt-6 flex items-center justify-between border-t border-[#d6ad60]/10 pt-6">
            <p className="text-2xl font-semibold text-[#b8893b]">
              {product.price}
            </p>

            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center gap-1 text-sm font-semibold text-[#17120c] transition hover:gap-2 hover:text-[#b8893b]"
            >
              Detayları Gör
              <ArrowRight size={16} />
            </button>
          </div>

          <a
            href={`https://wa.me/905550000000?text=Merhaba, ${product.name} hakkında bilgi almak istiyorum.`}
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#17120c] px-6 py-3.5 text-sm font-semibold text-white shadow-lg transition hover:bg-[#b8893b]"
          >
            <MessageCircle size={18} />
            WhatsApp ile Sor
          </a>
        </div>
      </article>

      <ProductDetailModal
        product={product}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}

export default ProductCard;
