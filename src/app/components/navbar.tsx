"use client";

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

// Define icons for theme toggling
const SunIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="5"></circle>
    <line x1="12" y1="1" x2="12" y2="3"></line>
    <line x1="12" y1="21" x2="12" y2="23"></line>
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
    <line x1="1" y1="12" x2="3" y2="12"></line>
    <line x1="21" y1="12" x2="23" y2="12"></line>
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
  </svg>
);

const MoonIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
  </svg>
);

// Global styles for theming
const globalStyles = `
  :root {
    --bg-main: #ffffff;
    --bg-secondary: #f9fafb;
    --bg-card: #ffffff;
    --bg-card-secondary: #f3f4f6;
    --bg-overlay: rgba(0, 0, 0, 0.5);
    --text-main: #111827;
    --text-muted: #6b7280;
    --text-inverted: #ffffff;
    --border-main: #e5e7eb;
    --border-secondary: #d1d5db;
    --brand-primary: #102d4d;
    --brand-primary-hover: #0d2640;
  }

  .dark {
    --bg-main: #000000;
    --bg-secondary: #111111;
    --bg-card: #1C1C1C;
    --bg-card-secondary: #222222;
    --bg-overlay: rgba(0, 0, 0, 0.7);
    --text-main: #ffffff;
    --text-muted: #9ca3af;
    --text-inverted: #000000;
    --border-main: #374151;
    --border-secondary: #4b5563;
    --brand-primary: #102d4d;
    --brand-primary-hover: #1a3b5f;
  }

  body {
    background-color: var(--bg-main);
    color: var(--text-main);
    transition: background-color 0.3s ease, color 0.3s ease;
  }
`;

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileServicesView, setMobileServicesView] = useState(false); 
  const [theme, setTheme] = useState('dark');

  const lastScrollY = useRef(0);
  const servicesRef = useRef(null);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    if (typeof window !== 'undefined') {
      document.documentElement.classList.remove(theme);
      document.documentElement.classList.add(newTheme);
      localStorage.setItem('theme', newTheme);
    }
  };

  useEffect(() => {
    const savedTheme = typeof window !== 'undefined' ? localStorage.getItem('theme') || 'dark' : 'dark';
    setTheme(savedTheme);
    if (typeof window !== 'undefined') {
      document.documentElement.classList.add(savedTheme);
    }
    
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const isScrollingDown = currentScrollY > lastScrollY.current;
      setIsScrolled(currentScrollY > 50);
      if (currentScrollY > 200 && isScrollingDown) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      lastScrollY.current = currentScrollY;
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMobileMenuOpen]);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setMobileServicesView(false);
  };

  const services = [
    { title: "Custom AI Solutions", description: "Tailored AI systems built for your specific business needs", path: "/customeAIsolution" },
    { title: "Machine Learning Models", description: "Advanced ML models that learn and adapt to your data", path: "/machinelearningmodel" },
    { title: "AI Automation", description: "Streamline processes with intelligent automation", path: "/AIautomation" },
    { title: "Predictive Analytics", description: "Data-driven insights for better decision making", path:"/predictiveAnalytics" },
    { title: "AI Strategy & Consulting", description: "Strategic guidance for AI transformation", path: "/AIstatergy" }
  ];

  const navLinks = [
    { href: "/project", label: "Work" }, { href: "/about", label: "About" },
    { href: "/blogs", label: "Blog" }, { href: "/contact", label: "Contact" },
  ];

  return (
    <>
      <style>{globalStyles}</style>
      <header
        className={`fixed top-0 left-0 w-full z-50 flex justify-center transition-all duration-500 ease-out ${
          isScrolled ? 'pt-0 md:pt-6' : 'pt-0'
        } ${
          isVisible || isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-[150%]'
        }`}
      >
        <nav
          className={`flex items-center justify-between pointer-events-auto transition-all duration-500 ease-out ${
            isScrolled
              ? 'w-full md:w-[95%] md:max-w-4xl bg-[var(--bg-secondary)]/60 md:bg-[var(--bg-secondary)]/20 backdrop-blur-xl md:border md:border-[var(--border-main)] rounded-none md:rounded-full px-6 py-4 md:py-3 shadow-2xl shadow-black/20'
              : 'w-full bg-black/50 md:bg-transparent md:backdrop-blur-sm px-8 py-4 rounded-none'
          }`}
        >
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <span className={`font-bold text-[var(--text-main)] transition-all duration-500 ease-out origin-center ${
                isScrolled ? 'text-2xl' : 'text-3xl'
              }`}>enhc</span>
            </Link>
          </div>
          
          <div className={`hidden md:flex items-center text-[var(--text-main)] transition-all duration-500 ease-out origin-center ${
            isScrolled ? 'space-x-4' : 'space-x-10'
          }`}>
            <div 
              ref={servicesRef} className="relative"
              onMouseEnter={() => setIsServicesOpen(true)} onMouseLeave={() => setIsServicesOpen(false)}
            >
              <Link 
                href="/services" 
                className={`relative group flex items-center space-x-2 transition-all duration-500 ease-out origin-center ${
                  isScrolled ? 'text-sm' : 'text-base'
                }`}
              >
                <span>Services</span>
                <span className="absolute left-1/2 -translate-x-1/2 bottom-0 w-0 h-0.5 bg-[var(--brand-primary)] transition-all duration-300 ease-out group-hover:w-full"></span>
              </Link>
              
              <div className={`absolute top-full left-1/2 transform -translate-x-1/2 mt-4 transition-all duration-300 ease-out ${
                isServicesOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
              }`}>
                <div className="bg-[var(--bg-secondary)] backdrop-blur-xl border border-[var(--border-main)] rounded-2xl p-6 shadow-2xl min-w-[800px]">
                  <div className="flex gap-8">
                    <div className="flex-1">
                      <div className="mb-4">
                        <h3 className="text-[var(--text-main)] text-lg font-semibold">View all AI Services</h3>
                        <p className="text-[var(--text-muted)] text-sm mt-1">We're an AI company with cutting-edge expertise delivering intelligent solutions</p>
                      </div>
                      <div className="space-y-3">
                        {services.map((service, index) => (
                          <Link key={index} href={service.path || "/services"} className="group cursor-pointer block">
                            <h4 className="text-[var(--text-main)] font-semibold text-base mb-1 group-hover:text-blue-400 transition-colors duration-200">
                              {service.title}
                            </h4>
                            <p className="text-[var(--text-muted)] text-sm group-hover:text-gray-300 transition-colors duration-200">
                              {service.description}
                            </p>
                          </Link>
                        ))}
                      </div>
                    </div>
                    <div className="w-72 flex-shrink-0">
                      <div className="w-full h-[400px] rounded-xl overflow-hidden">
                        <img src="/service_image.jpg" alt="Professional workspace" className="w-full h-full object-cover"/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {navLinks.map(link => (
              <Link key={link.href} href={link.href} className={`relative group transition-all duration-500 ease-out origin-center ${isScrolled ? 'text-sm' : 'text-base'}`}>
                <span>{link.label}</span>
                <span className="absolute left-1/2 -translate-x-1/2 bottom-0 w-0 h-0.5 bg-[var(--brand-primary)] transition-all duration-300 ease-out group-hover:w-full"></span>
              </Link>
            ))}
          </div>
          
          <div className={`hidden md:flex items-center transition-all duration-500 ease-out origin-center ${isScrolled ? 'space-x-2' : 'space-x-6'}`}>
            <button 
              onClick={toggleTheme} 
              className="p-2 rounded-full text-[var(--text-main)] transition-colors duration-300 hover:bg-[var(--bg-card-secondary)]"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
            </button>
            <button className={`bg-[var(--brand-primary)] text-white flex items-center space-x-2 hover:bg-[var(--brand-primary-hover)] transition-all duration-300 ease-out origin-center ${isScrolled ? 'px-4 py-2 rounded-full text-sm' : 'px-8 py-3 rounded-full text-base'}`}>
              <span>Start a project</span>
              <span>&rarr;</span>
            </button>
          </div>

          <div className="md:hidden flex items-center">
             <button 
              onClick={toggleTheme} 
              className="p-2 rounded-full text-[var(--text-main)] transition-colors duration-300 z-50"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
            </button>
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="z-50" aria-label="Toggle Menu">
              <svg className="w-8 h-8 text-[var(--text-main)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
              </svg>
            </button>
          </div>
        </nav>
        
        <div className={`md:hidden fixed inset-0 bg-[var(--bg-secondary)] w-full h-screen transition-transform duration-500 ease-in-out overflow-hidden ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className={`absolute inset-0 w-full h-full transition-transform duration-500 ease-in-out ${mobileServicesView ? '-translate-x-full' : 'translate-x-0'}`}>
            <div className="flex flex-col items-center justify-center h-full text-center space-y-8 p-6">
              <button onClick={() => setMobileServicesView(true)} className="text-[var(--text-main)] text-3xl font-light hover:text-blue-400 transition-colors w-full flex justify-center items-center">
                Services <svg className="w-6 h-6 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </button>
              {navLinks.map(link => (
                <Link key={link.href} href={link.href} className="text-[var(--text-main)] text-3xl font-light hover:text-blue-400 transition-colors" onClick={closeMobileMenu}>
                  {link.label}
                </Link>
              ))}
            </div>
            <div className="absolute bottom-24 left-1/2 -translate-x-1/2">
              <button className="bg-[var(--brand-primary)] text-white flex items-center space-x-2 hover:bg-[var(--brand-primary-hover)] transition-all duration-300 ease-out px-8 py-3 rounded-full text-base">
                <span>Start a project</span>
                <span>&rarr;</span>
              </button>
            </div>
          </div>
          <div className={`absolute inset-0 w-full h-full bg-[var(--bg-secondary)] transition-transform duration-500 ease-in-out flex flex-col items-center p-6 ${mobileServicesView ? 'translate-x-0' : 'translate-x-full'}`}>
            <div className="w-full flex justify-start pt-5">
              <button onClick={() => setMobileServicesView(false)} className="flex items-center text-[var(--text-main)] hover:text-blue-400 transition-colors">
                <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                <span className="text-xl font-light">Back</span>
              </button>
            </div>
            <div className="flex flex-col items-center justify-center h-full text-center space-y-8">
              <Link key="/services" href="/services" onClick={closeMobileMenu} className="group text-center border-b border-[var(--border-main)] pb-8 mb-0">
                <h4 className="text-[var(--text-main)] font-semibold text-2xl mb-1 group-hover:text-blue-400 transition-colors duration-200">
                  View All Services
                </h4>
                <p className="text-[var(--text-muted)] text-sm group-hover:text-gray-300 transition-colors duration-200 max-w-xs mx-auto">
                  An overview of our cutting-edge AI solutions.
                </p>
              </Link>
              {services.map((service) => (
                <Link key={service.path} href={service.path} onClick={closeMobileMenu} className="group text-center">
                  <h4 className="text-[var(--text-main)] font-semibold text-2xl mb-1 group-hover:text-blue-400 transition-colors duration-200">
                    {service.title}
                  </h4>
                  <p className="text-[var(--text-muted)] text-sm group-hover:text-gray-300 transition-colors duration-200 max-w-xs mx-auto">
                    {service.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>
        <style jsx>{`
          @import url('https://fonts.googleapis.com/css2?family=Product+Sans&display=swap');
          nav, span, button, h3, h4, p { font-family: 'Product Sans', sans-serif; }
        `}</style>
      </header>
    </>
  );
}