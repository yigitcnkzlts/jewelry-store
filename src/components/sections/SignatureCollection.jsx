import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const signatureItems = [
  {
    id: 1,
    label: "Yüzükler",
    title: "Tektaş Zarafeti",
    description: "Zamansız tasarımlar ve özel pırlanta seçenekleri.",
    image: "/images/signature/signature-ring.jpg",
    imageClass: "object-cover object-center",
  },
  {
    id: 2,
    label: "Kolyeler",
    title: "Altın Kolye Seçkisi",
    description: "El işçiliği ile hazırlanan zarif kolye koleksiyonları.",
    image: "/images/signature/signature-necklace.jpg",
    imageClass: "object-cover object-[center_42%]",
  },
  {
    id: 3,
    label: "Özel Tasarımlar",
    title: "Özel Tasarım Setler",
    description: "Uyumlu parçalardan oluşan premium mücevher seçkileri.",
    image: "/images/signature/signature-set.jpg",
    imageClass: "object-cover object-[center_45%]",
  },
];

function SignatureCollection() {
  return (
    <section className="bg-[#fffaf3] px-5 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.28em] text-[#b8893b]">
            Signature Koleksiyon
          </p>

          <h2 className="text-4xl font-semibold tracking-[-0.04em] text-[#17120c] md:text-6xl">
            Zamansız Çizgiler, Değerli Taşlar
          </h2>

          <p className="mt-5 text-base leading-8 text-[#6f6252]">
            Zamansız çizgiler, değerli taşlar ve özel işçilikle hazırlanan seçkin
            parçaları keşfedin.
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {signatureItems.map((item) => (
            <div
              key={item.id}
              className="group overflow-hidden rounded-[2.5rem] border border-[#d6ad60]/20 bg-white shadow-[0_22px_60px_rgba(120,82,24,0.08)] transition duration-300 hover:-translate-y-2 hover:shadow-[0_30px_80px_rgba(120,82,24,0.14)]"
            >
              <div className="relative h-[500px] overflow-hidden bg-gradient-to-br from-[#fffaf3] via-[#f4e3c4] to-[#caa66a]">
                <img
                  src={item.image}
                  alt={item.title}
                  className={`h-full w-full ${item.imageClass} transition duration-700 group-hover:scale-[1.03]`}
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#17120c]/50 via-[#17120c]/8 to-transparent" />

                <div className="absolute left-5 top-5 rounded-full bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#8a641f] shadow-md backdrop-blur">
                  {item.label}
                </div>

                <div className="absolute bottom-4 left-4 right-4">
                  <div className="rounded-2xl border border-white/40 bg-white/90 px-3 py-3 shadow-xl backdrop-blur-xl">
                    <h3 className="text-base font-semibold tracking-[-0.02em] text-[#17120c]">
                      {item.title}
                    </h3>

                    <p className="mt-1 text-xs leading-5 text-[#6f6252]">
                      {item.description}
                    </p>

                    <Link
                      to="/koleksiyonlar"
                      className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-[#b8893b] transition hover:text-[#17120c]"
                    >
                      İncele <ArrowRight size={13} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SignatureCollection;
