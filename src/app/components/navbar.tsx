"use client";

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
// Note: 'path' import is not used in React components and can be removed.
// import path from 'path'; 

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // --- NEW STATE for mobile services view ---
  const [mobileServicesView, setMobileServicesView] = useState(false); 

  const lastScrollY = useRef(0);
  const servicesRef = useRef(null);

  // Effect to handle scroll-based UI changes
  useEffect(() => {
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

  // Effect to disable body scroll when mobile menu is open
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

  // --- HELPER FUNCTION to close the mobile menu completely ---
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setMobileServicesView(false); // Also reset the services view
  };

  // Services dropdown data
  const services = [
    {
      title: "Custom AI Solutions",
      description: "Tailored AI systems built for your specific business needs",
      path: "/customeAIsolution"
    },
    {
      title: "Machine Learning Models",
      description: "Advanced ML models that learn and adapt to your data",
      path: "/machinelearningmodel"
    },
    {
      title: "AI Automation",
      description: "Streamline processes with intelligent automation",
      path: "/AIautomation"
    },
    {
      title: "Predictive Analytics",
      description: "Data-driven insights for better decision making",
      path:"/predictiveAnalytics"
    },
    {
      title: "AI Strategy & Consulting",
      description: "Strategic guidance for AI transformation",
      path: "/AIstatergy"
    }
  ];

  const navLinks = [
    { href: "/project", label: "Work" },
    { href: "/about", label: "About" },
    { href: "/blogs", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ];

  return (
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
            ? 'w-full md:w-[95%] md:max-w-4xl bg-black/60 md:bg-black/20 backdrop-blur-xl md:border md:border-white/30 rounded-none md:rounded-full px-6 py-4 md:py-3 shadow-2xl shadow-black/20'
            : 'w-full bg-black/50 md:bg-transparent md:backdrop-blur-sm px-8 py-4 rounded-none'
        }`}
      >
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <span className={`font-bold text-white transition-all duration-500 ease-out origin-center ${
              isScrolled ? 'text-2xl' : 'text-3xl'
            }`}>enhc</span>
          </Link>
        </div>
        
        {/* Desktop Navigation Links */}
        <div className={`hidden md:flex items-center text-white transition-all duration-500 ease-out origin-center ${
          isScrolled ? 'space-x-4' : 'space-x-10'
        }`}>
          {/* Services with Dropdown */}
          <div 
            ref={servicesRef}
            className="relative"
            onMouseEnter={() => setIsServicesOpen(true)}
            onMouseLeave={() => setIsServicesOpen(false)}
          >
            <Link 
              href="/services" 
              className={`relative group flex items-center space-x-2 transition-all duration-500 ease-out origin-center ${
                isScrolled ? 'text-sm' : 'text-base'
              }`}
            >
              <span>Services</span>
              <span className="absolute left-1/2 -translate-x-1/2 bottom-0 w-0 h-0.5 bg-green-400 transition-all duration-300 ease-out group-hover:w-full"></span>
            </Link>
            
            {/* Dropdown Menu */}
            <div className={`absolute top-full left-1/2 transform -translate-x-1/2 mt-4 transition-all duration-300 ease-out ${
              isServicesOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
            }`}>
              <div className="bg-[#111111] backdrop-blur-xl border border-gray-700/50 rounded-2xl p-6 shadow-2xl min-w-[800px]">
                <div className="flex gap-8">
                  {/* Left Side */}
                  <div className="flex-1">
                    <div className="mb-4">
                      <h3 className="text-white text-lg font-semibold">View all AI Services</h3>
                      <p className="text-gray-400 text-sm mt-1">We're an AI company with cutting-edge expertise delivering intelligent solutions</p>
                    </div>
                    <div className="space-y-3">
                      {services.map((service, index) => (
                        <Link key={index} href={service.path || "/services"} className="group cursor-pointer block">
                          <h4 className="text-white font-semibold text-base mb-1 group-hover:text-green-400 transition-colors duration-200">
                            {service.title}
                          </h4>
                          <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-200">
                            {service.description}
                          </p>
                        </Link>
                      ))}
                    </div>
                  </div>
                  {/* Right Side */}
                  <div className="w-72 flex-shrink-0">
                    <div className="w-full h-[400px] rounded-xl overflow-hidden">
                      <img src="/service_image.jpg" alt="Professional workspace" className="w-full h-full object-cover"/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Other Navigation Links */}
          {navLinks.map(link => (
            <Link key={link.href} href={link.href} className={`relative group transition-all duration-500 ease-out origin-center ${isScrolled ? 'text-sm' : 'text-base'}`}>
              <span>{link.label}</span>
              <span className="absolute left-1/2 -translate-x-1/2 bottom-0 w-0 h-0.5 bg-green-400 transition-all duration-300 ease-out group-hover:w-full"></span>
            </Link>
          ))}
        </div>
        
        {/* Desktop "Start a project" Button */}
        <div className={`hidden md:flex items-center transition-all duration-500 ease-out origin-center ${isScrolled ? 'space-x-2' : 'space-x-6'}`}>
          <button className={`bg-green-400 text-black flex items-center space-x-2 hover:bg-green-500 transition-all duration-300 ease-out origin-center ${isScrolled ? 'px-4 py-2 rounded-full text-sm' : 'px-8 py-3 rounded-full text-base'}`}>
            <span>Start a project</span>
            <span>&rarr;</span>
          </button>
        </div>

        {/* --- MODIFIED Mobile Menu Button (Hamburger) --- */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="z-50" aria-label="Toggle Menu">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
            </svg>
          </button>
        </div>
      </nav>
      
      {/* --- RESTRUCTURED Mobile Menu Overlay --- */}
      <div className={`md:hidden fixed inset-0 bg-[#111111] w-full h-screen transition-transform duration-500 ease-in-out overflow-hidden ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        
        {/* Panel 1: Main Menu */}
        <div className={`absolute inset-0 w-full h-full transition-transform duration-500 ease-in-out ${mobileServicesView ? '-translate-x-full' : 'translate-x-0'}`}>
          <div className="flex flex-col items-center justify-center h-full text-center space-y-8 p-6">
            
            {/* Services Button to open Panel 2 */}
            <button 
              onClick={() => setMobileServicesView(true)} 
              className="text-white text-3xl font-light hover:text-green-400 transition-colors w-full flex justify-center items-center"
            >
              Services
              <svg className="w-6 h-6 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </button>
            
            {/* Other Main Links */}
            {navLinks.map(link => (
              <Link key={link.href} href={link.href} className="text-white text-3xl font-light hover:text-green-400 transition-colors" onClick={closeMobileMenu}>
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Panel 2: Services Details */}
        <div className={`absolute inset-0 w-full h-full bg-[#111111] transition-transform duration-500 ease-in-out flex flex-col items-center p-6 ${mobileServicesView ? 'translate-x-0' : 'translate-x-full'}`}>
          {/* Back Button */}
          <div className="w-full flex justify-start pt-5">
            <button onClick={() => setMobileServicesView(false)} className="flex items-center text-white hover:text-green-400 transition-colors">
              <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
              <span className="text-xl font-light">Back</span>
            </button>
          </div>
          
          {/* Services List */}
          <div className="flex flex-col items-center justify-center h-full text-center space-y-6">
            <h3 className="text-green-400 text-lg font-semibold mb-4">OUR SERVICES</h3>
            {services.map((service) => (
              <Link key={service.path} href={service.path} onClick={closeMobileMenu} className="group text-center">
                <h4 className="text-white font-semibold text-2xl mb-1 group-hover:text-green-400 transition-colors duration-200">
                  {service.title}
                </h4>
                <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-200 max-w-xs mx-auto">
                  {service.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
        
        {/* "Start a project" button (common to both panels) */}
        <div className="absolute bottom-24 left-1/2 -translate-x-1/2">
            <button className="bg-green-400 text-black flex items-center space-x-2 hover:bg-green-500 transition-all duration-300 ease-out px-8 py-3 rounded-full text-base">
                <span>Start a project</span>
                <span>&rarr;</span>
            </button>
        </div>

      </div>
      
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Product+Sans&display=swap');
        
        nav, span, button, h3, h4, p {
          font-family: 'Product Sans', sans-serif;
        }
      `}</style>
    </header>
  );
}