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

// --- SVG Icon Components for AI Automation ---
const RPAIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white
    ">
        <path d="M12 8V4H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M4 8H8V4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M16 4H20V8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 16V20H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M20 16H16V20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M8 20H4V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <rect x="8" y="8" width="8" height="8" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
    </svg>
);

const IDPIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white">
        <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
        <path d="M9 13H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M9 17H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M14 2V8H20" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
    </svg>
);

const ConversationalAIIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white">
        <path d="M21 15C21 15.5304 20.7893 16.0391 20.4142 16.4142C20.0391 16.7893 19.5304 17 19 17H7L3 21V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V15Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
    </svg>
);

const WorkflowIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white">
        <path d="M3 12H7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M17 12H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 3V7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 17V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="2"/>
    </svg>
);

const APIIntegrationIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white">
        <path d="M10 13L6 17L10 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M14 3L18 7L14 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M18 7H3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M6 17H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

const ProcessMiningIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white">
        <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2"/>
        <path d="M21 21L16.65 16.65" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M11 8V14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M8 11H14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
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
    text: "AutomateIQ transformed our accounts payable process, reducing invoice processing time by 95%. Their RPA solution was a game-changer for our finance team.",
    author: "Samantha Green",
    company: "Global Logistics Inc.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 2,
    rating: 5,
    text: "The intelligent chatbot they built for our e-commerce site handles over 80% of customer queries, allowing our support team to focus on complex issues. A brilliant execution.",
    author: "David Lee",
    company: "Shopify Pro",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop"
  },
  {
    id: 3,
    rating: 5,
    text: "Their process mining expertise uncovered bottlenecks we never knew existed. The workflow automations they implemented have significantly boosted our operational efficiency.",
    author: "Priya Sharma",
    company: "HealthCare Systems",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1888&auto=format&fit=crop"
  },
  {
    id: 4,
    rating: 5,
    text: "From intelligent document processing to complex API orchestrations, the team at AutomateIQ delivered a seamless and powerful automation solution. Highly recommended!",
    author: "Marcus Brown",
    company: "Innovate Legal",
    avatar: "https://images.unsplash.com/photo-1552058544-f2b08422138a?q=80&w=1888&auto=format&fit=crop"
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
                        <span className="text-[var(--text-muted)]">AI Automation</span>
                    </p>
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-none tracking-tight">
                        Intelligent Automation to <br />Transform Your Business.
                    </h1>
                </div>

                {/* Right Column */}
                <div className="flex-1 pt-2 text-base sm:text-lg leading-relaxed text-[var(--text-muted)] lg:text-xl text-center lg:text-left">
                    <p className="mb-6">
                        Here at AutomateIQ, we deliver end-to-end automation solutions that drive efficiency, accuracy, and growth.
                    </p>
                    <p>
                        Robotic Process Automation (RPA), Intelligent Document Processing (IDP), and Conversational AI — we cover every facet of automation. We can help a startup automate its first back-office task or guide a global enterprise through a full digital transformation. We can optimize an existing workflow or build a complex, orchestrated system from the ground up. Our talented in-house <span className="text-[var(--text-main)] underline decoration-[var(--text-muted)] decoration-1 underline-offset-4">AI automation team</span> will work with you to identify opportunities, design robust solutions, and implement bots that free your team to focus on high-value work.
                    </p>
                </div>
            </div>
        </div>

        {/* Image Section */}
        <div className="w-full bg-[var(--bg-main)] px-4 sm:px-8 lg:px-24 pb-16">
            <div className="relative w-full max-w-7xl mx-auto h-[40vh] sm:h-[50vh] lg:h-[60vh] overflow-hidden rounded-2xl sm:rounded-3xl">
                <img
                    src="/AI_intelegence.jpg"
                    alt="Abstract visualization of a robotic arm interacting with a digital workflow interface."
                    className="w-full h-full object-cover" />
                <div className="absolute top-4 left-4 sm:top-6 sm:left-6 bg-[var(--bg-secondary)] bg-opacity-80 px-4 py-2 sm:px-5 sm:py-3 rounded-full backdrop-blur-sm">
                    <span className="text-[var(--text-main)] text-xs sm:text-sm font-medium">See automation in action</span>
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
                        <span className="text-[var(--text-muted)]">AI Automation</span>
                    </p>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal leading-tight tracking-tight mb-8">
                        From small businesses to large corporations, we build automation solutions that scale with your needs and deliver immediate ROI.
                    </h2>
                    <div className="inline-flex justify-center lg:justify-start">
                        <Link href="#" className="group bg-[var(--brand-primary)] text-white font-medium text-sm py-2 px-4 rounded-full self-start flex items-center gap-2 transition-transform hover:scale-105 hover:bg-[var(--brand-primary-hover)] mt-4">
                            About AutomateIQ
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17l9.2-9.2M17 17V7H7" />
                            </svg>
                        </Link>
                    </div>
                </div>

                {/* Right Column - Capabilities List */}
                <div className="flex-1 w-full text-center lg:text-left lg:pt-16 lg:-translate-y-15 lg:translate-x-80">
                    <h3 className="text-[var(--text-muted)] text-sm mb-4 ">Our Automation Capabilities</h3>
                    <div className="space-y-2 text-sm">
                        {[
                            'Robotic Process Automation (RPA)',
                            'Intelligent Document Processing (IDP)',
                            'Conversational AI & Chatbots',
                            'Workflow Automation',
                            'API Integration & Orchestration',
                            'Process Mining & Discovery'
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
                Let's automate together. Let's automate together. Let's automate together. Let's automate together. Let's automate together. Let's automate together.
            </div>
            <div className="right-text w-full text-[var(--text-main)] text-5xl sm:text-7xl lg:text-9xl font-bold whitespace-nowrap leading-none">
                Let's automate together. Let's automate together. Let's automate together. Let's automate together. Let's automate together. Let's automate together.
            </div>
        </div>

        {/* New Section - Exact Replication of Provided Image */}
        <div className="w-full bg-[var(--bg-main)] text-[var(--text-main)] px-8 sm:px-16 lg:px-24 py-16">
            <div className="flex w-full max-w-7xl mx-auto flex-col lg:flex-row gap-16 lg:gap-20 items-center">
                {/* Left Column - Text Content */}
                <div className="flex-1 space-y-6 text-center lg:text-left">
                    <p className="text-md flex items-center justify-center lg:justify-start space-x-2">
                        <div className="w-2 h-2 bg-[var(--brand-primary)] rounded-full" />
                        <span className="text-[var(--text-muted)]">We approach every process with a clear vision.</span>
                    </p>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal leading-tight tracking-tight">
                        We go beyond simple scripts to build intelligent, resilient, and scalable automation solutions.
                    </h2>
                    <div className="space-y-4 text-[var(--text-muted)] text-base sm:text-lg leading-relaxed">
                        <p>
                            We don't <em className="italic">just</em> automate tasks. Here at AutomateIQ, we re-engineer processes for optimal efficiency. From initial process mining and discovery to building, deploying, and managing digital workers, we provide a complete automation service tailored to your business goals.
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
                                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop"
                                alt="A diverse team of colleagues collaborating on a workflow plan on a glass board"
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
                        We build intelligent digital workforces that are not only efficient, but secure and ready for enterprise scale.
                    </h2>
                    <div className="space-y-4 text-[var(--text-muted)] text-base sm:text-lg leading-relaxed">
                        <p>
                            We don't <em className="italic">just</em> build bots. We build digital colleagues. Our approach to AI automation ensures robust security, comprehensive governance, and seamless integration into your existing tech stack, creating a reliable digital workforce you can count on.
                        </p>
                    </div>
                </div>
                
                {/* Left Column - Image with People */}
                <div className="flex-1 relative w-full">
                    <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] w-full">
                        <div className="absolute bottom-0 left-0 right-0 h-full rounded-2xl overflow-hidden">
                            <img
                                src="https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?q=80&w=1904&auto=format&fit=crop"
                                alt="Close-up of code on a screen, representing the back-end of an automation process"
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
                        <span>We use industry-leading platforms</span><br />
                        <span className="lg:inline-block lg:-translate-x-20">to deliver powerful automation.</span>
                    </h1>
                </div>

                {/* --- Animated Logo Carousel Section --- */}
                <div className="mt-16 overflow-hidden w-full">
                    {/* Top Row - Moving Right to Left */}
                    <div className="mb-6">
                        <div className="flex animate-scroll-left gap-6">
                            {/* First set of logos */}
                            <LogoCard><p className="text-4xl font-bold text-[var(--text-main)]">UiPath</p></LogoCard>
                            <LogoCard><p className="text-4xl font-bold text-[var(--text-main)]">Automation Anywhere</p></LogoCard>
                            <LogoCard><p className="text-4xl font-bold text-[var(--text-main)]">Power Automate</p></LogoCard>
                            <LogoCard><p className="text-4xl font-bold text-[var(--text-main)]">WorkFusion</p></LogoCard>
                            <LogoCard><p className="text-4xl font-bold text-[var(--text-main)]">Blue Prism</p></LogoCard>

                            {/* Duplicate set for seamless loop */}
                            <LogoCard><p className="text-4xl font-bold text-[var(--text-main)]">UiPath</p></LogoCard>
                            <LogoCard><p className="text-4xl font-bold text-[var(--text-main)]">Automation Anywhere</p></LogoCard>
                            <LogoCard><p className="text-4xl font-bold text-[var(--text-main)]">Power Automate</p></LogoCard>
                            <LogoCard><p className="text-4xl font-bold text-[var(--text-main)]">WorkFusion</p></LogoCard>
                            <LogoCard><p className="text-4xl font-bold text-[var(--text-main)]">Blue Prism</p></LogoCard>
                        </div>
                    </div>

                    {/* Bottom Row - Moving Left to Right */}
                    <div>
                        <div className="flex animate-scroll-right gap-6">
                            {/* First set of logos */}
                                <LogoCard><p className="text-4xl font-bold text-[var(--text-main)]">Zapier</p></LogoCard>
                            <LogoCard><p className="text-4xl font-bold text-[var(--text-main)]">OpenAI</p></LogoCard>
                            <LogoCard><p className="text-4xl font-bold text-[var(--text-main)]">AWS</p></LogoCard>
                            <LogoCard><p className="text-4xl font-bold text-[var(--text-main)]">Azure</p></LogoCard>
                            <LogoCard><p className="text-4xl font-bold text-[var(--text-main)]">ServiceNow</p></LogoCard>

                            {/* Duplicate set for seamless loop */}
                                <LogoCard><p className="text-4xl font-bold text-[var(--text-main)]">Zapier</p></LogoCard>
                            <LogoCard><p className="text-4xl font-bold text-[var(--text-main)]">OpenAI</p></LogoCard>
                            <LogoCard><p className="text-4xl font-bold text-[var(--text-main)]">AWS</p></LogoCard>
                            <LogoCard><p className="text-4xl font-bold text-[var(--text-main)]">Azure</p></LogoCard>
                            <LogoCard><p className="text-4xl font-bold text-[var(--text-main)]">ServiceNow</p></LogoCard>
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
                        <span>What we can automate for you</span>
                    </p>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
                        A team of automation experts who can help you build a digital workforce and streamline your operations.
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
                {/* Robotic Process Automation */}
                <div className="pb-8">
                    <div className="flex items-center gap-x-4 mb-4">
                        <div className="bg-[var(--brand-primary)] p-2 rounded-lg inline-flex">
                            <RPAIcon />
                        </div>
                        <h3 className="text-2xl font-bold">RPA</h3>
                    </div>
                    <p className="text-[var(--text-muted)] leading-relaxed mb-6">
                        Automate repetitive, rule-based tasks across applications to free up human workers for higher-value activities.
                    </p>
                    <div className="w-full h-px bg-[var(--text-muted)]"></div>
                </div>

                {/* Intelligent Document Processing */}
                <div className="pb-8">
                    <div className="flex items-center gap-x-4 mb-4">
                        <div className="bg-[var(--brand-primary)] p-2 rounded-lg inline-flex">
                            <IDPIcon />
                        </div>
                        <h3 className="text-2xl font-bold">Intelligent Document Processing</h3>
                    </div>
                    <p className="text-[var(--text-muted)] leading-relaxed mb-6">
                        Extract, classify, and validate data from any document, like invoices and contracts, turning unstructured data into actionable insights.
                    </p>
                    <div className="w-full h-px bg-[var(--text-muted)]"></div>
                </div>

                {/* Conversational AI */}
                <div className="pb-8">
                    <div className="flex items-center gap-x-4 mb-4">
                        <div className="bg-[var(--brand-primary)] p-2 rounded-lg inline-flex">
                            <ConversationalAIIcon />
                        </div>
                        <h3 className="text-2xl font-bold">Conversational AI</h3>
                    </div>
                    <p className="text-[var(--text-muted)] leading-relaxed mb-6">
                        Deploy intelligent chatbots and voice assistants to provide 24/7 customer support and automate service desk interactions.
                    </p>
                    <div className="w-full h-px bg-[var(--text-muted)]"></div>
                </div>

                {/* Workflow Automation */}
                <div className="pb-8">
                    <div className="flex items-center gap-x-4 mb-4">
                        <div className="bg-[var(--brand-primary)] p-2 rounded-lg inline-flex">
                            <WorkflowIcon />
                        </div>
                        <h3 className="text-2xl font-bold">Workflow Automation</h3>
                    </div>
                    <p className="text-[var(--text-muted)] leading-relaxed mb-6">
                        Design and orchestrate complex, end-to-end business processes that connect people, systems, and bots.
                    </p>
                    <div className="w-full h-px bg-[var(--text-muted)]"></div>
                </div>

                {/* API Integration */}
                <div className="pb-8">
                    <div className="flex items-center gap-x-4 mb-4">
                        <div className="bg-[var(--brand-primary)] p-2 rounded-lg inline-flex">
                            <APIIntegrationIcon />
                        </div>
                        <h3 className="text-2xl font-bold">API Integration</h3>
                    </div>
                    <p className="text-[var(--text-muted)] leading-relaxed mb-6">
                        Seamlessly connect disparate applications, databases, and legacy systems to create a unified automation fabric.
                    </p>
                    <div className="w-full h-px bg-[var(--text-muted)]"></div>
                </div>

                {/* Process Mining */}
                <div className="pb-8">
                    <div className="flex items-center gap-x-4 mb-4">
                        <div className="bg-[var(--brand-primary)] p-2 rounded-lg inline-flex">
                            <ProcessMiningIcon />
                        </div>
                        <h3 className="text-2xl font-bold">Process Mining</h3>
                    </div>
                    <p className="text-[var(--text-muted)] leading-relaxed mb-6">
                        Analyze your existing business processes to discover inefficiencies, identify automation opportunities, and monitor ROI.
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
                            Automation Projects
                        </h2>
                    </div>
                    <div className="mt-8 sm:mt-0 self-center sm:self-auto">
                        <Link href="#" className="bg-[var(--brand-primary)] text-white font-medium text-sm py-3 px-6 rounded-full inline-flex items-center gap-2 transition-transform hover:scale-105 hover:bg-[var(--brand-primary-hover)]">
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
                        {/* Project 1 - Automated Invoice Processing */}
                        <SwiperSlide>
                            <div className="group cursor-pointer">
                                <div className="bg-[var(--bg-secondary)] rounded-3xl overflow-hidden transition-transform duration-300 hover:scale-105 relative">
                                    <div className="relative h-[400px] bg-gradient-to-br from-emerald-800 to-gray-900 flex items-center justify-center">
                                        <div className="absolute inset-0">
                                            <img
                                                src="https://images.unsplash.com/photo-1579621970795-87f54d504ba4?q=80&w=2070&auto=format&fit=crop"
                                                alt="Stack of invoices and financial documents with a digital overlay."
                                                className="w-full h-full object-cover opacity-30" />
                                        </div>
                                        <div className="relative z-10 text-center p-8">
                                            <div className="text-[var(--text-main)] text-5xl font-bold flex items-center justify-center flex-col gap-4">
                                                <span>Invoice</span>
                                                <div className="w-24 h-1 bg-[var(--brand-primary)]"></div>
                                                <span className="text-transparent" style={{ WebkitTextStroke: '2px var(--brand-primary)', WebkitTextFillColor: 'transparent' }}>Flow</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-6">
                                    <div className="flex items-center gap-2 text-[var(--text-muted)] text-sm mb-2">
                                        <span>2024</span>
                                        <span>•</span>
                                        <span>SupplyChain Co.</span>
                                    </div>
                                    <h3 className="text-2xl font-semibold leading-tight text-[var(--text-main)]">
                                        Automated invoice processing<br />
                                        and accounts payable
                                    </h3>
                                </div>
                            </div>
                        </SwiperSlide>

                        {/* Project 2 - Customer Service Chatbot */}
                        <SwiperSlide>
                            <div className="group cursor-pointer">
                                <div className="bg-purple-100 rounded-3xl overflow-hidden transition-transform duration-300 hover:scale-105 relative">
                                    <div className="relative h-[400px] p-8 bg-gradient-to-br from-purple-400 to-pink-500">
                                        <div className="bg-[var(--bg-main)] rounded-2xl p-6 h-full flex flex-col justify-center items-center relative overflow-hidden">
                                                <div className="absolute top-0 left-0 right-0 bg-[var(--bg-secondary)] h-8 rounded-t-2xl flex items-center px-4">
                                                <div className="flex gap-2">
                                                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                                                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                                                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                                                </div>
                                            </div>
                                            <div className="text-center mb-6 mt-8">
                                                <h3 className="text-3xl font-bold text-[var(--text-main)] mb-2">ASSIST BOT</h3>
                                                <h3 className="text-3xl font-bold text-purple-600">ONLINE</h3>
                                                <p className="text-sm text-[var(--text-muted)] mt-4">Handling 5,000+ chats daily</p>
                                                <p className="text-sm text-[var(--text-muted)]">24/7 Customer Support</p>
                                            </div>
                                            <div className="bg-purple-500 rounded-2xl p-4 w-32 h-20 flex items-center justify-center relative">
                                                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-6">
                                    <div className="flex items-center gap-2 text-[var(--text-muted)] text-sm mb-2">
                                        <span>2023</span>
                                        <span>•</span>
                                        <span>RetailGiant</span>
                                    </div>
                                    <h3 className="text-2xl font-semibold leading-tight text-[var(--text-main)]">
                                        Conversational AI chatbot<br />
                                        for e-commerce support
                                    </h3>
                                </div>
                            </div>
                        </SwiperSlide>

                        {/* Project 3 - Employee Onboarding Workflow */}
                        <SwiperSlide>
                            <div className="group cursor-pointer">
                                <div className="bg-[var(--bg-secondary)] rounded-3xl overflow-hidden transition-transform duration-300 hover:scale-105 relative">
                                    <div className="relative h-[400px] bg-gray-800 flex items-center justify-center p-8">
                                        <div className="relative">
                                            <img
                                                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop"
                                                alt="Team celebrating a successful project completion in an office."
                                                className="w-full h-full object-contain filter brightness-90" />
                                            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                                                <div className="text-white text-center font-bold text-4xl leading-tight border-4 border-white p-4">
                                                    <div>ONBOARD</div>
                                                    <div>NOW</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-6">
                                    <div className="flex items-center gap-2 text-[var(--text-muted)] text-sm mb-2">
                                        <span>2024</span>
                                        <span>•</span>
                                        <span>Enterprise Solutions LLC</span>
                                    </div>
                                    <h3 className="text-2xl font-semibold leading-tight text-[var(--text-main)]">
                                        Automated employee onboarding<br />
                                        and IT provisioning workflow
                                    </h3>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>

                    {/* Navigation Arrows */}
                    <div className="flex gap-4 mt-12 justify-center">
                        <button className="work-swiper-prev p-3 rounded-full bg-[var(--bg-secondary)] hover:bg-[var(--bg-secondary-hover)] transition-colors text-white disabled:opacity-50">
                            <ArrowLeft size={24} />
                        </button>
                        <button className="work-swiper-next p-3 rounded-full bg-[var(--bg-secondary)] hover:bg-[var(--bg-secondary-hover)] transition-colors text-white disabled:opacity-50">
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