import { X, Ruler } from "lucide-react";

const sizeGuides = {
  Yüzükler: [
    { size: "6", diameter: "16.5 mm", circumference: "51.9 mm" },
    { size: "7", diameter: "17.3 mm", circumference: "54.4 mm" },
    { size: "8", diameter: "18.2 mm", circumference: "57.2 mm" },
    { size: "9", diameter: "19.0 mm", circumference: "59.7 mm" },
    { size: "10", diameter: "19.8 mm", circumference: "62.2 mm" },
  ],
  Kolyeler: [
    { length: "40 cm", description: "Boyun hizası, yakın duruş" },
    { length: "45 cm", description: "Standart uzunluk, çoğu kişiye uygun" },
    { length: "50 cm", description: "Göğüs üstü, rahat duruş" },
    { length: "60 cm", description: "Uzun kolye, göğüs hizası" },
  ],
  Küpeler: [
    { type: "Sırga", description: "Küçük: 1-2 cm, Orta: 2-4 cm, Büyük: 4+ cm" },
    { type: "Damla", description: "Kısa: 2-3 cm, Orta: 3-5 cm, Uzun: 5+ cm" },
    { type: "Tektaş", description: "Standart kulak delikleri için uygundur" },
  ],
};

function SizeGuideModal({ isOpen, onClose, category = "Yüzükler" }) {
  if (!isOpen) return null;

  const guide = sizeGuides[category] || sizeGuides.Yüzükler;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-[#17120c]/60 backdrop-blur-sm" />

      <div
        className="relative z-10 w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-[2.5rem] border border-[#d6ad60]/30 bg-white shadow-[0_40px_120px_rgba(23,18,12,0.4)]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-[#d6ad60]/20 bg-white p-6">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#f2e4ce] text-[#b8893b]">
              <Ruler size={22} />
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-[#17120c]">
                Ölçü Rehberi
              </h2>
              <p className="text-sm text-[#6f6252]">{category}</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-[#fdfbf7] text-[#17120c] transition hover:bg-[#17120c] hover:text-white"
          >
            <X size={20} />
          </button>
        </div>

        <div className="p-6">
          {category === "Yüzükler" && (
            <div className="overflow-hidden rounded-2xl border border-[#d6ad60]/20">
              <table className="w-full">
                <thead className="bg-[#fdfbf7]">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-[#17120c]">
                      Numara
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-[#17120c]">
                      Çap
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-[#17120c]">
                      Çevre
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {guide.map((item, index) => (
                    <tr
                      key={index}
                      className="border-t border-[#d6ad60]/10 transition hover:bg-[#fdfbf7]"
                    >
                      <td className="px-6 py-4 text-sm text-[#17120c]">
                        {item.size}
                      </td>
                      <td className="px-6 py-4 text-sm text-[#6f6252]">
                        {item.diameter}
                      </td>
                      <td className="px-6 py-4 text-sm text-[#6f6252]">
                        {item.circumference}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {category === "Kolyeler" && (
            <div className="space-y-3">
              {guide.map((item, index) => (
                <div
                  key={index}
                  className="rounded-2xl border border-[#d6ad60]/20 bg-[#fdfbf7] p-5"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-semibold text-[#17120c]">
                      {item.length}
                    </span>
                    <span className="text-sm text-[#6f6252]">
                      {item.description}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}

          {category === "Küpeler" && (
            <div className="space-y-3">
              {guide.map((item, index) => (
                <div
                  key={index}
                  className="rounded-2xl border border-[#d6ad60]/20 bg-[#fdfbf7] p-5"
                >
                  <h3 className="text-lg font-semibold text-[#17120c]">
                    {item.type}
                  </h3>
                  <p className="mt-2 text-sm text-[#6f6252]">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          )}

          <div className="mt-6 rounded-2xl border border-[#d6ad60]/20 bg-[#fffaf3] p-6">
            <h3 className="text-lg font-semibold text-[#17120c]">
              Özel Ölçü Hizmeti
            </h3>
            <p className="mt-3 text-sm leading-7 text-[#6f6252]">
              Standart ölçülerin dışında özel ölçü talebiniz varsa, bizimle
              iletişime geçebilirsiniz. Tüm ürünlerimiz size özel ölçülerde
              hazırlanabilir.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SizeGuideModal;
