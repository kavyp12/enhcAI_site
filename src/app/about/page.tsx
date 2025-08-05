"use client";
import React, { useEffect, useState } from 'react';
import Navbar from '@/app/components/navbar';
import Team from '@/app/components/team';
import Workwith from '@/app/components/workwith';
import Testimonial from '@/app/components/testimonial';
import Award from '@/app/components/award';
import Blog from '@/app/components/blog';
import Footer from '@/app/components/footer';

export default function AboutPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Start the animation shortly after the component mounts
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // Image sources for the gallery (unchanged)
  const images = [
    {
      src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=560&fit=crop",
      alt: "Woman smiling in a modern office"
    },
    {
      src: "https://images.unsplash.com/photo-1552581234-26160f608093?w=560&h=720&fit=crop",
      alt: "Team collaboration around a laptop"
    },
    {
      src: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=560&h=720&fit=crop",
      alt: "Three men looking at a screen"
    },
    {
      src: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=560&fit=crop",
      alt: "Man working on a laptop"
    }
  ];

  // Responsive positions for the image gallery (unchanged)
  const finalPositions = [
    "w-[140px] h-[190px] -rotate-12 -translate-x-[110px] -translate-y-12 sm:w-[200px] sm:h-[260px] sm:-translate-x-[180px] md:w-[240px] md:h-[300px] md:-translate-x-[350px] lg:w-[280px] lg:h-[340px] lg:-translate-x-[400px] lg:-translate-y-16 z-10",
    "w-[140px] h-[190px] -rotate-3 -translate-x-[30px] -translate-y-12 sm:w-[200px] sm:h-[260px] sm:-translate-x-[60px] md:w-[240px] md:h-[300px] md:-translate-x-[120px] lg:w-[280px] lg:h-[340px] lg:-translate-x-[150px] lg:-translate-y-16 z-20",
    "w-[140px] h-[190px] rotate-3 translate-x-[30px] -translate-y-12 sm:w-[200px] sm:h-[260px] sm:translate-x-[60px] md:w-[240px] md:h-[300px] md:translate-x-[120px] lg:w-[280px] lg:h-[340px] lg:translate-x-[150px] lg:-translate-y-16 z-20",
    "w-[140px] h-[190px] rotate-12 translate-x-[110px] -translate-y-12 sm:w-[200px] sm:h-[260px] sm:translate-x-[180px] md:w-[240px] md:h-[300px] md:translate-x-[350px] lg:w-[280px] lg:h-[340px] lg:translate-x-[400px] lg:-translate-y-16 z-10"
  ];

  // Initial off-screen positions for the animation intro (unchanged)
  const initialPositions = [
    "-translate-x-[1000px]",
    "-translate-x-[800px]",
    "translate-x-[600px]",
    "translate-x-[400px]"
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Navbar />

      <main className="flex flex-col justify-center items-center px-4 py-12 md:px-8 text-center font-sans pt-24 sm:pt-32">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight mb-0 tracking-tight max-w-2xl">
          We build the future, one algorithm at a time.
        </h1>

        <div className="relative flex justify-center items-center h-[300px] sm:h-[400px] md:h-[500px] w-full max-w-6xl mt-8 mb-8">
          {images.map((image, index) => (
            <div
              key={index}
              className={`absolute rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl transition-all duration-[3000ms] ease-out hover:scale-105 hover:z-50 ${
                isVisible
                  ? finalPositions[index]
                  : `w-[140px] h-[190px] sm:w-[200px] sm:h-[260px] md:w-[240px] md:h-[300px] lg:w-[280px] lg:h-[340px] ${initialPositions[index]} opacity-0`
              }`}
              style={{
                transitionDelay: `${index * 200}ms`,
                opacity: isVisible ? 1 : 0
              }}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        <button className="bg-lime-300 text-black border-none rounded-full px-5 py-2 text-sm font-bold cursor-pointer inline-flex items-center gap-4 transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-105 shadow-lg hover:shadow-xl hover:shadow-lime-300/30 mt-4 mb-8">
          <span>Explore our work</span>
          <span className="bg-black rounded-full w-7 h-7 flex justify-center items-center text-lime-300 transition-transform duration-300 group-hover:translate-x-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              width="14"
              height="18"
            >
              <path
                fillRule="evenodd"
                d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </button>

        {/* About Us Section */}
        <section className="bg-black text-white py-16 px-4 sm:px-6 lg:px-20 w-full">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:items-start gap-12">
            {/* Left Column */}
            <div className="flex-1 space-y-4 text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start space-x-2 text-sm">
                <div className="w-2 h-2 bg-green-400 rounded-full" />
                <span className="text-gray-300">Pioneering Intelligence</span>
              </div>
              <h1 className="text-3xl lg:text-4xl font-normal leading-tight tracking-tight">
                We are enhcAI, a dedicated team turning the most complex data into intelligent, actionable solutions for your business.
              </h1>
            </div>
            {/* Right Column */}
            <div className="flex-1 space-y-6 text-gray-300 text-base lg:text-lg leading-relaxed text-center lg:text-left">
              <p>
                Founded in 2020, enhcAI is at the forefront of the artificial intelligence revolution. We specialize in creating bespoke AI solutions in{' '}
                <span className="underline">Machine Learning</span>,{' '}
                <span className="underline">Deep Learning</span>,{' '}
                <span className="underline">Computer Vision</span>, and{' '}
                <span className="underline">Natural Language Processing (NLP)</span>.
              </p>
              <p>
                Our technology stack is built on powerful, scalable frameworks like{' '}
                <span className="underline">TensorFlow</span> and{' '}
                <span className="underline">PyTorch</span>, enabling us to engineer robust AI models that integrate seamlessly and drive tangible results for your business.
              </p>
              <p>
                If you're ready to unlock the power of your data and partner with a team dedicated to innovation,{' '}
                <span className="underline">get in touch</span> with us today.
              </p>
            </div>
          </div>
        </section>


        <Team />
        <div className="w-full bg-[#121212] mt-12">
          <Workwith />
        </div>
        <Testimonial />
        <Award />
        <Blog />
        <Footer />
      </main>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Product+Sans&display=swap');

        body, html {
            overflow-x: hidden;
        }

        h1, button, span, p, div {
          font-family: 'Product Sans', sans-serif;
        }
      `}</style>
    </div>
  );
}