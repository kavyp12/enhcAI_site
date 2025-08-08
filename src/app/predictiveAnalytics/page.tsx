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
const ForecastingIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white">
        <path d="M3 3V19C3 19.5304 3.21071 20.0391 3.58579 20.4142C3.96086 20.7893 4.46957 21 5 21H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M7 14L12 9L17 12L21 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

const ChurnPredictionIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white">
        <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="8.5" cy="7" r="4" stroke="currentColor" strokeWidth="2" />
        <line x1="18" y1="8" x2="23" y2="13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="23" y1="8" x2="18" y2="13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const FraudDetectionIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white">
        <path d="M21.73 18.27l-9-15.59a1 1 0 0 0-1.74 0l-9 15.59A1 1 0 0 0 2.73 20h18a1 1 0 0 0 .73-1.73z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <line x1="12" y1="9" x2="12" y2="13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <line x1="12" y1="17" x2="12.01" y2="17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

const DemandForecastingIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white">
        <path d="M4 20V14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 20V4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M20 20V10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

const PredictiveMaintenanceIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const LTVPredictionIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white">
        <line x1="12" y1="1" x2="12" y2="23" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);


const ArrowIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

// --- Main Component ---

const testimonials = [
  {
    id: 1,
    rating: 5,
    text: "The demand forecasting model has been incredibly accurate, helping us optimize our stock levels and reduce waste. A truly impactful solution.",
    author: "John Carter",
    company: "Retail Dynamics",
    avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1887&auto=format&fit=crop"
  },
  {
    id: 2,
    rating: 5,
    text: "Their predictive maintenance model has saved us thousands in potential repair costs by identifying equipment failure risks before they happen.",
    author: "Maria Garcia",
    company: "Industrial Operations",
    avatar: "https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?q=80&w=2076&auto=format&fit=crop"
  },
  {
    id: 3,
    rating: 5,
    text: "Truly professional and innovative. Their customer churn prediction models gave us the insights needed to retain our most valuable clients.",
    author: "Chen Wei",
    company: "SaaS Growth Co.",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1887&auto=format&fit=crop"
  },
  {
    id: 4,
    rating: 5,
    text: "The fraud detection system is best-in-class. It has significantly reduced fraudulent activity with minimal disruption to our genuine customers.",
    author: "Fatima Al-Jamil",
    company: "FinSecure Payments",
    avatar: "https://images.unsplash.com/photo-1525134479668-1bee5c7c6845?q=80&w=1887&auto=format&fit=crop"
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

        {/* Styles for the blog section */}
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
                        <span className="text-[var(--text-muted)]">Predictive Analytics</span>
                    </p>
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-none tracking-tight">
                        Harnessing Future Insights<br />with Predictive Analytics.
                    </h1>
                </div>

                {/* Right Column */}
                <div className="flex-1 pt-2 text-base sm:text-lg leading-relaxed text-[var(--text-muted)] lg:text-xl text-center lg:text-left">
                    <p className="mb-6">
                        Here at PredictAI, we build powerful predictive models that turn your historical data into a strategic advantage for the future.
                    </p>
                    <p>
                        From forecasting sales and customer behavior to predicting operational failures and fraud, we master all facets of predictive analytics. We can help a growing e-commerce store forecast demand, a SaaS company predict customer churn, or a financial institution detect fraudulent transactions in real-time. Our talented in-house <span className="text-[var(--text-main)] underline decoration-[var(--text-muted)] decoration-1 underline-offset-4">data science team</span> will collaborate with you to craft a predictive model that solves your unique challenges, unlocks data-driven foresight, and delivers tangible business value.
                    </p>
                </div>
            </div>
        </div>

        {/* Image Section */}
        <div className="w-full bg-[var(--bg-main)] px-4 sm:px-8 lg:px-24 pb-16">
            <div className="relative w-full max-w-7xl mx-auto h-[40vh] sm:h-[50vh] lg:h-[60vh] overflow-hidden rounded-2xl sm:rounded-3xl">
                <img
                    src="https://images.unsplash.com/photo-1551288049-a2a1985b9b18?auto=format&fit=crop&w=2070&q=80"
                    alt="Dashboard showing data charts and predictive trend lines."
                    className="w-full h-full object-cover" />
                <div className="absolute top-4 left-4 sm:top-6 sm:left-6 bg-[var(--bg-secondary)] bg-opacity-80 px-4 py-2 sm:px-5 sm:py-3 rounded-full backdrop-blur-sm">
                    <span className="text-[var(--text-main)] text-xs sm:text-sm font-medium">Explore our predictive models</span>
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
                        <span className="text-[var(--text-muted)]">Predictive Power</span>
                    </p>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal leading-tight tracking-tight mb-8">
                        Whether you're looking to optimize inventory, reduce churn, or prevent fraud, we build predictive models that fit your specific goals.
                    </h2>
                    <div className="inline-flex justify-center lg:justify-start">
                        <Link href="#" className="group bg-[var(--brand-primary)] text-white font-medium text-sm py-2 px-4 rounded-full self-start flex items-center gap-2 transition-transform hover:scale-105 hover:bg-[var(--brand-primary-hover)] mt-4">
                            About PredictAI
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17l9.2-9.2M17 17V7H7" />
                            </svg>
                        </Link>
                    </div>
                </div>

                {/* Right Column - Capabilities List */}
                <div className="flex-1 w-full text-center lg:text-left lg:pt-16 lg:-translate-y-15 lg:translate-x-80">
                    <h3 className="text-[var(--text-muted)] text-sm mb-4">Our Predictive Capabilities</h3>
                    <div className="space-y-2 text-sm">
                        {[
                            'Sales & Revenue Forecasting',
                            'Customer Churn Prediction',
                            'Fraud & Anomaly Detection',
                            'Demand Forecasting',
                            'Predictive Maintenance',
                            'Customer Lifetime Value (LTV) Prediction'
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
                Let's predict together. Let's predict together. Let's predict together. Let's predict together. Let's predict together. 
            </div>
            <div className="right-text w-full text-[var(--text-main)] text-5xl sm:text-7xl lg:text-9xl font-bold whitespace-nowrap leading-none">
                Let's predict together. Let's predict together. Let's predict together. Let's predict together. Let's predict together. 
            </div>
        </div>

        {/* New Section - Vision */}
        <div className="w-full bg-[var(--bg-main)] text-[var(--text-main)] px-8 sm:px-16 lg:px-24 py-16">
            <div className="flex w-full max-w-7xl mx-auto flex-col lg:flex-row gap-16 lg:gap-20 items-center">
                {/* Left Column - Text Content */}
                <div className="flex-1 space-y-6 text-center lg:text-left">
                    <p className="text-md flex items-center justify-center lg:justify-start space-x-2">
                        <div className="w-2 h-2 bg-[var(--brand-primary)] rounded-full" />
                        <span className="text-[var(--text-muted)]">We approach every forecast with a clear vision.</span>
                    </p>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal leading-tight tracking-tight">
                        We move beyond guesswork to build accurate, explainable, and actionable predictive models.
                    </h2>
                    <div className="space-y-4 text-[var(--text-muted)] text-base sm:text-lg leading-relaxed">
                        <p>
                            We don't <em className="italic">just</em> deliver a prediction. Here at PredictAI, we focus on the entire analytics lifecycle, from data preparation and feature engineering to model validation, deployment, and impact analysis. We ensure our models provide clear insights that drive better business decisions.
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
                                src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070&auto=format&fit=crop"
                                alt="A data analyst explaining a predictive chart to a colleague."
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
                        We build robust predictive models that are not only accurate but also integrated and ready for business use.
                    </h2>
                    <div className="space-y-4 text-[var(--text-muted)] text-base sm:text-lg leading-relaxed">
                        <p>
                            We don't <em className="italic">just</em> provide a static analysis. We understand that for predictions to be valuable, they must be integrated into your operational workflows. We focus on building scalable data pipelines and deployment strategies to ensure our models deliver continuous, real-time value.
                        </p>
                    </div>
                </div>
                
                {/* Left Column - Image */}
                <div className="flex-1 relative w-full">
                    <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] w-full">
                        <div className="absolute bottom-0 left-0 right-0 h-full rounded-2xl overflow-hidden">
                            <img
                                src="https://images.unsplash.com/photo-1591696205602-2f950c417cb9?q=80&w=2070&auto=format&fit=crop"
                                alt="Abstract representation of data flowing and being analyzed."
                                className="w-full h-full object-cover" />
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* Technologies Section */}
        <div className="w-full bg-[var(--bg-main)] text-[var(--text-main)] px-8 sm:px-16 lg:px-24 py-16">
            <div className="w-full max-w-7xl mx-auto flex flex-col items-center">
                <div className="flex flex-col w-full text-center">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-[var(--text-main)] mt-2 max-w-5xl leading-tight">
                        <span>We use the latest frameworks</span><br />
                        <span className="lg:inline-block lg:-translate-x-20">to build high-performance predictions.</span>
                    </h1>
                </div>
                <div className="mt-16 overflow-hidden w-full">
                    <div className="mb-6">
                        <div className="flex animate-scroll-left gap-6">
                            <LogoCard><p className="text-4xl font-bold text-[var(--text-main)]">TensorFlow</p></LogoCard>
                            <LogoCard><p className="text-4xl font-bold text-[var(--text-main)]">PyTorch</p></LogoCard>
                            <LogoCard><p className="text-4xl font-bold text-[var(--text-main)]">Scikit-learn</p></LogoCard>
                            <LogoCard><p className="text-4xl font-bold text-[var(--text-main)]">Prophet</p></LogoCard>
                            <LogoCard><p className="text-4xl font-bold text-[var(--text-main)]">XGBoost</p></LogoCard>
                            <LogoCard><p className="text-4xl font-bold text-[var(--text-main)]">TensorFlow</p></LogoCard>
                            <LogoCard><p className="text-4xl font-bold text-[var(--text-main)]">PyTorch</p></LogoCard>
                            <LogoCard><p className="text-4xl font-bold text-[var(--text-main)]">Scikit-learn</p></LogoCard>
                            <LogoCard><p className="text-4xl font-bold text-[var(--text-main)]">Prophet</p></LogoCard>
                            <LogoCard><p className="text-4xl font-bold text-[var(--text-main)]">XGBoost</p></LogoCard>
                        </div>
                    </div>
                    <div>
                        <div className="flex animate-scroll-right gap-6">
                            <LogoCard><p className="text-4xl font-bold text-[var(--text-main)]">Databricks</p></LogoCard>
                            <LogoCard><p className="text-4xl font-bold text-[var(--text-main)]">AWS SageMaker</p></LogoCard>
                            <LogoCard><p className="text-4xl font-bold text-[var(--text-main)]">Google AI Platform</p></LogoCard>
                            <LogoCard><p className="text-4xl font-bold text-[var(--text-main)]">Azure ML</p></LogoCard>
                            <LogoCard><p className="text-4xl font-bold text-[var(--text-main)]">Kubeflow</p></LogoCard>
                            <LogoCard><p className="text-4xl font-bold text-[var(--text-main)]">Databricks</p></LogoCard>
                            <LogoCard><p className="text-4xl font-bold text-[var(--text-main)]">AWS SageMaker</p></LogoCard>
                            <LogoCard><p className="text-4xl font-bold text-[var(--text-main)]">Google AI Platform</p></LogoCard>
                            <LogoCard><p className="text-4xl font-bold text-[var(--text-main)]">Azure ML</p></LogoCard>
                            <LogoCard><p className="text-4xl font-bold text-[var(--text-main)]">Kubeflow</p></LogoCard>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* Services Section */}
        <div className="bg-[var(--bg-main)] text-[var(--text-main)] font-sans p-8 sm:p-16 rounded-xl">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-12 lg:mb-24">
                <div className="w-full lg:w-2/3">
                    <p className="text-sm font-base text-[var(--text-muted)] mb-4 flex items-center space-x-2">
                        <div className="w-2 h-2 bg-[var(--brand-primary)] rounded-full" />
                        <span>How we can help you predict the future</span>
                    </p>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
                        A team of data scientists who can help you build, deploy, and manage predictive models you can trust.
                    </h1>
                </div>
                <div className="mt-8 lg:mt-0 w-full lg:w-auto">
                    <button className="bg-[var(--brand-primary)] text-white font-semibold py-3 px-6 sm:py-4 sm:px-8 rounded-full flex items-center justify-center gap-3 w-full lg:w-auto whitespace-nowrap transition-transform transform hover:scale-105 hover:bg-[var(--brand-primary-hover)]">
                        Get in touch today
                        <ArrowIcon />
                    </button>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
                <div className="pb-8">
                    <div className="flex items-center gap-x-4 mb-4">
                        <div className="bg-[var(--brand-primary)] p-2 rounded-lg inline-flex">
                            <ForecastingIcon />
                        </div>
                        <h3 className="text-2xl font-bold">Sales Forecasting</h3>
                    </div>
                    <p className="text-[var(--text-muted)] leading-relaxed mb-6">
                        Anticipate future sales trends and revenue with high-accuracy forecasting models.
                    </p>
                    <div className="w-full h-px bg-[var(--text-muted)]"></div>
                </div>
                <div className="pb-8">
                    <div className="flex items-center gap-x-4 mb-4">
                        <div className="bg-[var(--brand-primary)] p-2 rounded-lg inline-flex">
                            <ChurnPredictionIcon />
                        </div>
                        <h3 className="text-2xl font-bold">Churn Prediction</h3>
                    </div>
                    <p className="text-[var(--text-muted)] leading-relaxed mb-6">
                        Identify customers at risk of leaving and take proactive steps to retain them.
                    </p>
                    <div className="w-full h-px bg-[var(--text-muted)]"></div>
                </div>
                <div className="pb-8">
                    <div className="flex items-center gap-x-4 mb-4">
                        <div className="bg-[var(--brand-primary)] p-2 rounded-lg inline-flex">
                            <FraudDetectionIcon />
                        </div>
                        <h3 className="text-2xl font-bold">Fraud Detection</h3>
                    </div>
                    <p className="text-[var(--text-muted)] leading-relaxed mb-6">
                        Detect and prevent fraudulent transactions in real-time to protect your business.
                    </p>
                    <div className="w-full h-px bg-[var(--text-muted)]"></div>
                </div>
                <div className="pb-8">
                    <div className="flex items-center gap-x-4 mb-4">
                        <div className="bg-[var(--brand-primary)] p-2 rounded-lg inline-flex">
                            <DemandForecastingIcon />
                        </div>
                        <h3 className="text-2xl font-bold">Demand Forecasting</h3>
                    </div>
                    <p className="text-[var(--text-muted)] leading-relaxed mb-6">
                        Optimize your inventory and supply chain by accurately predicting product demand.
                    </p>
                    <div className="w-full h-px bg-[var(--text-muted)]"></div>
                </div>
                <div className="pb-8">
                    <div className="flex items-center gap-x-4 mb-4">
                        <div className="bg-[var(--brand-primary)] p-2 rounded-lg inline-flex">
                            <PredictiveMaintenanceIcon />
                        </div>
                        <h3 className="text-2xl font-bold">Predictive Maintenance</h3>
                    </div>
                    <p className="text-[var(--text-muted)] leading-relaxed mb-6">
                        Anticipate equipment failures before they occur to minimize downtime and costs.
                    </p>
                    <div className="w-full h-px bg-[var(--text-muted)]"></div>
                </div>
                <div className="pb-8">
                    <div className="flex items-center gap-x-4 mb-4">
                        <div className="bg-[var(--brand-primary)] p-2 rounded-lg inline-flex">
                            <LTVPredictionIcon />
                        </div>
                        <h3 className="text-2xl font-bold">LTV Prediction</h3>
                    </div>
                    <p className="text-[var(--text-muted)] leading-relaxed mb-6">
                        Forecast the total revenue a customer will generate throughout their relationship with you.
                    </p>
                    <div className="w-full h-px bg-[var(--text-muted)]"></div>
                </div>
            </div>
        </div>

        {/* Testimonials Section */}
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
                        640: { slidesPerView: 1.2, spaceBetween: 20 },
                        768: { slidesPerView: 1.5, spaceBetween: 30 },
                        1024: { slidesPerView: 2.2, spaceBetween: 40 },
                        }}
                        className="!overflow-visible"
                    >
                        {testimonials.map((testimonial) => (
                        <SwiperSlide key={testimonial.id} className="h-auto">
                            <div className="bg-[var(--bg-secondary)] p-6 sm:p-8 rounded-2xl h-full flex flex-col justify-between min-h-[380px] sm:min-h-[400px]">
                            <div>
                                <div className="flex justify-center mb-6">
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

        {/* Our Work Section */}
        <section className="work-section bg-[var(--bg-main)] text-[var(--text-main)] w-full py-20 lg:py-28 font-product-sans px-4 sm:px-6 lg:px-8">
            <div className="max-w-[90rem] mx-auto">
                <div className="flex flex-col sm:flex-row justify-between items-start mb-16">
                    <div className="text-center sm:text-left">
                        <p className="text-lg mb-4 flex items-center justify-center sm:justify-start space-x-2">
                            <div className="w-2 h-2 bg-[var(--brand-primary)] rounded-full" />
                            <span className="text-[var(--text-muted)]">Our Work</span>
                        </p>
                        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-normal leading-tight">
                            Our favourite Predictive<br />
                            Analytics Projects
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
                        <SwiperSlide>
                            <div className="group cursor-pointer">
                                <div className="bg-[var(--bg-secondary)] rounded-3xl overflow-hidden transition-transform duration-300 hover:scale-105 relative">
                                    <div className="relative h-[400px] bg-gradient-to-br from-green-300 to-[var(--bg-secondary)] flex items-center justify-center">
                                        <div className="absolute inset-0">
                                            <img
                                                src="https://images.unsplash.com/photo-1579621970795-87f54d504ba4?q=80&w=2070&auto=format&fit=crop"
                                                alt="Financial chart showing upward trend"
                                                className="w-full h-full object-cover opacity-30"
                                            />
                                        </div>
                                        <div className="relative z-10 text-center p-8">
                                            <div className="text-[var(--text-main)] text-5xl font-bold flex items-center justify-center flex-col gap-4">
                                                <span>Sales</span>
                                                <div className="w-24 h-1 bg-[var(--brand-primary)]"></div>
                                                <span className="text-transparent" style={{ WebkitTextStroke: '2px var(--brand-primary)', WebkitTextFillColor: 'transparent' }}>Forecast</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-6">
                                    <div className="flex items-center gap-2 text-[var(--text-muted)] text-sm mb-2">
                                        <span>2024</span>
                                        <span>•</span>
                                        <span>eCom Global</span>
                                    </div>
                                    <h3 className="text-2xl font-semibold leading-tight text-[var(--text-main)]">
                                        Quarterly sales forecasting<br />
                                        to optimize marketing spend
                                    </h3>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="group cursor-pointer">
                                <div className="bg-[var(--bg-secondary)] rounded-3xl overflow-hidden transition-transform duration-300 hover:scale-105 relative">
                                    <div className="relative h-[400px] p-8 bg-gradient-to-br from-red-200 to-orange-300">
                                        <div className="bg-[var(--bg-main)] rounded-2xl p-6 h-full flex flex-col justify-center items-center relative overflow-hidden">
                                            <div className="absolute top-0 left-0 right-0 bg-[var(--bg-secondary)] h-8 rounded-t-2xl flex items-center px-4">
                                                <div className="flex gap-2">
                                                <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                                                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                                                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                                                </div>
                                            </div>
                                            <div className="text-center mb-6 mt-8">
                                                <h3 className="text-3xl font-bold text-[var(--text-main)] mb-2">CHURN RISK</h3>
                                                <h3 className="text-3xl font-bold text-red-500">HIGH</h3>
                                                <p className="text-sm text-[var(--text-muted)] mt-4">Risk Score: 92.1%</p>
                                                <p className="text-sm text-[var(--text-muted)]">Action: Trigger Retention Campaign</p>
                                            </div>
                                            <div className="bg-[var(--brand-primary)] rounded-2xl p-4 w-32 h-20 flex items-center justify-center relative">
                                                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M23 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path></svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-6">
                                    <div className="flex items-center gap-2 text-[var(--text-muted)] text-sm mb-2">
                                        <span>2023</span>
                                        <span>•</span>
                                        <span>Connective SaaS</span>
                                    </div>
                                    <h3 className="text-2xl font-semibold leading-tight text-[var(--text-main)]">
                                        Real-time customer churn<br />
                                        prediction for retention teams
                                    </h3>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="group cursor-pointer">
                                <div className="bg-[var(--bg-secondary)] rounded-3xl overflow-hidden transition-transform duration-300 hover:scale-105 relative">
                                    <div className="relative h-[400px] bg-[var(--bg-secondary)] flex items-center justify-center p-8">
                                        <div className="relative">
                                            <img
                                                src="https://images.unsplash.com/photo-1611944103448-07258451129b?q=80&w=2070&auto=format&fit=crop"
                                                alt="A factory floor with heavy machinery."
                                                className="w-full h-full object-contain filter brightness-90"
                                            />
                                            <div className="absolute inset-0 flex items-center justify-center bg-[var(--bg-main)] bg-opacity-50">
                                                <div className="text-[var(--text-main)] text-center font-bold text-4xl leading-tight border-4 border-[var(--text-main)] p-4">
                                                    <div>MAINTAIN</div>
                                                    <div>PREDICT</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-6">
                                    <div className="flex items-center gap-2 text-[var(--text-muted)] text-sm mb-2">
                                        <span>2024</span>
                                        <span>•</span>
                                        <span>IndustrialWorks</span>
                                    </div>
                                    <h3 className="text-2xl font-semibold leading-tight text-[var(--text-main)]">
                                        Predictive maintenance model<br />
                                        for industrial machinery
                                    </h3>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
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

        <Workwith />
        <Blog />
        <Footer />
    </div>
    </>
  );
};

export default HelpWith;