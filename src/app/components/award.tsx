"use client";
import React from 'react';

// You can define a type for an award for better code quality
interface AwardInfo {
  id: number;
  imageUrl: string;
  altText: string;
}

// Award data with Unsplash images
const awardsData: AwardInfo[] = [
  { id: 1, imageUrl: 'https://images.unsplash.com/photo-1579952363873-27d3bfad9c0d?w=400&h=500&fit=crop', altText: 'Mobile Excellence Award' },
  { id: 2, imageUrl: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=500&fit=crop', altText: 'Mobile Excellence Award' },
  { id: 3, imageUrl: 'https://images.unsplash.com/photo-1580894908361-967195033215?w=400&h=500&fit=crop', altText: 'Honors Award' },
  { id: 4, imageUrl: 'https://images.unsplash.com/photo-1587440871875-191322ee64b0?w=400&h=500&fit=crop', altText: 'UI/UX Design Award' },
  { id: 5, imageUrl: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=500&fit=crop', altText: 'Mobile Excellence Award' },
  { id: 6, imageUrl: 'https://images.unsplash.com/photo-1565688534245-05d6b5be184a?w=400&h=500&fit=crop', altText: 'Honors Award for Boys By Girls' },
  { id: 7, imageUrl: 'https://images.unsplash.com/photo-1572059508921-4ba7d81c9d9e?w=400&h=500&fit=crop', altText: 'Honors Award for Njordn Active' },
  { id: 8, imageUrl: 'https://images.unsplash.com/photo-1580894782765-c3c9edd4b08e?w=400&h=500&fit=crop', altText: 'Mobile Excellence Award for Coloco' },
];

// A small component for the arrow icon to keep the main component clean
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

export default function Award() {
  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Product+Sans&display=swap');
    
        nav, span, button, h2, p, a {
          font-family: 'Product Sans', sans-serif;
        }

        /* Reset any inherited text alignment specifically for award section */
        .award-section * {
          text-align: inherit;
        }
        
        .award-small-text {
          text-align: left !important;
        }
        
        .award-header-content {
          text-align: left !important;
        }
        
        .award-header-title {
          text-align: left !important;
        }

        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .scroll-animation {
          animation: scroll 30s linear infinite;
        }

        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
      
      <div className="award-section bg-black text-white w-full overflow-hidden">
        <div className="mx-auto max-w-[1600px] py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          
          {/* Top small text */}
          <p className="award-small-text mb-6 text-base sm:text-lg text-left">
            • We don't pay for awards
          </p>

          {/* --- Header Section --- */}
          <div className="award-header-content flex flex-col sm:flex-row justify-between items-start mb-12 sm:mb-16">
            <h2 className="award-header-title text-5xl md:text-6xl lg:text-7xl font-semi tracking-tighter max-w-3xl leading-tight text-left">
              We win awards and get recognised for our work
            </h2>
            <a
              href="#" // Replace with your link
              className="mt-12 bg-[#102d4d] text-white font-bold py-3 px-6 rounded-full flex items-center gap-2 hover:bg-white hover:text-black transition-colors duration-300"
            >
              You could be next
              <ArrowIcon />
            </a>
          </div>

          {/* --- Horizontally Scrolling Awards Gallery --- */}
          <div className="overflow-hidden">
            <div className="flex space-x-4 scroll-animation">
              {/* First set of awards */}
              {awardsData.map((award) => (
                <div key={award.id} className="flex-shrink-0 w-[200px] h-[250px] sm:w-[220px] sm:h-[280px]">
                  <img
                    src={award.imageUrl}
                    alt={award.altText}
                    className="w-full h-full object-cover rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                  />
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {awardsData.map((award) => (
                <div key={`duplicate-${award.id}`} className="flex-shrink-0 w-[200px] h-[250px] sm:w-[220px] sm:h-[280px]">
                  <img
                    src={award.imageUrl}
                    alt={award.altText}
                    className="w-full h-full object-cover rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                  />
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </>
  );
}