export default function HeroBackground() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* ── Radial glow layers for depth ── */}

      {/* Warm center glow — gives "sunlit sky" feel */}
      <div
        className="absolute top-[30%] left-1/2 -translate-x-1/2 w-[120%] h-[80%] opacity-[0.18]"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 40%, #fde68a, transparent)",
        }}
      />

      {/* Cool edge glow — top-left depth */}
      <div
        className="absolute -top-[10%] -left-[10%] w-[60%] h-[60%] opacity-[0.12]"
        style={{
          background:
            "radial-gradient(ellipse at 30% 30%, #3b82f6, transparent)",
        }}
      />

      {/* Soft horizon glow — bottom warmth */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[140%] h-[45%] opacity-[0.15]"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 80%, #fed7aa, transparent)",
        }}
      />

      {/* ── Clouds (3 large, soft) ── */}
      <svg
        className="absolute top-[8%] left-[3%] w-80 h-40 opacity-[0.1] animate-float-slow"
        style={{ animationDelay: "-3s" }}
        viewBox="0 0 320 160"
        fill="white"
      >
        <ellipse cx="160" cy="100" rx="145" ry="48" />
        <ellipse cx="110" cy="76" rx="72" ry="55" />
        <ellipse cx="200" cy="70" rx="82" ry="60" />
        <ellipse cx="160" cy="62" rx="60" ry="46" />
      </svg>

      <svg
        className="absolute top-[15%] right-[5%] w-64 h-32 opacity-[0.08] animate-float-medium"
        style={{ animationDelay: "-8s" }}
        viewBox="0 0 256 128"
        fill="white"
      >
        <ellipse cx="128" cy="80" rx="116" ry="38" />
        <ellipse cx="90" cy="60" rx="64" ry="46" />
        <ellipse cx="170" cy="56" rx="72" ry="50" />
      </svg>

      <svg
        className="absolute top-[38%] left-[18%] w-48 h-24 opacity-[0.07] animate-float-fast"
        style={{ animationDelay: "-2s" }}
        viewBox="0 0 192 96"
        fill="white"
      >
        <ellipse cx="96" cy="60" rx="88" ry="30" />
        <ellipse cx="68" cy="46" rx="50" ry="36" />
        <ellipse cx="128" cy="44" rx="56" ry="38" />
      </svg>

      {/* ── Paper plane (floating in place) ── */}
      <div
        className="absolute top-[20%] right-[14%] md:right-[18%] animate-float-slow -rotate-12"
        style={{ animationDelay: "-6s" }}
      >
        <svg
          className="w-14 h-14 md:w-20 md:h-20 drop-shadow-lg"
          viewBox="0 0 64 64"
          fill="none"
        >
          <path d="M4 32L58 8L36 56L28 36Z" fill="white" fillOpacity="0.9" />
          <path d="M4 32L58 8L28 36Z" fill="white" fillOpacity="0.7" />
          <path d="M28 36L36 56L58 8Z" fill="white" fillOpacity="0.5" />
        </svg>
        {/* Trail dots */}
        <svg
          className="absolute -left-20 top-1/2 -translate-y-1/2 w-20 h-4 opacity-30"
          viewBox="0 0 80 16"
          fill="none"
        >
          <circle cx="72" cy="8" r="2" fill="white" opacity="0.7" />
          <circle cx="58" cy="9" r="1.6" fill="white" opacity="0.5" />
          <circle cx="46" cy="8" r="1.2" fill="white" opacity="0.3" />
          <circle cx="36" cy="9" r="0.8" fill="white" opacity="0.15" />
        </svg>
      </div>

      {/* ── Sparkles (2 only) ── */}
      <svg
        className="absolute top-[12%] left-[30%] w-6 h-6 animate-pulse-soft"
        style={{ animationDelay: "-1s" }}
        viewBox="0 0 24 24"
        fill="#FCD34D"
        opacity="0.35"
      >
        <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5Z" />
      </svg>

      <svg
        className="absolute top-[35%] right-[25%] w-5 h-5 animate-pulse-soft"
        style={{ animationDelay: "-3s" }}
        viewBox="0 0 24 24"
        fill="#FCD34D"
        opacity="0.3"
      >
        <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5Z" />
      </svg>

      {/* ── Bottom fade (seamless transition to next section) ── */}
      <div
        className="absolute bottom-0 left-0 w-full h-[25%]"
        style={{
          background:
            "radial-gradient(ellipse 80% 100% at 50% 100%, #f8fafc, transparent)",
        }}
      />
    </div>
  );
}
