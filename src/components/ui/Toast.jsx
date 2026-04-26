import { useEffect } from "react";
import { CheckCircle, X, AlertCircle, Info } from "lucide-react";

function Toast({ message, type = "success", onClose, duration = 3000 }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  const icons = {
    success: CheckCircle,
    error: AlertCircle,
    info: Info,
  };

  const colors = {
    success: "bg-green-50 border-green-200 text-green-800",
    error: "bg-red-50 border-red-200 text-red-800",
    info: "bg-blue-50 border-blue-200 text-blue-800",
  };

  const Icon = icons[type];

  return (
    <div
      className={`fixed top-24 right-5 z-50 flex items-center gap-3 rounded-2xl border px-5 py-4 shadow-[0_20px_60px_rgba(0,0,0,0.15)] backdrop-blur-xl animate-slide-in-right ${colors[type]} lg:right-8`}
    >
      <Icon size={20} />
      <p className="text-sm font-semibold">{message}</p>
      <button
        onClick={onClose}
        className="ml-2 transition hover:opacity-70"
      >
        <X size={18} />
      </button>
    </div>
  );
}

export default Toast;
