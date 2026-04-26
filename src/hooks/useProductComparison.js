import { useState, useEffect } from "react";

const MAX_COMPARE_ITEMS = 3;

export function useProductComparison() {
  const [compareList, setCompareList] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem("compareList");
    if (stored) {
      try {
        setCompareList(JSON.parse(stored));
      } catch (e) {
        console.error("Failed to parse compare list:", e);
      }
    }
  }, []);

  const addToCompare = (product) => {
    setCompareList((prev) => {
      const exists = prev.find((item) => item.id === product.id);
      if (exists) return prev;

      if (prev.length >= MAX_COMPARE_ITEMS) {
        alert(`En fazla ${MAX_COMPARE_ITEMS} ürün karşılaştırabilirsiniz.`);
        return prev;
      }

      const updated = [...prev, product];
      localStorage.setItem("compareList", JSON.stringify(updated));
      return updated;
    });
    return true;
  };

  const removeFromCompare = (productId) => {
    setCompareList((prev) => {
      const updated = prev.filter((item) => item.id !== productId);
      localStorage.setItem("compareList", JSON.stringify(updated));
      return updated;
    });
  };

  const isInCompare = (productId) => {
    return compareList.some((item) => item.id === productId);
  };

  const clearCompare = () => {
    setCompareList([]);
    localStorage.removeItem("compareList");
  };

  return {
    compareList,
    addToCompare,
    removeFromCompare,
    isInCompare,
    clearCompare,
  };
}
