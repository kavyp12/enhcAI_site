"use client";
import React, { useState, useEffect } from 'react';
import Navbar from '@/app/components/navbar';
import Footer from '@/app/components/footer';
// Mock components since the originals are not provided



// Simple Card component
const Card = ({ children, className, style }: { children?: React.ReactNode; className?: string; style?: React.CSSProperties }) => {
  return (
    <div className={className} style={style}>
      {children}
    </div>
  );
};


const ArrowIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
  >
    <path
      d="M13.5 4.5L21 12M21 12L13.5 19.5M21 12H3"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);



// This is the component that replicates the image grid with images only.
const BrandMosaic = () => {
  return (
    // Add a bit more top margin for mobile
    <section className="mt-20 md:mt-20">
      {/* The grid will stack on mobile and become a complex grid on larger screens */}
      {/* Added min-h-[250px] to all cards to ensure they are visible and tappable on mobile */}
      <div className="grid grid-cols-1 md:grid-cols-12 auto-rows-auto md:auto-rows-[120px] gap-4">
        
       <Card
          className="col-span-1 md:col-span-2 row-span-1 md:row-span-2 bg-cover bg-center rounded-2xl min-h-[250px]"
          style={{ backgroundImage: "url('/fraud_detaction.jpg')" }}
        />
      <Card
          className="col-span-1 md:col-span-2 row-span-1 md:row-span-2 bg-cover bg-center rounded-2xl min-h-[250px]"
          style={{ backgroundImage: "url('/AI Campaign Optimization.jpg')" }}
        />

     <Card
          className="col-span-1 md:col-span-2 row-span-1 md:row-span-2 bg-cover bg-center rounded-2xl min-h-[250px]"
          style={{ backgroundImage: "url('/Data_analysis.jpg')" }}
        />
        <Card className="col-span-1 md:col-span-3 row-span-1 md:row-span-2 bg-cover bg-center rounded-2xl min-h-[250px]" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1557683311-eac922347aa1?q=80&w=800&auto=format&fit=crop')" }} />

        <Card className="col-span-1 md:col-span-3 row-span-1 md:row-span-2 bg-cover bg-center rounded-2xl min-h-[250px]" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop')" }} />

        <Card className="hidden md:block md:col-span-2 md:row-span-3 bg-cover bg-center rounded-2xl" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=800&auto=format&fit=crop')" }}/>
        
        <Card className="col-span-1 md:col-span-3 row-span-1 md:row-span-3 bg-cover bg-center rounded-2xl min-h-[250px]" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop')" }} />
        
        <Card className="col-span-1 md:col-span-2 row-span-1 md:row-span-3 bg-cover bg-center rounded-2xl min-h-[250px]" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=800&auto=format&fit=crop')" }} />

        <Card className="col-span-1 md:col-span-2 row-span-1 md:row-span-3 bg-cover bg-center rounded-2xl min-h-[250px]" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=800&auto=format&fit=crop')" }} />
        
        <Card className="col-span-1 md:col-span-3 row-span-1 md:row-span-3 bg-cover bg-center rounded-2xl min-h-[250px]" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop')" }} />

        <Card className="col-span-1 md:col-span-3 row-span-1 md:row-span-2 bg-cover bg-center rounded-2xl min-h-[250px]" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1560472354-b33ff0c44a43?q=80&w=800&auto=format&fit=crop')" }} />

        <Card className="col-span-1 md:col-span-3 row-span-1 md:row-span-2 bg-cover bg-center rounded-2xl min-h-[250px]" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=800&auto=format&fit=crop')" }} />
        
        <Card className="col-span-1 md:col-span-3 row-span-1 md:row-span-2 bg-cover bg-center rounded-2xl min-h-[250px]" style={{ backgroundImage: "url('/personlayze_image.jpg')" }} />

        <Card className="col-span-1 md:col-span-3 row-span-1 md:row-span-2 bg-cover bg-center rounded-2xl min-h-[250px]" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1558981403-c5f9899a28bc?q=80&w=800&auto=format&fit=crop')" }} />

      </div>
    </section>
  );
};

