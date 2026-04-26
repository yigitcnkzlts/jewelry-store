import { Play, Sparkles } from "lucide-react";

function VideoSection() {
  return (
    <section className="bg-[#f7f1e8] px-5 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.28em] text-[#b8893b]">
            Atölye & İşçilik
          </p>

          <h2 className="text-4xl font-semibold tracking-[-0.04em] text-[#17120c] md:text-5xl">
            Mücevher Yapım Sürecimiz
          </h2>

          <p className="mt-5 leading-8 text-[#6f6252]">
            Her parçanın özenle hazırlandığı atölyemizi ve el işçiliği
            sürecimizi keşfedin.
          </p>
        </div>

        <div className="relative mt-12 overflow-hidden rounded-[3rem] border border-[#d6ad60]/30 bg-gradient-to-br from-[#fffaf3] via-[#ead7b8] to-[#caa66a] shadow-[0_30px_90px_rgba(120,82,24,0.14)]">
          <div className="relative aspect-video">
            <img
              src="/images/workshop.jpg"
              alt="Auralya atölye"
              className="h-full w-full object-cover"
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#17120c]/60 via-[#17120c]/20 to-transparent" />

            <div className="absolute inset-0 flex items-center justify-center">
              <button className="group flex h-20 w-20 items-center justify-center rounded-full bg-white/90 shadow-[0_20px_60px_rgba(23,18,12,0.3)] backdrop-blur transition hover:scale-110 hover:bg-white">
                <Play
                  size={32}
                  className="ml-1 text-[#b8893b] transition group-hover:text-[#17120c]"
                />
              </button>
            </div>

            <div className="absolute left-6 top-6 inline-flex items-center gap-2 rounded-full bg-white/90 px-5 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#8a641f] backdrop-blur">
              <Sparkles size={15} />
              Demo Video
            </div>

            <div className="absolute bottom-6 left-6 right-6 rounded-3xl border border-white/40 bg-white/80 p-6 shadow-xl backdrop-blur-xl">
              <p className="text-lg font-semibold text-[#17120c]">
                El İşçiliği ile Hazırlanan Mücevherler
              </p>
              <p className="mt-2 text-sm leading-7 text-[#6f6252]">
                Bu bir demo bölümdür. Gerçek projede YouTube, Vimeo veya kendi
                video hostinginizden video eklenebilir.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default VideoSection;
