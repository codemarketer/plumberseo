import React from 'react';

const PainPoints: React.FC = () => {
  const pains = [
    {
      icon: "fa-search-location",
      title: "Invisible Locally?",
      description: "Tired of being on page 5 while your competitors take all the emergency call-outs in your town?"
    },
    {
      icon: "fa-money-bill-wave",
      title: "Expensive Lead Sites?",
      description: "Fed up with paying Checkatrade or MyBuilder for leads that are shared with 5 other plumbers?"
    },
    {
      icon: "fa-tools",
      title: "Wrong Kind of Jobs?",
      description: "Are you only getting tiny repair jobs instead of high-margin boiler installs and full bathroom refits?"
    },
    {
      icon: "fa-user-clock",
      title: "Dry Spells?",
      description: "Waiting for the phone to ring during the summer? We build a consistent pipeline for year-round work."
    }
  ];

  return (
    <section className="py-24 bg-slate-50" id="results">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Why Plumbers Struggle with SEO</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">General agencies don't understand the difference between a leaky tap and a combi-boiler. We do. We speak your language and know what your customers are searching for.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pains.map((pain, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-50 text-blue-600 flex items-center justify-center rounded-xl mb-6">
                <i className={`fas ${pain.icon} text-xl`}></i>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{pain.title}</h3>
              <p className="text-slate-600 leading-relaxed">{pain.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PainPoints;
