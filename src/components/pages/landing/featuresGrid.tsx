import { Map, Users, Compass, Sparkles } from "lucide-react";

const features = [
  {
    icon: Map,
    title: "Smart Route Planning",
    description:
      "Organize your destinations into the perfect itinerary. Drag, drop, and let the map come alive.",
    gradient: "from-blue-500 to-sky-400",
    iconBg: "bg-blue-500",
    decorative: (
      <svg className="absolute right-0 top-0 w-24 h-24 opacity-[0.15]" viewBox="0 0 96 96" fill="white">
        <circle cx="72" cy="24" r="40" />
      </svg>
    ),
  },
  {
    icon: Users,
    title: "Real-time Collaboration",
    description:
      "Plan together with friends. See changes live, vote on spots, and build trips as a crew.",
    gradient: "from-sky-400 to-blue-400",
    iconBg: "bg-sky-500",
    decorative: (
      <svg className="absolute right-2 top-0 w-20 h-20 opacity-[0.15]" viewBox="0 0 80 80" fill="white">
        <path d="M40,0 L80,40 L40,80 L0,40 Z" />
      </svg>
    ),
  },
  {
    icon: Compass,
    title: "Discover Locations",
    description:
      "Browse anime-inspired destinations and hidden gems curated by fellow travelers.",
    gradient: "from-orange-400 to-amber-400",
    iconBg: "bg-orange-500",
    decorative: (
      <svg className="absolute right-0 top-0 w-28 h-16 opacity-[0.15]" viewBox="0 0 112 64" fill="white">
        <ellipse cx="80" cy="20" rx="50" ry="30" />
      </svg>
    ),
  },
  {
    icon: Sparkles,
    title: "One-Tap Optimization",
    description:
      "Messy itinerary? One tap to auto-sort your route for the smoothest journey possible.",
    gradient: "from-amber-400 to-orange-500",
    iconBg: "bg-amber-500",
    decorative: (
      <svg className="absolute right-1 top-0 w-20 h-20 opacity-[0.15]" viewBox="0 0 80 80" fill="white">
        <polygon points="40,0 50,30 80,35 55,55 65,80 40,65 15,80 25,55 0,35 30,30" />
      </svg>
    ),
  },
];

export default function FeaturesGrid() {
  return (
    <section className="py-20 px-6 md:px-8 bg-slate-50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16 intersect-once intersect:motion-opacity-in-0 intersect:motion-translate-y-in-[8px] intersect:motion-duration-500">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Everything You Need to Explore
          </h2>
          <p className="text-lg text-slate-500 max-w-xl mx-auto">
            From planning to adventure, Tabime has you covered.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="intersect-once intersect:motion-preset-blur-up"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="group bg-white rounded-2xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 overflow-hidden">
                  {/* Gradient header strip */}
                  <div
                    className={`relative h-28 bg-gradient-to-r ${feature.gradient} overflow-hidden`}
                  >
                    {feature.decorative}
                    {/* Wave bottom edge */}
                    <svg
                      className="absolute bottom-0 left-0 w-full opacity-[0.2]"
                      viewBox="0 0 400 24"
                      fill="white"
                      preserveAspectRatio="none"
                    >
                      <path d="M0,12 C100,24 200,0 300,12 C350,18 380,6 400,12 L400,24 L0,24 Z" />
                    </svg>
                  </div>

                  {/* Content */}
                  <div className="p-6 pt-0 -mt-6 relative">
                    <div
                      className={`w-12 h-12 rounded-xl ${feature.iconBg} flex items-center justify-center shadow-md mb-4`}
                    >
                      <Icon className="w-6 h-6 text-white" strokeWidth={1.8} />
                    </div>
                    <h3 className="text-lg font-bold text-slate-800 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-slate-600 text-base leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
