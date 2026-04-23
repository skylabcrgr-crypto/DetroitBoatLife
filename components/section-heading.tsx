import { ReactNode } from "react";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  accentColor?: string;
  children?: ReactNode;
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
  accentColor = "#2EA7FF",
  children,
}: SectionHeadingProps) {
  const alignClass =
    align === "center"
      ? "text-center mx-auto"
      : align === "right"
      ? "text-right ml-auto"
      : "text-left";

  return (
    <div className={`max-w-2xl ${alignClass}`}>
      {eyebrow && (
        <div
          className="inline-flex items-center gap-2 mb-3"
          style={{ color: accentColor }}
        >
          <span className="w-6 h-px bg-current" aria-hidden="true" />
          <span className="text-xs font-bold uppercase tracking-widest">
            {eyebrow}
          </span>
        </div>
      )}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-[1.05] tracking-tight mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-[#B7C5D3] text-base sm:text-lg leading-relaxed">
          {subtitle}
        </p>
      )}
      {children}
    </div>
  );
}
