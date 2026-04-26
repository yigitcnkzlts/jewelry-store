import { Star } from "lucide-react";
import SectionTitle from "../ui/SectionTitle";

const testimonials = [
  {
    name: "Elif K.",
    text: "Tasarım süreci çok özenliydi, istediğim yüzük tam hayalimdeki gibi hazırlandı.",
    rating: 5,
  },
  {
    name: "Merve A.",
    text: "Kolyenin işçiliği ve paketlemesi gerçekten çok kaliteliydi.",
    rating: 5,
  },
  {
    name: "Deniz T.",
    text: "Özel günümüz için hazırlanan set beklentimizin çok üzerindeydi.",
    rating: 5,
  },
];

function Testimonials() {
  return (
    <section className="bg-[#f7f1e8] px-4 py-20 sm:px-5 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Müşteri Deneyimi"
          title="Müşterilerimizin Deneyimi"
          description="Özel tasarım mücevherlerimizle mutlu ettiğimiz müşterilerimizin görüşleri."
        />

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="rounded-3xl border border-[#d6ad60]/20 bg-white p-8 shadow-[0_20px_60px_rgba(120,82,24,0.08)] transition hover:-translate-y-1 hover:shadow-[0_25px_70px_rgba(120,82,24,0.12)]"
            >
              <div className="mb-5 flex gap-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="fill-[#d6ad60] text-[#d6ad60]"
                  />
                ))}
              </div>

              <p className="text-sm leading-7 text-[#6f6252]">
                "{testimonial.text}"
              </p>

              <div className="mt-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#d6ad60] to-[#b8893b] text-sm font-semibold text-white">
                  {testimonial.name.charAt(0)}
                </div>
                <p className="text-sm font-semibold text-[#17120c]">
                  {testimonial.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
