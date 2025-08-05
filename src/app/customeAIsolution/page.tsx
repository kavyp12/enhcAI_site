"use client";

import React, { ReactNode } from 'react';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { ArrowUpRight, ArrowLeft, ArrowRight, Star } from 'lucide-react';
import Workwith from '../components/workwith';
import Footer from '../components/footer';
import Navbar from '../components/navbar';
import Blog from '../components/blog';


// --- LogoCard Component ---
const LogoCard = ({ children }: { children: ReactNode }) => (
  <div className="bg-[#161616] rounded-2xl h-32 sm:h-36 flex items-center justify-center p-6 hover:grayscale-0 transition-all duration-300 ease-in-out cursor-pointer min-w-[200px] sm:min-w-[280px] flex-shrink-0">
    {children}
  </div>
);

// --- SVG Icon Components ---
// I've created new icons to exactly match the reference image.

const AIModelsIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-black">
        <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="black" strokeWidth="2" strokeLinejoin="round"/>
        <path d="M2 17L12 22L22 17" stroke="black" strokeWidth="2" strokeLinejoin="round"/>
        <path d="M2 12L12 17L22 12" stroke="black" strokeWidth="2" strokeLinejoin="round"/>
    </svg>
);

const NLPIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-black">
        <path d="M4 7H20" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M7 4V7" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M17 4V7" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M6 12H18" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 12V18" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M9 18H15" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);


const ComputerVisionIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-black">
        <path d="M1 12C1 12 5 4 12 4C19 4 23 12 23 12C23 12 19 20 12 20C5 20 1 12 1 12Z" stroke="black" strokeWidth="2" strokeLinejoin="round"/>
        <circle cx="12" cy="12" r="3" stroke="black" strokeWidth="2" strokeLinejoin="round"/>
    </svg>
);


const PredictiveAnalyticsIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-black">
        <path d="M4 20V14" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 20V4" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M20 20V10" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);


const DataStrategyIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-black">
        <path d="M3 3H9V9H3V3Z" stroke="black" strokeWidth="2" strokeLinejoin="round"/>
        <path d="M15 3H21V9H15V3Z" stroke="black" strokeWidth="2" strokeLinejoin="round"/>
        <path d="M3 15H9V21H3V15Z" stroke="black" strokeWidth="2" strokeLinejoin="round"/>
        <path d="M15 15H21V21H15V15Z" stroke="black" strokeWidth="2" strokeLinejoin="round"/>
        <path d="M9 6H15" stroke="black" strokeWidth="2" strokeLinejoin="round"/>
        <path d="M9 18H15" stroke="black" strokeWidth="2" strokeLinejoin="round"/>
        <path d="M6 9V15" stroke="black" strokeWidth="2" strokeLinejoin="round"/>
        <path d="M18 9V15" stroke="black" strokeWidth="2" strokeLinejoin="round"/>
    </svg>
);


const AIIntegrationIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-black">
        <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="black" strokeWidth="2" strokeLinejoin="round"/>
        <path d="M14 2V8H20" stroke="black" strokeWidth="2" strokeLinejoin="round"/>
        <path d="M12 18L12 12" stroke="black" strokeWidth="2" strokeLinejoin="round"/>
        <path d="M9 15H15" stroke="black" strokeWidth="2" strokeLinejoin="round"/>
    </svg>
);


const ArrowIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);


// --- Main Component ---

const testimonials = [
  {
    id: 1,
    rating: 5,
    text: "The team delivered an exceptional AI solution that transformed our business processes. Their expertise and attention to detail were outstanding.",
    author: "Sarah Johnson",
    company: "Tech Innovations Ltd",
    avatar: "https://randomuser.me/api/portraits/women/1.jpg"
  },
  {
    id: 2,
    rating: 5,
    text: "Working with this team was a game-changer. They understood our vision and created a custom AI solution that exceeded our expectations.",
    author: "Michael Chen",
    company: "Digital Dynamics",
    avatar: "https://randomuser.me/api/portraits/men/2.jpg"
  },
  {
    id: 3,
    rating: 5,
    text: "Professional, innovative, and results-driven. Their AI solutions have helped us stay ahead of the competition in our industry.",
    author: "Emily Rodriguez",
    company: "Future Systems Inc",
    avatar: "https://randomuser.me/api/portraits/women/3.jpg"
  },
  {
    id: 4,
    rating: 5,
    text: "The custom AI implementation was seamless and the support throughout the project was exceptional. Highly recommended!",
    author: "David Thompson",
    company: "Smart Solutions Co",
    avatar: "https://randomuser.me/api/portraits/men/4.jpg"
  }
];

