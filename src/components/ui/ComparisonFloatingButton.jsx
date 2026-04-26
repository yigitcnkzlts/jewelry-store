import { useState } from "react";
import { GitCompare, X } from "lucide-react";
import { useProductComparison } from "../../hooks/useProductComparison";
import ProductComparisonModal from "./ProductComparisonModal";

function ComparisonFloatingButton() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { compareList, removeFromCompare } = useProductComparison();

  if (compareList.length === 0) return null;

  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        className="fixed bottom-40 right-5 z-40 flex items-center gap-3 rounded-full bg-[#17120c] px-5 py-3 text-white shadow-[0_10px_40px_rgba(23,18,12,0.3)] transition hover:scale-105 hover:bg-[#b8893b] lg:right-8"
      >
        <GitCompare size={20} />
        <span className="text-sm font-semibold">
          Karşılaştır ({compareList.length})
        </span>
      </button>

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
