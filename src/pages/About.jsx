import { Link } from "react-router-dom";
import {
  ArrowRight,
  Award,
  BadgeCheck,
  Gem,
  Heart,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";

const values = [
  {
    title: "Kaliteli Malzeme",
    description:
      "Her tasarımda uzun ömürlü kullanım, parlaklık ve güven hissi veren kaliteli materyaller tercih edilir.",
    icon: Gem,
  },
  {
    title: "Zarif Tasarım",
    description:
      "Auralya parçaları; sade, modern ve zamansız çizgilerle özel anlara eşlik edecek şekilde hazırlanır.",
    icon: Heart,
  },
  {
    title: "Güvenilir Hizmet",
    description:
      "Tasarım sürecinden teslimata kadar her adımda şeffaf, özenli ve güven veren bir deneyim sunulur.",
    icon: ShieldCheck,
  },
  {
    title: "El İşçiliği",
    description:
      "Her parçada detaylara verilen önem, ustalık ve kişiye özel üretim anlayışı ön plandadır.",
    icon: Users,
  },
];

const stats = [
  { value: "500+", label: "Mutlu Müşteri" },
  { value: "8+", label: "Yıl Deneyim" },
  { value: "%100", label: "El İşçiliği" },
  { value: "4", label: "Özel Koleksiyon" },
];

const process = [
  {
    title: "Fikir ve Tasarım",
    description:
      "Önce hayalinizdeki mücevheri, kullanım amacını ve tarzınızı birlikte netleştiriyoruz.",
  },
  {
    title: "Malzeme Seçimi",
    description:
      "Altın tonu, taş detayı, ölçü ve tasarım çizgisi gibi tüm detayları özenle belirliyoruz.",
  },
  {
    title: "Ustalıkla Üretim",
    description:
      "Tasarım onayından sonra parça, işçilik kalitesi ve zarafet ön planda tutularak hazırlanıyor.",
  },
];

function About() {
  return (
    <div className="bg-[#fdfbf7]">
      {/* Hero */}
      <section className="relative overflow-hidden px-5 pt-32 pb-20 lg:px-8 lg:pt-40">
        <div className="absolute left-0 top-0 h-[420px] w-[420px] rounded-full bg-[#d6ad60]/20 blur-[120px]" />
        <div className="absolute right-0 bottom-0 h-[360px] w-[360px] rounded-full bg-[#ead7b8]/50 blur-[100px]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#b8893b]">
              Hakkımızda
            </p>

            <h1 className="max-w-4xl text-5xl font-semibold leading-tight tracking-[-0.05em] text-[#17120c] md:text-7xl">
              Zarafeti Kaliteli İşçilikle Buluşturan Mücevher Deneyimi
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#6f6252] md:text-lg">
              Auralya, mücevheri yalnızca bir aksesuar olarak değil; anlam,
              hatıra ve kişisel zarafetin bir parçası olarak görür. Her tasarım,
              özel anlarınıza eşlik edecek zamansız bir değer yaratmak için
              hazırlanır.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                to="/koleksiyonlar"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#b8893b] px-7 py-4 text-sm font-semibold text-white transition hover:bg-[#17120c]"
              >
                Koleksiyonları İncele
                <ArrowRight
                  size={17}
                  className="transition group-hover:translate-x-1"
                />
              </Link>

              <Link
                to="/iletisim"
                className="inline-flex items-center justify-center rounded-full border border-[#d6ad60]/40 bg-white/80 px-7 py-4 text-sm font-semibold text-[#17120c] transition hover:border-[#b8893b] hover:text-[#b8893b]"
              >
                Bize Ulaşın
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-[3rem] border border-[#d6ad60]/25 bg-white shadow-[0_30px_90px_rgba(120,82,24,0.14)]">
              <div className="relative h-[560px] bg-gradient-to-br from-[#fffaf3] via-[#ead7b8] to-[#caa66a]">
                <img
                  src="/images/workshop.jpg"
                  alt="Auralya mücevher işçiliği"
                  className="h-full w-full object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#17120c]/45 via-transparent to-white/10" />

                <div className="absolute left-6 top-6 inline-flex items-center gap-2 rounded-full bg-white/80 px-5 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#8a641f] backdrop-blur">
                  <Sparkles size={15} />
                  El İşçiliği
                </div>

                <div className="absolute bottom-6 left-6 right-6 rounded-3xl border border-white/40 bg-white/80 p-6 shadow-xl backdrop-blur-xl">
                  <p className="text-lg font-semibold text-[#17120c]">
                    Her parçada özen, kalite ve anlam.
                  </p>
                  <p className="mt-2 text-sm leading-7 text-[#6f6252]">
                    Auralya koleksiyonları, modern tasarım anlayışı ve kuyumcu
                    ustalığını bir araya getirir.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="px-5 pb-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((item) => (
            <div
              key={item.label}
              className="rounded-[2rem] border border-[#d6ad60]/20 bg-white p-7 text-center shadow-[0_18px_50px_rgba(120,82,24,0.06)]"
            >
              <p className="text-4xl font-semibold text-[#b8893b]">
                {item.value}
              </p>
              <p className="mt-2 text-sm font-medium text-[#6f6252]">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Story */}
      <section className="bg-[#fffaf3] px-5 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.28em] text-[#b8893b]">
              Marka Hikayesi
            </p>
            <h2 className="text-4xl font-semibold tracking-[-0.04em] text-[#17120c] md:text-5xl">
              Mücevherde Zamansız Bir Duruş
            </h2>
          </div>

          <div className="space-y-6 text-base leading-8 text-[#6f6252]">
            <p>
              Auralya, özel anları daha kalıcı ve anlamlı hale getirme
              düşüncesiyle tasarlanmış premium bir mücevher markasıdır. Her
              koleksiyonda sade şıklık, kaliteli işçilik ve güven veren bir
              marka dili öne çıkar.
            </p>

            <p>
              Yüzük, kolye, küpe ve özel tasarım setlerde; günlük kullanımın
              zarafetini özel günlerin ışıltısıyla bir araya getiriyoruz. Her
              ürün, yalnızca görünümüyle değil, taşıdığı anlamla da değer
              kazanır.
            </p>

            <p>
              Amacımız; müşterilerimize yalnızca bir ürün sunmak değil, özel
              hissettiren bir deneyim yaşatmaktır. Tasarım sürecinden iletişime,
              ürün seçiminden teslimata kadar her detay Auralya kalitesini
              yansıtacak şekilde düşünülür.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-[#f7f1e8] px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.28em] text-[#b8893b]">
              Değerlerimiz
            </p>

            <h2 className="text-4xl font-semibold tracking-[-0.04em] text-[#17120c] md:text-5xl">
              Bizi Farklı Kılan Yaklaşım
            </h2>

            <p className="mt-5 leading-8 text-[#6f6252]">
              Auralya’da her tasarım; kalite, zarafet, güven ve kişiye özel
              deneyim anlayışıyla hazırlanır.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {values.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group rounded-[2rem] border border-[#d6ad60]/20 bg-white p-7 shadow-[0_18px_50px_rgba(120,82,24,0.06)] transition duration-300 hover:-translate-y-2 hover:shadow-[0_28px_70px_rgba(120,82,24,0.12)]"
                >
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#f2e4ce] text-[#b8893b] transition group-hover:bg-[#b8893b] group-hover:text-white">
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

      {/* Process */}
      <section className="bg-[#fffaf3] px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.28em] text-[#b8893b]">
                Tasarım Süreci
              </p>

              <h2 className="text-4xl font-semibold tracking-[-0.04em] text-[#17120c] md:text-5xl">
                Size Özel Mücevher Nasıl Hazırlanır?
              </h2>

              <p className="mt-5 leading-8 text-[#6f6252]">
                Özel tasarım sürecinde fikirden ürüne kadar her adım kontrollü,
                sade ve profesyonel şekilde ilerler.
              </p>
            </div>

            <div className="space-y-5">
              {process.map((item, index) => (
                <div
                  key={item.title}
                  className="rounded-[2rem] border border-[#d6ad60]/20 bg-white p-7 shadow-[0_18px_50px_rgba(120,82,24,0.06)]"
                >
                  <div className="flex gap-5">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#17120c] text-sm font-semibold text-[#d6ad60]">
                      0{index + 1}
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-[#17120c]">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm leading-7 text-[#6f6252]">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#f7f1e8] px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[3rem] bg-[#17120c] px-6 py-16 text-center shadow-[0_30px_90px_rgba(23,18,12,0.22)] md:px-12">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#d6ad60] text-[#17120c]">
            <Award size={30} />
          </div>

          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#d6ad60]">
            Auralya Deneyimi
          </p>

          <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-semibold tracking-[-0.03em] text-white md:text-5xl">
            Hayalinizdeki Mücevheri Birlikte Tasarlayalım
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/65 md:text-base">
            Size özel bir yüzük, kolye, küpe ya da set tasarımı için bizimle
            iletişime geçebilir, fikrinizi premium bir mücevhere
            dönüştürebilirsiniz.
          </p>

          <Link
            to="/iletisim"
            className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-[#d6ad60] px-7 py-4 text-sm font-semibold text-[#17120c] transition hover:bg-white"
          >
            İletişime Geç
            <BadgeCheck size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}

export default About;