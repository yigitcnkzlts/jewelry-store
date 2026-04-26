import { useState } from "react";
import {
  Clock,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const contactItems = [
  {
    title: "Mağaza / Atölye",
    description: "İstanbul, Türkiye",
    icon: MapPin,
  },
  {
    title: "Telefon",
    description: "+90 555 000 00 00",
    icon: Phone,
  },
  {
    title: "E-posta",
    description: "info@auralya.com",
    icon: Mail,
  },
  {
    title: "Çalışma Saatleri",
    description: "Pazartesi - Cumartesi / 10:00 - 19:00",
    icon: Clock,
  },
];

const faqItems = [
  {
    question: "Özel tasarım mücevher yaptırabilir miyim?",
    answer:
      "Evet. Yüzük, kolye, küpe ve set tasarımlarında size özel ölçü, taş ve tasarım detaylarıyla çalışma yapılabilir.",
  },
  {
    question: "Ürünler hakkında nasıl bilgi alabilirim?",
    answer:
      "Ürün kartlarındaki WhatsApp butonları veya iletişim sayfasındaki hızlı iletişim alanı üzerinden detaylı bilgi alabilirsiniz.",
  },
  {
    question: "Bu form gerçek gönderim yapıyor mu?",
    answer:
      "Şu an demo form olarak hazırlanmıştır. Gerçek projede backend ile e-posta veya CRM entegrasyonu yapılabilir.",
  },
];

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "Özel Tasarım",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert(
      "Bu bir demo formdur. Gerçek projede bu form backend üzerinden e-posta veya CRM sistemine gönderilebilir."
    );
  };

  const whatsappMessage = `Merhaba, Auralya mücevher sitesi üzerinden iletişime geçiyorum. Konu: ${formData.subject}.`;
  const whatsappUrl = `https://wa.me/905550000000?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <div className="bg-[#fdfbf7]">
      {/* Hero */}
      <section className="relative overflow-hidden px-5 pt-32 pb-16 lg:px-8 lg:pt-40">
        <div className="absolute left-0 top-0 h-[420px] w-[420px] rounded-full bg-[#d6ad60]/20 blur-[120px]" />
        <div className="absolute right-0 bottom-0 h-[360px] w-[360px] rounded-full bg-[#ead7b8]/50 blur-[100px]" />

        <div className="relative mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#b8893b]">
              İletişim
            </p>

            <h1 className="text-5xl font-semibold leading-tight tracking-[-0.05em] text-[#17120c] md:text-7xl">
              Size Özel Mücevherler İçin Bize Ulaşın
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#6f6252] md:text-lg">
              Koleksiyonlarımız, özel tasarım seçenekleri veya ürün detayları
              hakkında bilgi almak için bizimle iletişime geçebilirsiniz.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="px-5 pb-10 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {contactItems.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-[2rem] border border-[#d6ad60]/20 bg-white p-6 shadow-[0_18px_50px_rgba(120,82,24,0.06)]"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#f2e4ce] text-[#b8893b]">
                  <Icon size={22} />
                </div>

                <h3 className="text-lg font-semibold text-[#17120c]">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm leading-7 text-[#6f6252]">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Form + WhatsApp */}
      <section className="px-5 py-16 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          {/* Form */}
          <div className="rounded-[3rem] border border-[#d6ad60]/20 bg-white p-6 shadow-[0_25px_80px_rgba(120,82,24,0.1)] md:p-10">
            <div className="mb-8">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.28em] text-[#b8893b]">
                Mesaj Gönder
              </p>

              <h2 className="text-3xl font-semibold tracking-[-0.03em] text-[#17120c] md:text-4xl">
                Talebinizi Bize İletin
              </h2>

              <p className="mt-4 text-sm leading-7 text-[#6f6252]">
                İlgilendiğiniz ürün, özel tasarım fikri veya randevu talebiniz
                için formu doldurabilirsiniz.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="grid gap-5">
              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-semibold text-[#17120c]">
                    Adınız Soyadınız
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Adınızı yazın"
                    className="w-full rounded-2xl border border-[#d6ad60]/25 bg-[#fffaf3] px-5 py-4 text-sm text-[#17120c] outline-none transition placeholder:text-[#9b8b75] focus:border-[#b8893b] focus:bg-white"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-[#17120c]">
                    E-posta Adresiniz
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="ornek@mail.com"
                    className="w-full rounded-2xl border border-[#d6ad60]/25 bg-[#fffaf3] px-5 py-4 text-sm text-[#17120c] outline-none transition placeholder:text-[#9b8b75] focus:border-[#b8893b] focus:bg-white"
                  />
                </div>
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-semibold text-[#17120c]">
                    Telefon Numaranız
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+90 5XX XXX XX XX"
                    className="w-full rounded-2xl border border-[#d6ad60]/25 bg-[#fffaf3] px-5 py-4 text-sm text-[#17120c] outline-none transition placeholder:text-[#9b8b75] focus:border-[#b8893b] focus:bg-white"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-[#17120c]">
                    Konu
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full rounded-2xl border border-[#d6ad60]/25 bg-[#fffaf3] px-5 py-4 text-sm text-[#17120c] outline-none transition focus:border-[#b8893b] focus:bg-white"
                  >
                    <option>Özel Tasarım</option>
                    <option>Ürün Bilgisi</option>
                    <option>Randevu Talebi</option>
                    <option>Fiyat Bilgisi</option>
                    <option>Diğer</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-[#17120c]">
                  Mesajınız
                </label>
                <textarea
                  name="message"
                  required
                  rows="6"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Talebinizi detaylı şekilde yazabilirsiniz..."
                  className="w-full resize-none rounded-2xl border border-[#d6ad60]/25 bg-[#fffaf3] px-5 py-4 text-sm text-[#17120c] outline-none transition placeholder:text-[#9b8b75] focus:border-[#b8893b] focus:bg-white"
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#b8893b] px-7 py-4 text-sm font-semibold text-white transition hover:bg-[#17120c]"
              >
                Mesaj Gönder
                <Send size={17} />
              </button>
            </form>
          </div>

          {/* Right Side */}
          <div className="space-y-6">
            <div className="overflow-hidden rounded-[3rem] bg-[#17120c] p-8 text-white shadow-[0_30px_80px_rgba(23,18,12,0.28)]">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#d6ad60] text-[#17120c]">
                <MessageCircle size={26} />
              </div>

              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#d6ad60]">
                Hızlı İletişim
              </p>

              <h3 className="mt-4 text-3xl font-semibold tracking-[-0.03em]">
                WhatsApp Üzerinden Hemen Yazın
              </h3>

              <p className="mt-4 text-sm leading-7 text-white/65">
                Ürün detayları, fiyat bilgisi veya özel tasarım talepleriniz
                için WhatsApp üzerinden hızlıca iletişime geçebilirsiniz.
              </p>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#d6ad60] px-6 py-4 text-sm font-semibold text-[#17120c] transition hover:bg-white"
              >
                WhatsApp ile İletişime Geç
                <MessageCircle size={17} />
              </a>
            </div>

            <div className="rounded-[3rem] border border-[#d6ad60]/20 bg-white p-8 shadow-[0_18px_50px_rgba(120,82,24,0.06)]">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#f2e4ce] text-[#b8893b]">
                <ShieldCheck size={26} />
              </div>

              <h3 className="text-2xl font-semibold tracking-[-0.03em] text-[#17120c]">
                Güvenli ve Özenli Süreç
              </h3>

              <p className="mt-4 text-sm leading-7 text-[#6f6252]">
                Size özel mücevher taleplerinde tasarım, ölçü, taş ve teslimat
                detayları iletişim sürecinde netleştirilir. Her adımda sade,
                şeffaf ve güven veren bir deneyim hedeflenir.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Store Visit */}
      <section className="bg-[#fffaf3] px-5 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[3rem] border border-[#d6ad60]/20 bg-white p-8 shadow-[0_18px_50px_rgba(120,82,24,0.06)] md:p-10">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.28em] text-[#b8893b]">
              Ziyaret ve Randevu
            </p>

            <h2 className="text-4xl font-semibold tracking-[-0.04em] text-[#17120c] md:text-5xl">
              Koleksiyonları Yakından İnceleyin
            </h2>

            <p className="mt-5 leading-8 text-[#6f6252]">
              Demo mağaza ve atölye alanı için bu bölüm örnek olarak
              hazırlanmıştır. Gerçek projede harita, randevu sistemi veya mağaza
              lokasyonu entegre edilebilir.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl bg-[#fffaf3] p-5">
                <Sparkles className="mb-3 text-[#b8893b]" size={22} />
                <p className="font-semibold text-[#17120c]">Ürün Danışmanlığı</p>
                <p className="mt-2 text-sm leading-6 text-[#6f6252]">
                  Size en uygun parça için özel yönlendirme.
                </p>
              </div>

              <div className="rounded-3xl bg-[#fffaf3] p-5">
                <GemIcon />
                <p className="font-semibold text-[#17120c]">Özel Tasarım</p>
                <p className="mt-2 text-sm leading-6 text-[#6f6252]">
                  Fikrinize göre yüzük, kolye ve set çalışması.
                </p>
              </div>
            </div>
          </div>

          <div className="min-h-[420px] overflow-hidden rounded-[3rem] border border-[#d6ad60]/20 bg-gradient-to-br from-[#fffaf3] via-[#ead7b8] to-[#caa66a] shadow-[0_25px_80px_rgba(120,82,24,0.1)]">
            <div className="relative h-full min-h-[420px]">
              <img
                src="/images/banner-jewelry.jpg"
                alt="Auralya mağaza deneyimi"
                className="h-full w-full object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#17120c]/45 via-transparent to-white/10" />

              <div className="absolute bottom-6 left-6 right-6 rounded-3xl border border-white/40 bg-white/80 p-6 shadow-xl backdrop-blur-xl">
                <p className="text-lg font-semibold text-[#17120c]">
                  Premium Kuyumcu Deneyimi
                </p>
                <p className="mt-2 text-sm leading-7 text-[#6f6252]">
                  Zarif koleksiyonlar, özel tasarım süreci ve güven veren
                  iletişim.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#f7f1e8] px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.28em] text-[#b8893b]">
              Sık Sorulanlar
            </p>

            <h2 className="text-4xl font-semibold tracking-[-0.04em] text-[#17120c] md:text-5xl">
              Merak Ettikleriniz
            </h2>
          </div>

          <div className="mt-10 space-y-4">
            {faqItems.map((item) => (
              <div
                key={item.question}
                className="rounded-[2rem] border border-[#d6ad60]/20 bg-white p-7 shadow-[0_18px_50px_rgba(120,82,24,0.06)]"
              >
                <h3 className="text-lg font-semibold text-[#17120c]">
                  {item.question}
                </h3>

                <p className="mt-3 text-sm leading-7 text-[#6f6252]">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function GemIcon() {
  return <Sparkles className="mb-3 text-[#b8893b]" size={22} />;
}

export default Contact;