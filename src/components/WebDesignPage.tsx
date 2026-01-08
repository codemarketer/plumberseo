import React from 'react';

const WebDesignPage: React.FC = () => {
  const techSpecs = [
    { label: "Core Web Vitals", value: "Green/Optimized" },
    { label: "Hosting", value: "UK-Based (London)" },
    { label: "Security", value: "SSL / HTTPS Encrypted" },
    { label: "CMS", value: "SEO-Friendly WordPress" }
  ];

  return (
    <div className="pt-20 md:pt-24 pb-0 bg-white">
      {/* Header Section */}
      <section className="max-w-7xl mx-auto px-4 py-12 md:py-16 text-center">
        <span className="block text-blue-600 font-black uppercase tracking-widest text-xs md:text-sm mb-4">Specialist UK Web Design</span>
        <h1 className="text-3xl md:text-6xl font-black text-slate-900 mb-6 leading-tight">
          Websites That Work As <br className="hidden md:block" /> Hard As Your <span className="text-blue-600">Combi-Boilers.</span>
        </h1>
        <p className="text-base md:text-xl text-slate-600 max-w-3xl mx-auto mb-8 md:mb-10 leading-relaxed px-2">
          In the plumbing trade, your website isn't a brochure—it's your most important employee. We build high-speed, Gas Safe branded sites designed to dominate your local patch.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-stretch sm:items-center gap-4 px-4 sm:px-0">
          <a 
            href="/get-started/"
            className="px-6 md:px-10 py-4 md:py-5 bg-blue-600 text-white rounded-xl md:rounded-2xl font-black text-lg md:text-xl hover:bg-blue-700 transition-all shadow-xl shadow-blue-200 text-center"
          >
            Get My New Website Quote
          </a>
          <div className="flex items-center justify-center gap-2 px-6 py-4 bg-slate-50 rounded-xl md:rounded-2xl border border-slate-200">
            <i className="fas fa-shield-check text-green-500"></i>
            <span className="text-xs md:text-sm font-bold text-slate-700 uppercase tracking-tight">GDPR & UK Compliant</span>
          </div>
        </div>
      </section>

      {/* Deep Dive: Technical SEO for Plumbers */}
      <section className="bg-slate-900 py-16 md:py-24 text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
            <div>
              <h2 className="text-2xl md:text-4xl font-black mb-6">Technical Infrastructure Designed for <span className="text-blue-400">Google Ranking</span></h2>
              <p className="text-slate-400 mb-8 leading-relaxed text-sm md:text-base">
                Google's algorithm prioritizes user experience. If your site takes 5 seconds to load on a 4G signal in a customer's basement, you lose the job. Our "Trade-Turbo" stack ensures:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {techSpecs.map((spec, i) => (
                  <div key={i} className="p-4 bg-white/5 border border-white/10 rounded-xl">
                    <div className="text-[10px] text-blue-400 font-black uppercase tracking-widest mb-1">{spec.label}</div>
                    <div className="font-bold text-white text-sm md:text-base">{spec.value}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative mt-8 lg:mt-0">
              <div className="bg-blue-600/20 absolute inset-0 blur-3xl rounded-full"></div>
              <div className="bg-slate-800 border border-white/10 p-6 md:p-8 rounded-2xl md:rounded-3xl shadow-2xl relative z-10">
                <h4 className="font-bold mb-6 flex items-center gap-2 text-base md:text-lg">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                  Local Optimization Score: 98/100
                </h4>
                <div className="space-y-4 md:space-y-5">
                  {[
                    "Automatic Service Area Pages",
                    "Click-to-Call Emergency Header",
                    "Review Feed Integration (Checkatrade/Google)",
                    "Gas Safe & NAPIT Logo Protection"
                  ].map((text, i) => (
                    <div key={i} className="flex items-start gap-3 text-xs md:text-sm text-slate-300">
                      <i className="fas fa-check-circle text-blue-400 mt-0.5"></i>
                      <span>{text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Sections */}
      <section className="bg-slate-50 py-16 md:py-24 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-4xl font-black text-slate-900 mb-4">Three Packages for Every Stage</h2>
          <p className="text-slate-500 text-sm md:text-base">From local legends to nationwide fleets, we have the right build for you.</p>
        </div>
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { 
              name: "The Soloist", 
              price: "£97/mo", 
              focus: "Local Authority", 
              desc: "Perfect for 1-man bands wanting to look professional and win local emergency calls.",
              features: ["5 High-Conversion Pages", "Google Maps Setup", "Monthly Hosting"]
            },
            { 
              name: "The Growth Engine", 
              price: "£197/mo", 
              focus: "Boiler Installs", 
              desc: "Our most popular build. Focused on high-value boiler swaps and bathroom refits.",
              features: ["Unlimited Service Pages", "Review Automation", "Boiler Finance Calculator"]
            },
            { 
              name: "The Fleet Master", 
              price: "£497/mo", 
              focus: "Area Dominance", 
              desc: "Multi-location SEO and landing pages for businesses with multiple vans and postcodes.",
              features: ["Multi-City SEO Pages", "CRM Integration", "24/7 Priority Support"]
            }
          ].map((pkg, i) => (
            <div key={pkg.name} className={`p-8 rounded-[2rem] border transition-all flex flex-col ${i === 1 ? 'bg-white shadow-2xl border-blue-500 ring-4 ring-blue-500/10 lg:scale-105 z-10' : 'bg-white border-slate-200'}`}>
              <div className="mb-6">
                <span className="text-[10px] font-black uppercase tracking-widest text-blue-600 bg-blue-50 px-3 py-1 rounded-full">{pkg.focus}</span>
                <h3 className="text-2xl font-black text-slate-900 mt-4">{pkg.name}</h3>
                <div className="text-2xl md:text-3xl font-black text-slate-900 mt-2">{pkg.price} <span className="text-sm font-normal text-slate-400">+VAT</span></div>
              </div>
              <p className="text-slate-500 text-sm mb-8 flex-grow">{pkg.desc}</p>
              <ul className="space-y-4 mb-8">
                {pkg.features.map(f => (
                  <li key={f} className="flex items-center gap-3 text-xs md:text-sm font-medium text-slate-700">
                    <i className="fas fa-check text-green-500"></i> {f}
                  </li>
                ))}
              </ul>
              <a 
                href="/get-started/"
                className={`w-full py-4 rounded-xl font-bold transition-all text-sm md:text-base text-center block ${i === 1 ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-100' : 'bg-slate-100 text-slate-900 hover:bg-slate-200'}`}
              >
                Choose {pkg.name}
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ: SEO Authority Content */}
      <section className="py-16 md:py-24 max-w-4xl mx-auto px-4">
        <h2 className="text-2xl md:text-4xl font-black text-slate-900 mb-10 md:mb-12 text-center">UK Web Design FAQs</h2>
        <div className="space-y-8 md:space-y-10">
          <div>
            <h4 className="font-black text-slate-900 mb-3 text-lg md:text-xl">Do I own the website?</h4>
            <p className="text-slate-600 leading-relaxed text-sm md:text-base">
              Yes. Unlike many UK 'pay-monthly' agencies who lock you into a proprietary system you can never leave, we build on WordPress. This means you own your digital asset, your domain, and your data from day one.
            </p>
          </div>
          <div>
            <h4 className="font-black text-slate-900 mb-3 text-lg md:text-xl">Will it work for emergency call-outs?</h4>
            <p className="text-slate-600 leading-relaxed text-sm md:text-base">
              Absolutely. We implement "Emergency Mode" UX. This includes a prominent, thumb-friendly call button that stays fixed to the bottom of the screen on mobile, ensuring panicked customers can reach you in one tap.
            </p>
          </div>
          <div>
            <h4 className="font-black text-slate-900 mb-3 text-lg md:text-xl">Do you write the text (copywriting)?</h4>
            <p className="text-slate-600 leading-relaxed text-sm md:text-base">
              Yes. We don't expect you to spend your evenings writing about U-bends. Our UK team of trade copywriters handles all content, ensuring it's technically accurate (we know our Unvented Cylinders from our Combi-Boilers) and SEO-optimized.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Bottom */}
      <section className="max-w-5xl mx-auto px-4 pb-16 md:pb-24">
        <div className="bg-blue-600 rounded-[2rem] md:rounded-[3rem] p-8 md:p-12 text-center relative overflow-hidden shadow-2xl">
          <div className="relative z-10">
            <h2 className="text-2xl md:text-4xl font-black text-white mb-6">Built by Pros, For Pros.</h2>
            <p className="text-blue-100 mb-8 md:mb-10 text-base md:text-lg max-w-2xl mx-auto">Don't let a poorly designed website leak money. Launch a high-performance site that pays for itself in just 1-2 boiler installs.</p>
            <a 
              href="/get-started/"
              className="w-full sm:w-auto inline-block bg-white text-blue-600 px-8 md:px-10 py-4 md:py-5 rounded-xl md:rounded-2xl font-black text-lg md:text-xl hover:scale-105 transition-transform shadow-2xl"
            >
              Start My Web Build Today
            </a>
          </div>
          {/* Decorative icons for larger screens */}
          <i className="fas fa-wrench absolute -bottom-10 -left-10 text-white/5 text-[10rem] md:text-[15rem] -rotate-12 hidden sm:block"></i>
        </div>
      </section>
    </div>
  );
};

export default WebDesignPage;