// Data for the new blog post slider
const blogPosts = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=2070&q=80',
      readTime: '6 min read',
      title: 'Our Mission to Advance AI Innovation',
      description: 'In our own words, how AIInnovate is pushing the boundaries of artificial intelligence to solve real-world problems...',
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=2070&q=80',
      readTime: '10 min read',
      title: 'Why We Focus on Ethical AI Development',
      description: 'Co-Founder of AIInnovate, Dr. Jane Smith, explains our commitment to responsible AI and why ethics matter...',
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1551288049-bcc0d0a70e66?auto=format&fit=crop&w=2070&q=80',
      readTime: '4 min read',
      title: 'Why Choose AIInnovate for AI Solutions?',
      description: 'Hi, I’m Dr. Jane, Co-Founder of AIInnovate, an AI company based in San Francisco dedicated to innovative AI solutions...',
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=2070&q=80',
      readTime: '8 min read',
      title: 'The Future of AI-Powered Automation',
      description: 'Exploring how AIInnovate’s tools are transforming industries through intelligent automation and machine learning...',
    },
];

const HelpWith = () => {
  return (

    <><Navbar /><div>
       <style jsx>{`
  @import url('https://fonts.googleapis.com/css2?family=Product+Sans&display=swap');
  
  @keyframes scroll-left {
    0% {
      transform: translateX(0%);
    }
    100% {
      transform: translateX(-100%);
    }
  }

  @keyframes scroll-right {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(0%);
    }
  }

  .animate-scroll-left {
    animation: scroll-left 30s linear infinite;
  }

  .animate-scroll-right {
    animation: scroll-right 30s linear infinite;
  }
  
  .left-text {
    animation: scroll-left 30s linear infinite;
  }

  .right-text {
    animation: scroll-right 30s linear infinite;
  }
  
  * {
    font-family: 'Product Sans', sans-serif;
  }
`}</style>

          {/* Styles for the new blog section */}
          <style jsx global>{`
        .font-product-sans {
          font-family: 'Product Sans', sans-serif;
        }
        
        /* Reset any inherited text alignment specifically for blog section */
        .blog-section * {
          text-align: inherit;
        }
        
        .blog-left-content {
          text-align: left !important;
        }
        
        .blog-card-content {
          text-align: left !important;
        }
      `}</style>

          <div className="bg-black min-h-screen">
              <div className="font-product-sans bg-black text-white flex min-h-screen w-full items-center justify-center p-8 sm:p-16 lg:p-24">
                  <div className="flex w-full max-w-7xl flex-col gap-10 lg:flex-row lg:gap-20">
                      {/* Left Column */}
                      <div className="flex-1 text-center lg:text-left">
                          <p className="mb-4 text-lg">• Custom AI Solutions</p>
                          <h1 className="text-5xl sm:text-6xl font-semi leading-none tracking-tight lg:text-6xl">
                              AI Solutions Studio <br />for Your Business.
                          </h1>
                      </div>

                      {/* Right Column */}
                      <div className="flex-1 pt-2 text-lg leading-relaxed text-gray-300 sm:text-xl text-center lg:text-left">
                          <p className="mb-6">
                              Here at AIInnovate, we offer expert advice, deep industry experience, and a strong portfolio of successful AI projects.
                          </p>
                          <p>
                              Machine Learning, NLP, computer vision, and data strategy — we cover all areas of artificial intelligence. We can take a start-up with a novel idea to a fully functioning AI-powered product. We can revamp an existing system with intelligent automation or take a successful enterprise to the next level with predictive analytics. Our talented and creative in-house <span className="text-white underline decoration-gray-500 decoration-1 underline-offset-4">AI solutions team</span> will work alongside you in collaboration to build a solution that reflects your brand, solves critical business problems, and delivers measurable results.
                          </p>
                      </div>
                  </div>
              </div>

              {/* Image Section */}
              <div className="w-full bg-black px-4 sm:px-8 lg:px-24 pb-16">
                  <div className="relative w-full max-w-7xl mx-auto h-[60vh] overflow-hidden rounded-3xl">
                      <img
                          src="https://images.unsplash.com/photo-1599658880436-c61792e70672?auto=format&fit=crop&w=2070&q=80"
                          alt="AI and robotics concept with a modern interface"
                          className="w-full h-full object-cover" />
                      <div className="absolute top-4 left-4 sm:top-6 sm:left-6 bg-black bg-opacity-80 px-4 py-2 sm:px-5 sm:py-3 rounded-full backdrop-blur-sm">
                          <span className="text-white text-xs sm:text-sm font-medium">Tell me more</span>
                          <svg className="inline-block ml-2 w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                      </div>
                  </div>
              </div>

              {/* Startup Section */}
              <div className="w-full bg-black text-white px-8 sm:px-16 lg:px-24 py-16">
                  <div className="flex w-full max-w-7xl mx-auto flex-col gap-16 lg:flex-row lg:gap-20 items-center">
                      {/* Left Column */}
                      <div className="flex-1 text-center lg:text-left">
                          <p className="mb-6 text-lg">• AI Solutions</p>
                          <h2 className="text-4xl lg:text-5xl font-normal leading-tight tracking-tight mb-8">
                              Are you a startup, a well-established company, in the US or worldwide? It doesn't matter. We partner with a diverse range of clients.
                          </h2>
                          <div className="inline-flex justify-center lg:justify-start">
                              <Link href="#" className="group bg-[#c6ff00] text-black font-medium text-sm py-2 px-4 rounded-full self-start flex items-center gap-2 transition-transform hover:scale-105 mt-4">
                                  About AIInnovate
                                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17l9.2-9.2M17 17V7H7" />
                                  </svg>
                              </Link>
                          </div>
                      </div>

                      {/* Right Column - Capabilities List */}
                      <div className="flex-1 w-full text-center lg:text-left lg:pt-16 lg:-translate-y-15 lg:translate-x-80">
                          <h3 className="text-gray-400 text-sm mb-4">Our AI Capabilities</h3>
                          <div className="space-y-2 text-sm inline-block text-left">
                              {[
                                  'Custom AI Models',
                                  'Natural Language Processing',
                                  'Computer Vision',
                                  'Predictive Analytics',
                                  'Data Strategy',
                                  'AI Integration'
                              ].map((capability, index) => (
                                  <div key={index} className="flex items-center gap-2">
                                      <div className="w-4 h-4 bg-lime-400 rounded-full flex items-center justify-center flex-shrink-0">
                                          <svg className="w-3 h-3 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                          </svg>
                                      </div>
                                      <span className="text-white text-sm">{capability}</span>
                                  </div>
                              ))}
                          </div>
                      </div>
                  </div>
              </div>

              {/* Animated Text Section */}
              <div className="overflow-x-hidden bg-black py-8 text-center">
                  <div className="left-text w-full text-white text-6xl md:text-8xl lg:text-9xl font-bold whitespace-nowrap leading-none">
                      Let's build together. Let's build together. Let's build together. Let's build together. Let's build together. Let's build together.
                  </div>
                  <div className="right-text w-full text-white text-6xl md:text-8xl lg:text-9xl font-bold whitespace-nowrap leading-none">
                      Let's build together. Let's build together. Let's build together. Let's build together. Let's build together. Let's build together.
                  </div>
              </div>

              {/* New Section - Exact Replication of Provided Image */}
              <div className="w-full bg-black text-white px-8 sm:px-16 lg:px-24 py-16">
                  <div className="flex w-full max-w-7xl mx-auto flex-col lg:flex-row gap-16 lg:gap-20 items-center">
                      {/* Left Column - Text Content */}
                      <div className="flex-1 space-y-6 text-center lg:text-left">
                          <p className="text-md">• We approach every project with a clear vision.</p>
                          <h2 className="text-4xl lg:text-5xl font-normal leading-tight tracking-tight">
                              We like to cut through the noise and build intelligent, powerful, and functional AI solutions.
                          </h2>
                          <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
                              <p>
                                  We don't <em className="italic">just</em> build complex algorithms. Here at AIInnovate, we understand all aspects of a successful AI implementation, from data strategy through model development and testing, to deployment and scaling. We tailor our service to the client and the project requirements.
                              </p>
                          </div>
                          <div className="pt-4 flex justify-center lg:justify-start">
                              <Link href="#" className="group bg-[#c6ff00] text-black font-medium text-sm py-3 px-6 rounded-full inline-flex items-center gap-2 transition-transform hover:scale-105">
                                  Start a project today
                                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17l9.2-9.2M17 17V7H7" />
                                  </svg>
                              </Link>
                          </div>
                      </div>

                      {/* Right Column - Image with People */}
                      <div className="flex-1 relative w-full">
                          <div className="relative h-[400px] sm:h-[500px] w-full">
                              <div className="absolute bottom-0 left-0 right-0 h-full rounded-2xl overflow-hidden">
                                  <img
                                      src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                                      alt="Two people having a conversation in an office setting"
                                      className="w-full h-full object-cover" />
                              </div>
                          </div>
                      </div>
                  </div>
              </div>

              <div className="w-full bg-black text-white px-8 sm:px-16 lg:px-24 py-16">
                  <div className="flex w-full max-w-7xl mx-auto flex-col lg:flex-row gap-16 lg:gap-20 items-center">
                      {/* Left Column - Image with People */}
                      <div className="flex-1 relative w-full lg:order-1 order-2">
                          <div className="relative h-[400px] sm:h-[500px] w-full">
                              <div className="absolute bottom-0 left-0 right-0 h-full rounded-2xl overflow-hidden">
                                  <img
                                      src="/AI_solution.jpg"
                                      alt="Team collaborating around a table with data visualizations"
                                      className="w-full h-full object-cover" />
                              </div>
                          </div>
                      </div>

                      {/* Right Column - Text Content */}
                      <div className="flex-1 space-y-6 text-center lg:text-left lg:order-2 order-1">
                          <h2 className="text-4xl lg:text-5xl font-normal leading-tight tracking-tight">
                              We build intelligent solutions that are powerful, scalable, and easy to integrate.
                          </h2>
                          <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
                              <p>
                                  We don't <em className="italic">just</em> build impressive models. Here at AIInnovate, we understand all aspects of a successful AI product, from development and testing to deployment and ongoing support. We tailor our services to meet your specific project requirements.
                              </p>
                          </div>
                          <div className="pt-4 flex justify-center lg:justify-start">
                          </div>
                      </div>
                  </div>
              </div>

              {/* Technologies Section - Fixed Black Background */}
              <div className="w-full bg-black text-white px-4 sm:px-8 lg:px-24 py-16">
                  <div className="w-full max-w-7xl mx-auto flex flex-col items-center">
                      <div className="flex flex-col w-full text-center">
                          {/* Headline - Fixed alignment */}
                          <h1 className="text-4xl sm:text-5xl font-semi text-white mt-2 max-w-5xl leading-tight">
                              <span className="inline-block lg:-translate-x-80">We use the latest technologies</span><br className="hidden sm:block" />
                              <span className="inline-block lg:-translate-x-70">to build future-proof AI solutions.</span>
                          </h1>
                      </div>

                      {/* --- Animated Logo Carousel Section --- */}
                      <div className="mt-16 overflow-hidden w-full">
                          {/* Top Row - Moving Right to Left */}
                          <div className="mb-6">
                              <div className="flex animate-scroll-left gap-6 justify-center">
                                  {/* First set of logos */}
                                  <LogoCard><p className="text-3xl sm:text-4xl font-bold text-white">OpenAI</p></LogoCard>
                                  <LogoCard><p className="text-3xl sm:text-4xl font-bold text-white">Figma</p></LogoCard>
                                  <LogoCard><p className="text-3xl sm:text-4xl font-bold text-white">Notion</p></LogoCard>
                                  <LogoCard><p className="text-3xl sm:text-4xl font-bold text-white">Midjourney</p></LogoCard>
                                  <LogoCard><p className="text-3xl sm:text-4xl font-bold text-white">Anthropic</p></LogoCard>

                                  {/* Duplicate set for seamless loop */}
                                  <LogoCard><p className="text-3xl sm:text-4xl font-bold text-white">OpenAI</p></LogoCard>
                                  <LogoCard><p className="text-3xl sm:text-4xl font-bold text-white">Figma</p></LogoCard>
                                  <LogoCard><p className="text-3xl sm:text-4xl font-bold text-white">Notion</p></LogoCard>
                                  <LogoCard><p className="text-3xl sm:text-4xl font-bold text-white">Midjourney</p></LogoCard>
                                  <LogoCard><p className="text-3xl sm:text-4xl font-bold text-white">Anthropic</p></LogoCard>
                              </div>
                          </div>

                          {/* Bottom Row - Moving Left to Right */}
                          <div>
                              <div className="flex animate-scroll-right gap-6 justify-center">
                                  {/* First set of logos */}
                                  <LogoCard>
                                      <svg height="32" viewBox="0 0 75 65" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                          <path d="M37.59.25l36.95 64H.64l36.95-64z"></path>
                                      </svg>
                                  </LogoCard>
                                  <LogoCard><p className="text-3xl sm:text-4xl font-bold text-white">React</p></LogoCard>
                                  <LogoCard><p className="text-3xl sm:text-4xl font-bold text-white">Tailwind</p></LogoCard>
                                  <LogoCard><p className="text-3xl sm:text-4xl font-bold text-white">Stability AI</p></LogoCard>
                                  <LogoCard><p className="text-3xl sm:text-4xl font-bold text-white">Next.js</p></LogoCard>

                                  {/* Duplicate set for seamless loop */}
                                  <LogoCard>
                                      <svg height="32" viewBox="0 0 75 65" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                          <path d="M37.59.25l36.95 64H.64l36.95-64z"></path>
                                      </svg>
                                  </LogoCard>
                                  <LogoCard><p className="text-3xl sm:text-4xl font-bold text-white">React</p></LogoCard>
                                  <LogoCard><p className="text-3xl sm:text-4xl font-bold text-white">Tailwind</p></LogoCard>
                                  <LogoCard><p className="text-3xl sm:text-4xl font-bold text-white">Stability AI</p></LogoCard>
                                  <LogoCard><p className="text-3xl sm:text-4xl font-bold text-white">Next.js</p></LogoCard>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>

              <div className="bg-[#000000] text-white font-sans p-8 sm:p-16 rounded-xl">
                  {/* Header Section */}
                  <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-16 lg:mb-24">
                      <div className="w-full lg:w-2/3 text-center lg:text-left">
                          <p className="text-sm font-base text-gray-400 mb-4">• What we can help you with</p>
                          <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
                              A team of AI experts that<br className="hidden sm:block" /> can help you build and<br className="hidden sm:block" /> deploy an AI solution<br className="hidden sm:block" /> you're proud of
                          </h1>
                      </div>
                      <div className="mt-8 lg:mt-0 w-full flex justify-center lg:justify-start">
                          <button className="bg-[#D4FF40] text-black font-semibold py-4 px-8 rounded-full flex items-center gap-3 whitespace-nowrap transition-transform transform hover:scale-105">
                              Get in touch today
                              <ArrowIcon />
                          </button>
                      </div>
                  </div>

                  {/* Services Section */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
                      {/* Custom AI Models */}
                      <div className="pb-8">
                          <div className="flex items-center gap-x-4 mb-4">
                              <div className="bg-[#D4FF40] p-2 rounded-lg inline-flex">
                                  <AIModelsIcon />
                              </div>
                              <h3 className="text-2xl font-bold">Custom AI Models</h3>
                          </div>
                          <p className="text-gray-400 leading-relaxed mb-6">
                              Bespoke AI models tailored to your specific data and business challenges.
                          </p>
                          <div className="w-full h-px bg-gray-700"></div>
                      </div>

                      {/* Natural Language Processing */}
                      <div className="pb-8">
                          <div className="flex items-center gap-x-4 mb-4">
                              <div className="bg-[#D4FF40] p-2 rounded-lg inline-flex">
                                  <NLPIcon />
                              </div>
                              <h3 className="text-2xl font-bold">NLP</h3>
                          </div>
                          <p className="text-gray-400 leading-relaxed mb-6">
                              Unlock insights from text data with sentiment analysis, text classification, and chatbots.
                          </p>
                          <div className="w-full h-px bg-gray-700"></div>
                      </div>

                      {/* Computer Vision */}
                      <div className="pb-8">
                          <div className="flex items-center gap-x-4 mb-4">
                              <div className="bg-[#D4FF40] p-2 rounded-lg inline-flex">
                                  <ComputerVisionIcon />
                              </div>
                              <h3 className="text-2xl font-bold">Computer Vision</h3>
                          </div>
                          <p className="text-gray-400 leading-relaxed mb-6">
                              Provide meaningful and relevant experiences through image recognition and video analysis.
                          </p>
                          <div className="w-full h-px bg-gray-700"></div>
                      </div>

                      {/* Predictive Analytics */}
                      <div className="pb-8">
                          <div className="flex items-center gap-x-4 mb-4">
                              <div className="bg-[#D4FF40] p-2 rounded-lg inline-flex">
                                  <PredictiveAnalyticsIcon />
                              </div>
                              <h3 className="text-2xl font-bold">Predictive Analytics</h3>
                          </div>
                          <p className="text-gray-400 leading-relaxed mb-6">
                              Forecast future trends and behaviors with high accuracy using your historical data.
                          </p>
                          <div className="w-full h-px bg-gray-700"></div>
                      </div>

                      {/* Data Strategy */}
                      <div className="pb-8">
                          <div className="flex items-center gap-x-4 mb-4">
                              <div className="bg-[#D4FF40] p-2 rounded-lg inline-flex">
                                  <DataStrategyIcon />
                              </div>
                              <h3 className="text-2xl font-bold">Data Strategy</h3>
                          </div>
                          <p className="text-gray-400 leading-relaxed mb-6">
                              A visualization tool for presenting a website's proposed structure, functions, and content.
                          </p>
                          <div className="w-full h-px bg-gray-700"></div>
                      </div>

                      {/* AI Integration */}
                      <div className="pb-8">
                          <div className="flex items-center gap-x-4 mb-4">
                              <div className="bg-[#D4FF40] p-2 rounded-lg inline-flex">
                                  <AIIntegrationIcon />
                              </div>
                              <h3 className="text-2xl font-bold">AI Integration</h3>
                          </div>
                          <p className="text-gray-400 leading-relaxed mb-6">
                              Seamlessly integrate powerful AI capabilities into your existing products and workflows.
                          </p>
                          <div className="w-full h-px bg-gray-700"></div>
                      </div>

                  </div>

              </div>
          </div>

          <section className="testimonial-section bg-black text-white w-full py-20 lg:py-28 font-product-sans">
              <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
                  {/* Left Column */}
                  <div className="testimonial-left-content lg:col-span-4 flex flex-col justify-between h-full text-center lg:text-left">
                      <div>
                          <p className="font-semibold tracking-wider text-gray-400">• Testimonials</p>
                          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semi mt-4 leading-tight">
                              Trusted by leading innovators
                          </h2>
                          <div className="flex justify-center lg:justify-start">
                             <button className="mt-12 bg-[#C5F277] text-black font-bold py-3 px-6 rounded-full flex items-center gap-2 hover:bg-white transition-colors duration-300">
                                  View all stories
                                  <ArrowUpRight size={20} />
                              </button>
                          </div>
                      </div>
                      <div className="flex gap-8 mt-16 justify-center lg:justify-start">
                          <button className="testimonial-swiper-prev p-3 rounded-full bg-[#222222] hover:bg-[#333333] transition-colors text-white disabled:opacity-50">
                              <ArrowLeft size={24} />
                          </button>
                          <button className="testimonial-swiper-next p-3 rounded-full bg-[#222222] hover:bg-[#333333] transition-colors text-white disabled:opacity-50">
                              <ArrowRight size={24} />
                          </button>
                      </div>
                  </div>

                  {/* Right Column (Slider) */}
                  <div className="lg:col-span-8 overflow-hidden">
                      <Swiper
                          modules={[Navigation]}
                          spaceBetween={20}
                          slidesPerView={1.1}
                          navigation={{
                              prevEl: '.testimonial-swiper-prev',
                              nextEl: '.testimonial-swiper-next',
                          }}
                          breakpoints={{
                              640: { slidesPerView: 1.2, spaceBetween: 30 },
                              768: { slidesPerView: 1.5, spaceBetween: 30 },
                              1024: { slidesPerView: 2.2, spaceBetween: 40 },
                          }}
                          className="!overflow-visible"
                      >
                          {testimonials.map((testimonial) => (
                              <SwiperSlide key={testimonial.id}>
                                  <div className="bg-[#1C1C1C] p-8 rounded-2xl h-full flex flex-col" style={{ minHeight: '400px' }}>
                                      <div className="flex justify-center text-[#C5F277]">
                                          {[...Array(testimonial.rating)].map((_, i) => (
                                              <Star key={i} fill="#C5F277" strokeWidth={0} size={20} />
                                          ))}
                                      </div>
                                      <p className="testimonial-card-text text-gray-300 mt-6 text-base sm:text-lg leading-relaxed flex-grow text-center">
                                          "{testimonial.text}"
                                      </p>
                                      <div className="flex items-center gap-4 mt-8">
                                          <img
                                              src={testimonial.avatar}
                                              alt={testimonial.author}
                                              className="w-12 h-12 rounded-full object-cover"
                                              onError={(e) => {
                                                  e.currentTarget.src = 'https://randomuser.me/api/portraits/lego/1.jpg';
                                              } } />
                                          <div className="text-left">
                                              <h3 className="font-bold text-lg">{testimonial.author}</h3>
                                              <p className="text-gray-400">{testimonial.company}</p>
                                          </div>
                                      </div>
                                  </div>
                              </SwiperSlide>
                          ))}
                      </Swiper>
                  </div>
              </div>
          </section>
          <Workwith />




          {/* Our Work Section */}
          <section className="work-section bg-black text-white w-full py-20 lg:py-28 font-product-sans">
              <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
                  {/* Header */}
                  <div className="flex flex-col lg:flex-row justify-between items-start mb-16 text-center lg:text-left">
                      <div>
                          <p className="text-lg mb-4">• Our Work</p>
                          <h2 className="text-5xl lg:text-6xl font-normal leading-tight">
                              Our favourite AI<br />
                              Solution Projects
                          </h2>
                      </div>
                      <div className="mt-8 w-full lg:w-auto flex justify-center lg:justify-start">
                          <Link href="#" className="bg-[#c6ff00] text-black font-medium text-sm py-3 px-6 rounded-full inline-flex items-center gap-2 transition-transform hover:scale-105">
                              View our work
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17l9.2-9.2M17 17V7H7" />
                              </svg>
                          </Link>
                      </div>
                  </div>

                  {/* Projects Slider */}
                  <div className="relative overflow-hidden">
                      <Swiper
                          modules={[Navigation]}
                          spaceBetween={24}
                          slidesPerView={1.1}
                          navigation={{
                              prevEl: '.work-swiper-prev',
                              nextEl: '.work-swiper-next',
                          }}
                          breakpoints={{
                              768: { slidesPerView: 2.1, spaceBetween: 24 },
                              1024: { slidesPerView: 3, spaceBetween: 24 },
                          }}
                          className="!overflow-visible"
                      >
                          {/* Project 1 - RetailPredict AI */}
                          <SwiperSlide>
                              <div className="group cursor-pointer">
                                  <div className="bg-gray-900 rounded-3xl overflow-hidden transition-transform duration-300 hover:scale-105 relative">
                                      <div className="relative h-[400px] bg-gradient-to-br from-blue-900 to-gray-900 flex items-center justify-center">
                                          {/* Background image */}
                                          <div className="absolute inset-0">
                                              <img
                                                  src="https://images.unsplash.com/photo-1551288049-a2a1985b9b18?auto=format&fit=crop&w=2070&q=80"
                                                  alt="Data analytics dashboard"
                                                  className="w-full h-full object-cover opacity-30" />
                                          </div>

                                          {/* Content overlay */}
                                          <div className="relative z-10 text-center p-8">
                                              <div className="text-white text-5xl font-bold flex items-center justify-center flex-col gap-4">
                                                  <span>Retail</span>
                                                  <div className="w-24 h-1 bg-lime-400"></div>
                                                  <span className="text-transparent" style={{ WebkitTextStroke: '2px #c6ff00', WebkitTextFillColor: 'transparent' }}>Predict</span>
                                              </div>
                                          </div>
                                      </div>
                                  </div>

                                  {/* Project Info */}
                                  <div className="mt-6">
                                      <div className="flex items-center gap-2 text-gray-400 text-sm mb-2">
                                          <span>2023</span>
                                          <span>•</span>
                                          <span>Global Retail Corp</span>
                                      </div>
                                      <h3 className="text-xl sm:text-2xl font-semibold leading-tight">
                                          Predictive analytics engine<br />
                                          for inventory management
                                      </h3>
                                  </div>
                              </div>
                          </SwiperSlide>

                          {/* Project 2 - SupportBot AI */}
                          <SwiperSlide>
                              <div className="group cursor-pointer">
                                  <div className="bg-purple-100 rounded-3xl overflow-hidden transition-transform duration-300 hover:scale-105 relative">
                                      <div className="relative h-[400px] p-4 sm:p-8 bg-gradient-to-br from-purple-400 to-indigo-500">
                                          <div className="bg-white rounded-2xl p-4 sm:p-6 h-full flex flex-col justify-center items-center relative overflow-hidden">
                                              {/* Browser bar */}
                                              <div className="absolute top-0 left-0 right-0 bg-gray-100 h-8 rounded-t-2xl flex items-center px-4">
                                                  <div className="flex gap-2">
                                                      <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                                                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                                                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                                                  </div>
                                                  <div className="flex-1 text-center">
                                                      <div className="bg-white rounded px-2 py-1 text-xs text-gray-600">support.saas.com</div>
                                                  </div>
                                              </div>

                                              <div className="text-center mb-6 mt-8">
                                                  <h3 className="text-2xl sm:text-3xl font-bold text-black mb-2">SUPPORT BOT</h3>
                                                  <h3 className="text-2xl sm:text-3xl font-bold text-purple-500">ONLINE</h3>
                                                  <p className="text-sm text-gray-600 mt-4">Automated Tier-1 Support 24/7</p>
                                                  <p className="text-sm text-gray-600">95% Resolution Rate</p>
                                              </div>

                                              {/* Chat bubble mockup */}
                                              <div className="bg-indigo-500 rounded-2xl p-4 w-40 h-20 flex items-center justify-center relative">
                                                  <div className="bg-indigo-600 rounded-lg w-full h-full flex items-center justify-center relative p-2">
                                                      <p className="text-white text-xs text-center">How can I help you today?</p>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                  </div>

                                  {/* Project Info */}
                                  <div className="mt-6">
                                      <div className="flex items-center gap-2 text-gray-400 text-sm mb-2">
                                          <span>2023</span>
                                          <span>•</span>
                                          <span>SaaS Innovations</span>
                                      </div>
                                      <h3 className="text-xl sm:text-2xl font-semibold leading-tight">
                                          NLP-powered customer<br />
                                          support automation
                                      </h3>
                                  </div>
                              </div>
                          </SwiperSlide>

                          {/* Project 3 - VisionQC */}
                          <SwiperSlide>
                              <div className="group cursor-pointer">
                                  <div className="bg-gray-900 rounded-3xl overflow-hidden transition-transform duration-300 hover:scale-105 relative">
                                      <div className="relative h-[400px] bg-gray-800 flex items-center justify-center p-8">
                                          <div className="relative">
                                              <img
                                                  src="https://images.unsplash.com/photo-1621609764095-b32635d8a937?auto=format&fit=crop&w=2070&q=80"
                                                  alt="Industrial robot arm"
                                                  className="w-full h-full object-contain filter brightness-110" />
                                              {/* Overlay */}
                                              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
                                                  <div className="text-white text-center font-bold text-4xl leading-tight border-4 border-white p-4">
                                                      <div>VISION</div>
                                                      <div>QC</div>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                  </div>

                                  {/* Project Info */}
                                  <div className="mt-6">
                                      <div className="flex items-center gap-2 text-gray-400 text-sm mb-2">
                                          <span>2023</span>
                                          <span>•</span>
                                          <span>ManuFuture Inc.</span>
                                      </div>
                                      <h3 className="text-xl sm:text-2xl font-semibold leading-tight">
                                          Computer Vision for<br />
                                          manufacturing quality control
                                      </h3>
                                  </div>
                              </div>
                          </SwiperSlide>
                      </Swiper>

                      {/* Navigation Arrows */}
                      <div className="flex gap-4 mt-12 justify-center">
                          <button className="work-swiper-prev p-3 rounded-full bg-[#222222] hover:bg-[#333333] transition-colors text-white disabled:opacity-50">
                              <ArrowLeft size={24} />
                          </button>
                          <button className="work-swiper-next p-3 rounded-full bg-[#222222] hover:bg-[#333333] transition-colors text-white disabled:opacity-50">
                              <ArrowRight size={24} />
                          </button>
                      </div>
                  </div>
              </div>
          </section>
          <Blog/>
          <Footer />
      </div></>
  );
};


export default HelpWith;