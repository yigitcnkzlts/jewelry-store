import { Gem, ShieldCheck, Sparkles, BadgeCheck } from "lucide-react";
import SectionTitle from "../ui/SectionTitle";

const items = [
  {
    title: "El İşçiliği",
    description: "Her parça detaylı işçilik ve özenli üretim anlayışıyla hazırlanır.",
    icon: Sparkles,
  },
  {
    title: "Kaliteli Malzeme",
    description: "Altın, taş ve tasarım detaylarında kalite ön planda tutulur.",
    icon: Gem,
  },
  {
    title: "Özel Tasarım",
    description: "Kişiye özel, anlamlı ve zamansız mücevher tasarımları sunulur.",
    icon: BadgeCheck,
  },
  {
    title: "Güvenilir Hizmet",
    description: "Satış öncesi ve sonrası güven veren profesyonel deneyim.",
    icon: ShieldCheck,
  },
];

function WhyChooseUs() {
  return (
    <section className="bg-[#fffaf3] px-5 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Neden Auralya?"
          title="Zarafet, Güven ve Kalite Bir Arada"
          description="Mücevher seçiminde sadece görünüm değil; kalite, güven ve anlam da önemlidir."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-[2rem] border border-[#d6ad60]/20 bg-white p-7 text-center shadow-[0_18px_50px_rgba(120,82,24,0.06)]"
              >
                <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-[#f2e4ce] text-[#b8893b]">
                  <Icon size={25} />
                </div>

                <h3 className="text-lg font-semibold text-[#17120c]">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-[#6f6252]">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
