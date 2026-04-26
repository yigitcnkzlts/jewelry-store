import { useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";

function LiveChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");

  const handleSend = (e) => {
    e.preventDefault();
    if (message.trim()) {
      alert(
        "Bu bir demo chat widget'ıdır. Gerçek projede canlı destek entegrasyonu yapılabilir."
      );
      setMessage("");
    }
  };

  return (
    <>
      {/* Chat Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="group fixed bottom-24 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#17120c] text-white shadow-[0_10px_40px_rgba(23,18,12,0.3)] transition hover:scale-110 hover:bg-[#b8893b] lg:right-8"
        >
          <MessageCircle size={24} />
          <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#d6ad60] text-[10px] font-bold text-[#17120c]">
            1
          </span>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-5 right-5 z-40 w-[340px] overflow-hidden rounded-[2rem] border border-[#d6ad60]/30 bg-white shadow-[0_20px_60px_rgba(23,18,12,0.2)] lg:right-8 lg:w-[380px]">
          {/* Header */}
          <div className="flex items-center justify-between bg-[#17120c] p-5">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#d6ad60] text-[#17120c]">
                  <MessageCircle size={20} />
                </div>
                <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-[#17120c] bg-green-500" />
              </div>

              <div>
                <p className="text-sm font-semibold text-white">
                  Auralya Destek
                </p>
                <p className="text-xs text-white/70">Çevrimiçi</p>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="text-white/70 transition hover:text-white"
            >
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div className="h-[320px] space-y-4 overflow-y-auto bg-[#fdfbf7] p-5">
            <div className="flex gap-3">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#d6ad60] text-[#17120c]">
                <MessageCircle size={16} />
              </div>

              <div className="max-w-[240px] rounded-2xl rounded-tl-sm bg-white p-4 shadow-sm">
                <p className="text-sm leading-6 text-[#17120c]">
                  Merhaba! Auralya'ya hoş geldiniz. Size nasıl yardımcı
                  olabilirim?
                </p>
                <p className="mt-2 text-xs text-[#6f6252]">Şimdi</p>
              </div>
            </div>

            <div className="rounded-2xl border border-[#d6ad60]/20 bg-white p-4">
              <p className="text-xs font-semibold uppercase tracking-wider text-[#b8893b]">
                Demo Bilgisi
              </p>
              <p className="mt-2 text-sm leading-6 text-[#6f6252]">
                Bu bir demo chat widget'ıdır. Gerçek projede Tawk.to, Intercom
                veya Zendesk gibi canlı destek sistemleri entegre edilebilir.
              </p>
            </div>
          </div>

          {/* Input */}
          <form
            onSubmit={handleSend}
            className="border-t border-[#d6ad60]/20 bg-white p-4"
          >
            <div className="flex gap-2">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Mesajınızı yazın..."
                className="flex-1 rounded-full border border-[#d6ad60]/30 bg-[#fdfbf7] px-4 py-2.5 text-sm text-[#17120c] outline-none transition placeholder:text-[#6f6252]/50 focus:border-[#b8893b] focus:bg-white"
              />
              <button
                type="submit"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#b8893b] text-white transition hover:bg-[#17120c]"
              >
                <Send size={18} />
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}

export default LiveChat;
