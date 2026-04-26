import { useState } from "react";
import { GitCompare, X, Trash2 } from "lucide-react";
import { useProductComparison } from "../../hooks/useProductComparison";
import ProductComparisonModal from "./ProductComparisonModal";

function ComparisonFloatingButton() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { compareList, removeFromCompare, clearCompare } = useProductComparison();

  if (compareList.length === 0) return null;

  return (
    <>
      <div className="fixed bottom-40 right-5 z-40 flex flex-col gap-2 lg:right-8">
        <button
          onClick={() => setIsModalOpen(true)}
          className="flex items-center gap-3 rounded-full bg-[#17120c] px-5 py-3 text-white shadow-[0_10px_40px_rgba(23,18,12,0.3)] transition hover:scale-105 hover:bg-[#b8893b]"
        >
          <GitCompare size={20} />
          <span className="text-sm font-semibold">
            Karşılaştır ({compareList.length})
          </span>
        </button>

        {compareList.length > 0 && (
          <button
            onClick={() => {
              if (
                window.confirm(
                  "Karşılaştırma listesini temizlemek istediğinizden emin misiniz?"
                )
              ) {
                clearCompare();
              }
            }}
            className="flex items-center justify-center gap-2 rounded-full border border-[#d6ad60]/30 bg-white px-4 py-2 text-sm font-semibold text-[#6f6252] shadow-lg transition hover:border-red-400 hover:bg-red-50 hover:text-red-600"
          >
            <Trash2 size={16} />
            Temizle
          </button>
        )}
      </div>

      <ProductComparisonModal
        products={compareList}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onRemove={removeFromCompare}
      />
    </>
  );
}

export default ComparisonFloatingButton;
