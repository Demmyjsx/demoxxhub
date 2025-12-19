import { homeContent } from "@/constants/siteData";

export default function ServicesGrid() {
  return (
    <section 
      className="relative py-24 bg-cover bg-center bg-no-repeat"
      style={{ 
        // Lighter overlay: changed from 0.75/0.55 to 0.5/0.3 to reveal much more of the image
        backgroundImage: `linear-gradient(to bottom, rgba(15, 23, 42, 0.5), rgba(15, 23, 42, 0.3), rgba(15, 23, 42, 0.5)), url('/Visionmission.jpg')` 
      }}
    >
      {/* Background layer removed to maximize image clarity */}
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight drop-shadow-lg">
            Our <span className="text-orange-500">Services</span>
          </h2>
          <p className="text-white mt-4 max-w-xl mx-auto font-bold drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
            Comprehensive solutions designed to propel your business forward.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {homeContent.services.map((service, i) => (
            <div
              key={i}
              className="group relative rounded-3xl border border-white/30 bg-slate-900/40 p-8 shadow-2xl backdrop-blur-md transition-all duration-500 hover:border-orange-500 hover:-translate-y-2 overflow-hidden cursor-default"
            >
              <div className="relative z-10">
                {/* Title: White, turns Orange on group hover */}
                <h3 className="font-bold text-2xl mb-4 text-white group-hover:text-orange-500 transition-colors duration-300 drop-shadow-md">
                  {service.title}
                </h3>
                
                {/* Description: White, turns Orange on group hover */}
                <p className="text-white leading-relaxed text-sm font-medium group-hover:text-orange-400 transition-colors duration-300 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
                  {service.description}
                </p>
                
                {/* Decorative Accent Bar */}
                <div className="w-12 h-1 bg-orange-500 mt-6 rounded-full group-hover:w-24 transition-all duration-500" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}