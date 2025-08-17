// hero.tsx
"use client"
import React from 'react';

// Font import via CSS-in-JS
const fontStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Product+Sans&display=swap');
  
  .product-sans {
    font-family: 'Product Sans', sans-serif;
  }
`;

const ArrowIcon = ({ className = "" }: { className?: string }) => (
  <svg className={`w-4 h-4 transition-all duration-300 group-hover:rotate-45 group-hover:scale-110 ${className}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7h-7m7 0v7" />
  </svg>
);

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'glass' | 'primary' | 'dark' | 'outline';
  className?: string;
  onClick?: () => void;
  [key: string]: any;
}

const Button = ({ children, variant = "glass", className = "", onClick, ...props }: ButtonProps) => {
  const baseClasses = "group relative overflow-hidden px-6 py-3 md:px-8 md:py-4 rounded-full font-medium transition-all duration-300 flex items-center justify-center gap-3 transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-[var(--brand-primary)]/50 focus:ring-offset-2 focus:ring-offset-black text-sm md:text-base product-sans";
  
  const variants: Record<string, string> = {
    glass: "bg-black/10 dark:bg-white/10 backdrop-blur-sm border border-black/20 dark:border-white/20 text-black dark:text-white hover:bg-black/20 dark:hover:bg-white/20 hover:border-black/30 dark:hover:border-white/30 hover:shadow-lg",
    primary: "bg-[var(--brand-primary)] text-white hover:bg-[var(--brand-primary-hover)] hover:shadow-lg hover:shadow-[var(--brand-primary)]/30 border border-[var(--brand-primary)]",
    dark: "bg-black/80 text-white border border-white/20 hover:bg-black hover:border-white/40 hover:shadow-lg",
    outline: "bg-transparent text-[var(--brand-primary)] border-2 border-[var(--brand-primary)] hover:bg-[var(--brand-primary)] hover:text-white hover:shadow-lg hover:shadow-[var(--brand-primary)]/30"
  };
  
  return (
    <button className={`${baseClasses} ${variants[variant]} ${className}`} onClick={onClick} {...props}>
      <span className="relative z-10">{children}</span>
      <ArrowIcon />
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
    </button>
  );
};

export default function Hero() {
  const handleViewWork = () => console.log('View our AI solutions clicked');
  const handleMeetTeam = () => console.log('Meet team clicked');
  const handleAboutCompany = () => console.log('About our AI company clicked');

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: fontStyles }} />
      <section className="min-h-screen bg-[var(--bg-main)] pt-24 text-[var(--text-main)] overflow-hidden px-4 md:px-0 product-sans">
        <div className="w-full max-w-7xl mx-auto h-[90vh] rounded-3xl overflow-hidden shadow-2xl relative group">
          <div className="absolute inset-0 transform transition-transform duration-700 group-hover:scale-105">
            <img src="https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="Advanced AI technology interface showcasing artificial intelligence solutions" className="w-full h-full object-cover" loading="eager" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--brand-primary)]/20 via-transparent to-transparent" />
          
          <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-[var(--brand-primary)]/10 rounded-full blur-xl animate-pulse" />
          <div className="absolute bottom-1/3 left-1/4 w-24 h-24 bg-[var(--brand-primary)]/15 rounded-full blur-lg animate-pulse delay-300" />
          <div className="absolute top-1/2 right-1/3 w-16 h-16 bg-[var(--brand-primary)]/8 rounded-full blur-md animate-pulse delay-700" />
          
          <div className="absolute inset-0 flex flex-col justify-center text-center md:text-left">
            <div className="w-full md:w-3/5 flex flex-col justify-center p-6 md:p-12 lg:p-16 relative z-10">
              <div className="max-w-xl space-y-8 mx-auto md:mx-0">
                <div className="flex items-center justify-center md:justify-start gap-3 animate-fade-in">
                  <span className="w-2.5 h-2.5 bg-[var(--brand-primary)] rounded-full animate-pulse shadow-lg shadow-[var(--brand-primary)]/50"></span>
                  <span className="text-white/90 text-sm font-medium tracking-wider uppercase bg-white/5 px-4 py-2 rounded-full backdrop-blur-sm border border-[var(--brand-primary)]/30 product-sans">
                    Welcome to the Future 🤖
                  </span>
                </div>
                
                <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] md:leading-[0.9] mb-8 animate-slide-up product-sans">
                  <span className="block">An AI solutions</span>
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-[var(--brand-primary)] to-white">
                    and automation
                  </span>
                  <span className="block">company in Ahmedabad</span>
                </h1>
                
                <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center md:justify-start animate-fade-in-up delay-300">
                  <Button variant="primary" onClick={handleViewWork}>View Our AI Solutions</Button>
                  <Button variant="glass" onClick={handleMeetTeam}>Meet Our AI Team</Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full flex flex-col lg:flex-row justify-between items-start px-6 md:px-12 mt-20 md:mt-32 gap-8 max-w-7xl mx-auto">
          <div className="text-[var(--text-main)] text-lg font-medium flex-shrink-0">
            <div className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 bg-[var(--brand-primary)] rounded-full shadow-sm shadow-[var(--brand-primary)]/50"></span>
              <span className="tracking-wider uppercase text-sm text-[var(--text-muted)] product-sans">Who are we?</span>
            </div>
          </div>
          <div className="max-w-4xl space-y-8">
            <p className="text-[var(--text-main)] text-xl sm:text-2xl lg:text-3xl font-semibold leading-snug tracking-tight product-sans">
              An independent artificial intelligence and automation company based in{' '}
              <span className="text-[var(--brand-primary)] relative font-bold">Ahmedabad, Gujarat<span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[var(--brand-primary)] to-[var(--brand-primary)]/50"></span></span>{' '}
              established in <span className="text-[var(--brand-primary)] font-bold">2022</span> specializing in machine learning, neural networks, natural language processing, and cutting-edge AI solutions that{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--brand-primary)] via-[--text-main] to-[var(--brand-primary)] font-bold">transform businesses</span>{' '}
              and revolutionize industries through intelligent automation, predictive analytics, and advanced AI-driven insights.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-4">
              <Button variant="primary" onClick={handleAboutCompany}>About Our AI Company</Button>
              <Button variant="outline" onClick={handleMeetTeam}>Meet Our AI Experts</Button>
            </div>
          </div>
        </div>
        
        <div className="mt-24 h-px bg-gradient-to-r from-transparent via-[var(--brand-primary)]/30 to-transparent"></div>
        <div className="mt-2 h-px bg-gradient-to-r from-transparent via-[var(--text-main)]/10 to-transparent"></div>
      </section>
    </>
  );
}