import React from 'react';

interface NavbarProps {
  currentPath?: string;
}

const Navbar: React.FC<NavbarProps> = ({ currentPath = '/' }) => {
  const isHomePage = currentPath === '/';

  const scrollToSection = (id: string) => {
    if (!isHomePage) {
      // Navigate to home with hash
      window.location.href = `/#${id}`;
    } else {
      const element = document.getElementById(id);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <a href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity" aria-label="PlumberSEO Home">
            <div className="bg-blue-600 p-1.5 rounded-lg">
              <i className="fas fa-faucet text-white text-xl"></i>
            </div>
            <span className="text-xl font-extrabold tracking-tight text-slate-900">
              Plumber<span className="text-blue-600">SEO</span>.co.uk
            </span>
          </a>
          
          <div className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => scrollToSection('results')} 
              className="text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors"
            >
              Results
            </button>
            <button 
              onClick={() => scrollToSection('services')} 
              className="text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors"
            >
              Blueprint
            </button>
            <a 
              href="/web-design/" 
              className="text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors"
            >
              Web Design
            </a>
            <button 
              onClick={() => scrollToSection('faq')} 
              className="text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors"
            >
              FAQ
            </button>
            <a 
              href="/get-started/"
              className="bg-blue-600 text-white px-5 py-2.5 rounded-full text-sm font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-200"
            >
              Get Free Audit
            </a>
          </div>
          
          <div className="md:hidden">
            <a href="/get-started/" className="bg-blue-600 text-white p-2 rounded-lg" aria-label="Get Free Audit">
              <i className="fas fa-phone-alt"></i>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
