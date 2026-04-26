import { products } from "../../data/products";
import ProductCard from "../ui/ProductCard";
import SectionTitle from "../ui/SectionTitle";

function FeaturedProducts() {
  // Ana sayfada sadece ilk 8 ürünü göster (2 satır x 4 sütun)
  const featuredProducts = products.slice(0, 8);

  return (
    <section className="bg-[#f7f1e8] px-5 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Öne Çıkanlar"
          title="Işıltısıyla Öne Çıkan Parçalar"
          description="Auralya koleksiyonundan seçilen premium mücevherleri inceleyin."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedProducts;
