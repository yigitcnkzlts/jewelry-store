import { Users, Award, Sparkles, Gem } from "lucide-react";

const stats = [
  {
    icon: Users,
    number: "500+",
    label: "Mutlu Müşteri",
  },
  {
    icon: Award,
    number: "8+",
    label: "Yıl Deneyim",
  },
  {
    icon: Sparkles,
    number: "%100",
    label: "El İşçiliği",
  },
  {
    icon: Gem,
    number: "50+",
    label: "Özel Tasarım Koleksiyon",
  },
];

function StatsSection() {
  return (
    <section className="bg-[#fffaf3] px-4 py-12 sm:px-5 sm:py-16 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <div
                key={index}
                className="rounded-3xl border border-[#d6ad60]/20 bg-white p-6 text-center shadow-[0_20px_60px_rgba(120,82,24,0.08)] transition hover:-translate-y-1 hover:shadow-[0_25px_70px_rgba(120,82,24,0.12)] sm:p-8"
              >
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#f2e4ce] text-[#b8893b]">
                  <Icon size={24} strokeWidth={1.5} />
                </div>

                <p className="text-3xl font-bold text-[#b8893b] sm:text-4xl">
                  {stat.number}
                </p>

                <p className="mt-2 text-sm font-medium text-[#6f6252]">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default StatsSection;
