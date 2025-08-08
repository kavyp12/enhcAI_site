"use client"
import React, { useState } from 'react';

// Font import via CSS-in-JS
const fontStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Product+Sans&display=swap');
  
  .product-sans {
    font-family: 'Product Sans', sans-serif;
  }
`;

const ArrowIcon = () => (<svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7" /><path d="M7 7h10v10" /></svg>);

const services = [
    { title: "ML Models", description: "Custom machine learning models to uncover insights and automate complex processes.", image: "https://images.unsplash.com/photo-1599441215132-1cf6d12a6d44?w=400&h=250&fit=crop&crop=center" },
    { title: "NLP", description: "Harnessing the power of language with advanced NLP solutions for sentiment analysis and more.", image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=400&h=250&fit=crop&crop=center" },
    { title: "Vision AI", description: "State-of-the-art computer vision for image recognition, object detection, and video analysis.", image: "https://images.unsplash.com/photo-1617296532431-dce95166dc7e?w=400&h=250&fit=crop&crop=center" },
    { title: "Analytics", description: "Leveraging predictive analytics to forecast trends and provide actionable intelligence.", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop&crop=center" },
    { title: "AI Strategy", description: "Expert consulting to help you identify opportunities and create a roadmap for AI integration.", image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=400&h=250&fit=crop&crop=center" }
];

const ServiceItem = ({ title, description, image, isHovered, onTouch, isAnyHovered }: { title: string, description: string, image: string, isHovered: boolean, onTouch: () => void, isAnyHovered: boolean }) => (
    <div 
        className="relative border-b border-[var(--border-main)] py-6 md:py-8 overflow-hidden cursor-pointer" 
        onMouseEnter={onTouch} 
        onMouseLeave={() => {}}
        onTouchStart={onTouch}
        onClick={onTouch}
    >
        <div className="flex items-center">
            <h1 className={`text-4xl md:text-8xl font-medium leading-tight transition-all duration-500 ease-out product-sans ${isHovered ? 'md:translate-x-56 sm:translate-x-40 translate-x-32 text-[var(--text-main)]' : 'translate-x-0'} ${isAnyHovered && !isHovered ? 'text-[var(--text-muted)]' : 'text-[var(--text-main)]'}`}>
                {title}
            </h1>
        </div>
        
        <div className={`block md:hidden mt-4 transition-all duration-500 ease-out ${isHovered ? 'opacity-100 max-h-40' : 'opacity-0 max-h-0'}`}>
            <div className="w-full h-32 rounded-lg overflow-hidden shadow-2xl">
                <img src={image} alt={title} className="w-full h-full object-cover"/>
            </div>
            <p className="mt-3 text-sm text-[var(--text-muted)] product-sans">{description}</p>
        </div>
        
        <div className={`hidden md:block absolute left-0 top-1/2 transform -translate-y-1/2 transition-all duration-500 ease-out ${isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            <div className="w-48 h-32 rounded-lg overflow-hidden shadow-2xl">
                <img src={image} alt={title} className="w-full h-full object-cover"/>
            </div>
        </div>
    </div>
);

export default function Business() {
  const [hoveredService, setHoveredService] = useState<number | null>(null);

  const handleServiceInteraction = (index: number) => {
    setHoveredService(hoveredService === index ? null : index);
  };

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: fontStyles }} />
      <section className="bg-[var(--bg-secondary)] text-[var(--text-main)] min-h-screen px-4 sm:px-8 py-16 md:px-20 md:py-24 product-sans">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start mb-20 md:mb-32">
          <div className="flex items-center gap-2 text-sm product-sans">
            <span className="bg-[var(--text-main)] w-2 h-2 rounded-full"></span>Our Expertise
          </div>
          <div className="text-center md:col-span-1">
            <h2 className="text-3xl md:text-5xl font-medium leading-tight product-sans">
              How we take your business to the next level
            </h2>
          </div>
          <div className="flex flex-col items-start md:items-end text-left md:text-right">
            <p className="max-w-xs mb-6 text-[var(--text-muted)] product-sans">
              We are an AI solutions provider with deep expertise, on a mission to help you take the next giant leap in your business's evolution.
            </p>
            <button className="bg-[var(--brand-primary)] text-white font-bold py-3 px-6 rounded-full flex items-center gap-3 hover:bg-[var(--brand-primary-hover)] transition-colors product-sans">
              See all services <ArrowIcon />
            </button>
          </div>
        </div>
        <div className="max-w-7xl mx-auto md:ml-auto md:pl-70">
          {services.map((service, index) => (
            <ServiceItem 
              key={service.title} 
              title={service.title} 
              description={service.description} 
              image={service.image} 
              isHovered={hoveredService === index} 
              isAnyHovered={hoveredService !== null} 
              onTouch={() => handleServiceInteraction(index)}
            />
          ))}
        </div>
      </section>
    </>
  );
}