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
  <div className="bg-[var(--bg-secondary)] rounded-2xl h-36 flex items-center justify-center p-6 hover:grayscale-0 transition-all duration-300 ease-in-out cursor-pointer min-w-[280px] flex-shrink-0">
    {children}
  </div>
);

// --- SVG Icon Components ---
const AIOpportunityIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-whtie">
        <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
        <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
        <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
    </svg>
);

const AIRoadmapIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white">
        <path d="M4 7H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M7 4V7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M17 4V7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M6 12H18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 12V18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M9 18H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);


const DataGovernanceIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white">
        <path d="M1 12C1 12 5 4 12 4C19 4 23 12 23 12C23 12 19 20 12 20C5 20 1 12 1 12Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
        <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
    </svg>
);


const VendorSelectionIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white">
        <path d="M4 20V14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 20V4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M20 20V10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);


const ChangeManagementIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white">
        <path d="M3 3H9V9H3V3Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
        <path d="M15 3H21V9H15V3Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
        <path d="M3 15H9V21H3V15Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
        <path d="M15 15H21V21H15V15Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
        <path d="M9 6H15" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
        <path d="M9 18H15" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
        <path d="M6 9V15" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
        <path d="M18 9V15" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
    </svg>
);


const AIEthicsIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white">
        <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
        <path d="M14 2V8H20" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
        <path d="M12 18L12 12" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
        <path d="M9 15H15" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
    </svg>
);


const ArrowIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);


// --- Main Component ---

const testimonials = [
  {
    id: 1,
    rating: 5,
    text: "The strategic roadmap AIInnovate provided gave us a clear, actionable path to leveraging AI. Their insights were transformative for our business planning.",
    author: "Sarah Johnson",
    company: "Tech Innovations Ltd",
    avatar: "https://randomuser.me/api/portraits/women/1.jpg"
  },
  {
    id: 2,
    rating: 5,
    text: "Working with this team was a game-changer. They helped us understand our data's potential and created a strategy that perfectly aligned with our vision.",
    author: "Michael Chen",
    company: "Digital Dynamics",
    avatar: "https://randomuser.me/api/portraits/men/2.jpg"
  },
  {
    id: 3,
    rating: 5,
    text: "Professional, insightful, and results-oriented. Their consulting helped us navigate the complexities of AI and stay ahead of the competition.",
    author: "Emily Rodriguez",
    company: "Future Systems Inc",
    avatar: "https://randomuser.me/api/portraits/women/3.jpg"
  },
  {
    id: 4,
    rating: 5,
    text: "The AI feasibility study was thorough and the strategic recommendations were exceptional. We now have a confident path forward. Highly recommended!",
    author: "David Thompson",
    company: "Smart Solutions Co",
    avatar: "https://randomuser.me/api/portraits/men/4.jpg"
  }
];

