import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="pt-24 pb-12 md:pt-32 md:pb-20 px-4 bg-white relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute top-0 right-0 w-full lg:w-1/2 h-full bg-blue-50 opacity-50 skew-x-0 lg:skew-x-12 transform origin-right -z-10"></div>
      
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div className="text-center lg:text-left">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs md:text-sm font-bold mb-6">
            <span className="flex h-2 w-2 rounded-full bg-blue-600 animate-pulse"></span>
            #1 SEO Agency for UK Plumbers
          </div>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight mb-6">
            The SEO Agency for <span className="text-blue-600">Plumbers & Heating</span> Specialists.
          </h1>
          <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed">
            Stop wasting money on shared leads. We help UK plumbing businesses rank #1 for the jobs you actually want—from emergency call-outs to full boiler installs.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-10">
            <a 
              href="/get-started/"
              className="w-full sm:w-auto px-8 py-4 bg-blue-600 text-white rounded-xl font-bold text-lg hover:bg-blue-700 transition-all shadow-xl shadow-blue-200 flex items-center justify-center gap-2"
            >
              Get My Free SEO Audit <i className="fas fa-arrow-right"></i>
            </a>
            <div className="flex items-center gap-3 px-4 py-2 border border-slate-200 rounded-xl bg-slate-50">
              <div className="flex -space-x-2">
                {[1, 2, 3].map(i => (
                  <img key={i} className="w-8 h-8 rounded-full border-2 border-white" src={`https://picsum.photos/seed/${i+10}/100/100`} alt={`Satisfied UK plumber client ${i}`} loading="lazy" />
                ))}
              </div>
              <span className="text-xs md:text-sm font-medium text-slate-600">Trusted by 200+ UK Plumbers</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
            <div className="flex items-center justify-center lg:justify-start gap-2">
              <i className="fas fa-check-circle text-green-500"></i>
              <span className="text-xs md:text-sm font-semibold text-slate-700">No Long Contracts</span>
            </div>
            <div className="flex items-center justify-center lg:justify-start gap-2">
              <i className="fas fa-check-circle text-green-500"></i>
              <span className="text-xs md:text-sm font-semibold text-slate-700">Google Maps Experts</span>
            </div>
            <div className="flex items-center justify-center lg:justify-start gap-2">
              <i className="fas fa-check-circle text-green-500"></i>
              <span className="text-xs md:text-sm font-semibold text-slate-700">UK-Based Team</span>
            </div>
          </div>
        </div>

        <div className="relative mt-8 lg:mt-0 px-4 md:px-0">
          <div className="bg-slate-900 rounded-2xl md:rounded-3xl p-2 md:p-4 shadow-2xl relative max-w-md mx-auto lg:max-w-none">
             <div className="bg-white rounded-xl md:rounded-2xl overflow-hidden">
                <div className="p-3 md:p-4 bg-slate-100 flex items-center justify-between">
                  <div className="flex gap-1.5 md:gap-2">
                    <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-red-400"></div>
                    <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-green-400"></div>
                  </div>
                  <div className="text-[10px] md:text-xs font-mono text-slate-400 italic truncate ml-2">google.co.uk/search?q=plumber+near+me</div>
                </div>
                <div className="p-4 md:p-6 space-y-4 md:space-y-6">
                  <div className="border rounded-xl p-3 md:p-4 bg-white shadow-sm ring-2 ring-blue-500">
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="text-blue-600 font-bold text-base md:text-lg underline">Your Business Name</div>
                        <div className="flex items-center gap-1 text-yellow-400 my-1 text-xs md:text-sm">
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star text-slate-300"></i>
                          <span className="text-slate-400 text-[10px] md:text-xs ml-1">(48 reviews)</span>
                        </div>
                        <div className="text-slate-500 text-[10px] md:text-sm">Plumber in Your Town • Open 24h</div>
                      </div>
                      <div className="bg-blue-50 text-blue-600 p-2 rounded-lg">
                        <i className="fas fa-phone-alt text-sm md:text-base"></i>
                      </div>
                    </div>
                  </div>
                  <div className="border rounded-xl p-3 md:p-4 bg-slate-50 opacity-50">
                    <div className="w-1/2 h-3 md:h-4 bg-slate-300 rounded mb-2"></div>
                    <div className="w-3/4 h-2 md:h-3 bg-slate-200 rounded"></div>
                  </div>
                </div>
             </div>
          </div>
          <div className="absolute -bottom-4 -left-2 md:-bottom-6 md:-left-6 bg-white p-3 md:p-4 rounded-xl md:rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3 md:gap-4 animate-bounce">
            <div className="bg-green-100 p-2 md:p-3 rounded-lg md:rounded-xl">
              <i className="fas fa-chart-line text-green-600 text-lg md:text-xl"></i>
            </div>
            <div>
              <div className="text-xl md:text-2xl font-black text-slate-900">+340%</div>
              <div className="text-[8px] md:text-xs text-slate-500 uppercase tracking-widest font-bold">Search Ranking Growth</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
