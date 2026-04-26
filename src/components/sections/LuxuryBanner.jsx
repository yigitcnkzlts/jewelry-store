import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

function LuxuryBanner() {
  return (
    <section className="bg-[#fdfbf7] px-5 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-[3rem] border border-[#d6ad60]/25 bg-gradient-to-br from-[#17120c] via-[#2a2218] to-[#17120c] shadow-[0_40px_100px_rgba(23,18,12,0.3)]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(214,173,96,0.15),transparent_50%)]" />
          
          <div className="relative grid items-center gap-10 lg:grid-cols-2">
            <div className="order-2 p-10 lg:order-1 lg:p-16">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#d6ad60]">
                Premium Koleksiyon
              </p>

              <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-[-0.03em] text-white md:text-5xl">
                Işıltınızı Yansıtan Özel Tasarımlar
              </h2>

              <p className="mt-6 max-w-xl text-base leading-8 text-white/70">
                Her detayında zarafet, kalite ve anlam taşıyan mücevher
                koleksiyonlarını keşfedin. El işçiliğiyle hazırlanan özel
                parçalar, zamansız güzelliği yansıtır.
              </p>

              <Link
                to="/koleksiyonlar"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#d6ad60] px-7 py-4 text-sm font-semibold text-[#17120c] transition hover:bg-white"
              >
                Koleksiyonu İncele
                <ArrowRight size={17} />
              </Link>
            </div>

            <div className="order-1 lg:order-2">
              <div className="relative h-[350px] overflow-hidden bg-gradient-to-br from-[#2a2218] to-[#17120c] lg:h-[450px] lg:rounded-r-[3rem]">
                <img
                  src="/images/banner-jewelry.jpg"
                  alt="Auralya premium mücevher koleksiyonu"
                  className="h-full w-full object-contain p-6"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />

                <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-[#17120c]/40" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LuxuryBanner;
