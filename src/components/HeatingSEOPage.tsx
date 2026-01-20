import React from 'react';

const HeatingSEOPage: React.FC = () => {
  return (
    <div className="pt-20 bg-white">
      {/* Targeted Hero */}
      <section className="bg-slate-900 py-16 md:py-24 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 opacity-10 pointer-events-none">
           <i className="fas fa-fire text-[20rem] translate-x-1/2 -translate-y-1/4"></i>
        </div>
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-7xl font-black mb-6 leading-tight">
            SEO for <span className="text-blue-500">Heating Engineers</span> & Boiler Specialists
          </h1>
          <p className="text-lg md:text-2xl text-slate-400 max-w-4xl mx-auto mb-10 leading-relaxed">
            Dominating the UK search results for high-value boiler swaps, ASHP installs, and emergency central heating repairs. Move beyond "leads" and own your local market.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="/get-started/"
              className="px-10 py-5 bg-blue-600 text-white rounded-2xl font-black text-xl hover:bg-blue-700 transition-all shadow-2xl shadow-blue-500/20"
            >
              Get Your Ranking Blueprint
            </a>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <div className="bg-slate-100 py-6 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale">
          <span className="font-bold flex items-center gap-2"><i className="fas fa-check-circle"></i> Worcester Bosch Accredited</span>
          <span className="font-bold flex items-center gap-2"><i className="fas fa-check-circle"></i> Vaillant Specialist</span>
          <span className="font-bold flex items-center gap-2"><i className="fas fa-check-circle"></i> Baxi Approved</span>
          <span className="font-bold flex items-center gap-2"><i className="fas fa-check-circle"></i> Viessmann Trained</span>
        </div>
      </div>

      {/* The Meat: Deep Content Section */}
      <section className="py-20 max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-8">Why General SEO Agencies Fail Heating Engineers</h2>
            <div className="prose prose-slate max-w-none text-slate-600 space-y-6 text-lg leading-relaxed">
              <p>
                Most SEO agencies focus on "traffic." But for a UK heating engineer, 10,000 visitors looking for "how to bleed a radiator" won't pay the mortgage. You need customers looking for <strong>"New Boiler Manchester"</strong> or <strong>"Air Source Heat Pump Installers near me."</strong>
              </p>
              <p>
                At PlumberSEO, we understand the technical nuances of your industry. We know that a <strong>Landlord Gas Safety Certificate (CP12)</strong> is a repeat business goldmine, and that <strong>Powerflushing</strong> is a high-margin service that needs specific local targeting.
              </p>
              <div className="bg-blue-50 p-6 rounded-2xl border-l-4 border-blue-600 my-8">
                <h4 className="text-blue-900 font-bold mb-2">Technical Keyword Targeting:</h4>
                <p className="text-sm">We don't just target "Heating Engineer." We optimize for: Boiler Replacements, G3 Unvented Cylinder Services, Underfloor Heating Design, SMART Thermostat Installs, and Renewable Energy Upgrades (MCS Certified searches).</p>
              </div>
            </div>
          </div>
          <div className="bg-slate-50 p-8 rounded-[2.5rem] border border-slate-200 shadow-inner">
            <h3 className="text-2xl font-black mb-6">Our 3-Pillar Ranking Strategy</h3>
            <div className="space-y-8">
              <div className="flex gap-5">
                <div className="bg-white w-12 h-12 rounded-xl flex items-center justify-center shadow-sm shrink-0 font-black text-blue-600">01</div>
                <div>
                  <h4 className="font-bold text-slate-900 text-lg mb-1">Local Maps Domination</h4>
                  <p className="text-sm text-slate-500">We optimize your Google Business Profile to trigger for "Emergency Heating" searches within a 15-mile radius of your base.</p>
                </div>
              </div>
              <div className="flex gap-5">
                <div className="bg-white w-12 h-12 rounded-xl flex items-center justify-center shadow-sm shrink-0 font-black text-blue-600">02</div>
                <div>
                  <h4 className="font-bold text-slate-900 text-lg mb-1">Authority Backlinks</h4>
                  <p className="text-sm text-slate-500">We earn links from trade directories and UK construction blogs, signaling to Google that you are a trusted local authority.</p>
                </div>
              </div>
              <div className="flex gap-5">
                <div className="bg-white w-12 h-12 rounded-xl flex items-center justify-center shadow-sm shrink-0 font-black text-blue-600">03</div>
                <div>
                  <h4 className="font-bold text-slate-900 text-lg mb-1">High-Intent Service Pages</h4>
                  <p className="text-sm text-slate-500">Individual pages for Combi-Swaps, System Boilers, and Boiler Finance—designed to convert visitors into phone calls.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* New Section: Topical Authority */}
      <section className="bg-slate-900 py-24 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black mb-6">Mastering the "Near Me" Economy</h2>
            <p className="text-slate-400 max-w-3xl mx-auto">UK customers rarely search for national firms. They want a local heating specialist they can trust. Here is how we make you that person.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="border border-white/10 p-6 rounded-2xl hover:bg-white/5 transition-colors">
              <i className="fas fa-map-marked-alt text-blue-500 text-3xl mb-4"></i>
              <h4 className="font-bold text-xl mb-3 text-white">NAP Consistency</h4>
              <p className="text-slate-400 text-sm">Ensuring your Name, Address, and Phone Number are identical across Checkatrade, Yell, and Google.</p>
            </div>
            <div className="border border-white/10 p-6 rounded-2xl hover:bg-white/5 transition-colors">
              <i className="fas fa-mobile-alt text-blue-500 text-3xl mb-4"></i>
              <h4 className="font-bold text-xl mb-3 text-white">Mobile-First UI</h4>
              <p className="text-slate-400 text-sm">90% of emergency heating searches happen on a mobile. Your site must be lightning fast.</p>
            </div>
            <div className="border border-white/10 p-6 rounded-2xl hover:bg-white/5 transition-colors">
              <i className="fas fa-star-half-alt text-blue-500 text-3xl mb-4"></i>
              <h4 className="font-bold text-xl mb-3 text-white">Review Schema</h4>
              <p className="text-slate-400 text-sm">We implement code that shows your 5-star ratings directly in the Google search results.</p>
            </div>
            <div className="border border-white/10 p-6 rounded-2xl hover:bg-white/5 transition-colors">
              <i className="fas fa-search-plus text-blue-500 text-3xl mb-4"></i>
              <h4 className="font-bold text-xl mb-3 text-white">Long-Tail Targeting</h4>
              <p className="text-slate-400 text-sm">Ranking for specific boiler error codes to catch customers at the exact moment they need a repair.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Content for Ranking */}
      <section className="py-20 max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-black mb-8 text-slate-900">How We Outrank Your Local Competition</h2>
        <div className="prose prose-blue max-w-none text-slate-600">
          <h3 className="text-slate-900 font-bold text-xl mt-8">1. Technical Heating SEO Audit</h3>
          <p>We start by fixing the "leaks" in your website. Broken links, slow loading images, and confusing navigation are the SEO equivalent of a leaking radiator—they drain your performance. We ensure your site is built on a "Trade-Turbo" framework optimized for Core Web Vitals.</p>
          
          <h3 className="text-slate-900 font-bold text-xl mt-8">2. Trade-Specific Content Writing</h3>
          <p>Generic content won't rank in 2025. We produce high-quality articles on topics like <em>"The Cost of New Boiler Installation in [Your City] 2025"</em> or <em>"Air Source Heat Pump vs Combi: Which is right for your home?"</em>. This establishes you as the expert before the customer even picks up the phone.</p>
          
          <h3 className="text-slate-900 font-bold text-xl mt-8">3. Local Citation Building</h3>
          <p>We submit your business to the UK's most authoritative trade directories. This isn't just for traffic—it's to build a "web of trust" that Google recognizes, confirming that you are a legitimate, licensed heating business operating in your target area.</p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-blue-600 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight">Secure Your Service Area Before Your Competitor Does</h2>
          <p className="text-blue-100 text-xl mb-12">We operate an exclusivity policy. Once we partner with a heating engineer in your town, we close the door to your competitors.</p>
          <a 
            href="/get-started/"
            className="inline-block px-12 py-6 bg-white text-blue-600 rounded-2xl font-black text-2xl hover:scale-105 transition-transform shadow-2xl"
          >
            Check My Postcode Now
          </a>
        </div>
      </section>
    </div>
  );
};

export default HeatingSEOPage;
