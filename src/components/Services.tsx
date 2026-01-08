import React from 'react';

const Services: React.FC = () => {
  const services = [
    {
      title: "Google Maps Domination",
      desc: "We get you in the 'Map Pack' (top 3 results) for local searches, where 70% of clicks go.",
      features: ["GMB Optimization", "Review Strategy", "Local Citations"]
    },
    {
      title: "Boiler Install Funnels",
      desc: "Targeted landing pages for boiler swaps and finance options that convert visitors into signed quotes.",
      features: ["PPC Management", "Conversion Copy", "Speed Optimization"]
    },
    {
      title: "Local Content King",
      desc: "We write articles about plumbing issues in your specific service area to build authority.",
      features: ["Blog Strategy", "Service Pages", "Schema Markup"]
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white" id="services">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <div className="mb-12 md:mb-16">
          <span className="text-blue-600 font-bold uppercase tracking-widest text-xs md:text-sm">Our Core SEO Services</span>
          <h2 className="text-2xl md:text-4xl font-bold text-slate-900 mt-2">SEO Solutions for Plumbing Businesses</h2>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
          {services.map((s, i) => (
            <div key={i} className="text-left p-6 md:p-10 rounded-2xl md:rounded-3xl border border-slate-100 bg-slate-50 flex flex-col h-full">
              <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-4">{s.title}</h3>
              <p className="text-sm md:text-base text-slate-600 mb-6 md:mb-8 flex-grow">{s.desc}</p>
              <ul className="space-y-3 md:space-y-4 mb-6 md:mb-8">
                {s.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-3 text-sm md:text-base text-slate-700 font-medium">
                    <i className="fas fa-check text-blue-600"></i> {f}
                  </li>
                ))}
              </ul>
              <a 
                href="/get-started/"
                className="w-full py-3 md:py-4 bg-white text-blue-600 border-2 border-blue-600 rounded-xl font-bold hover:bg-blue-600 hover:text-white transition-all text-sm md:text-base text-center block"
              >
                Learn More
              </a>
            </div>
          ))}
        </div>

        <div className="bg-blue-600 rounded-2xl md:rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
          <div className="relative z-10 max-w-2xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 leading-tight">Ready to hire a specialist Plumbing SEO Agency?</h3>
            <p className="text-blue-100 mb-8 md:mb-10 text-base md:text-lg">Download our "Plumber SEO Bible" or get a free custom ranking report for your town today.</p>
            <a 
              href="/get-started/"
              className="w-full sm:w-auto inline-block bg-white text-blue-600 px-8 md:px-10 py-4 md:py-5 rounded-xl md:rounded-2xl font-black text-lg md:text-xl hover:scale-105 transition-transform shadow-2xl"
            >
              Get My Free Ranking Report
            </a>
          </div>
          {/* Decorative icons */}
          <i className="fas fa-wrench absolute -bottom-10 -left-10 text-7xl md:text-9xl text-white/10 -rotate-12 hidden sm:block"></i>
          <i className="fas fa-fire absolute -top-10 -right-10 text-7xl md:text-9xl text-white/10 rotate-12 hidden sm:block"></i>
        </div>
      </div>
    </section>
  );
};

export default Services;
