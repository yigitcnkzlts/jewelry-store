import { Link } from "react-router-dom";
import { ArrowRight, ShieldCheck, Sparkles, Gem } from "lucide-react";

const features = [
  {
    title: "El İşçiliği",
    description: "Özenli üretim ve premium dokunuş.",
    icon: Sparkles,
  },
  {
    title: "Özel Tasarım",
    description: "Size özel zarif koleksiyonlar.",
    icon: Gem,
  },
  {
    title: "Güvenilir Hizmet",
    description: "Kaliteli deneyim ve şeffaf iletişim.",
    icon: ShieldCheck,
  },
];

function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#fdfbf7] px-5 pt-16 pb-20 lg:px-8 lg:pt-24">
      <div className="absolute left-0 top-0 h-[380px] w-[380px] rounded-full bg-[#d6ad60]/15 blur-[120px]" />
      <div className="absolute right-0 bottom-0 h-[340px] w-[340px] rounded-full bg-[#ead7b8]/40 blur-[100px]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[0.95fr_1.05fr]">
        {/* Sol taraf */}
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-[#d6ad60]/30 bg-white px-5 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#8a641f] shadow-sm">
            <Sparkles size={14} />
            Premium Mücevher Tasarımı
          </div>

          <h1 className="mt-6 max-w-3xl text-5xl font-semibold leading-[0.95] tracking-[-0.05em] text-[#17120c] md:text-7xl">
            Zarafetin
            <span className="block text-[#b8893b]">En Işıltılı Hali</span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-[#6f6252] md:text-lg">
            Özel tasarım mücevher koleksiyonlarımızla her anınıza şıklık, değer
            ve unutulmaz bir ışıltı katıyoruz.
          </p>

          <p className="mt-4 max-w-2xl text-sm leading-7 text-[#8b7b67] md:text-base">
            Kişiye özel tasarım, kaliteli işçilik ve güvenilir alışveriş
            deneyimi ile hazırlanan seçkin Auralya parçalarını keşfedin.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              to="/koleksiyonlar"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#b8893b] px-7 py-4 text-sm font-semibold text-white transition hover:bg-[#17120c]"
            >
              Koleksiyonları Keşfet
              <ArrowRight
                size={17}
                className="transition group-hover:translate-x-1"
              />
            </Link>

            <Link
              to="/iletisim"
              className="inline-flex items-center justify-center rounded-full border border-[#d6ad60]/40 bg-white px-7 py-4 text-sm font-semibold text-[#17120c] transition hover:border-[#b8893b] hover:text-[#b8893b]"
            >
              İletişime Geç
            </Link>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {features.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-[1.75rem] border border-[#d6ad60]/20 bg-white p-5 shadow-[0_18px_50px_rgba(120,82,24,0.06)]"
                >
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-[#f2e4ce] text-[#b8893b]">
                    <Icon size={20} />
                  </div>

                  <h3 className="text-sm font-semibold text-[#17120c]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-xs leading-6 text-[#6f6252]">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Sağ taraf */}
        <div className="relative">
          <div className="relative overflow-hidden rounded-[3rem] border border-[#d6ad60]/20 bg-gradient-to-br from-[#fffaf3] via-[#f4e6cf] to-[#d0a85d] shadow-[0_35px_100px_rgba(120,82,24,0.16)]">
            <div className="relative aspect-[4/5] min-h-[560px]">
              <img
                src="/images/products/necklace.jpg"
                alt="Auralya premium mücevher koleksiyonu"
                className="h-full w-full object-cover object-[center_35%]"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#17120c]/42 via-transparent to-white/10" />

              <div className="absolute left-6 top-6 rounded-full bg-white/90 px-5 py-3 text-xs font-semibold uppercase tracking-[0.25em] text-[#8a641f] shadow-lg backdrop-blur">
                Yeni Sezon Koleksiyonu
              </div>

              <div className="absolute bottom-6 left-6 right-6 rounded-[2rem] border border-white/40 bg-white/85 p-5 shadow-xl backdrop-blur-xl">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#b8893b]">
                  El İşçiliği Koleksiyon
                </p>
                <h3 className="mt-2 text-2xl font-semibold tracking-[-0.03em] text-[#17120c]">
                  Işıltılı ve Zamansız Tasarımlar
                </h3>
                <p className="mt-2 text-sm leading-7 text-[#6f6252]">
                  Modern çizgiler, değerli taşlar ve zarif işçilikle hazırlanan
                  seçkin Auralya parçaları.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
