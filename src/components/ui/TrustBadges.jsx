import { ShieldCheck, Truck, Award, Clock } from "lucide-react";

const badges = [
  {
    icon: ShieldCheck,
    title: "Güvenli Alışveriş",
    description: "SSL sertifikalı güvenli ödeme",
  },
  {
    icon: Truck,
    title: "Ücretsiz Kargo",
    description: "Tüm siparişlerde ücretsiz",
  },
  {
    icon: Award,
    title: "Garanti Belgesi",
    description: "Tüm ürünlerde garanti",
  },
  {
    icon: Clock,
    title: "Hızlı Teslimat",
    description: "3-5 iş günü içinde",
  },
];

function TrustBadges() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {badges.map((badge) => {
        const Icon = badge.icon;

        return (
          <div
            key={badge.title}
            className="flex items-center gap-4 rounded-2xl border border-[#d6ad60]/20 bg-white p-5 shadow-[0_10px_30px_rgba(120,82,24,0.05)]"
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#f2e4ce] text-[#b8893b]">
              <Icon size={22} />
            </div>

            <div>
              <p className="text-sm font-semibold text-[#17120c]">
                {badge.title}
              </p>
              <p className="mt-0.5 text-xs text-[#6f6252]">
                {badge.description}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default TrustBadges;
