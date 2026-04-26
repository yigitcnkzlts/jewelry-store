import { products } from "../data/products";
import { categories } from "../data/categories";
import ProductCard from "../components/ui/ProductCard";
import { Search, SlidersHorizontal } from "lucide-react";
import { useState } from "react";

function Collections() {
  const [selectedCategory, setSelectedCategory] = useState("Tümü");

  const filteredProducts =
    selectedCategory === "Tümü"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <section className="min-h-screen bg-gradient-to-b from-[#fdfbf7] to-[#fffaf3] px-5 pt-32 pb-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.28em] text-[#b8893b]">
            Koleksiyonlar
          </p>
          <h1 className="text-4xl font-semibold tracking-[-0.03em] text-[#17120c] md:text-6xl">
            Mücevher Koleksiyonları
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-[#6f6252]">
            Özel tasarım yüzükler, kolyeler, küpeler ve daha fazlası
          </p>
        </div>

        <div className="mb-12 flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => setSelectedCategory("Tümü")}
              className={`rounded-full px-6 py-2.5 text-sm font-semibold transition ${
                selectedCategory === "Tümü"
                  ? "bg-[#b8893b] text-white shadow-lg"
                  : "border border-[#d6ad60]/30 bg-white text-[#6f6252] hover:border-[#b8893b] hover:text-[#b8893b]"
              }`}
            >
              Tümü
            </button>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.name)}
                className={`rounded-full px-6 py-2.5 text-sm font-semibold transition ${
                  selectedCategory === cat.name
                    ? "bg-[#b8893b] text-white shadow-lg"
                    : "border border-[#d6ad60]/30 bg-white text-[#6f6252] hover:border-[#b8893b] hover:text-[#b8893b]"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          <div className="flex gap-3">
            <div className="relative flex-1 md:w-64">
              <Search
                className="absolute left-4 top-1/2 -translate-y-1/2 text-[#6f6252]"
                size={18}
              />
              <input
                type="text"
                placeholder="Ürün ara..."
                className="w-full rounded-full border border-[#d6ad60]/30 bg-white py-2.5 pl-11 pr-4 text-sm text-[#17120c] placeholder:text-[#6f6252]/50 focus:border-[#b8893b] focus:outline-none"
              />
            </div>

            <button className="flex items-center gap-2 rounded-full border border-[#d6ad60]/30 bg-white px-5 py-2.5 text-sm font-semibold text-[#6f6252] transition hover:border-[#b8893b] hover:text-[#b8893b]">
              <SlidersHorizontal size={18} />
              Filtrele
            </button>
          </div>
        </div>

        <div className="mb-6 text-sm text-[#6f6252]">
          <span className="font-semibold text-[#17120c]">
            {filteredProducts.length}
          </span>{" "}
          ürün gösteriliyor
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Collections;
