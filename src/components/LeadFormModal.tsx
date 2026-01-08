
import React, { useState } from 'react';

interface LeadFormModalProps {
  onClose: () => void;
}

const LeadFormModal: React.FC<LeadFormModalProps> = ({ onClose }) => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Real implementation would send data here
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
        onClick={onClose}
      ></div>
      <div className="relative bg-white w-full max-w-lg rounded-3xl shadow-2xl overflow-hidden">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-600"
        >
          <i className="fas fa-times text-xl"></i>
        </button>

        {!submitted ? (
          <div className="p-8 sm:p-12">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-chart-pie text-2xl"></i>
              </div>
              <h2 className="text-2xl font-bold text-slate-900">Get Your Free SEO Audit</h2>
              <p className="text-slate-500 mt-2">See exactly why you're missing out on local jobs.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-1">Company Name</label>
                <input required type="text" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none" placeholder="e.g. Smith & Sons Plumbing" />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-1">Postcode / Target Area</label>
                <input required type="text" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none" placeholder="e.g. Manchester M1" />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-1">Email Address</label>
                <input required type="email" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none" placeholder="you@company.co.uk" />
              </div>
              <button className="w-full py-4 bg-blue-600 text-white rounded-xl font-bold text-lg hover:bg-blue-700 transition-all shadow-lg shadow-blue-200">
                Send My Free Report
              </button>
              <p className="text-[10px] text-center text-slate-400 mt-4 uppercase font-bold tracking-widest">
                <i className="fas fa-lock mr-1"></i> No spam. 100% Secure.
              </p>
            </form>
          </div>
        ) : (
          <div className="p-12 text-center">
            <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <i className="fas fa-check text-3xl"></i>
            </div>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Request Received!</h2>
            <p className="text-slate-600 mb-8">One of our specialists is manually reviewing your town's search competition. You'll hear from us within 24 hours.</p>
            <button 
              onClick={onClose}
              className="px-8 py-3 border-2 border-slate-200 rounded-xl font-bold text-slate-600 hover:bg-slate-50 transition-colors"
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default LeadFormModal;
