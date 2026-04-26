function SkeletonCard() {
  return (
    <div className="overflow-hidden rounded-[2.5rem] border border-[#d6ad60]/20 bg-white shadow-[0_25px_70px_rgba(120,82,24,0.1)]">
      <div className="h-80 animate-pulse bg-gradient-to-br from-[#fffaf3] via-[#ead7b8] to-[#caa66a]" />

      <div className="p-7">
        <div className="h-6 w-3/4 animate-pulse rounded-lg bg-[#f2e4ce]" />

        <div className="mt-3 space-y-2">
          <div className="h-4 w-full animate-pulse rounded bg-[#fdfbf7]" />
          <div className="h-4 w-5/6 animate-pulse rounded bg-[#fdfbf7]" />
        </div>

        <div className="mt-6 flex items-center justify-between border-t border-[#d6ad60]/10 pt-6">
          <div className="h-8 w-24 animate-pulse rounded-lg bg-[#f2e4ce]" />
          <div className="h-6 w-20 animate-pulse rounded bg-[#fdfbf7]" />
        </div>

        <div className="mt-5 h-12 w-full animate-pulse rounded-full bg-[#f2e4ce]" />
      </div>
    </div>
  );
}

export default SkeletonCard;
