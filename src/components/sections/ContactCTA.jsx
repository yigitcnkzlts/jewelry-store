import { MessageCircle } from "lucide-react";

function ContactCTA() {
  return (
    <section className="bg-[#f7f1e8] px-5 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-[#17120c] px-6 py-16 text-center shadow-[0_30px_90px_rgba(23,18,12,0.22)] md:px-12">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#d6ad60]">
          Özel Tasarım
        </p>

        <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-semibold tracking-[-0.03em] text-white md:text-5xl">
          Size Özel Mücevher Tasarımı İçin Bize Ulaşın
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/65 md:text-base">
          Sevdikleriniz için anlamlı, özel ve zamansız bir parça tasarlamak
          isterseniz bizimle iletişime geçebilirsiniz.
        </p>

        <a
          href="https://wa.me/905550000000"
          target="_blank"
          rel="noreferrer"
          className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-[#d6ad60] px-7 py-4 text-sm font-semibold text-[#17120c] transition hover:bg-white"
        >
          <MessageCircle size={18} />
          WhatsApp ile İletişime Geç
        </a>
      </div>
    </section>
  );
}

export default ContactCTA;
