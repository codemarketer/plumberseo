import React from 'react';

const AuthorityResources: React.FC = () => {
  const articles = [
    {
      title: "The 2025 Plumber Keyword List",
      desc: "Exactly what your customers are typing into Google this year.",
      type: "Free Guide",
      icon: "fa-book-open"
    },
    {
      title: "Why Lead Sites are failing Plumbers",
      desc: "How shared leads kill your profit margins and what to do instead.",
      type: "Opinion",
      icon: "fa-exclamation-triangle"
    },
    {
      title: "Google Maps for Plumbers",
      desc: "Step-by-step to appearing in the local '3-pack' for your town.",
      type: "Tutorial",
      icon: "fa-map-marked-alt"
    }
  ];

  return (
    <section className="py-24 bg-slate-50" id="resources">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">The Plumbing SEO Library</h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">We've spent thousands of hours testing SEO strategies on plumbing & heating sites so you don't have to. Read our latest findings.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {articles.map((art, i) => (
            <div key={i} className="bg-white p-8 rounded-3xl border border-slate-200 hover:border-blue-300 transition-colors group">
              <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center">
                  <i className={`fas ${art.icon} text-xl`}></i>
                </div>
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 px-3 py-1 bg-slate-50 rounded-full">{art.type}</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">{art.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-6">{art.desc}</p>
              <a href="#" className="inline-flex items-center text-sm font-bold text-slate-900 hover:gap-3 transition-all">
                Read Article <i className="fas fa-arrow-right ml-2 text-blue-600"></i>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AuthorityResources;
