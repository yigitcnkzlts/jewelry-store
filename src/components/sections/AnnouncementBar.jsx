import { Sparkles } from "lucide-react";

function AnnouncementBar() {
  const announcements = [
    "Ücretsiz ön görüşme",
    "Özel tasarım mücevher",
    "WhatsApp ile hızlı iletişim",
  ];

  return (
    <div className="fixed left-0 right-0 top-0 z-50 border-b border-[#d6ad60]/20 bg-gradient-to-r from-[#fdfbf7] via-[#fffaf3] to-[#fdfbf7] py-2 shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-center gap-4 overflow-hidden px-4 sm:gap-6 md:gap-8">
        {announcements.map((text, index) => (
          <div key={index} className="flex items-center gap-2 sm:gap-3">
            <Sparkles size={12} className="text-[#b8893b] sm:h-3.5 sm:w-3.5" />
            <span className="whitespace-nowrap text-[10px] font-medium text-[#6f6252] sm:text-xs">
              {text}
            </span>
            {index < announcements.length - 1 && (
              <span className="hidden text-[#d6ad60] sm:inline">•</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default AnnouncementBar;
