import React, { useState } from 'react';

const FAQ: React.FC = () => {
  const faqs = [
    {
      q: "How long until I see more calls?",
      a: "Most plumbers see an increase in Google Maps impressions within 45 days. Major organic rankings typically take 3-6 months depending on local competition."
    },
    {
      q: "Do you only work with one plumber per town?",
      a: "Yes. Exclusivity is key. We cannot rank two plumbers in the same town at #1, so we only partner with one business per service area."
    },
    {
      q: "What's the difference between you and Checkatrade?",
      a: "Checkatrade owns the lead and sells it to you and your competitors. We build your OWN asset. When we're done, you own the top spot on Google and keep 100% of the profit."
    },
    {
      q: "Do I need a new website?",
      a: "Not necessarily. We can optimize your existing site, or build you a new high-converting site if your current one is scaring customers away."
    }
  ];

  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="py-24 bg-slate-50" id="faq">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-slate-900">Plumbers' Top Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
              <button 
                onClick={() => setOpenIdx(openIdx === i ? null : i)}
                className="w-full p-6 text-left flex justify-between items-center hover:bg-slate-50 transition-colors"
              >
                <span className="font-bold text-slate-800 text-lg">{faq.q}</span>
                <i className={`fas fa-chevron-down text-slate-400 transition-transform ${openIdx === i ? 'rotate-180' : ''}`}></i>
              </button>
              {openIdx === i && (
                <div className="p-6 pt-0 text-slate-600 leading-relaxed border-t border-slate-100">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
