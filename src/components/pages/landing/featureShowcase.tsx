import { MapPin, Route, UserPlus, MessageCircle } from "lucide-react";

function ShowcaseVisual({
  variant,
}: {
  variant: "discover" | "collaborate";
}) {
  if (variant === "discover") {
    return (
      <div className="relative w-full aspect-[4/3] rounded-2xl bg-gradient-to-br from-blue-500 via-sky-400 to-blue-400 overflow-hidden shadow-lg">
        {/* Decorative map pins */}
        <div className="absolute top-[18%] left-[20%] flex flex-col items-center animate-float-slow" style={{ animationDelay: "-2s" }}>
          <div className="bg-white/20 backdrop-blur-sm rounded-lg px-3 py-2 mb-1">
            <span className="text-xs text-white font-semibold">Tokyo</span>
          </div>
          <MapPin className="w-10 h-10 text-white" strokeWidth={1.5} />
        </div>
        <div className="absolute top-[30%] right-[18%] flex flex-col items-center animate-float-medium" style={{ animationDelay: "-5s" }}>
          <div className="bg-orange-400/30 backdrop-blur-sm rounded-lg px-3 py-2 mb-1">
            <span className="text-xs text-white font-semibold">Kyoto</span>
          </div>
          <MapPin className="w-9 h-9 text-orange-300" strokeWidth={1.5} />
        </div>
        <div className="absolute bottom-[25%] left-[38%] flex flex-col items-center animate-float-fast" style={{ animationDelay: "-1s" }}>
          <div className="bg-amber-400/25 backdrop-blur-sm rounded-lg px-3 py-2 mb-1">
            <span className="text-xs text-white font-semibold">Osaka</span>
          </div>
          <MapPin className="w-8 h-8 text-amber-300" strokeWidth={1.5} />
        </div>

        {/* Dashed path between pins */}
        <svg className="absolute inset-0 w-full h-full opacity-30" viewBox="0 0 400 300">
          <path
            d="M95,75 C155,105 245,85 305,125 C335,145 195,165 165,205"
            fill="none"
            stroke="white"
            strokeWidth="2.5"
            strokeDasharray="8 6"
          />
        </svg>

        {/* Decorative clouds */}
        <svg className="absolute top-[8%] right-[10%] w-24 h-12 opacity-15" viewBox="0 0 80 40" fill="white">
          <ellipse cx="40" cy="25" rx="35" ry="12" />
          <ellipse cx="28" cy="18" rx="20" ry="15" />
          <ellipse cx="52" cy="16" rx="22" ry="16" />
        </svg>

        {/* Torii gate hint */}
        <svg className="absolute bottom-[10%] right-[12%] w-16 h-16 opacity-20" viewBox="0 0 48 48" fill="none" stroke="white" strokeWidth="2">
          <line x1="8" y1="12" x2="40" y2="12" />
          <line x1="6" y1="8" x2="42" y2="8" />
          <line x1="12" y1="12" x2="12" y2="42" />
          <line x1="36" y1="12" x2="36" y2="42" />
          <path d="M4,8 Q24,2 44,8" />
        </svg>

        {/* Bottom wave */}
        <svg className="absolute bottom-0 left-0 w-full opacity-10" viewBox="0 0 400 40" fill="white" preserveAspectRatio="none">
          <path d="M0,20 C100,40 200,0 300,20 C350,30 380,10 400,20 L400,40 L0,40 Z" />
        </svg>
      </div>
    );
  }

  return (
    <div className="relative w-full aspect-[4/3] rounded-2xl bg-gradient-to-br from-sky-400 via-blue-400 to-blue-500 overflow-hidden shadow-lg">
      {/* Collaboration cursors */}
      <div className="absolute top-[20%] left-[15%] animate-float-medium" style={{ animationDelay: "-3s" }}>
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-full bg-orange-400 flex items-center justify-center shadow-md">
            <span className="text-xs text-white font-bold">A</span>
          </div>
          <div className="bg-white/25 backdrop-blur-sm rounded-lg px-3 py-1.5 shadow-sm">
            <span className="text-xs text-white font-medium">Adding Shibuya...</span>
          </div>
        </div>
      </div>
      <div className="absolute top-[55%] right-[12%] animate-float-slow" style={{ animationDelay: "-8s" }}>
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-full bg-amber-400 flex items-center justify-center shadow-md">
            <span className="text-xs text-white font-bold">K</span>
          </div>
          <div className="bg-white/25 backdrop-blur-sm rounded-lg px-3 py-1.5 shadow-sm">
            <span className="text-xs text-white font-medium">Reordering route</span>
          </div>
        </div>
      </div>

      {/* Shared list mockup */}
      <div className="absolute top-[28%] left-[32%] bg-white/20 backdrop-blur-md rounded-xl p-4 w-44 shadow-lg">
        <p className="text-[10px] text-white/60 font-semibold uppercase tracking-wider mb-2">Trip itinerary</p>
        <div className="space-y-2.5">
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-blue-300" />
            <div className="h-2.5 w-20 rounded bg-white/30" />
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-orange-300" />
            <div className="h-2.5 w-24 rounded bg-white/30" />
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-amber-300" />
            <div className="h-2.5 w-16 rounded bg-white/30" />
          </div>
        </div>
      </div>

      {/* Icons */}
      <UserPlus className="absolute bottom-[20%] left-[15%] w-10 h-10 text-white/20" strokeWidth={1.5} />
      <MessageCircle className="absolute top-[12%] right-[22%] w-8 h-8 text-white/20" strokeWidth={1.5} />

      {/* Bottom wave */}
      <svg className="absolute bottom-0 left-0 w-full opacity-10" viewBox="0 0 400 40" fill="white" preserveAspectRatio="none">
        <path d="M0,25 C80,10 200,35 320,15 C370,8 400,22 400,22 L400,40 L0,40 Z" />
      </svg>
    </div>
  );
}

