import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white py-12 md:py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 mb-12 md:mb-16">
          <div className="sm:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-blue-600 p-1.5 rounded-lg">
                <i className="fas fa-faucet text-white text-xl"></i>
              </div>
              <span className="text-2xl font-extrabold tracking-tight">
                Plumber<span className="text-blue-500">SEO</span>.co.uk
              </span>
            </div>
            <p className="text-slate-400 max-w-sm mb-8 leading-relaxed text-sm md:text-base">
              We are a performance-driven SEO agency dedicated exclusively to the UK plumbing and heating industry. No fluff, just results for trade professionals.
            </p>
            <div className="flex gap-4">
              <a href="#" aria-label="Facebook" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 transition-colors">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" aria-label="Twitter" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 transition-colors">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" aria-label="LinkedIn" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 transition-colors">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-4 md:mb-6 text-lg">Services</h4>
            <ul className="space-y-3 md:space-y-4 text-slate-400 text-sm md:text-base">
              <li><a href="/get-started/" className="hover:text-blue-500 transition-colors">Local SEO Pack</a></li>
              <li><a href="/get-started/" className="hover:text-blue-500 transition-colors">Google Maps Domination</a></li>
              <li><a href="/heating-seo/" className="hover:text-blue-500 transition-colors">SEO for Heating Engineers</a></li>
              <li><a href="/web-design/" className="hover:text-blue-500 transition-colors font-semibold text-slate-300">High-Performance Web Design</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 md:mb-6 text-lg">Contact</h4>
            <ul className="space-y-3 md:space-y-4 text-slate-400 text-sm md:text-base">
              <li className="flex items-start gap-3">
                <i className="fas fa-envelope text-blue-500 mt-1"></i>
                <span className="break-all">hello@plumberseo.co.uk</span>
              </li>
              <li className="flex items-center gap-3">
                <i className="fas fa-phone text-blue-500"></i>
                020 8123 4567
              </li>
              <li className="flex items-start gap-3">
                <i className="fas fa-map-marker-alt text-blue-500 mt-1"></i>
                London, United Kingdom
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 md:pt-12 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-xs md:text-sm text-center md:text-left">
          <p>&copy; {new Date().getFullYear()} PlumberSEO.co.uk. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