const HelpWith = () => {
  return (

    <><Navbar />
    <div className="min-h-screen bg-[var(--bg-main)] text-[var(--text-main)]">
       <style jsx>{`
            @import url('https://fonts.googleapis.com/css2?family=Product+Sans&display=swap');
            
            @keyframes scroll-left {
                0% { transform: translateX(0%); }
                100% { transform: translateX(-100%); }
            }

            @keyframes scroll-right {
                0% { transform: translateX(-100%); }
                100% { transform: translateX(0%); }
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

        <div className="font-product-sans bg-[var(--bg-main)] text-[var(--text-main)] flex min-h-screen w-full items-center justify-center p-8 sm:p-16 lg:p-24">
            <div className="flex w-full max-w-7xl flex-col gap-10 lg:flex-row lg:gap-20">
                {/* Left Column */}
                <div className="flex-1 text-center lg:text-left">
                    <p className="mb-4 text-lg flex items-center justify-center lg:justify-start space-x-2">
                        <div className="w-2 h-2 bg-[var(--brand-primary)] rounded-full" />
                        <span className="text-[var(--text-muted)]">AI Strategy & Consulting</span>
                    </p>
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-none tracking-tight">
                        Strategic AI Consulting<br />for Business Growth.
                    </h1>
                </div>

                {/* Right Column */}
                <div className="flex-1 pt-2 text-base sm:text-lg leading-relaxed text-[var(--text-muted)] lg:text-xl text-center lg:text-left">
                    <p className="mb-6">
                        At AIInnovate, we provide expert guidance, deep industry experience, and a proven track record of successful AI strategies.
                    </p>
                    <p>
                        AI Strategy, Opportunity Analysis, Data Governance, and Technology Roadmapping — we cover all areas of strategic planning. We help startups with novel ideas define a clear path to an AI-powered product. We guide established enterprises in revamping existing systems with intelligent automation or reaching the next level with predictive analytics. Our talented <span className="text-[var(--text-main)] underline decoration-[var(--text-muted)] decoration-1 underline-offset-4">AI strategy team</span> will collaborate with you to build a roadmap that reflects your brand, solves critical business problems, and delivers measurable results.
                    </p>
                </div>
            </div>
        </div>

        {/* Image Section */}
        <div className="w-full bg-[var(--bg-main)] px-4 sm:px-8 lg:px-24 pb-16">
            <div className="relative w-full max-w-7xl mx-auto h-[40vh] sm:h-[50vh] lg:h-[60vh] overflow-hidden rounded-2xl sm:rounded-3xl">
                <img
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=2070&q=80"
                    alt="Consultants in a strategic meeting around a whiteboard"
                    className="w-full h-full object-cover" />
                <div className="absolute top-4 left-4 sm:top-6 sm:left-6 bg-[var(--bg-secondary)] bg-opacity-80 px-4 py-2 sm:px-5 sm:py-3 rounded-full backdrop-blur-sm">
                    <span className="text-[var(--text-main)] text-xs sm:text-sm font-medium">Learn about our approach</span>
                    <svg className="inline-block ml-2 w-4 h-4 text-[var(--text-main)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </div>
            </div>
        </div>

        {/* Startup Section */}
        <div className="w-full bg-[var(--bg-main)] text-[var(--text-main)] px-8 sm:px-16 lg:px-24 py-16">
            <div className="flex w-full max-w-7xl mx-auto flex-col gap-10 lg:flex-row lg:gap-20 items-center">
                {/* Left Column */}
                <div className="flex-1 text-center lg:text-left">
                    <p className="mb-6 text-lg flex items-center justify-center lg:justify-start space-x-2">
                        <div className="w-2 h-2 bg-[var(--brand-primary)] rounded-full" />
                        <span className="text-[var(--text-muted)]">AI Consulting</span>
                    </p>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal leading-tight tracking-tight mb-8">
                        Are you a startup, a well-established company, in the US or worldwide? It doesn't matter. We partner with a diverse range of clients.
                    </h2>
                    <div className="inline-flex justify-center lg:justify-start">
                        <Link href="#" className="group bg-[var(--brand-primary)] text-white font-medium text-sm py-2 px-4 rounded-full self-start flex items-center gap-2 transition-transform hover:scale-105 mt-4 hover:bg-[var(--brand-primary-hover)]">
                            About AIInnovate
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17l9.2-9.2M17 17V7H7" />
                            </svg>
                        </Link>
                    </div>
                </div>

                {/* Right Column - Capabilities List */}
                <div className="flex-1 w-full text-center lg:text-left lg:pt-16 lg:-translate-y-15 lg:translate-x-80">
                    <h3 className="text-[var(--text-muted)] text-sm mb-4">Our Consulting Services</h3>
                    <div className="space-y-2 text-sm">
                        {[
                            'AI Roadmap & Strategy',
                            'Opportunity Analysis',
                            'Data Governance Planning',
                            'Technology Stack Assessment',
                            'Change Management & Adoption',
                            'AI Ethics & Governance'
                        ].map((capability, index) => (
                            <div key={index} className="flex items-center gap-2 justify-center lg:justify-start">
                                <div className="w-4 h-4 bg-[var(--brand-primary)] rounded-full flex items-center justify-center flex-shrink-0">
                                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <span className="text-[var(--text-main)] text-sm">{capability}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>

        {/* Animated Text Section */}
        <div className="overflow-hidden bg-[var(--bg-main)] py-8 text-center">
            <div className="left-text w-full text-[var(--text-main)] text-5xl sm:text-7xl lg:text-9xl font-bold whitespace-nowrap leading-none">
                Let's strategize together. Let's strategize together. Let's strategize together. Let's strategize together.
            </div>
            <div className="right-text w-full text-[var(--text-main)] text-5xl sm:text-7xl lg:text-9xl font-bold whitespace-nowrap leading-none">
                Let's strategize together. Let's strategize together. Let's strategize together. Let's strategize together.
            </div>
        </div>

        {/* New Section - Exact Replication of Provided Image */}
        <div className="w-full bg-[var(--bg-main)] text-[var(--text-main)] px-8 sm:px-16 lg:px-24 py-16">
            <div className="flex w-full max-w-7xl mx-auto flex-col lg:flex-row gap-16 lg:gap-20 items-center">
                {/* Left Column - Text Content */}
                <div className="flex-1 space-y-6 text-center lg:text-left">
                    <p className="text-md flex items-center justify-center lg:justify-start space-x-2">
                        <div className="w-2 h-2 bg-[var(--brand-primary)] rounded-full" />
                        <span className="text-[var(--text-muted)]">We approach every project with a clear vision.</span>
                    </p>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal leading-tight tracking-tight">
                        We like to cut through the noise and develop intelligent, powerful, and actionable AI strategies.
                    </h2>
                    <div className="space-y-4 text-[var(--text-muted)] text-base sm:text-lg leading-relaxed">
                        <p>
                            We don't <em className="italic">just</em> talk about AI theory. Here at AIInnovate, we understand all aspects of a successful AI journey, from initial data strategy and opportunity analysis to creating a full implementation roadmap. We tailor our consulting services to the client and their strategic goals.
                        </p>
                    </div>
                    <div className="pt-4 flex justify-center lg:justify-start">
                        <Link href="#" className="group bg-[var(--brand-primary)] text-white font-medium text-sm py-3 px-6 rounded-full inline-flex items-center gap-2 transition-transform hover:scale-105 hover:bg-[var(--brand-primary-hover)]">
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
                                src="https://images.unsplash.com/photo-1542744095-291d1f67b221?auto=format&fit=crop&w=2070&q=80"
                                alt="Two people having a strategic conversation in a modern office"
                                className="w-full h-full object-cover" />
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="w-full bg-[var(--bg-main)] text-[var(--text-main)] px-8 sm:px-16 lg:px-24 py-16">
            <div className="flex w-full max-w-7xl mx-auto flex-col lg:flex-row-reverse gap-16 lg:gap-20 items-center">
                {/* Right Column - Text Content */}
                <div className="flex-1 space-y-6 text-center lg:text-left">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal leading-tight tracking-tight">
                        We build strategic roadmaps that are powerful, scalable, and tailored to you.
                    </h2>
                    <div className="space-y-4 text-[var(--text-muted)] text-base sm:text-lg leading-relaxed">
                        <p>
                            We don't <em className="italic">just</em> deliver reports. Here at AIInnovate, we partner with you to understand every aspect of your business, ensuring our AI strategy leads to a successful, integrated, and well-adopted solution. We tailor our services to meet your specific project requirements.
                        </p>
                    </div>
                </div>
                
                {/* Left Column - Image with People */}
                <div className="flex-1 relative w-full">
                    <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] w-full">
                        <div className="absolute bottom-0 left-0 right-0 h-full rounded-2xl overflow-hidden">
                            <img
                                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2070&q=80"
                                alt="Team of consultants collaborating around a table with laptops and charts"
                                className="w-full h-full object-cover" />
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* Technologies Section - Fixed Black Background */}
        <div className="w-full bg-[var(--bg-main)] text-[var(--text-main)] px-8 sm:px-16 lg:px-24 py-16">
            <div className="w-full max-w-7xl mx-auto flex flex-col items-center">
                <div className="flex flex-col w-full text-center">
                    {/* Headline - Fixed alignment */}
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-[var(--text-main)] mt-2 max-w-5xl leading-tight">
                        <span>We use the latest technologies</span><br />
                        <span className="lg:inline-block lg:-translate-x-20">to craft future-proof AI strategies.</span>
                    </h1>
                </div>

                {/* --- Animated Logo Carousel Section --- */}
                <div className="mt-16 overflow-hidden w-full">
                    {/* Top Row - Moving Right to Left */}
                    <div className="mb-6">
                        <div className="flex animate-scroll-left gap-6">
                            {/* First set of logos */}
                            <LogoCard><p className="text-4xl font-bold text-[var(--text-main)]">OpenAI</p></LogoCard>
                            <LogoCard><p className="text-4xl font-bold text-[var(--text-main)]">Figma</p></LogoCard>
                            <LogoCard><p className="text-4xl font-bold text-[var(--text-main)]">Notion</p></LogoCard>
                            <LogoCard><p className="text-4xl font-bold text-[var(--text-main)]">Midjourney</p></LogoCard>
                            <LogoCard><p className="text-4xl font-bold text-[var(--text-main)]">Anthropic</p></LogoCard>

                            {/* Duplicate set for seamless loop */}
                            <LogoCard><p className="text-4xl font-bold text-[var(--text-main)]">OpenAI</p></LogoCard>
                            <LogoCard><p className="text-4xl font-bold text-[var(--text-main)]">Figma</p></LogoCard>
                            <LogoCard><p className="text-4xl font-bold text-[var(--text-main)]">Notion</p></LogoCard>
                            <LogoCard><p className="text-4xl font-bold text-[var(--text-main)]">Midjourney</p></LogoCard>
                            <LogoCard><p className="text-4xl font-bold text-[var(--text-main)]">Anthropic</p></LogoCard>
                        </div>
                    </div>

                    {/* Bottom Row - Moving Left to Right */}
                    <div>
                        <div className="flex animate-scroll-right gap-6">
                            {/* First set of logos */}
                            <LogoCard>
                                <svg height="32" viewBox="0 0 75 65" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M37.59.25l36.95 64H.64l36.95-64z"></path>
                                </svg>
                            </LogoCard>
                            <LogoCard><p className="text-4xl font-bold text-[var(--text-main)]">React</p></LogoCard>
                            <LogoCard><p className="text-4xl font-bold text-[var(--text-main)]">Tailwind</p></LogoCard>
                            <LogoCard><p className="text-4xl font-bold text-[var(--text-main)]">Stability AI</p></LogoCard>
                            <LogoCard><p className="text-4xl font-bold text-[var(--text-main)]">Next.js</p></LogoCard>

                            {/* Duplicate set for seamless loop */}
                            <LogoCard>
                                <svg height="32" viewBox="0 0 75 65" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M37.59.25l36.95 64H.64l36.95-64z"></path>
                                </svg>
                            </LogoCard>
                            <LogoCard><p className="text-4xl font-bold text-[var(--text-main)]">React</p></LogoCard>
                            <LogoCard><p className="text-4xl font-bold text-[var(--text-main)]">Tailwind</p></LogoCard>
                            <LogoCard><p className="text-4xl font-bold text-[var(--text-main)]">Stability AI</p></LogoCard>
                            <LogoCard><p className="text-4xl font-bold text-[var(--text-main)]">Next.js</p></LogoCard>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="bg-[var(--bg-main)] text-[var(--text-main)] font-sans p-8 sm:p-16 rounded-xl">
            {/* Header Section */}
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-12 lg:mb-24">
                <div className="w-full lg:w-2/3">
                    <p className="text-sm font-base text-[var(--text-muted)] mb-4 flex items-center space-x-2">
                        <div className="w-2 h-2 bg-[var(--brand-primary)] rounded-full" />
                        <span>What we can help you with</span>
                    </p>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
                        A team of AI strategists that can help you define and execute an AI plan you're proud of
                    </h1>
                </div>
                <div className="mt-8 lg:mt-0 w-full lg:w-auto">
                    <button className="bg-[var(--brand-primary)] text-white font-semibold py-3 px-6 sm:py-4 sm:px-8 rounded-full flex items-center justify-center gap-3 w-full lg:w-auto whitespace-nowrap transition-transform transform hover:scale-105 hover:bg-[var(--brand-primary-hover)]">
                        Get in touch today
                        <ArrowIcon />
                    </button>
                </div>
            </div>

            {/* Services Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
                {/* AI Opportunity Analysis */}
                <div className="pb-8">
                    <div className="flex items-center gap-x-4 mb-4">
                        <div className="bg-[var(--brand-primary)] p-2 rounded-lg inline-flex">
                            <AIOpportunityIcon />
                        </div>
                        <h3 className="text-2xl font-bold">Opportunity Analysis</h3>
                    </div>
                    <p className="text-[var(--text-muted)] leading-relaxed mb-6">
                        Identifying and validating the highest-value AI use cases for your business challenges.
                    </p>
                    <div className="w-full h-px bg-[var(--text-muted)]"></div>
                </div>

                {/* AI Roadmap Development */}
                <div className="pb-8">
                    <div className="flex items-center gap-x-4 mb-4">
                        <div className="bg-[var(--brand-primary)] p-2 rounded-lg inline-flex">
                            <AIRoadmapIcon />
                        </div>
                        <h3 className="text-2xl font-bold">AI Roadmap</h3>
                    </div>
                    <p className="text-[var(--text-muted)] leading-relaxed mb-6">
                        Developing a phased, actionable plan for AI adoption, from pilot projects to full-scale integration.
                    </p>
                    <div className="w-full h-px bg-[var(--text-muted)]"></div>
                </div>

                {/* Data Governance & Strategy */}
                <div className="pb-8">
                    <div className="flex items-center gap-x-4 mb-4">
                        <div className="bg-[var(--brand-primary)] p-2 rounded-lg inline-flex">
                            <DataGovernanceIcon />
                        </div>
                        <h3 className="text-2xl font-bold">Data Governance</h3>
                    </div>
                    <p className="text-[var(--text-muted)] leading-relaxed mb-6">
                        Establishing frameworks to ensure your data is secure, high-quality, and ready for AI.
                    </p>
                    <div className="w-full h-px bg-[var(--text-muted)]"></div>
                </div>

                {/* Vendor & Technology Selection */}
                <div className="pb-8">
                    <div className="flex items-center gap-x-4 mb-4">
                        <div className="bg-[var(--brand-primary)] p-2 rounded-lg inline-flex">
                            <VendorSelectionIcon />
                        </div>
                        <h3 className="text-2xl font-bold">Vendor Selection</h3>
                    </div>
                    <p className="text-[var(--text-muted)] leading-relaxed mb-6">
                        Providing unbiased expertise to help you choose the right AI vendors and technology stack.
                    </p>
                    <div className="w-full h-px bg-[var(--text-muted)]"></div>
                </div>

                {/* Change Management */}
                <div className="pb-8">
                    <div className="flex items-center gap-x-4 mb-4">
                        <div className="bg-[var(--brand-primary)] p-2 rounded-lg inline-flex">
                            <ChangeManagementIcon />
                        </div>
                        <h3 className="text-2xl font-bold">Change Management</h3>
                    </div>
                    <p className="text-[var(--text-muted)] leading-relaxed mb-6">
                        Guiding your organization through the cultural and workflow shifts of AI adoption.
                    </p>
                    <div className="w-full h-px bg-[var(--text-muted)]"></div>
                </div>

                {/* AI Ethics & Governance */}
                <div className="pb-8">
                    <div className="flex items-center gap-x-4 mb-4">
                        <div className="bg-[var(--brand-primary)] p-2 rounded-lg inline-flex">
                            <AIEthicsIcon />
                        </div>
                        <h3 className="text-2xl font-bold">AI Ethics & Governance</h3>
                    </div>
                    <p className="text-[var(--text-muted)] leading-relaxed mb-6">
                        Implementing responsible AI principles to build trust and mitigate risk.
                    </p>
                    <div className="w-full h-px bg-[var(--text-muted)]"></div>
                </div>

            </div>

        </div>

        <section className="bg-[var(--bg-main)] text-[var(--text-main)] w-full py-20 lg:py-28 font-product-sans">
          <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-4 flex flex-col justify-between h-full text-left">
              <div>
                <p className="font-semibold tracking-wider text-[var(--text-muted)] text-left flex items-center space-x-2">
                  <div className="w-2 h-2 bg-[var(--brand-primary)] rounded-full" />
                        <span>Testimonials</span>
                    </p>
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold mt-4 leading-tight text-left">
                    Trusted by industry leaders
                    </h2>
                                    <button className="mt-8 sm:mt-12 bg-[var(--brand-primary)] text-white font-bold py-3 px-6 rounded-full flex items-center gap-2 hover:bg-[var(--brand-primary-hover)] transition-colors duration-300 w-fit">
                                      View all success stories
                                      <ArrowUpRight size={20} />
                                    </button>
                </div>
                <div className="flex gap-4 sm:gap-8 mt-12 lg:mt-16">
                                <button className="testimonial-swiper-prev p-3 rounded-full bg-[var(--bg-secondary)] hover:bg-[var(--bg-secondary-hover)] transition-colors text-[var(--text-main)] disabled:opacity-50">
                                  <ArrowLeft size={24} />
                                </button>
                                <button className="testimonial-swiper-next p-3 rounded-full bg-[var(--bg-secondary)] hover:bg-[var(--bg-secondary-hover)] transition-colors text-[var(--text-main)] disabled:opacity-50">
                                  <ArrowRight size={24} />
                                </button>
                              </div>
                </div>
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
                        <div className="bg-[var(--bg-secondary)] p-6 sm:p-8 rounded-2xl h-full flex flex-col justify-between min-h-[380px] sm:min-h-[400px]">
                        <div>
                            <div className="flex justify-center text-[var(--brand-primary)] mb-6">
                            {[...Array(testimonial.rating)].map((_, i) => (
                                <Star key={i} fill="var(--brand-primary)" strokeWidth={0} size={20} />
                            ))}
                            </div>
                            <p className="text-[var(--text-muted)] text-base sm:text-lg leading-relaxed text-center">
                            "{testimonial.text}"
                            </p>
                        </div>
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
                            <h3 className="font-bold text-lg text-[var(--text-main)]">{testimonial.author}</h3>
                            <p className="text-[var(--text-muted)]">{testimonial.company}</p>
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
        <section className="work-section bg-[var(--bg-main)] text-[var(--text-main)] w-full py-20 lg:py-28 font-product-sans px-4 sm:px-6 lg:px-8">
            <div className="max-w-[90rem] mx-auto">
                {/* Header */}
                <div className="flex flex-col sm:flex-row justify-between items-start mb-16">
                    <div className="text-center sm:text-left">
                        <p className="text-lg mb-4 flex items-center justify-center sm:justify-start space-x-2">
                            <div className="w-2 h-2 bg-[var(--brand-primary)] rounded-full" />
                            <span className="text-[var(--text-muted)]">Our Work</span>
                        </p>
                        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-normal leading-tight">
                            Our favourite AI<br />
                            Strategy Engagements
                        </h2>
                    </div>
                    <div className="mt-8 sm:mt-0 self-center sm:self-auto">
                        <Link href="#" className="bg-[var(--brand-primary)] text-white font-medium text-sm py-3 px-6 rounded-full inline-flex items-center gap-2 transition-transform hover:scale-105 hover:bg-[var(--brand-primary-hover)]">
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
                            640: { slidesPerView: 1.5, spaceBetween: 24 },
                            768: { slidesPerView: 2.1, spaceBetween: 24 },
                            1024: { slidesPerView: 3, spaceBetween: 24 },
                        }}
                        className="!overflow-visible"
                    >
                        {/* Project 1 - RetailPredict Strategy */}
                        <SwiperSlide>
                            <div className="group cursor-pointer">
                                <div className="bg-[var(--bg-secondary)] rounded-3xl overflow-hidden transition-transform duration-300 hover:scale-105 relative">
                                    <div className="relative h-[400px] bg-gradient-to-br from-blue-900 to-gray-900 flex items-center justify-center">
                                        {/* Background image */}
                                        <div className="absolute inset-0">
                                            <img
                                                src="https://images.unsplash.com/photo-1542626991-cbc4e62684cc?auto=format&fit=crop&w=2070&q=80"
                                                alt="Strategy document with charts and graphs"
                                                className="w-full h-full object-cover opacity-30" />
                                        </div>

                                        {/* Content overlay */}
                                        <div className="relative z-10 text-center p-8">
                                            <div className="text-[var(--text-main)] text-5xl font-bold flex items-center justify-center flex-col gap-4">
                                                <span>Retail</span>
                                                <div className="w-24 h-1 bg-[var(--brand-primary)]"></div>
                                                <span className="text-transparent" style={{ WebkitTextStroke: '2px var(--brand-primary)', WebkitTextFillColor: 'transparent' }}>Strategy</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Project Info */}
                                <div className="mt-6">
                                    <div className="flex items-center gap-2 text-[var(--text-muted)] text-sm mb-2">
                                        <span>2023</span>
                                        <span>•</span>
                                        <span>Global Retail Corp</span>
                                    </div>
                                    <h3 className="text-2xl font-semibold leading-tight text-[var(--text-main)]">
                                        Strategic roadmap for predictive<br />
                                        analytics in inventory management
                                    </h3>
                                </div>
                            </div>
                        </SwiperSlide>

                        {/* Project 2 - SupportBot Feasibility */}
                        <SwiperSlide>
                            <div className="group cursor-pointer">
                                <div className="bg-purple-100 rounded-3xl overflow-hidden transition-transform duration-300 hover:scale-105 relative">
                                    <div className="relative h-[400px] p-8 bg-gradient-to-br from-purple-400 to-indigo-500">
                                        <div className="bg-white rounded-2xl p-6 h-full flex flex-col justify-center items-center relative overflow-hidden">
                                            {/* Browser bar */}
                                            <div className="absolute top-0 left-0 right-0 bg-gray-100 h-8 rounded-t-2xl flex items-center px-4">
                                                <div className="flex gap-2">
                                                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                                                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                                                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                                                </div>
                                                <div className="flex-1 text-center">
                                                    <div className="bg-white rounded px-2 py-1 text-xs text-gray-600">analysis.saas.com</div>
                                                </div>
                                            </div>

                                            <div className="text-center mb-6 mt-8">
                                                <h3 className="text-3xl font-bold text-black mb-2">ROI ANALYSIS</h3>
                                                <h3 className="text-3xl font-bold text-purple-500">COMPLETE</h3>
                                                <p className="text-sm text-gray-600 mt-4">Automated Support Feasibility</p>
                                                <p className="text-sm text-gray-600">95% Confidence Interval</p>
                                            </div>

                                            {/* Chart mockup */}
                                            <div className="bg-indigo-500 rounded-2xl p-4 w-40 h-20 flex items-center justify-center relative">
                                                <div className="bg-indigo-600 rounded-lg w-full h-full flex items-center justify-center relative p-2">
                                                    <svg className="w-full h-full text-white" viewBox="0 0 100 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M5 45L25 20L45 35L65 10L85 25L95 15" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Project Info */}
                                <div className="mt-6">
                                    <div className="flex items-center gap-2 text-[var(--text-muted)] text-sm mb-2">
                                        <span>2023</span>
                                        <span>•</span>
                                        <span>SaaS Innovations</span>
                                    </div>
                                    <h3 className="text-2xl font-semibold leading-tight text-[var(--text-main)]">
                                        Feasibility study for NLP-powered<br />
                                        customer support automation
                                    </h3>
                                </div>
                            </div>
                        </SwiperSlide>

                        {/* Project 3 - VisionQC Consulting */}
                        <SwiperSlide>
                            <div className="group cursor-pointer">
                                <div className="bg-[var(--bg-secondary)] rounded-3xl overflow-hidden transition-transform duration-300 hover:scale-105 relative">
                                    <div className="relative h-[400px] bg-gray-800 flex items-center justify-center p-8">
                                        <div className="relative">
                                            <img
                                                src="https://images.unsplash.com/photo-1581092921462-2b7e283f5859?auto=format&fit=crop&w=2070&q=80"
                                                alt="Engineer reviewing plans in an industrial setting"
                                                className="w-full h-full object-contain filter brightness-110" />
                                            {/* Overlay */}
                                            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
                                                <div className="text-white text-center font-bold text-4xl leading-tight border-4 border-white p-4">
                                                    <div>VISION</div>
                                                    <div>STRATEGY</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Project Info */}
                                <div className="mt-6">
                                    <div className="flex items-center gap-2 text-[var(--text-muted)] text-sm mb-2">
                                        <span>2023</span>
                                        <span>•</span>
                                        <span>ManuFuture Inc.</span>
                                    </div>
                                    <h3 className="text-2xl font-semibold leading-tight text-[var(--text-main)]">
                                        Consulting on Computer Vision for<br />
                                        manufacturing quality control
                                    </h3>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>

                    {/* Navigation Arrows */}
                    <div className="flex gap-4 mt-12 justify-center">
                                    <button className="work-swiper-prev p-3 rounded-full bg-[var(--bg-secondary)] hover:bg-[var(--bg-secondary-hover)] transition-colors text-[var(--text-main)] disabled:opacity-50">
                                      <ArrowLeft size={24} />
                                    </button>
                                    <button className="work-swiper-next p-3 rounded-full bg-[var(--bg-secondary)] hover:bg-[var(--bg-secondary-hover)] transition-colors text-[var(--text-main)] disabled:opacity-50">
                                      <ArrowRight size={24} />
                                    </button>
                                  </div>
                </div>
            </div>
        </section>
        <Blog/>
        <Footer />
    </div>
    </>
  );
};

export default HelpWith;