"use client";
import React, { ReactNode } from 'react';

// Font import via CSS-in-JS
const fontStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Product+Sans&display=swap');
  
  .product-sans {
    font-family: 'Product Sans', sans-serif;
  }
`;

const LogoCard = ({ children }: { children: ReactNode }) => (
  <div className="bg-[var(--bg-card-secondary)] rounded-2xl h-36 flex items-center justify-center p-6 text-[var(--text-muted)] grayscale hover:grayscale-0 hover:text-[var(--text-main)] transition-all duration-300 ease-in-out cursor-pointer min-w-[200px] sm:min-w-[280px] flex-shrink-0">
    {children}
  </div>
);

const Workwith = () => {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: fontStyles }} />
      <div className="w-full bg-[var(--bg-main)] flex justify-center pt-20 sm:pt-24 p-4 sm:p-8 product-sans">
        <div className="bg-[var(--bg-card)] rounded-[2rem] p-6 sm:p-12 w-full max-w-7xl flex flex-col">
          
          <div className="flex flex-col w-full md:ml-130">            
            <div className="flex items-center gap-2 text-sm text-left product-sans text-[var(--text-muted)]">
              <span className="w-1.5 h-1.5 bg-[var(--text-main)] rounded-full"></span>
              Shameful Plug
            </div>
            <h1 className="text-3xl sm:text-4xl font-semi text-[var(--text-main)] mt-2 max-w-5xl leading-tight text-left product-sans">   
              We work with start-up businesses <br className="hidden sm:block" />
              through to global organisations.
            </h1>
            <div className="flex justify-start">
              <button className="bg-[var(--brand-primary)] text-white font-semibold rounded-full px-6 py-3 sm:px-8 sm:py-4 mt-8 flex items-center gap-2 hover:bg-[var(--brand-primary-hover)] transition-colors duration-300 text-sm sm:text-base product-sans">
                Get in touch today
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4">
                  <path d="M5.02441 12.8724L9.94822 7.94859C10.2223 7.67453 10.2223 7.22155 9.94822 6.94749L5.02441 2.02368" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>

          <div className="mt-16 overflow-hidden">
            <div className="mb-6">
              <div className="flex animate-scroll-left gap-6">
                {[...Array(2)].map((_, i) => (
                  <React.Fragment key={i}>
                    <LogoCard><div className="font-bold text-center text-xs product-sans"><p className="opacity-70">University of</p><p className="text-2xl tracking-tighter my-0.5">Salford</p><p className="font-light tracking-[0.2em] opacity-70">MANCHESTER</p></div></LogoCard>
                    <LogoCard><p className="font-serif text-3xl tracking-[0.2em] product-sans">ROSEBUD</p></LogoCard>
                    <LogoCard><div className="text-center product-sans"><p className="text-2xl tracking-widest">L'OCCITANE</p><p className="text-xs tracking-[0.3em] opacity-70 mt-1">EN PROVENCE</p></div></LogoCard>
                    <LogoCard><svg className="h-8" viewBox="0 0 101 48" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M22.843 4.24H4.27v39.52h18.573c12.334 0 22.34-9.983 22.34-22.298V23.98c0-12.315-10.006-19.74-22.34-19.74Zm-5.783 26.603H11.37V11.157h5.69c4.71 0 8.527 3.82 8.527 8.528v5.632c0 4.71-3.818 8.526-8.527 8.526Z" /><path d="M96.73 4.24H55.047v39.52H96.73V29.026h-24.9v-5.046h24.9V11.157h-24.9V6.11h24.9V4.24Z" /><path d="M84.383 29.026V43.76h7.113V29.026h-7.113Z" /></svg></LogoCard>
                    <LogoCard><p className="font-sans text-xl sm:text-2xl tracking-[0.2em] font-medium product-sans">GARY NEVILLE</p></LogoCard>
                  </React.Fragment>
                ))}
              </div>
            </div>
            <div>
              <div className="flex animate-scroll-right gap-6">
                {[...Array(2)].map((_, i) => (
                  <React.Fragment key={i}>
                    <LogoCard><div className="flex items-center gap-2.5"><svg className="h-6" viewBox="0 0 138 28" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M11.2 2.8C5.6 2.8 0 8.4 0 14s5.6 11.2 11.2 11.2S22.4 19.6 22.4 14 16.8 2.8 11.2 2.8zm0 18.2c-3.85 0-7-3.15-7-7s3.15-7 7-7 7 3.15 7 7-3.15 7-7 7zM42 2.8C36.4 2.8 30.8 8.4 30.8 14s5.6 11.2 11.2 11.2S53.2 19.6 53.2 14 47.6 2.8 42 2.8zm0 18.2c-3.85 0-7-3.15-7-7s3.15-7 7-7 7 3.15 7 7-3.15 7-7 7zM72.8 2.8c-5.6 0-11.2 5.6-11.2 11.2s5.6 11.2 11.2 11.2 11.2-5.6 11.2-11.2S78.4 2.8 72.8 2.8zm0 18.2c-3.85 0-7-3.15-7-7s3.15-7 7-7 7 3.15 7 7-3.15 7-7 7zM92.4 4.2h11.2v19.6h-11.2V4.2zM114.8 4.2c2.8 0 5.6 1.4 7 4.2l-5.6 4.2c-.35-.7-.7-1.4-2.1-1.4-1.4 0-2.8 1.4-2.8 3.5v9.1h-11.2V4.2h11.5zM128.8 4.2h11.2v19.6h-11.2V4.2z"/></svg><p className="font-bold text-lg sm:text-2xl product-sans">BlackBerry</p></div></LogoCard>
                    <LogoCard><div className="flex gap-1"><div className="bg-white text-black text-2xl sm:text-3xl font-bold w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center product-sans">B</div><div className="bg-white text-black text-2xl sm:text-3xl font-bold w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center product-sans">B</div><div className="bg-white text-black text-2xl sm:text-3xl font-bold w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center product-sans">C</div></div></LogoCard>
                    <LogoCard><svg className="h-12 sm:h-16" viewBox="0 0 100 115" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M64.8 80.3l-12.2-19c-1-1.5-.7-3.6.8-4.6l23.8-16.5-16.7-25.9L50 22.4 39.5 14.3 22.8 40.2l23.8 16.5c1.5 1 1.8 3.1.8 4.6L35.2 80.3H0v34.4h100V80.3H64.8zM50 0L15.4 24.3 35.7 55 50 44.4 64.3 55 84.6 24.4 50 0z"/></svg></LogoCard>
                    <LogoCard><div className="text-center"><svg className="h-8 mx-auto" viewBox="0 0 50 36" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M25 0L49.4355 18L25 36L0.564502 18L25 0Z" stroke="currentColor" strokeWidth="2"/><path d="M13.916 23.332L25 15.5l11.084 7.832L25 31.166L13.916 23.332Z" stroke="currentColor" strokeWidth="1.5"/></svg><p className="font-semibold text-base sm:text-lg tracking-widest mt-2">ALLIANCE</p><p className="text-xs tracking-[0.2em] opacity-70">RESTAURANTS</p></div></LogoCard>
                    <LogoCard><div className="flex items-center gap-2.5 text-2xl sm:text-3xl font-light product-sans"><span>inside</span><span className="h-6 w-px bg-current"></span><span>out</span></div></LogoCard>
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </div>

        <style jsx global>{`
          @keyframes scroll-left { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
          @keyframes scroll-right { 0% { transform: translateX(-50%); } 100% { transform: translateX(0); } }
          .animate-scroll-left { animation: scroll-left 20s linear infinite; }
          .animate-scroll-right { animation: scroll-right 20s linear infinite; }
          .animate-scroll-left:hover, .animate-scroll-right:hover { animation-play-state: paused; }

          @media (max-width: 640px) {
            .animate-scroll-left { animation: scroll-left 8s linear infinite; }
            .animate-scroll-right { animation: scroll-right 8s linear infinite; }
          }
        `}</style>
      </div>  
    </>
  );
};

export default Workwith;