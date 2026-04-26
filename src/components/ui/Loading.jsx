import { Gem } from "lucide-react";

function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#fdfbf7]">
      <div className="text-center">
        <div className="relative mx-auto mb-6 h-16 w-16">
          <div className="absolute inset-0 animate-ping rounded-full bg-[#d6ad60]/30"></div>
          <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-[#d6ad60] to-[#b8893b] shadow-lg">
            <Gem size={28} className="animate-pulse text-white" />
          </div>
        </div>
        <p className="text-sm font-semibold text-[#b8893b]">Yükleniyor...</p>
      </div>
    </div>
  );
}

export default Loading;
