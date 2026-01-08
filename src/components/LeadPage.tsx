import React, { useState } from 'react';

const LeadPage: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    try {
      const response = await fetch('https://formspree.io/f/xbdlnvlb', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        setSubmitted(true);
      } else {
        alert('Something went wrong. Please try again.');
      }
    } catch (error) {
      alert('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-24 pb-20 min-h-screen bg-slate-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Form Content */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/60 overflow-hidden border border-slate-100">
              {!submitted ? (
                <div className="p-8 md:p-12">
                  <div className="mb-10">
                    <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
                      Get Your Free <span className="text-blue-600">Growth Blueprint</span>
                    </h1>
                    <p className="text-slate-500 text-lg">
                      Enter your details below. We'll manually analyze your local competitors and show you exactly how to overtake them.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-bold text-slate-700 mb-2">Contact Name</label>
                        <input 
                          required 
                          type="text" 
                          name="contact_name"
                          className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-blue-500 outline-none transition-all" 
                          placeholder="e.g. John Doe" 
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-slate-700 mb-2">Business Name</label>
                        <input 
                          required 
                          type="text" 
                          name="business_name"
                          className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-blue-500 outline-none transition-all" 
                          placeholder="e.g. Bristol Boiler Pros" 
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">Work Email Address</label>
                      <input 
                        required 
                        type="email" 
                        name="email"
                        className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-blue-500 outline-none transition-all" 
                        placeholder="john@yourbusiness.co.uk" 
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-bold text-slate-700 mb-2">Main Service Area (Town/City)</label>
                        <input 
                          required 
                          type="text" 
                          name="service_area"
                          className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-blue-500 outline-none transition-all" 
                          placeholder="e.g. Manchester" 
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-slate-700 mb-2">Approx. Monthly Revenue</label>
                        <select 
                          name="monthly_revenue"
                          defaultValue=""
                          required
                          className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                        >
                          <option value="" disabled>Select your revenue range</option>
                          <option value="Under £10k">Under £10k</option>
                          <option value="£10k - £30k">£10k - £30k</option>
                          <option value="£30k - £100k">£30k - £100k</option>
                          <option value="£100k+">£100k+</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">What is your biggest frustration right now?</label>
                      <textarea 
                        rows={3} 
                        name="frustration"
                        className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-blue-500 outline-none transition-all" 
                        placeholder="e.g. Not enough boiler installs, spending too much on lead sites..."
                      ></textarea>
                    </div>

                    <div className="pt-4">
                      <button 
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-5 bg-blue-600 text-white rounded-2xl font-black text-xl hover:bg-blue-700 transition-all shadow-xl shadow-blue-200 flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? (
                          <>
                            <i className="fas fa-spinner fa-spin"></i> Sending...
                          </>
                        ) : (
                          <>
                            Claim My Free Audit <i className="fas fa-rocket"></i>
                          </>
                        )}
                      </button>
                      <div className="flex items-center justify-center gap-3 mt-8">
                        <div className="flex items-center gap-2 px-3 py-1.5 bg-slate-100 rounded-lg border border-slate-200">
                           <i className="fas fa-gas-pump text-slate-400"></i>
                           <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Gas Safe Standard</span>
                        </div>
                        <div className="h-4 w-px bg-slate-200"></div>
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Certified UK Strategy</span>
                      </div>
                    </div>
                  </form>
                </div>
              ) : (
                <div className="p-16 text-center">
                  <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8 animate-bounce">
                    <i className="fas fa-check text-4xl"></i>
                  </div>
                  <h2 className="text-4xl font-black text-slate-900 mb-4">You're On The List!</h2>
                  <p className="text-slate-500 text-lg max-w-md mx-auto mb-10 leading-relaxed">
                    Our team is currently pulling the data for your service area. We'll send your custom video audit to your email within 24 business hours.
                  </p>
                  <a 
                    href="/"
                    className="px-10 py-4 bg-slate-900 text-white rounded-2xl font-bold hover:bg-slate-800 transition-all inline-block"
                  >
                    Back to Home
                  </a>
                </div>
              )}
            </div>
          </div>

          {/* Sidebar Proof */}
          <div className="space-y-8">
            <div className="bg-blue-600 rounded-3xl p-8 text-white shadow-xl shadow-blue-200">
              <h3 className="text-xl font-bold mb-6">Why Plumbers Choose Us:</h3>
              <ul className="space-y-5">
                <li className="flex gap-4">
                  <div className="bg-white/20 p-2 h-fit rounded-lg"><i className="fas fa-lock"></i></div>
                  <div>
                    <div className="font-bold">Exclusive Area Rights</div>
                    <div className="text-sm text-blue-100">We only work with ONE plumber per town. No conflicts.</div>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="bg-white/20 p-2 h-fit rounded-lg"><i className="fas fa-pound-sign"></i></div>
                  <div>
                    <div className="font-bold">High-ROI Focus</div>
                    <div className="text-sm text-blue-100">We prioritize £3,000+ boiler installs over £80 tap repairs.</div>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="bg-white/20 p-2 h-fit rounded-lg"><i className="fas fa-calendar-check"></i></div>
                  <div>
                    <div className="font-bold">No 12-Month Contracts</div>
                    <div className="text-sm text-blue-100">Our results keep you here, not a legal document.</div>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm">
              <div className="flex items-center gap-1 text-yellow-400 mb-4">
                {[1,2,3,4,5].map(i => <i key={i} className="fas fa-star"></i>)}
              </div>
              <p className="text-slate-600 italic mb-6 text-sm">
                "We were spending £1,500/month on Google Ads with little to show for it. PlumberSEO got us to #1 on Maps in 3 months. Our phone hasn't stopped ringing for boiler installs."
              </p>
              <div className="flex items-center gap-4">
                <img src="https://picsum.photos/seed/plumb1/100/100" className="w-10 h-10 rounded-full border-2 border-slate-100" alt="Dave Harrison - Harrison Heating Leeds testimonial" loading="lazy" />
                <div>
                  <div className="font-bold text-slate-900 text-xs">Dave Harrison</div>
                  <div className="text-[10px] text-slate-400">Harrison Heating, Leeds</div>
                </div>
              </div>
            </div>

            <div className="p-6 border-2 border-dashed border-slate-200 rounded-3xl text-center">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">UK Support Hours</p>
              <p className="text-slate-600 font-semibold">Mon - Fri: 9am - 5:30pm</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeadPage;