const SliderSection = () => {
  const slides = [
    { id: 1, content: <div className="bg-white text-black w-full h-full rounded-2xl p-6 flex flex-col justify-between relative overflow-hidden shadow-2xl"> <div className="absolute -top-10 -left-8 text-[180px] sm:text-[220px] font-extrabold text-gray-200/60 opacity-50 z-0 select-none">G</div> <div className="absolute -bottom-12 -right-6 text-[180px] sm:text-[220px] font-extrabold text-gray-200/60 opacity-50 z-0 select-none">N</div> <div className="relative z-10"> <p className="text-lg sm:text-xl leading-relaxed"> "...practiced. He had determination and ambition to improve himself and he got his reward." </p> <p className="mt-4 text-gray-500">- Alex Ferguson</p> </div> <div className="h-1/2 w-full mt-4 rounded-lg overflow-hidden relative z-10"> <img src="https://images.unsplash.com/photo-1549400813-a3a4d318e877?q=80&w=800&auto=format&fit=crop" alt="Stadium Interior" className="w-full h-full object-cover"/> </div> </div> },
    { id: 2, content: <div className="bg-black border border-neutral-800 text-white w-full h-full rounded-2xl p-6 flex flex-col shadow-2xl"> <div className="text-center"> <p className="text-xs text-neutral-400 tracking-[0.2em]">EXPLORE MODE</p> <h3 className="text-xl sm:text-2xl mt-2 font-semibold tracking-wide">A RELENTLESS LIFE</h3> </div> <div className="flex-grow my-4 flex gap-2"> <div className="w-2/3 relative rounded-lg overflow-hidden"> <img src="https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=800&auto=format&fit=crop" alt="Man speaking to an audience" className="w-full h-full object-cover"/> <div className="absolute bottom-2 left-2 sm:bottom-4 sm:left-4 bg-black/60 text-white text-[10px] sm:text-xs px-2 sm:px-3 py-1 rounded-full backdrop-blur-sm">SPEAKER</div> </div> <div className="w-1/3 flex flex-col gap-2"> <div className="h-1/2 rounded-lg overflow-hidden"> <img src="https://images.unsplash.com/photo-1560250056-07ba64664864?q=80&w=800&auto=format&fit=crop" alt="Football player" className="w-full h-full object-cover"/> </div> <div className="h-1/2 rounded-lg overflow-hidden"> <img src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=800&auto=format&fit=crop" alt="Team collaborating" className="w-full h-full object-cover"/> </div> </div> </div> <div className="flex justify-between items-center text-sm"> <div className="flex gap-2"> <button className="w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center hover:bg-neutral-700 transition-colors" aria-label="Previous image in card">&larr;</button> <button className="w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center hover:bg-neutral-700 transition-colors" aria-label="Next image in card">&rarr;</button> </div> <span className="text-neutral-500">3/4</span> </div> </div> },
    { id: 3, content: <div className="bg-white text-black w-full h-full rounded-2xl p-6 flex flex-col justify-between shadow-2xl"> <div> <p className="text-xs text-gray-500 tracking-widest">GARY NEVILLE</p> <p className="text-[10px] sm:text-xs text-gray-500 mt-2">09 DEC 2022 &nbsp; • &nbsp; 5 MIN READ</p> <h3 className="text-3xl sm:text-4xl mt-4 font-semibold leading-tight">THE OVERLAP TOUR!</h3> </div> <div className="h-[55%] w-full mt-4 rounded-lg overflow-hidden relative"> <img src="https://images.unsplash.com/photo-1605369137494-2d37a8a02424?q=80&w=800&auto=format&fit=crop" alt="Man in black hoodie in nature" className="w-full h-full object-cover"/> <div className="absolute bottom-2 left-2 sm:bottom-4 sm:left-4 bg-white/80 text-black text-[10px] sm:text-xs px-2 sm:px-3 py-1 rounded-full backdrop-blur-sm">OVERLAP</div> </div> </div> },
    { id: 4, content: <div className="bg-black border border-neutral-800 text-white w-full h-full rounded-2xl p-6 flex flex-col justify-center items-center text-center shadow-2xl"> <h3 className="text-xl sm:text-2xl font-semibold">Broadcasting</h3> <p className="text-neutral-400 mt-2 max-w-xs text-sm sm:text-base">Covering the biggest games for networks around the world.</p> <div className="w-full h-1/2 mt-4 rounded-lg overflow-hidden"> <img src="https://images.unsplash.com/photo-1593335933921-5534c0345553?q=80&w=800&auto=format&fit=crop" alt="Broadcasting studio" className="w-full h-full object-cover"/> </div> </div> },
  ];

  const [currentIndex, setCurrentIndex] = useState(1);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handlePrev = () => setCurrentIndex(prev => (prev === 0 ? slides.length - 1 : prev - 1));
  const handleNext = () => setCurrentIndex(prev => (prev === slides.length - 1 ? 0 : prev + 1));

  const getCardStyle = (index: number) => {
    let offset = index - currentIndex;
    if (offset < -slides.length / 2) offset += slides.length;
    if (offset > slides.length / 2) offset -= slides.length;
    
    const isVisible = Math.abs(offset) <= 1;
    const translateXValue = isMobile ? offset * 80 : offset * 65;

    return {
      position: 'absolute' as const,
      width: 'clamp(280px, 80vw, 550px)', // Adjusted clamp for better mobile view
      transform: `translateX(${translateXValue}%) scale(${offset === 0 ? 1 : 0.85})`,
      opacity: isVisible ? 1 : 0,
      zIndex: slides.length - Math.abs(offset),
      transition: 'transform 0.5s ease-out, opacity 0.5s ease-out',
      pointerEvents: offset === 0 ? ('auto' as const) : ('none' as const),
    };
  };

  const ArrowIcon = ({ className }: { className?: string }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
    </svg>
  );

  return (
    <section className="mt-20 py-16 bg-[#1a1a1a] font-sans">
      {/* Adjusted height for mobile */}
      <div className="relative w-full h-[600px] md:h-[550px] flex items-center justify-center overflow-hidden">
        {slides.map((slide, index) => (
          <div key={slide.id} style={getCardStyle(index)} className="h-[550px] md:h-full">
            {slide.content}
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center space-x-4 mt-8">
        <button onClick={handlePrev} className="bg-[#2a2a2a] w-11 h-11 rounded-full flex items-center justify-center text-white hover:bg-neutral-600 transition-colors focus:outline-none focus:ring-2 focus:ring-neutral-500" aria-label="Previous slide">
          <ArrowIcon className="w-5 h-5 transform rotate-180" />
        </button>
        <button onClick={handleNext} className="bg-[#2a2a2a] w-11 h-11 rounded-full flex items-center justify-center text-white hover:bg-neutral-600 transition-colors focus:outline-none focus:ring-2 focus:ring-neutral-500" aria-label="Next slide">
          <ArrowIcon className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
};


const projectSlides = [
    { id: 1, year: '2022', client: 'This is Digital', title: 'Complete brand overhaul for a digital performance agency', imageUrl: '/digital.jpg' },
    { id: 2, year: '2023', client: 'Monday Clicks', title: 'Crafting an SEO identity with impact', imageUrl: '/SEO.jpg' },
    { id: 3, year: '2023', client: 'Area', title: 'Showcasing a common passion for the workplace', imageUrl: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=900&auto=format&fit=crop&q=80' },
    { id: 4, year: '2024', client: 'InnovateX', title: 'Building the future of collaborative tech platforms', imageUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=900&auto=format&fit=crop&q=80' },
    { id: 5, year: '2024', client: 'GreenLeaf', title: 'A sustainable brand identity for an eco-conscious market', imageUrl: '/brand_identity.jpg' }
];

const LeftArrowIcon = () => ( <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M10.5 19.5L3 12M3 12L10.5 4.5M3 12H21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/> </svg> );
const RightArrowIcon = () => ( <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M13.5 4.5L21 12M21 12L13.5 19.5M21 12H3" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/> </svg> );

const ProjectShowcaseSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [visibleSlides, setVisibleSlides] = useState(3);

    useEffect(() => {
        const updateVisibleSlides = () => {
            if (window.innerWidth < 768) { setVisibleSlides(1); } 
            else if (window.innerWidth < 1024) { setVisibleSlides(2); } 
            else { setVisibleSlides(3); }
        };
        updateVisibleSlides();
        window.addEventListener('resize', updateVisibleSlides);
        return () => window.removeEventListener('resize', updateVisibleSlides);
    }, []);

    useEffect(() => {
        const maxIndex = Math.max(0, projectSlides.length - visibleSlides);
        if (currentIndex > maxIndex) { setCurrentIndex(maxIndex); }
    }, [visibleSlides, currentIndex]);

    const maxIndex = Math.max(0, projectSlides.length - visibleSlides);
    const handlePrev = () => setCurrentIndex(prev => (prev > 0 ? prev - 1 : 0));
    const handleNext = () => setCurrentIndex(prev => (prev < maxIndex ? prev + 1 : maxIndex));

    return (
        <section className="bg-[#121212] py-12 md:py-20 font-sans">
            <div className="max-w-7xl mx-auto px-4 sm:px-8">
                <div className="relative overflow-hidden">
                    <div className="flex -mx-2 sm:-mx-4" style={{ transform: `translateX(-${currentIndex * (100 / visibleSlides)}%)`, transition: 'transform 0.6s cubic-bezier(0.25, 1, 0.5, 1)' }}>
                        {projectSlides.map((slide) => (
                            <div key={slide.id} className="px-2 sm:px-4" style={{ flex: `0 0 ${100 / visibleSlides}%` }}>
                                <div className="flex flex-col">
                                    <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-[#2a2a2a]">
                                        <img src={slide.imageUrl} alt={slide.title} className="w-full h-full object-cover" />
                                    </div>
                                    <div className="mt-4 sm:mt-6 text-white">
                                        <p className="text-sm text-neutral-400"> {slide.year} • {slide.client} </p>
                                        <h3 className="mt-2 text-lg md:text-xl lg:text-2xl font-medium leading-tight"> {slide.title} </h3>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="flex justify-center items-center space-x-3 mt-8 md:mt-12">
                    <button onClick={handlePrev} disabled={currentIndex === 0} className="bg-[#2a2a2a] w-11 h-11 rounded-full flex items-center justify-center hover:bg-neutral-600 transition-colors focus:outline-none disabled:opacity-40" aria-label="Previous slide"> <LeftArrowIcon /> </button>
                    <button onClick={handleNext} disabled={currentIndex >= maxIndex} className="bg-[#2a2a2a] w-11 h-11 rounded-full flex items-center justify-center hover:bg-neutral-600 transition-colors focus:outline-none disabled:opacity-40" aria-label="Next slide"> <RightArrowIcon /> </button>
                </div>
            </div>
        </section>
    );
};


export default function App() {
  return (
    <>
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Product+Sans&display=swap');
        
        nav, span, button, h1, h2, h3, h4, h5, h6, p, div {
          font-family: 'Product Sans', sans-serif;
        }
      `}</style>
      <Navbar />
      <div className="min-h-screetext-white p-4 sm:p-6 lg:p-8">
        <div className="max-w-7xl mx-auto">
<header className="flex items-center justify-between py-6 mt-8 sm:mt-0">
  <nav className="flex space-x-3 lg:translate-y-35">
    <button className="bg-[#2a2a2a] text-white text-xs sm:text-sm font-medium py-2 px-3 sm:px-5 rounded-full hover:bg-gray-600 transition-colors">
      Branding
    </button>
    <button className="bg-[#2a2a2a] text-white text-xs sm:text-sm font-medium py-2 px-3 sm:px-5 rounded-full hover:bg-gray-600 transition-colors">
      Website
    </button>
    <button className="bg-[#2a2a2a] text-white text-xs sm:text-sm font-medium py-2 px-3 sm:px-5 rounded-full hover:bg-gray-600 transition-colors">
      SEO
    </button>
  </nav>
  <div className="text-neutral-400 text-xs sm:text-sm lg:-translate-x-140 lg:translate-y-15">
    2023 • Gary Neville
  </div>
</header>

<main className="mt-8 sm:mt-8">
  {/* Hero Section with Text and Image */}
  <div className="relative">
    {/* Main Heading positioned over image */}
    <div className="relative z-10 mb-4 sm:mb-8 px-4 sm:px-0 lg:translate-x-150">
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight text-white">
        Refreshing Gary<br />
        Neville's digital presence
      </h1>
    </div>

    {/* Hero Image */}
    <div className="relative px-4 sm:px-0">
      <img
        src="https://images.unsplash.com/photo-1551698618-1dfe5d97d256?q=80&w=2070&auto=format&fit=crop"
        alt="Professional businessman in suit looking confident"
        className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px] rounded-2xl object-cover object-center"
        onError={(e) => {
            (e.target as HTMLImageElement).onerror = null; 
            (e.target as HTMLImageElement).src='https://placehold.co/1200x700/2a2a2a/ffffff?text=Gary+Neville';
        }}
      />
    </div>
  </div>
            <section className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div className='lg:sticky lg:top-10'>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight mb-8">
                  A new personal brand identity, bespoke site and build
                </h2>
                <div className="flex -space-x-2">
                  {[...Array(5)].map((_, i) => (
                    <img key={i} src={`https://i.pravatar.cc/48?img=${i+10}`} alt="Team member" className="w-12 h-12 rounded-full object-cover border-2 border-[#121212]"/>
                  ))}
                </div>
              </div>

              <div className="lg:pt-0">
                <p className="text-neutral-300 text-lg leading-relaxed mb-12">
                  We were tasked to reimagine all aspects of the Gary Neville brand, 
                  from his personal brand identity through to carefully architectured 
                  site structure, design, and build. The website acts as an overview of 
                  all things Gary Neville, from business to broadcasting, to charity and 
                  public speaking.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                  <div>
                    <h4 className="text-neutral-400 text-sm uppercase tracking-wide mb-2">Client</h4>
                    <p className="text-white text-lg sm:text-xl font-medium">Gary Neville</p>
                  </div>
                  <div>
                    <h4 className="text-neutral-400 text-sm uppercase tracking-wide mb-2">Industry</h4>
                    <p className="text-white text-lg sm:text-xl font-medium">Personal Branding</p>
                  </div>
                  <div>
                    <h4 className="text-neutral-400 text-sm uppercase tracking-wide mb-2">Duration</h4>
                    <p className="text-white text-lg sm:text-xl font-medium">12 Weeks</p>
                  </div>
                </div>
              </div>
            </section>

            <section className="mt-20 md:mt-32">
              <div className="relative rounded-2xl overflow-hidden">
                <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1400&q=80" alt="Abstract tech background" className="absolute inset-0 w-full h-full object-cover"/>
                <div className="absolute inset-0 bg-black/50"></div>
                <div className="relative z-10 p-8 md:p-16">
                  <div className="text-xs text-neutral-300 mb-8 tracking-wider uppercase"> LOGOMARK </div>
                  <div className="flex items-center justify-center h-[300px] md:h-[500px]">
                     {/* Content for logomark showcase can go here */}
                  </div>
                </div>
              </div>
            </section>

            <section className="mt-10">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="h-[400px] md:h-[600px] rounded-3xl overflow-hidden">
                  <img src="/Data_analysis.jpg" alt="Data analysis chart" className="w-full h-full object-cover"/>
                </div>
                <div className="h-[400px] md:h-[600px] rounded-3xl overflow-hidden">
                  <img src="/machinelearning_model.jpg" alt="Machine learning model diagram" className="w-full h-full object-cover"/>
                </div>
              </div>
            </section>

            <section className="w-full h-[400px] sm:h-[500px] md:h-[700px] bg-[#1a1a1a] rounded-3xl overflow-hidden mt-10 md:mt-16 p-4 sm:p-6 md:p-8 flex items-center justify-center">
              <div className="w-full h-full rounded-2xl overflow-hidden relative">
                <img src="/fraud_detaction.jpg" alt="Fraud Detection UI" className="w-full h-full object-cover"/>
                <div className="absolute inset-0 bg-black/40"></div>
              </div>
            </section>

            <section className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                <div>
                    <div className="text-neutral-400 font-semibold mb-2">• Website</div>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight">
                    Exclusive yet,<br />
                    progressive
                  </h2>
                </div>
                <div>
                  <p className="text-neutral-300 text-lg leading-relaxed">
                    We created an exclusive yet progressive platform, evoking a sense of sophistication with storytelling at its core. Gary is a very busy man, with involvement in many areas - the new brand and website had to encompass everything Gary is and does.
                  </p>
                </div>
            </section>

            <section className="mt-10 md:mt-20">
              <div className="relative rounded-2xl overflow-hidden h-[400px] md:h-[600px]">
                <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1400&q=80" alt="Background" className="absolute inset-0 w-full h-full object-cover"/>
                <div className="absolute inset-0 bg-black/50"></div>
              </div>
            </section>

            <SliderSection />

            <section className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                <div>
                    <div className="text-neutral-400 font-semibold mb-2">• Logo</div>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight">
                    The heart<br />
                    of the brand
                  </h2>
                </div>
                <div>
                  <p className="text-neutral-300 text-lg leading-relaxed">
                    Centering the brand logo mark at the heart of the brand, the brand identity uses an unapologetically bold responsive logomark and typography to convey its messaging.
                  </p>
                </div>
            </section>

            <section className="mt-10">
              <div className="relative rounded-2xl overflow-hidden h-[400px] md:h-[600px]">
                <img src="/F1_logo.jpg" alt="Logo design process" className="absolute inset-0 w-full h-full object-cover"/>
                <div className="absolute inset-0 bg-black/50"></div>
              </div>
            </section>
            
            <BrandMosaic />
            
            <section className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                <div>
                    <div className="text-neutral-400 font-semibold mb-2">• Process</div>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight">
                    Carefully<br />
                    Curated Media
                  </h2>
                </div>
                <div>
                  <p className="text-neutral-300 text-lg leading-relaxed">
                    We created an exclusive yet progressive platform, evoking a sense of sophistication with storytelling at its core. Gary is a very busy man, with involvement in many areas - the new brand and website had to encompass everything Gary is and does.
                  </p>
                </div>
            </section>

            <section className="mt-10">
              <div className="relative rounded-2xl overflow-hidden h-[400px] md:h-[600px]">
                <img src="/F1_logo.jpg" alt="Curated media showcase" className="absolute inset-0 w-full h-full object-cover"/>
                <div className="absolute inset-0 bg-black/50"></div>
              </div>
            </section>

            <section className="mt-10">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="h-[400px] md:h-[600px] rounded-3xl overflow-hidden">
                  <img src="/Data_analysis.jpg" alt="Data analysis close up" className="w-full h-full object-cover"/>
                </div>
                <div className="h-[400px] md:h-[600px] rounded-3xl overflow-hidden">
                  <img src="/machinelearning_model.jpg" alt="Machine learning model close up" className="w-full h-full object-cover"/>
                </div>
              </div>
            </section>

            <section className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                <div>
                    <div className="text-neutral-400 font-semibold mb-2">• More good stuff</div>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight">
                    What next?
                  </h2>
                </div>
                <div className="flex justify-start lg:justify-end items-center w-full">
                  <a href="#" className="bg-[#C5F277] text-black font-bold py-3 px-6 rounded-full flex items-center gap-2 hover:bg-white transition-colors duration-300 w-full sm:w-auto justify-center">
                    You could be next
                    <ArrowIcon />
                  </a>
                </div>
            </section>

            <ProjectShowcaseSlider />
            
          </main>
        </div>
      </div>    
        <Footer/>
    </>


  );
}
