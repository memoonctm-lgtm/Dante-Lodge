interface LogoProps {
  size?: "sm" | "md" | "lg";
  showText?: boolean;
  className?: string;
}

export function Logo({ size = "md", showText = true, className = "" }: LogoProps) {
  const sizes = {
    sm: { icon: 32, text: "text-sm" },
    md: { icon: 44, text: "text-base" },
    lg: { icon: 56, text: "text-lg" },
  };

  const { icon, text } = sizes[size];

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <svg
        width={icon}
        height={icon}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Dante Lodge Masonic Emblem"
        className="shrink-0"
      >
        {/* Outer circle */}
        <circle
          cx="50"
          cy="50"
          r="46"
          stroke="#D4AF37"
          strokeWidth="2"
          fill="#0D0D0D"
        />
        {/* Inner decorative ring */}
        <circle
          cx="50"
          cy="50"
          r="38"
          stroke="#059669"
          strokeWidth="1.5"
          fill="none"
          opacity="0.6"
        />

        {/* Square */}
        <rect
          x="28"
          y="28"
          width="44"
          height="44"
          stroke="#059669"
          strokeWidth="2.5"
          fill="none"
          transform="rotate(0 50 50)"
        />

        {/* Compasses */}
        <path
          d="M50 22 L38 72 L50 58 L62 72 Z"
          stroke="#DC2626"
          strokeWidth="2"
          fill="none"
          strokeLinejoin="round"
        />
        <path
          d="M50 22 L42 68 M50 22 L58 68"
          stroke="#DC2626"
          strokeWidth="1.5"
          fill="none"
        />

        {/* Letter G center */}
        <text
          x="50"
          y="54"
          textAnchor="middle"
          fill="#D4AF37"
          fontSize="14"
          fontFamily="serif"
          fontWeight="bold"
        >
          G
        </text>

        {/* Corner dots */}
        <circle cx="50" cy="8" r="2" fill="#D4AF37" />
        <circle cx="50" cy="92" r="2" fill="#D4AF37" />
        <circle cx="8" cy="50" r="2" fill="#D4AF37" />
        <circle cx="92" cy="50" r="2" fill="#D4AF37" />
      </svg>

      {showText && (
        <div className="leading-tight">
          <span
            className={`block font-serif font-bold tracking-wide text-white ${text}`}
          >
            Dante Lodge #174
          </span>
          <span className="block text-xs font-medium uppercase tracking-[0.2em] text-[var(--color-primary)]">
            Louisiana
          </span>
        </div>
      )}
    </div>
  );
}
