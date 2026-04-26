import { useEffect, useState } from "react";

const galleryItems = [
  {
    id: 1,
    image: "/images/gallery/gallery-1.jpg",
    title: "Pırlanta Set",
  },
  {
    id: 2,
    image: "/images/gallery/gallery-2.jpg",
    title: "Emerald Koleksiyon",
  },
  {
    id: 3,
    image: "/images/gallery/gallery-3.jpg",
    title: "Tektaş Detayı",
  },
  {
    id: 4,
    image: "/images/gallery/gallery-4.jpg",
    title: "Minimal Kolye",
  },
  {
    id: 5,
    image: "/images/gallery/gallery-5.jpg",
    title: "Gece Işıltısı",
  },
  {
    id: 6,
    image: "/images/gallery/gallery-6.jpg",
    title: "Özel Yüzük Tasarımı",
  },
];

function GallerySection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % galleryItems.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const getVisibleImages = () => {
    const images = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % galleryItems.length;
      images.push({ ...galleryItems[index], key: index });
    }
    return images;
  };

  return (
    <section className="bg-[#fdfbf7] px-5 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.28em] text-[#b8893b]">
            Işıltılı Detaylar
          </p>

          <h2 className="text-4xl font-semibold tracking-[-0.04em] text-[#17120c] md:text-5xl">
            Koleksiyondan Seçili Kareler
          </h2>

          <p className="mt-5 text-base leading-8 text-[#6f6252]">
            Yeni koleksiyonlarımızı ve özel tasarım çalışmalarımızı yakından
            keşfedin.
          </p>
        </div>

        <div className="mt-14 overflow-hidden">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {getVisibleImages().map((item, index) => (
              <div
                key={item.key}
                className="group relative overflow-hidden rounded-[2rem] border border-[#d6ad60]/20 bg-gradient-to-br from-[#fffaf3] via-[#f4e3c4] to-[#caa66a] shadow-[0_18px_50px_rgba(120,82,24,0.08)] transition-all duration-700"
                style={{
                  animation: `fadeInSlide 0.7s ease-out ${index * 0.1}s both`,
                }}
              >
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-[#17120c]/55 via-transparent to-transparent opacity-90" />

                <div className="absolute bottom-4 left-4 right-4 rounded-[1.5rem] border border-white/40 bg-white/95 px-4 py-4 backdrop-blur-xl shadow-xl">
                  <p className="text-sm font-semibold text-[#17120c]">
                    {item.title}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex justify-center gap-2">
            {galleryItems.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "w-8 bg-[#b8893b]"
                    : "w-2 bg-[#d6ad60]/30 hover:bg-[#d6ad60]/50"
                }`}
                aria-label={`Görsel ${index + 1}'e git`}
              />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeInSlide {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </section>
  );
}

export default GallerySection;
