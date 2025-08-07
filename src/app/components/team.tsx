"use client";
import React from "react";

const teamMembers = [
  { name: "Mark", role: "Search Engine Optimisation", avatar: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=500&h=700&fit=crop", blurred: true },
  { name: "Natasia", role: "Content Writer", avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&h=700&fit=crop" },
  { name: "Joe", role: "Web Developer", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&h=700&fit=crop" },
  { name: "Chris", role: "Accounts & Finance", avatar: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=500&h=700&fit=crop" },
];

const stats = [
  { title: "Clients", value: "250+", description: "With over a decade of experience, enhc is an energetic, fresh and vibrant team offering creative talent and industry knowledge." },
  { title: "Referrals", value: "55%", description: "Over 55% of our projects are referrals from clients already with us. Our clients love to spread the love far and wide." },
  { title: "Male:Female ratio", value: "56:44", description: "In a male-dominated industry, we are proud to say we're striving for equal gender roles at enhc." },
  { title: "Burritos consumed", value: "189", description: "We're not lying. We love a burrito and know a good one when we try it. Our favourite spot is Panchos (not an ad, we wish)" },
];

const Team: React.FC = () => {
  const duplicatedMembers = [...teamMembers, ...teamMembers, ...teamMembers, ...teamMembers];

  return (
    <>
      <style>{`
        .stat-number { 
          font-size: clamp(2.5rem, 8vw, 5rem); 
          line-height: 1; 
          font-weight: 700; 
        }
        @keyframes trainMove { 
          0% { transform: translateX(0); } 
          100% { transform: translateX(-25%); } 
        }
        .train-track { 
          animation: trainMove 60s linear infinite; 
        }
        .train-container:hover .train-track { 
          animation-play-state: paused; 
        }
        @media (max-width: 640px) {
          .stat-number {
            font-size: clamp(2rem, 12vw, 3rem);
          }
        }
      `}</style>

      <div className="bg-black text-white min-h-screen p-4 sm:p-8 md:p-16 lg:p-24">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12 sm:mb-16">
            <p className="text-gray-400 text-sm tracking-widest uppercase">&bull; Our Team</p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold mt-2 px-4">
              Multiple personalities, <br className="sm:hidden" /> No egos.
            </h1>
          </div>

          <div className="train-container overflow-hidden w-full h-[300px] sm:h-[350px] md:h-[500px] mb-12 sm:mb-16">
            <div className="train-track flex w-[400%] h-full items-center">
              {duplicatedMembers.map((member, index) => {
                const isEven = (index % teamMembers.length) % 2 === 0;
                return (
                  <div key={index} className={`relative bg-gray-900 rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg aspect-[3/4] flex-shrink-0 w-[180px] sm:w-[200px] md:w-[300px] mx-1.5 sm:mx-2 md:mx-3 ${isEven ? 'transform md:translate-y-[-1.5rem]' : 'transform md:translate-y-[2rem]'}`}>
                    <img src={member.avatar} alt={member.name} className={`w-full h-full object-cover rounded-2xl sm:rounded-3xl ${member.blurred ? "blur-md scale-105" : ""}`}/>
                    <div className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-[#102d4d] text-white rounded-full p-1 sm:p-1.5 w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center text-xs sm:text-sm font-bold">+</div>
                    <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 bg-gradient-to-t from-black/90 to-transparent rounded-2xl sm:rounded-3xl">
                      <h3 className="text-sm sm:text-lg font-semibold">{member.name}</h3>
                      <p className="text-gray-300 text-xs sm:text-sm">{member.role}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-12 sm:mt-16 md:mt-24">
            <div className="flex justify-center mb-12 sm:mb-16">
              <button className="flex items-center space-x-2 px-4 sm:px-6 py-2.5 sm:py-3 bg-[#102d4d] text-white rounded-full font-bold text-xs sm:text-sm transition-transform duration-300 hover:scale-105">
                <span>Meet the whole Team</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 sm:h-4 sm:w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
            
            {/* Mobile-first stats grid */}
            <div className="grid grid-cols-1 gap-8 sm:gap-10 md:grid-cols-2 md:gap-12 lg:grid-cols-4 lg:gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center px-4 sm:px-0 sm:text-left">
                  <h4 className="text-white text-base sm:text-lg font-normal mb-3 sm:mb-2 tracking-wide">{stat.title}</h4>
                  <div className="w-12 sm:w-16 h-0.5 bg-gray-600 mb-4 sm:mb-6 mx-auto sm:mx-0"></div>
                  <p className="stat-number text-white mb-4 sm:mb-6">{stat.value}</p>
                  <p className="text-gray-400 text-sm sm:text-sm leading-relaxed max-w-xs mx-auto sm:max-w-none sm:mx-0">{stat.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Team;