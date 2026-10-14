export default function Radar({ className = "" }) {
  return (
    <svg viewBox="0 0 128 128" aria-hidden="true" className={className}>
      <defs>
        <clipPath id="radar-clip">
          <circle cx="64" cy="64" r="58" />
        </clipPath>
      </defs>

      {/* Bordo e fondo del radar */}
      <circle
        cx="64"
        cy="64"
        r="62"
        strokeWidth="3"
        className="fill-[#0b0014] stroke-accent"
      />

      <g clipPath="url(#radar-clip)">
        {/* Mare lungo la costa */}
        <path
          d="M0 96 C30 86 46 104 70 98 S112 80 128 88 L128 128 L0 128 Z"
          className="fill-[#1d5d7a]"
        />

        {/* Strade principali e secondarie */}
        <path d="M-4 40 L132 58" strokeWidth="7" className="stroke-[#5b3a7a]" />
        <path d="M40 -4 L56 132" strokeWidth="4" className="stroke-[#5b3a7a]" />
        <path
          d="M92 -4 C84 30 96 52 84 90"
          strokeWidth="3"
          fill="none"
          className="stroke-[#5b3a7a]"
        />
        <path d="M-4 18 L60 30" strokeWidth="2" className="stroke-line" />
        <path d="M70 70 L128 64" strokeWidth="2" className="stroke-line" />

        {/* Isolati */}
        <rect x="14" y="56" width="18" height="12" className="fill-surface" />
        <rect x="66" y="20" width="16" height="14" className="fill-surface" />
        <rect x="98" y="38" width="20" height="14" className="fill-surface" />

        {/* Segnale della missione in corso */}
        <circle cx="100" cy="28" r="7" className="fill-hi" />
        <text
          x="100"
          y="31.5"
          textAnchor="middle"
          fontSize="9"
          fontWeight="800"
          className="fill-bg"
        >
          F
        </text>

        {/* Segnaposto GPS che pulsa */}
        <rect
          x="22"
          y="22"
          width="9"
          height="9"
          transform="rotate(45 26.5 26.5)"
          className="animate-pulse fill-accent"
        />
      </g>

      {/* Tu, al centro */}
      <path d="M64 54 L71 72 L64 68 L57 72 Z" className="fill-ink" />
      <text
        x="64"
        y="12"
        textAnchor="middle"
        fontSize="9"
        fontWeight="700"
        className="fill-ink"
      >
        N
      </text>
    </svg>
  );
}
