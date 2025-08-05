"use client";

import React from 'react';

// --- SVG Icon Components ---
// I've created new icons to exactly match the reference image.

const WebDesignIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-black">
    <path d="M3 7V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5H5C3.89543 5 3 5.89543 3 7Z" stroke="black" strokeWidth="2" strokeLinejoin="round"/>
    <path d="M3 10H21" stroke="black" strokeWidth="2" strokeLinejoin="round"/>
    <path d="M9 10V19" stroke="black" strokeWidth="2" strokeLinejoin="round"/>
  </svg>
);

const ECommerceIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-black">
    <path d="M18 6L6 18" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M6 6L18 18" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const UXDesignIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-black">
    <path d="M12 13.8C14.6523 13.8 16.8 11.6523 16.8 9C16.8 6.34772 14.6523 4.2 12 4.2C9.34772 4.2 7.2 6.34772 7.2 9C7.2 11.6523 9.34772 13.8 12 13.8Z" stroke="black" strokeWidth="2" strokeLinejoin="round"/>
    <path d="M3 21H21V19.8C21 16.5924 16.9706 15 12 15C7.02944 15 3 16.5924 3 19.8V21Z" stroke="black" strokeWidth="2" strokeLinejoin="round"/>
  </svg>
);

const ResponsiveDesignIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-black">
        <path d="M21 15.6H3V20C3 20.5523 3.44772 21 4 21H20C20.5523 21 21 20.5523 21 20V15.6Z" stroke="black" strokeWidth="2" strokeLinejoin="round"/>
        <path d="M21 8.4H3V13.2H21V8.4Z" stroke="black" strokeWidth="2" strokeLinejoin="round"/>
        <path d="M20 3H4C3.44772 3 3 3.44772 3 4V8.4H21V4C21 3.44772 20.5523 3 20 3Z" stroke="black" strokeWidth="2" strokeLinejoin="round"/>
    </svg>
);

const WireframesIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-black">
        <path d="M21 15.6H3V21H21V15.6Z" stroke="black" strokeWidth="2" strokeLinejoin="round"/>
        <path d="M21 8.4H3V13.2H21V8.4Z" stroke="black" strokeWidth="2" strokeLinejoin="round"/>
        <path d="M10.2 3H3V6H10.2V3Z" stroke="black" strokeWidth="2" strokeLinejoin="round"/>
    </svg>
);

const StrategyIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-black">
        <circle cx="12" cy="12" r="10" stroke="black" strokeWidth="2"/>
        <circle cx="12" cy="12" r="6" stroke="black" strokeWidth="2"/>
        <circle cx="12" cy="12" r="2" stroke="black" strokeWidth="2"/>
    </svg>
);

const ArrowIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);


// --- Main Component ---

const HelpWith = () => {
  return (
    <div className="bg-[#000000] text-white font-sans p-8 sm:p-16 rounded-xl">
      {/* Header Section */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-16 lg:mb-24">
        <div className="w-full lg:w-2/3">
          <p className="text-sm font-base text-gray-400 mb-4">• What we can help you with</p>
          <h1 className="text-4xl sm:text-5xl md:text-5xl font-bold leading-tight md:leading-tight">
            A team of web design <br /> experts that can help <br /> you design and build a <br />website you're proud of
          </h1>
        </div>
        <div className="mt-8 lg:mt-0">
          <button className="bg-[#D4FF40] text-black font-semibold py-4 px-8 rounded-full flex items-center gap-3 whitespace-nowrap transition-transform transform hover:scale-105">
            Get in touch today
            <ArrowIcon />
          </button>
        </div>
      </div>

      {/* Services Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-12">
        {/* Web Design */}
        <div className="pb-8">
          <div className="flex items-center gap-x-4 mb-4">
            <div className="bg-[#D4FF40] p-2 rounded-lg inline-flex">
              <WebDesignIcon />
            </div>
            <h3 className="text-2xl font-bold">Web Design</h3>
          </div>
          <p className="text-gray-400 leading-relaxed mb-6">
            Bespoke web design perfect for your brand and target audience.
          </p>
          <div className="w-full h-px bg-gray-700"></div>
        </div>

        {/* eCommerce */}
        <div className="pb-8">
          <div className="flex items-center gap-x-4 mb-4">
            <div className="bg-[#D4FF40] p-2 rounded-lg inline-flex">
              <ECommerceIcon />
            </div>
            <h3 className="text-2xl font-bold">eCommerce</h3>
          </div>
          <p className="text-gray-400 leading-relaxed mb-6">
            Sell products online 24/7 through a well-designed, easy-to-use eCommerce website.
          </p>
          <div className="w-full h-px bg-gray-700"></div>
        </div>

        {/* UX Design */}
        <div className="pb-8">
          <div className="flex items-center gap-x-4 mb-4">
            <div className="bg-[#D4FF40] p-2 rounded-lg inline-flex">
              <UXDesignIcon />
            </div>
            <h3 className="text-2xl font-bold">UX Design</h3>
          </div>
          <p className="text-gray-400 leading-relaxed mb-6">
            Provide meaningful and relevant experiences to users through user experience (UX) design.
          </p>
          <div className="w-full h-px bg-gray-700"></div>
        </div>

        {/* Responsive Design */}
        <div className="pb-8">
          <div className="flex items-center gap-x-4 mb-4">
            <div className="bg-[#D4FF40] p-2 rounded-lg inline-flex">
              <ResponsiveDesignIcon />
            </div>
            <h3 className="text-2xl font-bold">Responsive Design</h3>
          </div>
          <p className="text-gray-400 leading-relaxed mb-6">
            Designed for all the latest devices, including iPhone and iPad.
          </p>
          <div className="w-full h-px bg-gray-700"></div>
        </div>

        {/* Wireframes */}
        <div className="pb-8">
          <div className="flex items-center gap-x-4 mb-4">
            <div className="bg-[#D4FF40] p-2 rounded-lg inline-flex">
              <WireframesIcon />
            </div>
            <h3 className="text-2xl font-bold">Wireframes</h3>
          </div>
          <p className="text-gray-400 leading-relaxed mb-6">
            A visualization tool for presenting a website's proposed structure, functions, and content.
          </p>
          <div className="w-full h-px bg-gray-700"></div>
        </div>

        {/* Strategy */}
        <div className="pb-8">
          <div className="flex items-center gap-x-4 mb-4">
            <div className="bg-[#D4FF40] p-2 rounded-lg inline-flex">
              <StrategyIcon />
            </div>
            <h3 className="text-2xl font-bold">Strategy</h3>
          </div>
          <p className="text-gray-400 leading-relaxed mb-6">
            Not only looking at the now, but also to the future to see potential growth.
          </p>
          <div className="w-full h-px bg-gray-700"></div>
        </div>

      </div>
    </div>
  );
};

export default HelpWith;