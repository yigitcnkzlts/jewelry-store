import { MessageSquare, Sparkles, Package } from "lucide-react";
import SectionTitle from "../ui/SectionTitle";

const steps = [
  {
    number: "01",
    title: "Hayalinizdeki Tasarımı Paylaşın",
    description:
      "Düşündüğünüz mücevher tasarımını, tercihlerinizi ve beklentilerinizi bizimle paylaşın.",
    icon: MessageSquare,
  },
  {
    number: "02",
    title: "Ustalarımız Tasarımı Hazırlasın",
    description:
      "Deneyimli ustalarımız, özel tasarımınızı el işçiliğiyle titizlikle hazırlar.",
    icon: Sparkles,
  },
  {
    number: "03",
    title: "Size Özel Mücevheriniz Teslim Edilsin",
    description:
      "Hazırlanan özel parçanız, premium ambalajıyla size teslim edilir.",
    icon: Package,
  },
];

function DesignProcess() {
  return (
    <section className="bg-[#f7f1e8] px-5 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Özel Tasarım Süreci"
          title="Size Özel Mücevher Nasıl Hazırlanır?"
          description="Hayalinizdeki mücevheri gerçeğe dönüştürmek için sadece 3 adım."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                key={step.number}
                className="group relative rounded-[2.5rem] border border-[#d6ad60]/20 bg-white p-8 shadow-[0_20px_60px_rgba(120,82,24,0.08)] transition duration-300 hover:-translate-y-2 hover:shadow-[0_30px_80px_rgba(120,82,24,0.14)]"
              >
                <div className="absolute -top-5 left-8 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#17120c] text-lg font-bold text-[#d6ad60] shadow-lg">
                  {step.number}
                </div>

                <div className="mt-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#f2e4ce] text-[#b8893b] transition group-hover:bg-[#b8893b] group-hover:text-white">
                  <Icon size={28} />
                </div>

                <h3 className="mt-6 text-xl font-semibold text-[#17120c]">
                  {step.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-[#6f6252]">
                  {step.description}
                </p>

                {index < steps.length - 1 && (
                  <div className="absolute -right-4 top-1/2 hidden h-0.5 w-8 -translate-y-1/2 bg-gradient-to-r from-[#d6ad60] to-transparent md:block" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default DesignProcess;
