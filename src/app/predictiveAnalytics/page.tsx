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
  <div className="bg-[#161616] rounded-2xl h-36 flex items-center justify-center p-6 hover:grayscale-0 transition-all duration-300 ease-in-out cursor-pointer min-w-[280px] flex-shrink-0">
    {children}
  </div>
);

// --- SVG Icon Components for Predictive Analytics ---
const DemandForecastingIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-black">
        <path d="M3 3V19C3 19.5304 3.21071 20.0391 3.58579 20.4142C3.96086 20.7893 4.46957 21 5 21H21" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M7 14L12 9L17 12L21 8" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);
const ChurnPredictionIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-black">
        <path d="M15 3H9C5.68629 3 3 5.68629 3 9V15C3 18.3137 5.68629 21 9 21H15C18.3137 21 21 18.3137 21 15V9C21 5.68629 18.3137 3 15 3Z" stroke="black" strokeWidth="2" strokeLinejoin="round"/>
        <path d="M15 9L9 15" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M9 9L15 15" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);
const PredictiveMaintenanceIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-black">
        <path d="M12 20V12" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 8V4" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M18.364 18.364L15.536 15.536" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M8.464 8.464L5.636 5.636" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M20 12H12" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M8 12H4" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M18.364 5.636L15.536 8.464" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M8.464 15.536L5.636 18.364" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);
const RiskAssessmentIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-black">
        <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="black" strokeWidth="2" strokeLinejoin="round"/>
        <path d="M2 12L12 17L22 12" stroke="black" strokeWidth="2" strokeLinejoin="round"/>
        <path d="M12 22V17" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);
const LeadScoringIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-black">
        <path d="M12 17.75L5.828 20.995L7.236 14.124L2 9.25L9.021 8.375L12 2L14.979 8.375L22 9.25L16.764 14.124L18.172 20.995L12 17.75Z" stroke="black" strokeWidth="2" strokeLinejoin="round"/>
    </svg>
);
const PricingOptimizationIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-black">
        <path d="M12 21V3" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M5 12H19" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M16 5L12 9L8 5" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M8 19L12 15L16 19" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
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
    text: "The demand forecasting model from ForecastForward has been instrumental in optimizing our inventory, reducing waste by 30%. Their insights are incredibly accurate.",
    author: "Eleanor Vance",
    company: "Global Retail Corp",
    avatar: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=1887&auto=format&fit=crop"
  },
  {
    id: 2,
    rating: 5,
    text: "We can now predict customer churn with over 90% accuracy, allowing us to proactively retain valuable clients. Working with this team was a strategic masterstroke.",
    author: "Kenji Tanaka",
    company: "SaaSify Solutions",
    avatar: "https://images.unsplash.com/photo-1521119989659-a83eee488004?q=80&w=1923&auto=format&fit=crop"
  },
  {
    id: 3,
    rating: 5,
    text: "Their predictive maintenance models for our machinery have saved us millions in potential downtime. Professional, data-driven, and results-oriented.",
    author: "Fatima Al-Sayed",
    company: "Industrial Dynamics",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop"
  },
  {
    id: 4,
    rating: 5,
    text: "The risk assessment platform they developed is now at the core of our underwriting process. It's fast, reliable, and highly intuitive. A truly transformative solution.",
    author: "David Chen",
    company: "SecureInsur",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1887&auto=format&fit=crop"
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
                          <p className="mb-4 text-lg">• Predictive Analytics</p>
                          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semi leading-none tracking-tight">
                              Data-Driven Foresight<br /> for Your Business.
                          </h1>
                      </div>

                      {/* Right Column */}
                      <div className="flex-1 pt-2 text-base sm:text-lg leading-relaxed text-gray-300 lg:text-xl text-center lg:text-left">
                          <p className="mb-6">
                              Here at ForecastForward, we translate your data into reliable predictions, giving you a clear competitive advantage.
                          </p>
                          <p>
                              Demand forecasting, churn prediction, risk assessment, and anomaly detection — we specialize in turning historical data into future insights. We help startups anticipate market trends and enterprises optimize multi-billion dollar supply chains. We build models that identify at-risk customers and predict equipment failures before they happen. Our in-house <span className="text-white underline decoration-gray-500 decoration-1 underline-offset-4">predictive analytics team</span> partners with you to unlock the predictive power of your data, enabling smarter, proactive decision-making.
                          </p>
                      </div>
                  </div>
              </div>

              {/* Image Section */}
              <div className="w-full bg-black px-4 sm:px-8 lg:px-24 pb-16">
                  <div className="relative w-full max-w-7xl mx-auto h-[40vh] sm:h-[50vh] lg:h-[60vh] overflow-hidden rounded-2xl sm:rounded-3xl">
                      <img
                          src="https://images.unsplash.com/photo-1551288049-a2a1985b9b18?q=80&w=2070&auto=format&fit=crop"
                          alt="A person analyzing complex data charts and graphs on a large digital screen"
                          className="w-full h-full object-cover" />
                      <div className="absolute top-4 left-4 sm:top-6 sm:left-6 bg-black bg-opacity-80 px-4 py-2 sm:px-5 sm:py-3 rounded-full backdrop-blur-sm">
                          <span className="text-white text-xs sm:text-sm font-medium">Discover our approach</span>
                          <svg className="inline-block ml-2 w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                      </div>
                  </div>
              </div>

              {/* Startup Section */}
              <div className="w-full bg-black text-white px-8 sm:px-16 lg:px-24 py-16">
                  <div className="flex w-full max-w-7xl mx-auto flex-col gap-10 lg:flex-row lg:gap-20 items-center">
                      {/* Left Column */}
                      <div className="flex-1 text-center lg:text-left">
                          <p className="mb-6 text-lg">• Predictive Analytics</p>
                          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal leading-tight tracking-tight mb-8">
                              Whether you're a startup or a global enterprise, we build predictive models that drive measurable outcomes and significant ROI.
                          </h2>
                          <div className="inline-flex justify-center lg:justify-start">
                              <Link href="#" className="group bg-[#c6ff00] text-black font-medium text-sm py-2 px-4 rounded-full self-start flex items-center gap-2 transition-transform hover:scale-105 mt-4">
                                  About ForecastForward
                                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17l9.2-9.2M17 17V7H7" />
                                  </svg>
                              </Link>
                          </div>
                      </div>

                      {/* Right Column - Capabilities List */}
                      <div className="flex-1 w-full text-center lg:text-left lg:pt-16 lg:-translate-y-15 lg:translate-x-80">
                          <h3 className="text-gray-400 text-sm mb-4">Our Predictive Capabilities</h3>
                          <div className="space-y-2 text-sm">
                              {[
                                'Demand Forecasting',
                                'Customer Churn Prediction',
                                'Predictive Maintenance',
                                'Financial Risk Assessment',
                                'Lead Scoring & Conversion',
                                'Dynamic Pricing Optimization'
                              ].map((capability, index) => (
                                  <div key={index} className="flex items-center gap-2 justify-center lg:justify-start">
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
              <div className="overflow-hidden bg-black py-8 text-center">
                  <div className="left-text w-full text-white text-5xl sm:text-7xl lg:text-9xl font-bold whitespace-nowrap leading-none">
                      Let's predict together. Let's predict together. Let's predict together. Let's predict together. Let's predict together.
                  </div>
                  <div className="right-text w-full text-white text-5xl sm:text-7xl lg:text-9xl font-bold whitespace-nowrap leading-none">
                      Let's predict together. Let's predict together. Let's predict together. Let's predict together. Let's predict together.
                  </div>
              </div>

              {/* New Section - Exact Replication of Provided Image */}
              <div className="w-full bg-black text-white px-8 sm:px-16 lg:px-24 py-16">
                  <div className="flex w-full max-w-7xl mx-auto flex-col lg:flex-row gap-16 lg:gap-20 items-center">
                      {/* Left Column - Text Content */}
                      <div className="flex-1 space-y-6 text-center lg:text-left">
                          <p className="text-md">• We approach every forecast with a clear vision.</p>
                          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal leading-tight tracking-tight">
                              We look beyond the numbers to build accurate, explainable, and actionable predictive models.
                          </h2>
                          <div className="space-y-4 text-gray-300 text-base sm:text-lg leading-relaxed">
                              <p>
                                  We don't <em className="italic">just</em> deliver predictions. Here at ForecastForward, we deliver understanding. We focus on model interpretability and business context, ensuring you can trust the insights and make decisions with confidence.
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
                          <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] w-full">
                              <div className="absolute bottom-0 left-0 right-0 h-full rounded-2xl overflow-hidden">
                                  <img
                                      src="https://images.unsplash.com/photo-1543286386-713bdd548da4?q=80&w=2070&auto=format&fit=crop"
                                      alt="Two colleagues discussing charts and graphs on a whiteboard"
                                      className="w-full h-full object-cover" />
                              </div>
                          </div>
                      </div>
                  </div>
              </div>

              <div className="w-full bg-black text-white px-8 sm:px-16 lg:px-24 py-16">
                  <div className="flex w-full max-w-7xl mx-auto flex-col lg:flex-row-reverse gap-16 lg:gap-20 items-center">
                      {/* Right Column - Text Content */}
                      <div className="flex-1 space-y-6 text-center lg:text-left">
                          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal leading-tight tracking-tight">
                              We build robust predictive engines that integrate seamlessly and scale with your data.
                          </h2>
                          <div className="space-y-4 text-gray-300 text-base sm:text-lg leading-relaxed">
                              <p>
                                  We don't <em className="italic">just</em> build models in notebooks. We architect and deploy end-to-end predictive systems that connect to your data sources, run on scalable infrastructure, and deliver insights directly into your business workflows.
                              </p>
                          </div>
                      </div>
                      {/* Left Column - Image with People */}
                      <div className="flex-1 relative w-full">
                          <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] w-full">
                              <div className="absolute bottom-0 left-0 right-0 h-full rounded-2xl overflow-hidden">
                                  <img
                                      src="https://images.unsplash.com/photo-1591696205602-2f950c417cb9?q=80&w=2070&auto=format&fit=crop"
                                      alt="A secure server room representing data infrastructure and security"
                                      className="w-full h-full object-cover" />
                              </div>
                          </div>
                      </div>
                  </div>
              </div>

              {/* Technologies Section - Fixed Black Background */}
              <div className="w-full bg-black text-white px-8 sm:px-16 lg:px-24 py-16">
                  <div className="w-full max-w-7xl mx-auto flex flex-col items-center">
                      <div className="flex flex-col w-full text-center">
                          {/* Headline - Fixed alignment */}
                          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semi text-white mt-2 max-w-5xl leading-tight">
                              <span>We use the best-in-class tools</span><br />
                              <span className="lg:inline-block lg:-translate-x-20">to find signals in the noise.</span>
                          </h1>
                      </div>

                      {/* --- Animated Logo Carousel Section --- */}
                      <div className="mt-16 overflow-hidden w-full">
                          {/* Top Row - Moving Right to Left */}
                          <div className="mb-6">
                              <div className="flex animate-scroll-left gap-6">
                                  {/* First set of logos */}
                                  <LogoCard><p className="text-4xl font-bold text-white">Python</p></LogoCard>
                                  <LogoCard><p className="text-4xl font-bold text-white">R</p></LogoCard>
                                  <LogoCard><p className="text-4xl font-bold text-white">SQL</p></LogoCard>
                                  <LogoCard><p className="text-4xl font-bold text-white">Tableau</p></LogoCard>
                                  <LogoCard><p className="text-4xl font-bold text-white">Power BI</p></LogoCard>

                                  {/* Duplicate set for seamless loop */}
                                  <LogoCard><p className="text-4xl font-bold text-white">Python</p></LogoCard>
                                  <LogoCard><p className="text-4xl font-bold text-white">R</p></LogoCard>
                                  <LogoCard><p className="text-4xl font-bold text-white">SQL</p></LogoCard>
                                  <LogoCard><p className="text-4xl font-bold text-white">Tableau</p></LogoCard>
                                  <LogoCard><p className="text-4xl font-bold text-white">Power BI</p></LogoCard>
                              </div>
                          </div>

                          {/* Bottom Row - Moving Left to Right */}
                          <div>
                              <div className="flex animate-scroll-right gap-6">
                                  {/* First set of logos */}
                                   <LogoCard><p className="text-4xl font-bold text-white">Snowflake</p></LogoCard>
                                  <LogoCard><p className="text-4xl font-bold text-white">Databricks</p></LogoCard>
                                  <LogoCard><p className="text-4xl font-bold text-white">AWS</p></LogoCard>
                                  <LogoCard><p className="text-4xl font-bold text-white">Azure</p></LogoCard>
                                  <LogoCard><p className="text-4xl font-bold text-white">Scikit-learn</p></LogoCard>

                                  {/* Duplicate set for seamless loop */}
                                   <LogoCard><p className="text-4xl font-bold text-white">Snowflake</p></LogoCard>
                                  <LogoCard><p className="text-4xl font-bold text-white">Databricks</p></LogoCard>
                                  <LogoCard><p className="text-4xl font-bold text-white">AWS</p></LogoCard>
                                  <LogoCard><p className="text-4xl font-bold text-white">Azure</p></LogoCard>
                                  <LogoCard><p className="text-4xl font-bold text-white">Scikit-learn</p></LogoCard>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>

              <div className="bg-[#000000] text-white font-sans p-8 sm:p-16 rounded-xl">
                  {/* Header Section */}
                  <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-12 lg:mb-24">
                      <div className="w-full lg:w-2/3">
                          <p className="text-sm font-base text-gray-400 mb-4">• How we can help you</p>
                          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
                              A team of data scientists who can help you anticipate change and make proactive decisions.
                          </h1>
                      </div>
                      <div className="mt-8 lg:mt-0 w-full lg:w-auto">
                          <button className="bg-[#D4FF40] text-black font-semibold py-3 px-6 sm:py-4 sm:px-8 rounded-full flex items-center justify-center gap-3 w-full lg:w-auto whitespace-nowrap transition-transform transform hover:scale-105">
                              Get in touch today
                              <ArrowIcon />
                          </button>
                      </div>
                  </div>

                  {/* Services Section */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
                      <div className="pb-8">
                          <div className="flex items-center gap-x-4 mb-4">
                              <div className="bg-[#D4FF40] p-2 rounded-lg inline-flex">
                                  <DemandForecastingIcon />
                              </div>
                              <h3 className="text-2xl font-bold">Demand Forecasting</h3>
                          </div>
                          <p className="text-gray-400 leading-relaxed mb-6">
                              Accurately predict future sales and inventory needs to optimize your supply chain and budget.
                          </p>
                          <div className="w-full h-px bg-gray-700"></div>
                      </div>

                      <div className="pb-8">
                          <div className="flex items-center gap-x-4 mb-4">
                              <div className="bg-[#D4FF40] p-2 rounded-lg inline-flex">
                                  <ChurnPredictionIcon />
                              </div>
                              <h3 className="text-2xl font-bold">Churn Prediction</h3>
                          </div>
                          <p className="text-gray-400 leading-relaxed mb-6">
                              Identify customers at risk of leaving and deploy targeted retention strategies to protect your revenue.
                          </p>
                          <div className="w-full h-px bg-gray-700"></div>
                      </div>

                      <div className="pb-8">
                          <div className="flex items-center gap-x-4 mb-4">
                              <div className="bg-[#D4FF40] p-2 rounded-lg inline-flex">
                                  <PredictiveMaintenanceIcon />
                              </div>
                              <h3 className="text-2xl font-bold">Predictive Maintenance</h3>
                          </div>
                          <p className="text-gray-400 leading-relaxed mb-6">
                              Forecast equipment failures before they occur to minimize downtime and reduce maintenance costs.
                          </p>
                          <div className="w-full h-px bg-gray-700"></div>
                      </div>

                      <div className="pb-8">
                          <div className="flex items-center gap-x-4 mb-4">
                              <div className="bg-[#D4FF40] p-2 rounded-lg inline-flex">
                                  <RiskAssessmentIcon />
                              </div>
                              <h3 className="text-2xl font-bold">Risk Assessment</h3>
                          </div>
                          <p className="text-gray-400 leading-relaxed mb-6">
                              Model potential financial and operational risks to make more informed strategic decisions.
                          </p>
                          <div className="w-full h-px bg-gray-700"></div>
                      </div>

                      <div className="pb-8">
                          <div className="flex items-center gap-x-4 mb-4">
                              <div className="bg-[#D4FF40] p-2 rounded-lg inline-flex">
                                  <LeadScoringIcon />
                              </div>
                              <h3 className="text-2xl font-bold">Lead Scoring</h3>
                          </div>
                          <p className="text-gray-400 leading-relaxed mb-6">
                              Prioritize your sales efforts by identifying leads most likely to convert into paying customers.
                          </p>
                          <div className="w-full h-px bg-gray-700"></div>
                      </div>

                      <div className="pb-8">
                          <div className="flex items-center gap-x-4 mb-4">
                              <div className="bg-[#D4FF40] p-2 rounded-lg inline-flex">
                                  <PricingOptimizationIcon />
                              </div>
                              <h3 className="text-2xl font-bold">Pricing Optimization</h3>
                          </div>
                          <p className="text-gray-400 leading-relaxed mb-6">
                              Use data to determine the optimal price points for your products to maximize profitability and market share.
                          </p>
                          <div className="w-full h-px bg-gray-700"></div>
                      </div>

                  </div>

              </div>
          </div>

          
<section className="bg-black text-white w-full py-20 lg:py-28 font-product-sans">
  <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
    {/* Left Column - Fixed for mobile */}
    <div className="lg:col-span-4 flex flex-col justify-between h-full text-left">
      <div>
        <p className="font-semibold tracking-wider text-gray-400 text-left">• Testimonials</p>
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold mt-4 leading-tight text-left">
          Trusted by industry leaders
        </h2>
        <button className="mt-8 sm:mt-12 bg-[#C5F277] text-black font-bold py-3 px-6 rounded-full flex items-center gap-2 hover:bg-white transition-colors duration-300 w-fit">
          View all success stories
          <ArrowUpRight size={20} />
        </button>
      </div>
      {/* Navigation buttons - Better mobile positioning */}
      <div className="flex gap-4 sm:gap-8 mt-12 lg:mt-16">
        <button className="testimonial-swiper-prev p-3 rounded-full bg-[#222222] hover:bg-[#333333] transition-colors text-white disabled:opacity-50">
          <ArrowLeft size={24} />
        </button>
        <button className="testimonial-swiper-next p-3 rounded-full bg-[#222222] hover:bg-[#333333] transition-colors text-white disabled:opacity-50">
          <ArrowRight size={24} />
        </button>
      </div>
    </div>

    {/* Right Column - Slider with proper mobile responsive settings */}
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
          640: { 
            slidesPerView: 1.2,
            spaceBetween: 20 
          },
          768: { 
            slidesPerView: 1.5,
            spaceBetween: 30 
          },
          1024: { 
            slidesPerView: 2.2,
            spaceBetween: 40 
          },
        }}
        className="!overflow-visible"
      >
        {testimonials.map((testimonial) => (
          <SwiperSlide key={testimonial.id} className="h-auto">
            <div className="bg-[#1C1C1C] p-6 sm:p-8 rounded-2xl h-full flex flex-col justify-between min-h-[380px] sm:min-h-[400px]">
              {/* Stars */}
              <div>
                <div className="flex justify-center text-[#C5F277] mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} fill="#C5F277" strokeWidth={0} size={20} />
                  ))}
                </div>
                
                {/* Testimonial text - properly centered on mobile */}
                <p className="text-gray-300 text-base sm:text-lg leading-relaxed text-center">
                  "{testimonial.text}"
                </p>
              </div>
              
              {/* Author info - centered on mobile, left-aligned on larger screens */}
              <div className="flex items-center gap-4 mt-8 justify-center sm:justify-start">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = 'https://randomuser.me/api/portraits/lego/1.jpg';
                  }}
                />
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
          <section className="work-section bg-black text-white w-full py-20 lg:py-28 font-product-sans px-4 sm:px-6 lg:px-8">
              <div className="max-w-[90rem] mx-auto">
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row justify-between items-start mb-16">
                      <div className="text-center sm:text-left">
                          <p className="text-lg mb-4">• Our Work</p>
                          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-normal leading-tight">
                              Our favourite Predictive<br />
                              Analytics Projects
                          </h2>
                      </div>
                      <div className="mt-8 sm:mt-0 self-center sm:self-auto">
                          <Link href="#" className="bg-[#c6ff00] text-black font-medium text-sm py-3 px-6 rounded-full inline-flex items-center gap-2 transition-transform hover:scale-105">
                              View all projects
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
                              640: { slidesPerView: 1.5, spaceBetween: 24 },
                              768: { slidesPerView: 2.1, spaceBetween: 24 },
                              1024: { slidesPerView: 3, spaceBetween: 24 },
                          }}
                          className="!overflow-visible"
                      >
                          {/* Project 1 - Retail Demand Forecasting */}
                          <SwiperSlide>
                              <div className="group cursor-pointer">
                                  <div className="bg-gray-900 rounded-3xl overflow-hidden transition-transform duration-300 hover:scale-105 relative">
                                      <div className="relative h-[400px] bg-gradient-to-br from-cyan-800 to-gray-900 flex items-center justify-center">
                                          <div className="absolute inset-0">
                                              <img
                                                  src="https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1974&auto=format&fit=crop"
                                                  alt="Supermarket aisle with shelves full of products"
                                                  className="w-full h-full object-cover opacity-30" />
                                          </div>
                                          <div className="relative z-10 text-center p-8">
                                              <div className="text-white text-5xl font-bold flex items-center justify-center flex-col gap-4">
                                                  <span>Demand</span>
                                                  <div className="w-24 h-1 bg-lime-400"></div>
                                                  <span className="text-transparent" style={{ WebkitTextStroke: '2px #c6ff00', WebkitTextFillColor: 'transparent' }}>Sense</span>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="mt-6">
                                      <div className="flex items-center gap-2 text-gray-400 text-sm mb-2">
                                          <span>2024</span>
                                          <span>•</span>
                                          <span>FreshGoods Market</span>
                                      </div>
                                      <h3 className="text-2xl font-semibold leading-tight">
                                          Demand forecasting system<br />
                                          for perishable goods
                                      </h3>
                                  </div>
                              </div>
                          </SwiperSlide>

                          {/* Project 2 - SaaS Customer Churn */}
                          <SwiperSlide>
                              <div className="group cursor-pointer">
                                  <div className="bg-blue-100 rounded-3xl overflow-hidden transition-transform duration-300 hover:scale-105 relative">
                                      <div className="relative h-[400px] p-8 bg-gradient-to-br from-red-400 to-orange-500">
                                          <div className="bg-white rounded-2xl p-6 h-full flex flex-col justify-center items-center relative overflow-hidden">
                                               <div className="absolute top-0 left-0 right-0 bg-gray-100 h-8 rounded-t-2xl flex items-center px-4">
                                                  <div className="flex gap-2">
                                                      <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                                                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                                                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                                                  </div>
                                              </div>
                                              <div className="text-center mb-6 mt-8">
                                                  <h3 className="text-3xl font-bold text-black mb-2">CHURN RISK</h3>
                                                  <h3 className="text-3xl font-bold text-red-600">HIGH</h3>
                                                  <p className="text-sm text-gray-600 mt-4">92% Probability</p>
                                                  <p className="text-sm text-gray-600">Trigger Retention Campaign</p>
                                              </div>
                                              <div className="bg-red-500 rounded-2xl p-4 w-32 h-20 flex items-center justify-center relative">
                                                  <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7a4 4 0 11-8 0 4 4 0 018 0zM9 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path><path d="M19 9l-7 7-7-7" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="mt-6">
                                      <div className="flex items-center gap-2 text-gray-400 text-sm mb-2">
                                          <span>2023</span>
                                          <span>•</span>
                                          <span>Innovate SaaS</span>
                                      </div>
                                      <h3 className="text-2xl font-semibold leading-tight">
                                          Customer churn prediction model<br />
                                          to boost retention
                                      </h3>
                                  </div>
                              </div>
                          </SwiperSlide>

                          {/* Project 3 - Predictive Maintenance */}
                          <SwiperSlide>
                              <div className="group cursor-pointer">
                                  <div className="bg-gray-900 rounded-3xl overflow-hidden transition-transform duration-300 hover:scale-105 relative">
                                      <div className="relative h-[400px] bg-gray-800 flex items-center justify-center p-8">
                                          <div className="relative">
                                              <img
                                                  src="https://images.unsplash.com/photo-1621993206348-752445942433?q=80&w=1932&auto=format&fit=crop"
                                                  alt="Close-up of industrial machinery and gears"
                                                  className="w-full h-full object-contain filter brightness-90" />
                                              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                                                  <div className="text-white text-center font-bold text-4xl leading-tight border-4 border-white p-4">
                                                      <div>MAINTAIN</div>
                                                      <div>AI</div>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="mt-6">
                                      <div className="flex items-center gap-2 text-gray-400 text-sm mb-2">
                                          <span>2024</span>
                                          <span>•</span>
                                          <span>Heavy-Duty MFG</span>
                                      </div>
                                      <h3 className="text-2xl font-semibold leading-tight">
                                          Predictive maintenance solution<br />
                                          for industrial equipment
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