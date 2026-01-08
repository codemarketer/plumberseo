import React from 'react';

const SocialProof: React.FC = () => {
  return (
    <section className="py-8 md:py-12 border-y border-slate-100 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <p className="text-center text-slate-400 font-bold uppercase tracking-widest text-[10px] md:text-xs mb-8 md:mb-10">Trusted by Plumbers & Heating Specialists across the UK</p>
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12 grayscale opacity-60">
           <div className="flex items-center gap-2 font-black text-lg md:text-2xl text-slate-500">
             <i className="fas fa-gas-pump"></i> GAS SAFE
           </div>
           <div className="flex items-center gap-2 font-bold text-lg md:text-2xl text-slate-500">
             CIPHE <span className="text-[10px] md:text-xs font-normal">Approved</span>
           </div>
           <div className="flex items-center gap-2 font-black text-lg md:text-2xl text-slate-500 italic">
             WORCESTER <span className="text-[10px] md:text-xs not-italic">Bosch</span>
           </div>
           <div className="flex items-center gap-2 font-bold text-lg md:text-2xl text-slate-500">
             <i className="fas fa-wrench"></i> APHC
           </div>
           <div className="flex items-center gap-2 font-bold text-lg md:text-2xl text-slate-500">
             <i className="fas fa-shield-alt"></i> CHECKA<span className="text-blue-500">TRADE</span>
           </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
