import { Link } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";

function Breadcrumb({ items }) {
  return (
    <nav className="flex items-center gap-2 text-sm" aria-label="Breadcrumb">
      <Link
        to="/"
        className="flex items-center gap-1 text-[#6f6252] transition hover:text-[#b8893b]"
      >
        <Home size={14} />
        Ana Sayfa
      </Link>

      {items.map((item, index) => (
        <div key={index} className="flex items-center gap-2">
          <ChevronRight size={14} className="text-[#d6ad60]" />
          {item.link ? (
            <Link
              to={item.link}
              className="text-[#6f6252] transition hover:text-[#b8893b]"
            >
              {item.label}
            </Link>
          ) : (
            <span className="font-semibold text-[#17120c]">{item.label}</span>
          )}
        </div>
      ))}
    </nav>
  );
}

export default Breadcrumb;
