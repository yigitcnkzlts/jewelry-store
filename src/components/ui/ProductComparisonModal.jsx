import { X, Gem, Award, Ruler, DollarSign } from "lucide-react";

function ProductComparisonModal({ products, isOpen, onClose, onRemove }) {
  if (!isOpen || products.length === 0) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-[#17120c]/60 backdrop-blur-sm" />

      <div
        className="relative z-10 w-full max-w-6xl max-h-[90vh] overflow-y-auto rounded-[2.5rem] border border-[#d6ad60]/30 bg-[#fdfbf7] shadow-[0_40px_120px_rgba(23,18,12,0.4)]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-[#d6ad60]/20 bg-white p-6">
          <h2 className="text-2xl font-semibold text-[#17120c]">
            Ürün Karşılaştırma
          </h2>
          <button
            onClick={onClose}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-[#fdfbf7] text-[#17120c] transition hover:bg-[#17120c] hover:text-white"
          >
            <X size={20} />
          </button>
        </div>

        <div className="p-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <div
                key={product.id}
                className="relative overflow-hidden rounded-[2rem] border border-[#d6ad60]/20 bg-white shadow-lg"
              >
                <button
                  onClick={() => onRemove(product.id)}
                  className="absolute right-3 top-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-[#17120c] shadow-lg backdrop-blur transition hover:bg-[#17120c] hover:text-white"
                >
                  <X size={16} />
                </button>

                <div className="relative h-64 overflow-hidden bg-gradient-to-br from-[#fffaf3] via-[#f4e3c4] to-[#caa66a]">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-[#17120c]">
                    {product.name}
                  </h3>

                  <div className="mt-6 space-y-4">
                    <div className="flex items-start gap-3 rounded-xl bg-[#fdfbf7] p-4">
                      <DollarSign
                        size={18}
                        className="mt-0.5 text-[#b8893b]"
                      />
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-[#6f6252]">
                          Fiyat
                        </p>
                        <p className="mt-1 text-lg font-bold text-[#b8893b]">
                          {product.price}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 rounded-xl bg-[#fdfbf7] p-4">
                      <Award size={18} className="mt-0.5 text-[#b8893b]" />
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-[#6f6252]">
                          Malzeme
                        </p>
                        <p className="mt-1 text-sm text-[#17120c]">
                          {product.material}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 rounded-xl bg-[#fdfbf7] p-4">
                      <Gem size={18} className="mt-0.5 text-[#b8893b]" />
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-[#6f6252]">
                          Taş
                        </p>
                        <p className="mt-1 text-sm text-[#17120c]">
                          {product.stone}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 rounded-xl bg-[#fdfbf7] p-4">
                      <Ruler size={18} className="mt-0.5 text-[#b8893b]" />
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-[#6f6252]">
                          Ölçü
                        </p>
                        <p className="mt-1 text-sm text-[#17120c]">
                          {product.sizeInfo}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {products.length < 3 && (
            <div className="mt-6 rounded-2xl border border-[#d6ad60]/20 bg-white p-6 text-center">
              <p className="text-sm text-[#6f6252]">
                Daha fazla ürün ekleyerek karşılaştırma yapabilirsiniz (En
                fazla 3 ürün)
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductComparisonModal;
