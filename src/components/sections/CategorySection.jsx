import { categories } from "../../data/categories";
import SectionTitle from "../ui/SectionTitle";
import { ArrowRight } from "lucide-react";

function CategorySection() {
  return (
    <section className="bg-[#fffaf3] px-5 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Koleksiyonlar"
          title="Her Tarza Uygun Mücevher Seçkisi"
          description="Zarif yüzüklerden özel tasarım kolyelere kadar, her anınızı tamamlayacak premium koleksiyonları keşfedin."
        />

        <div className="mt-16 grid gap-7 md:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => {
            const Icon = category.icon;

            return (
              <div
                key={category.id}
                className="group relative overflow-hidden rounded-[2.5rem] border border-[#d6ad60]/20 bg-white shadow-[0_20px_60px_rgba(120,82,24,0.08)] transition duration-300 hover:-translate-y-2 hover:shadow-[0_30px_80px_rgba(120,82,24,0.14)]"
              >
                <div
                  className={`relative h-56 bg-gradient-to-br ${category.gradient} transition duration-500 group-hover:scale-105`}
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex h-24 w-24 items-center justify-center rounded-3xl bg-white/80 text-[#b8893b] shadow-xl backdrop-blur transition group-hover:scale-110 group-hover:bg-white">
                      <Icon size={40} strokeWidth={1.5} />
                    </div>
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-t from-white/60 via-transparent to-transparent" />
                </div>

                <div className="p-7">
                  <h3 className="text-xl font-semibold text-[#17120c]">
                    {category.name}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-[#6f6252]">
                    {category.description}
                  </p>

                  <button className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-[#b8893b] transition hover:gap-2">
                    Keşfet
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default CategorySection;
