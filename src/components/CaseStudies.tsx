import React from 'react';

const CaseStudies: React.FC = () => {
  const cases = [
    {
      city: "Manchester",
      company: "Elite Heating Ltd",
      growth: "+240%",
      stat: "Monthly Leads",
      tags: ["Boiler Swaps", "Google Maps"],
      image: "https://images.unsplash.com/photo-1581244277943-fe4a9c777189?auto=format&fit=crop&w=400&q=80"
    },
    {
      city: "London",
      company: "24/7 Flow Plumbing",
      growth: "1st",
      stat: "On Google Maps",
      tags: ["Emergency Calls", "Local SEO"],
      image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=400&q=80"
    },
    {
      city: "Birmingham",
      company: "Brum Boiler Pros",
      growth: "£12k",
      stat: "Extra Revenue/mo",
      tags: ["PPC", "Web Design"],
      image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=400&q=80"
    }
  ];

  return (
    <section className="py-24 bg-white" id="results">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">Real Results for Heating & Plumbing Specialists</h2>
            <p className="text-slate-600 text-lg">We don't just track 'rankings'. We track the only metric that matters to your business: <span className="font-bold text-blue-600">Actual Phone Calls.</span></p>
          </div>
          <button className="text-blue-600 font-bold hover:underline">View All 50+ Case Studies <i className="fas fa-arrow-right ml-2"></i></button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {cases.map((c, i) => (
            <div key={i} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-3xl mb-6 shadow-lg h-64">
                <img src={c.image} alt={`${c.company} - SEO case study showing ${c.growth} ${c.stat.toLowerCase()} in ${c.city}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
                  <div>
                    <div className="text-blue-400 font-bold text-sm uppercase tracking-widest">{c.city}</div>
                    <div className="text-white font-bold text-xl">{c.company}</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md p-3 rounded-2xl border border-white/20 text-center">
                    <div className="text-white font-black text-xl">{c.growth}</div>
                    <div className="text-white/70 text-[10px] uppercase font-bold tracking-tighter">{c.stat}</div>
                  </div>
                </div>
              </div>
              <div className="flex gap-2">
                {c.tags.map(t => (
                  <span key={t} className="text-[10px] font-bold px-2 py-1 bg-slate-100 text-slate-500 rounded-md uppercase tracking-wider">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
