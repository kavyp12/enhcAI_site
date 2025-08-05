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

// --- SVG Icon Components ---
const PredictiveModelingIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-black">
        <path d="M3 3V19C3 19.5304 3.21071 20.0391 3.58579 20.4142C3.96086 20.7893 4.46957 21 5 21H21" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M7 14L12 9L17 12L21 8" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

const RecommendationIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-black">
        <path d="M12 21.35L10.55 20.03C5.4 15.36 2 12.28 2 8.5C2 5.42 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.09C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.42 22 8.5C22 12.28 18.6 15.36 13.45 20.04L12 21.35Z" stroke="black" strokeWidth="2" strokeLinejoin="round"/>
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

const MLOpsIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-black">
        <path d="M20 12L12 4L4 12" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M4 12L12 20L20 12" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 4V20" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

const ModelAuditIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-black">
        <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="black" strokeWidth="2" strokeLinejoin="round"/>
        <path d="M9 15L11 17L15 13" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M14 2V8H20" stroke="black" strokeWidth="2" strokeLinejoin="round"/>
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
    text: "The machine learning model they built for us has revolutionized our forecasting accuracy. The team's dedication and expertise were second to none.",
    author: "John Carter",
    company: "Data-Driven Insights",
    avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1887&auto=format&fit=crop"
  },
  {
    id: 2,
    rating: 5,
    text: "Working with ModelCraft was a turning point. They developed a recommendation engine that boosted our user engagement by over 40%.",
    author: "Maria Garcia",
    company: "ConnectSphere",
    avatar: "https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?q=80&w=2076&auto=format&fit=crop"
  },
  {
    id: 3,
    rating: 5,
    text: "Truly professional and innovative. Their ML solutions helped us detect fraudulent transactions with incredible precision, saving us millions.",
    author: "Chen Wei",
    company: "FinSecure",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1887&auto=format&fit=crop"
  },
  {
    id: 4,
    rating: 5,
    text: "The MLOps integration was flawless, and the ongoing support for our model in production has been exceptional. I highly recommend their services!",
    author: "Fatima Al-Jamil",
    company: "OperateWell Logistics",
    avatar: "https://images.unsplash.com/photo-1525134479668-1bee5c7c6845?q=80&w=1887&auto=format&fit=crop"
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
                          <p className="mb-4 text-lg">• Machine Learning Models</p>
                          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semi leading-none tracking-tight">
                              Bespoke Machine Learning <br />Models to Power Your Data.
                          </h1>
                      </div>

                      {/* Right Column */}
                      <div className="flex-1 pt-2 text-base sm:text-lg leading-relaxed text-gray-300 lg:text-xl text-center lg:text-left">
                          <p className="mb-6">
                              Here at ModelCraft, we provide deep expertise, robust development practices, and a portfolio of high-impact ML models.
                          </p>
                          <p>
                              Predictive modeling, recommendation engines, MLOps, and model auditing — we master all facets of the machine learning lifecycle. We can help a startup with raw data build its first predictive model. We can enhance an existing application with intelligent features or help a large enterprise scale its ML operations with robust deployment pipelines. Our talented in-house <span className="text-white underline decoration-gray-500 decoration-1 underline-offset-4">machine learning team</span> will collaborate with you to craft a model that solves your unique challenges, unlocks data-driven insights, and delivers tangible business value.
                          </p>
                      </div>
                  </div>
              </div>

              {/* Image Section */}
              <div className="w-full bg-black px-4 sm:px-8 lg:px-24 pb-16">
                  <div className="relative w-full max-w-7xl mx-auto h-[40vh] sm:h-[50vh] lg:h-[60vh] overflow-hidden rounded-2xl sm:rounded-3xl">
                      <img
                          src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=2020&auto=format&fit=crop"
                          alt="Abstract visualization of a neural network or complex data structure."
                          className="w-full h-full object-cover" />
                      <div className="absolute top-4 left-4 sm:top-6 sm:left-6 bg-black bg-opacity-80 px-4 py-2 sm:px-5 sm:py-3 rounded-full backdrop-blur-sm">
                          <span className="text-white text-xs sm:text-sm font-medium">Learn about our process</span>
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
                          <p className="mb-6 text-lg">• Machine Learning</p>
                          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal leading-tight tracking-tight mb-8">
                              Whether you're a data-rich enterprise or a startup aiming to leverage AI, we build models that fit your scale and ambition.
                          </h2>
                          <div className="inline-flex justify-center lg:justify-start">
                              <Link href="#" className="group bg-[#c6ff00] text-black font-medium text-sm py-2 px-4 rounded-full self-start flex items-center gap-2 transition-transform hover:scale-105 mt-4">
                                  About ModelCraft
                                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17l9.2-9.2M17 17V7H7" />
                                  </svg>
                              </Link>
                          </div>
                      </div>

                      {/* Right Column - Capabilities List */}
                      <div className="flex-1 w-full text-center lg:text-left lg:pt-16 lg:-translate-y-15 lg:translate-x-80">
                          <h3 className="text-gray-400 text-sm mb-4">Our Modeling Capabilities</h3>
                          <div className="space-y-2 text-sm">
                              {[
                                  'Predictive Modeling',
                                  'Recommendation Engines',
                                  'Natural Language Processing',
                                  'Computer Vision',
                                  'MLOps & Deployment',
                                  'Model Auditing & Ethics'
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
                      Let's build together. Let's build together. Let's build together. Let's build together. Let's build together. Let's build together.
                  </div>
                  <div className="right-text w-full text-white text-5xl sm:text-7xl lg:text-9xl font-bold whitespace-nowrap leading-none">
                      Let's build together. Let's build together. Let's build together. Let's build together. Let's build together. Let's build together.
                  </div>
              </div>

              {/* New Section - Exact Replication of Provided Image */}
              <div className="w-full bg-black text-white px-8 sm:px-16 lg:px-24 py-16">
                  <div className="flex w-full max-w-7xl mx-auto flex-col lg:flex-row gap-16 lg:gap-20 items-center">
                      {/* Left Column - Text Content */}
                      <div className="flex-1 space-y-6 text-center lg:text-left">
                          <p className="text-md">• We approach every model with a clear vision.</p>
                          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal leading-tight tracking-tight">
                              We move beyond hype to build accurate, scalable, and interpretable machine learning models.
                          </h2>
                          <div className="space-y-4 text-gray-300 text-base sm:text-lg leading-relaxed">
                              <p>
                                  We don't <em className="italic">just</em> chase algorithms. Here at ModelCraft, we understand the entire ML lifecycle, from data acquisition and feature engineering to model deployment, monitoring, and governance. We tailor our services to your specific business problem and data landscape.
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
                                      src="/machinelearning_model.jpg"
                                      alt="A data scientist pointing at a complex model diagram on a screen to a colleague."
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
                              We build robust models that are not only predictive but also production-ready and scalable.
                          </h2>
                          <div className="space-y-4 text-gray-300 text-base sm:text-lg leading-relaxed">
                              <p>
                                  We don't <em className="italic">just</em> deliver a model file. Here at ModelCraft, we understand that a successful ML project requires robust engineering, from scalable data pipelines to efficient deployment and continuous monitoring. We tailor our MLOps approach to fit your infrastructure and project goals.
                              </p>
                          </div>
                      </div>
                      
                      {/* Left Column - Image with People */}
                      <div className="flex-1 relative w-full">
                          <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] w-full">
                              <div className="absolute bottom-0 left-0 right-0 h-full rounded-2xl overflow-hidden">
                                  <img
                                      src="/machinelearning_model2.jpg"
                                      alt="An abstract glowing orb of interconnected nodes, representing a complex ML model."
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
                              <span>We use the latest frameworks</span><br />
                              <span className="lg:inline-block lg:-translate-x-20">to build high-performance models.</span>
                          </h1>
                      </div>

                      {/* --- Animated Logo Carousel Section --- */}
                      <div className="mt-16 overflow-hidden w-full">
                          {/* Top Row - Moving Right to Left */}
                          <div className="mb-6">
                              <div className="flex animate-scroll-left gap-6">
                                  {/* First set of logos */}
                                  <LogoCard><p className="text-4xl font-bold text-white">TensorFlow</p></LogoCard>
                                  <LogoCard><p className="text-4xl font-bold text-white">PyTorch</p></LogoCard>
                                  <LogoCard><p className="text-4xl font-bold text-white">Scikit-learn</p></LogoCard>
                                  <LogoCard><p className="text-4xl font-bold text-white">Keras</p></LogoCard>
                                  <LogoCard><p className="text-4xl font-bold text-white">Hugging Face</p></LogoCard>

                                  {/* Duplicate set for seamless loop */}
                                  <LogoCard><p className="text-4xl font-bold text-white">TensorFlow</p></LogoCard>
                                  <LogoCard><p className="text-4xl font-bold text-white">PyTorch</p></LogoCard>
                                  <LogoCard><p className="text-4xl font-bold text-white">Scikit-learn</p></LogoCard>
                                  <LogoCard><p className="text-4xl font-bold text-white">Keras</p></LogoCard>
                                  <LogoCard><p className="text-4xl font-bold text-white">Hugging Face</p></LogoCard>
                              </div>
                          </div>

                          {/* Bottom Row - Moving Left to Right */}
                          <div>
                              <div className="flex animate-scroll-right gap-6">
                                  {/* First set of logos */}
                                   <LogoCard><p className="text-4xl font-bold text-white">Databricks</p></LogoCard>
                                  <LogoCard><p className="text-4xl font-bold text-white">AWS</p></LogoCard>
                                  <LogoCard><p className="text-4xl font-bold text-white">GCP</p></LogoCard>
                                  <LogoCard><p className="text-4xl font-bold text-white">Azure</p></LogoCard>
                                  <LogoCard><p className="text-4xl font-bold text-white">Docker</p></LogoCard>

                                  {/* Duplicate set for seamless loop */}
                                   <LogoCard><p className="text-4xl font-bold text-white">Databricks</p></LogoCard>
                                  <LogoCard><p className="text-4xl font-bold text-white">AWS</p></LogoCard>
                                  <LogoCard><p className="text-4xl font-bold text-white">GCP</p></LogoCard>
                                  <LogoCard><p className="text-4xl font-bold text-white">Azure</p></LogoCard>
                                  <LogoCard><p className="text-4xl font-bold text-white">Docker</p></LogoCard>
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
                              A team of ML experts who can help you build, deploy, and manage models you can trust.
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
                      {/* Predictive Modeling */}
                      <div className="pb-8">
                          <div className="flex items-center gap-x-4 mb-4">
                              <div className="bg-[#D4FF40] p-2 rounded-lg inline-flex">
                                  <PredictiveModelingIcon />
                              </div>
                              <h3 className="text-2xl font-bold">Predictive Modeling</h3>
                          </div>
                          <p className="text-gray-400 leading-relaxed mb-6">
                              Forecast trends, predict customer behavior, and anticipate outcomes with custom models.
                          </p>
                          <div className="w-full h-px bg-gray-700"></div>
                      </div>

                      {/* Recommendation Engines */}
                      <div className="pb-8">
                          <div className="flex items-center gap-x-4 mb-4">
                              <div className="bg-[#D4FF40] p-2 rounded-lg inline-flex">
                                  <RecommendationIcon />
                              </div>
                              <h3 className="text-2xl font-bold">Recommendation Engines</h3>
                          </div>
                          <p className="text-gray-400 leading-relaxed mb-6">
                              Increase engagement and sales by delivering personalized content and product suggestions.
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
                              Extract insights from text data, power chatbots, and analyze sentiment at scale.
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
                              Automate image analysis, object detection, and quality control with visual data.
                          </p>
                          <div className="w-full h-px bg-gray-700"></div>
                      </div>

                      {/* MLOps & Deployment */}
                      <div className="pb-8">
                          <div className="flex items-center gap-x-4 mb-4">
                              <div className="bg-[#D4FF40] p-2 rounded-lg inline-flex">
                                  <MLOpsIcon />
                              </div>
                              <h3 className="text-2xl font-bold">MLOps & Deployment</h3>
                          </div>
                          <p className="text-gray-400 leading-relaxed mb-6">
                              Build robust, automated pipelines for deploying, monitoring, and retraining models in production.
                          </p>
                          <div className="w-full h-px bg-gray-700"></div>
                      </div>

                      {/* Model Auditing & Ethics */}
                      <div className="pb-8">
                          <div className="flex items-center gap-x-4 mb-4">
                              <div className="bg-[#D4FF40] p-2 rounded-lg inline-flex">
                                  <ModelAuditIcon />
                              </div>
                              <h3 className="text-2xl font-bold">Model Auditing & Ethics</h3>
                          </div>
                          <p className="text-gray-400 leading-relaxed mb-6">
                              Ensure your models are fair, transparent, and accountable with our auditing and ethical AI services.
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
                              Our favourite Machine<br />
                              Learning Projects
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
                          {/* Project 1 - E-commerce Recommendation Engine */}
                          <SwiperSlide>
                              <div className="group cursor-pointer">
                                  <div className="bg-gray-900 rounded-3xl overflow-hidden transition-transform duration-300 hover:scale-105 relative">
                                      <div className="relative h-[400px] bg-gradient-to-br from-red-800 to-gray-900 flex items-center justify-center">
                                          <div className="absolute inset-0">
                                              <img
                                                  src="https://images.unsplash.com/photo-1579225776934-0d1a6c896947?q=80&w=1924&auto=format&fit=crop"
                                                  alt="Abstract representation of user profiles and connections"
                                                  className="w-full h-full object-cover opacity-30" />
                                          </div>
                                          <div className="relative z-10 text-center p-8">
                                              <div className="text-white text-5xl font-bold flex items-center justify-center flex-col gap-4">
                                                  <span>Shop</span>
                                                  <div className="w-24 h-1 bg-lime-400"></div>
                                                  <span className="text-transparent" style={{ WebkitTextStroke: '2px #c6ff00', WebkitTextFillColor: 'transparent' }}>Smart</span>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="mt-6">
                                      <div className="flex items-center gap-2 text-gray-400 text-sm mb-2">
                                          <span>2024</span>
                                          <span>•</span>
                                          <span>StyleHub</span>
                                      </div>
                                      <h3 className="text-2xl font-semibold leading-tight">
                                          Personalized recommendation<br />
                                          engine for e-commerce
                                      </h3>
                                  </div>
                              </div>
                          </SwiperSlide>

                          {/* Project 2 - Financial Fraud Detection */}
                          <SwiperSlide>
                              <div className="group cursor-pointer">
                                  <div className="bg-blue-100 rounded-3xl overflow-hidden transition-transform duration-300 hover:scale-105 relative">
                                      <div className="relative h-[400px] p-8 bg-gradient-to-br from-teal-400 to-blue-600">
                                          <div className="bg-white rounded-2xl p-6 h-full flex flex-col justify-center items-center relative overflow-hidden">
                                               <div className="absolute top-0 left-0 right-0 bg-gray-100 h-8 rounded-t-2xl flex items-center px-4">
                                                  <div className="flex gap-2">
                                                      <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                                                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                                                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                                                  </div>
                                              </div>
                                              <div className="text-center mb-6 mt-8">
                                                  <h3 className="text-3xl font-bold text-black mb-2">FRAUD</h3>
                                                  <h3 className="text-3xl font-bold text-red-500">DETECTED</h3>
                                                  <p className="text-sm text-gray-600 mt-4">Anomaly Score: 98.7%</p>
                                                  <p className="text-sm text-gray-600">Transaction Blocked</p>
                                              </div>
                                              <div className="bg-blue-500 rounded-2xl p-4 w-32 h-20 flex items-center justify-center relative">
                                                  <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="mt-6">
                                      <div className="flex items-center gap-2 text-gray-400 text-sm mb-2">
                                          <span>2023</span>
                                          <span>•</span>
                                          <span>FinSecure Bank</span>
                                      </div>
                                      <h3 className="text-2xl font-semibold leading-tight">
                                          Real-time fraud detection<br />
                                          system for financial transactions
                                      </h3>
                                  </div>
                              </div>
                          </SwiperSlide>

                          {/* Project 3 - Sentiment Analysis Platform */}
                          <SwiperSlide>
                              <div className="group cursor-pointer">
                                  <div className="bg-gray-900 rounded-3xl overflow-hidden transition-transform duration-300 hover:scale-105 relative">
                                      <div className="relative h-[400px] bg-gray-800 flex items-center justify-center p-8">
                                          <div className="relative">
                                              <img
                                                  src="https://images.unsplash.com/photo-1556155092-490a1ba16284?q=80&w=2070&auto=format&fit=crop"
                                                  alt="A word cloud with terms like 'happy', 'sad', 'love' representing sentiment analysis."
                                                  className="w-full h-full object-contain filter brightness-90" />
                                              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                                                  <div className="text-white text-center font-bold text-4xl leading-tight border-4 border-white p-4">
                                                      <div>SENTIMENT</div>
                                                      <div>PULSE</div>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="mt-6">
                                      <div className="flex items-center gap-2 text-gray-400 text-sm mb-2">
                                          <span>2024</span>
                                          <span>•</span>
                                          <span>MarketVoice</span>
                                      </div>
                                      <h3 className="text-2xl font-semibold leading-tight">
                                          Sentiment analysis platform<br />
                                          for brand monitoring
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