export default function FeatureShowcase() {
  return (
    <section className="py-24 px-6 md:px-8 bg-gradient-to-b from-white to-sky-50/50">
      <div className="max-w-5xl mx-auto space-y-24">
        {/* Block 1: Visual left, text right */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="intersect-once intersect:motion-preset-slide-right intersect:motion-duration-700">
            <ShowcaseVisual variant="discover" />
          </div>
          <div className="intersect-once intersect:motion-opacity-in-0 intersect:motion-translate-y-in-[8px] intersect:motion-duration-500 intersect:motion-delay-200">
            <div className="flex items-center gap-2 mb-4">
              <Route className="w-5 h-5 text-orange-500" strokeWidth={2} />
              <span className="text-sm font-semibold text-orange-500 tracking-wide uppercase">
                Discover
              </span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4 leading-snug">
              Travel Through Your Favorite Worlds
            </h3>
            <p className="text-slate-600 leading-relaxed mb-4">
              From the streets of Tokyo in <em>Your Name</em> to the countryside temples of <em>My Neighbor Totoro</em> — discover real locations from beloved anime and turn them into your next adventure.
            </p>
            <p className="text-slate-400 text-sm">
              Curated guides, community picks, and hidden gems all in one place.
            </p>
          </div>
        </div>

        {/* Block 2: Text left, visual right */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 intersect-once intersect:motion-opacity-in-0 intersect:motion-translate-y-in-[8px] intersect:motion-duration-500 intersect:motion-delay-200">
            <div className="flex items-center gap-2 mb-4">
              <UserPlus className="w-5 h-5 text-blue-500" strokeWidth={2} />
              <span className="text-sm font-semibold text-blue-500 tracking-wide uppercase">
                Collaborate
              </span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4 leading-snug">
              Collaborate Like a Crew
            </h3>
            <p className="text-slate-600 leading-relaxed mb-4">
              Invite friends, vote on destinations, and build your trip together in real time. No more endless group chats or shared spreadsheets.
            </p>
            <p className="text-slate-400 text-sm">
              Everyone sees changes live — planning trips has never felt this smooth.
            </p>
          </div>
          <div className="order-1 md:order-2 intersect-once intersect:motion-preset-slide-left intersect:motion-duration-700">
            <ShowcaseVisual variant="collaborate" />
          </div>
        </div>
      </div>
    </section>
  );
}
