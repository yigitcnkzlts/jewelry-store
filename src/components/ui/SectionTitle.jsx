function SectionTitle({ eyebrow, title, description, center = true }) {
  return (
    <div className={center ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow && (
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.28em] text-[#b8893b]">
          {eyebrow}
        </p>
      )}

      <h2 className="text-3xl font-semibold tracking-[-0.03em] text-[#17120c] md:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mt-5 text-base leading-8 text-[#6f6252]">
          {description}
        </p>
      )}
    </div>
  );
}

export default SectionTitle;
