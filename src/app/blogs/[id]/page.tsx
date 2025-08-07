"use client";
import React, { useState, useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { ArrowUpRight, ArrowLeft, ArrowRight } from 'lucide-react';

import Navbar from '@/app/components/navbar';
import Footer from '@/app/components/footer';

// --- SVG Icon Components ---

const ContentIcon = ({ path }: { path: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d={path} />
  </svg>
);

const ClockIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

// --- Reusable UI Components ---

const ShareButton = ({ bgColor, children }: { bgColor: string, children: React.ReactNode }) => (
    <a href="#" className={`w-8 h-8 rounded-full flex items-center justify-center ${bgColor} hover:opacity-80 transition-opacity`}>
        {children}
    </a>
);

// --- Main Page Component ---

const NeuralNetworksBlogPage: React.FC = () => {
    // State to track scroll progress as a percentage
    const [scrollProgress, setScrollProgress] = useState(0);
    // State to track the currently active section
    const [activeSection, setActiveSection] = useState('intro');

    // Refs for the main scrollable article and each content section
    const articleRef = useRef<HTMLDivElement>(null);
    const mainContainerRef = useRef<HTMLDivElement>(null);
    const sectionRefs = {
        intro: useRef<HTMLDivElement>(null),
        basics: useRef<HTMLDivElement>(null),
        neurons: useRef<HTMLDivElement>(null),
        layers: useRef<HTMLDivElement>(null),
        training: useRef<HTMLDivElement>(null),
        applications: useRef<HTMLDivElement>(null),
    };
    
    // Data for the sections to avoid repetition
    const sections = [
        { id: 'basics', title: 'What Are Neural Networks?', iconPath: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' },
        { id: 'neurons', title: 'Understanding Neurons', iconPath: 'M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1' },
        { id: 'layers', title: 'Network Architecture', iconPath: 'M19 11H5m14-4H5m14-2H5m14 12H5m14-4H5m14-2H5' },
        { id: 'training', title: 'How Networks Learn', iconPath: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253' },
        { id: 'applications', title: 'Real-World Applications', iconPath: 'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
    ];

    // Function to calculate scroll progress and active section
    const updateScrollState = () => {
        const articleElement = articleRef.current;
        if (!articleElement) return;

        // Calculate scroll progress
        const { scrollTop, scrollHeight, clientHeight } = articleElement;
        const totalScrollableHeight = scrollHeight - clientHeight;
        if (totalScrollableHeight > 0) {
            const currentProgress = (scrollTop / totalScrollableHeight) * 100;
            setScrollProgress(currentProgress);
        } else {
            setScrollProgress(0);
        }
        
        // Determine active section
        const viewportOffset = articleElement.getBoundingClientRect().top;
        let currentSection = 'intro';

        for (const section of sections) {
            const sectionRef = sectionRefs[section.id as keyof typeof sectionRefs];
            if (sectionRef.current) {
                const sectionTop = sectionRef.current.getBoundingClientRect().top;
                // Check if the section top is above the middle of the article container
                if (sectionTop - viewportOffset < clientHeight / 2) {
                    currentSection = section.id;
                }
            }
        }
        setActiveSection(currentSection);
    };

    // Effect to handle scroll events for progress bar and active section
    useEffect(() => {
        let isScrollingFromWheel = false;
        let snapTimeout: NodeJS.Timeout | null = null;

        // Handle scroll events on the article container
        const handleArticleScroll = () => {
            if (!isScrollingFromWheel) {
                updateScrollState();
            }
        };

        // Function to snap to main content section
        const snapToMainContent = () => {
            const mainContainer = mainContainerRef.current;
            
            if (mainContainer) {
                const mainRect = mainContainer.getBoundingClientRect();
                const windowHeight = window.innerHeight;
                const scrollY = window.pageYOffset;
                
                // Calculate the ideal position (middle of viewport minus some offset)
                const idealTop = 100; // Offset from top of viewport
                const targetScrollY = scrollY + mainRect.top - idealTop;
                
                // Define snap zones
                const snapZoneTop = windowHeight * 0.7; // When coming from above
                const snapZoneBottom = -windowHeight * 0.3; // When coming from below
                
                // Check if we should snap
                const shouldSnapFromAbove = mainRect.top < snapZoneTop && mainRect.top > 0;
                const shouldSnapFromBelow = mainRect.top < 0 && mainRect.top > snapZoneBottom;
                
                // Snap if in either zone
                if (shouldSnapFromAbove || shouldSnapFromBelow) {
                    window.scrollTo({
                        top: targetScrollY,
                        behavior: 'smooth'
                    });
                }
            }
        };

        // Handle wheel events anywhere on the page
        const handleWheelScroll = (e: WheelEvent) => {
            const articleElement = articleRef.current;
            const mainContainer = mainContainerRef.current;
            
            if (!articleElement || !mainContainer) return;

            // Check if we're in the main content area
            const mainRect = mainContainer.getBoundingClientRect();
            const isInMainArea = e.clientY >= mainRect.top && e.clientY <= mainRect.bottom;
            
            if (isInMainArea) {
                const { scrollTop, scrollHeight, clientHeight } = articleElement;
                const scrollAmount = e.deltaY * 2;
                
                // Check if we're at the boundaries with some tolerance
                const isAtTop = scrollTop <= 1 && e.deltaY < 0;
                const isAtBottom = (scrollTop + clientHeight) >= (scrollHeight - 1) && e.deltaY > 0;
                
                // If we're at boundaries, allow normal page scrolling
                if (isAtTop || isAtBottom) {
                    // Allow the page to scroll normally
                    return;
                }
                
                // Otherwise, handle the scroll within the article
                e.preventDefault();
                isScrollingFromWheel = true;
                
                // Apply scroll to article
                articleElement.scrollTop += scrollAmount;
                
                // Update scroll state
                updateScrollState();
                
                // Reset flag after a brief delay
                setTimeout(() => {
                    isScrollingFromWheel = false;
                }, 50);
            }
        };

        // Handle page scroll events for snapping
        const handlePageScroll = () => {
            // Clear existing timeout
            if (snapTimeout) {
                clearTimeout(snapTimeout);
            }
            
            // Set new timeout to snap after scrolling stops
            snapTimeout = setTimeout(() => {
                snapToMainContent();
            }, 150);
        };

        const articleEl = articleRef.current;
        articleEl?.addEventListener('scroll', handleArticleScroll);
        
        // Add wheel event listener to the document
        document.addEventListener('wheel', handleWheelScroll, { passive: false });
        
        // Add page scroll listener for snapping
        window.addEventListener('scroll', handlePageScroll, { passive: true });

        // Cleanup function to remove event listeners
        return () => {
            articleEl?.removeEventListener('scroll', handleArticleScroll);
            document.removeEventListener('wheel', handleWheelScroll);
            window.removeEventListener('scroll', handlePageScroll);
            if (snapTimeout) {
                clearTimeout(snapTimeout);
            }
        };
    }, []); // Empty dependency array means this effect runs once on mount

    return (
        <div className="bg-[#000000] min-h-screen text-gray-300">
            <style jsx global>{`
                @import url('https://fonts.googleapis.com/css2?family=Product+Sans&display=swap');
                
                body, nav, span, button, h1, h2, h3, h4, p, a, div {
                    font-family: 'Product Sans', sans-serif !important;
                }
                .bg-custom-image {
                    background-image: url('https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2832&auto=format&fit=crop');
                    background-color: #1a1a1a;
                }
                /* Hide scrollbar for Chrome, Safari and Opera */
                .no-scrollbar::-webkit-scrollbar {
                    display: none;
                }
                /* Hide scrollbar for IE, Edge and Firefox */
                .no-scrollbar {
                    -ms-overflow-style: none;  /* IE and Edge */
                    scrollbar-width: none;  /* Firefox */
                }
                .product-sans {
                    font-family: 'Product Sans', sans-serif;
                }
                    
                body {
                    background-color: #000000 !important;
                }
            `}</style>

            <Navbar />
            
            {/* Hero Section */}
            <header className="bg-black flex flex-col md:flex-row md:h-screen md:max-h-[900px] pt-20 md:pt-22">
                <div className="bg-black text-white w-full md:w-2/5 lg:w-1/3 flex flex-col justify-center p-6 sm:p-8 md:p-12 lg:p-16 order-2 md:order-1">
                    <div>
                        <p className="text-sm text-gray-300 tracking-wider">
                            <span className="text-lg leading-none mr-1">•</span> 8 min read
                        </p>
                    </div>
                    <div className="my-10 md:my-0 -translate-x-1 sm:-translate-x-3">
                        <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl font-normal leading-tight">
                            Demystifying <br />
                            <span className="whitespace-nowrap">Neural Networks:</span> <br />
                            A Beginner's Guide
                        </h1>
                    </div>
                    <div className="flex items-center">
                        <img 
                            className="w-14 h-14 rounded-full border-2 border-gray-500 object-cover" 
                            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2788&auto=format&fit=crop"
                            alt="Portrait of a tech expert"
                        />
                        <div className="ml-4">
                            <p className="text-xs text-gray-400">written by</p>
                            <h4 className="font-bold text-lg text-white">Dr. Sarah Chen</h4>
                            <p className="text-sm text-gray-300">AI Research Scientist</p>
                        </div>
                    </div>
                </div>
                <div className="w-full h-64 sm:h-80 md:h-full md:w-3/5 lg:w-2/3 bg-custom-image bg-cover bg-center order-1 md:order-2"></div>
            </header>


            {/* Main Content Layout (Sidebar + Article) */}
            <main ref={mainContainerRef} className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 py-12 px-4 sm:px-8 lg:px-16">
                
                {/* Left Column: Sticky Table of Contents */}
                <aside className="lg:col-span-4 xl:col-span-3">
                    <div className="sticky top-28">
                        <div className="bg-[#1C1C1C] rounded-lg p-6">
                            <h3 className="font-bold text-white mb-4">Contents</h3>
                            <ul>
                                {sections.map(section => (
                                    <li key={section.id} className="flex items-center mb-3">
                                        <div className={`w-1 h-full mr-2 transition-all duration-300 ${activeSection === section.id ? 'bg-green-400' : 'bg-transparent'}`}></div>
                                        <a href={`#${section.id}`} className={`flex items-center transition-colors duration-200 ${activeSection === section.id ? 'text-white font-bold' : 'text-gray-300 hover:text-white'}`}>
                                            <ContentIcon path={section.iconPath} />
                                            <span>{section.title}</span>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                            <p className="font-bold text-white mt-4">Difficulty: Beginner</p>
                            <hr className="border-gray-700 my-4" />
                            <div className="flex items-center text-gray-400 text-sm mb-4">
                                <ClockIcon />
                                <span>8 min read</span>
                            </div>
                            {/* Progress Bar */}
                            <div className="w-full bg-gray-700 rounded-full h-1.5">
                                <div 
                                    className="bg-green-400 h-1.5 rounded-full transition-all duration-150" 
                                    style={{ width: `${scrollProgress}%` }}
                                ></div>
                            </div>
                        </div>
                    </div>
                </aside>
                
                {/* Right Column: Scrollable Main Article */}
                <div 
                    ref={articleRef} 
                    className="lg:col-span-8 xl:col-span-9 lg:max-h-[calc(100vh-7rem)] lg:overflow-y-auto pr-4 no-scrollbar"
                >
                    <article>
                         <div ref={sectionRefs.intro} id="intro" className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
                            <div className="bg-[#282828] text-gray-300 text-sm py-1.5 px-4 rounded-full mb-4 sm:mb-0">
                                Updated on 17 Jul 2025
                            </div>
                            <div className="flex items-center space-x-4">
                                <span className="text-gray-400 text-sm">Share</span>
                                <div className="flex items-center space-x-2">
                                    <ShareButton bgColor="bg-[#0077B5]"><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/></svg></ShareButton>
                                    <ShareButton bgColor="bg-black"><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="currentColor" viewBox="0 0 16 16"><path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.6.75Zm-.86 13.028h1.36L4.323 2.145H2.865l8.875 11.633Z"/></svg></ShareButton>
                                    <ShareButton bgColor="bg-[#1877F2]"><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg></ShareButton>
                                    <ShareButton bgColor="bg-[#36c17b]"><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" /></svg></ShareButton>
                                </div>
                            </div>
                        </div>
                        <div className="text-lg leading-relaxed space-y-6">
                            <p>Artificial Intelligence has become the buzzword of our era, but at its core lies a fascinating concept that mimics the human brain: <em>neural networks</em>. If you've ever wondered how machines can recognize your face in photos, translate languages, or recommend the perfect Netflix show, you're looking at the magic of neural networks in action 🧠✨</p>
                            <p>Think of neural networks as digital brains made up of interconnected nodes, much like neurons in our biological neural system. They're designed to learn patterns, make predictions, and solve complex problems by processing vast amounts of data. Ready to dive into this incredible world? Let's break down the mystery behind these powerful AI systems.</p>
                        </div>

                        {/* --- Section: What Are Neural Networks? --- */}
                        <div ref={sectionRefs.basics} id="basics" className="mt-16 pt-8 space-y-6 text-lg leading-relaxed">
                             <h2 className="text-3xl font-bold text-white mb-4 flex items-center"><ContentIcon path={sections[0].iconPath} /> {sections[0].title}</h2>
                             <p>At their simplest, neural networks are computational models inspired by the way biological neural networks in animal brains work. Just like your brain processes information through interconnected neurons, artificial neural networks process data through interconnected nodes called "artificial neurons" or "perceptrons."</p>
                             <p>Imagine a vast network of tiny decision-makers, each one taking in information, processing it, and passing the result to the next layer of decision-makers. That's essentially what a neural network does – it's a sophisticated pattern recognition system that gets better with experience 🎯</p>
                             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                 <img src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=800&q=80" alt="Neural network visualization" className="rounded-lg object-cover w-full h-[500px]"/>
                                 <img src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80" alt="AI brain concept" className="rounded-lg object-cover w-full h-[500px]"/>
                             </div>
                        </div>
                        {/* --- Section: Understanding Neurons --- */}
                        <div ref={sectionRefs.neurons} id="neurons" className="mt-16 pt-8 space-y-6 text-lg leading-relaxed">
                            <h2 className="text-3xl font-bold text-white mb-4 flex items-center"><ContentIcon path={sections[1].iconPath} /> {sections[1].title}</h2>
                            <p>The building block of any neural network is the artificial neuron. Think of it as a simple mathematical function that receives input, processes it, and produces an output. Each neuron has three key components:</p>
                            <ul className="list-disc list-inside space-y-2 pl-4">
                                <li><strong>Inputs:</strong> Data coming from other neurons or external sources</li>
                                <li><strong>Weights:</strong> Numbers that determine how important each input is</li>
                                <li><strong>Activation Function:</strong> A mathematical function that decides whether the neuron should "fire" or not</li>
                            </ul>
                            <p>When a neuron receives multiple inputs, it multiplies each input by its corresponding weight, adds them all up, and then applies the activation function to determine the output. It's like having a bouncer at a club who considers multiple factors (dress code, age, behavior) with different importance levels before deciding whether to let someone in 🚪</p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                 <img src="/neural_network.jpg" alt="Neuron connections visualization" className="rounded-lg object-cover w-full h-[500px]"/>
                                 <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80" alt="Data processing concept" className="rounded-lg object-cover w-full h-[500px]"/>
                             </div>
                        </div>
                        
                        {/* --- Section: Network Architecture --- */}
                        <div ref={sectionRefs.layers} id="layers" className="mt-16 pt-8 space-y-6 text-lg leading-relaxed">
                             <h2 className="text-3xl font-bold text-white mb-4 flex items-center"><ContentIcon path={sections[2].iconPath} /> {sections[2].title}</h2>
                             <p>Neural networks are organized in layers, much like a well-structured organization. Here's how they're typically arranged:</p>
                             <ul className="list-disc list-inside space-y-2 pl-4">
                                <li><strong>Input Layer:</strong> Where data enters the network (like raw pixel values from an image)</li>
                                <li><strong>Hidden Layers:</strong> The "thinking" layers where complex patterns are detected and processed</li>
                                <li><strong>Output Layer:</strong> Where the final prediction or classification is made</li>
                             </ul>
                             <p>The magic happens in the hidden layers. A simple network might have just one hidden layer with a few neurons, while complex networks can have hundreds of layers with thousands of neurons each. These are called "deep neural networks" – hence the term "deep learning" 🏗️</p>
                             <p>Think of it like an assembly line: the input layer receives raw materials (data), each hidden layer adds more sophistication to the product (feature detection), and the output layer delivers the finished product (prediction).</p>

                               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                 <img src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80" alt="Network layers visualization" className="rounded-lg object-cover w-full h-[500px]"/>
                                 <img src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=800&q=80" alt="Deep learning architecture" className="rounded-lg object-cover w-full h-[500px]"/>
                             </div>
                        </div>

                        {/* --- Section: How Networks Learn --- */}
                        <div ref={sectionRefs.training} id="training" className="mt-16 pt-8 space-y-6 text-lg leading-relaxed">
                             <h2 className="text-3xl font-bold text-white mb-4 flex items-center"><ContentIcon path={sections[3].iconPath} /> {sections[3].title}</h2>
                             <p>Here's where neural networks get truly fascinating: they learn from experience, just like humans do. The learning process involves two key phases:</p>
                             <h3 className="text-2xl font-bold text-white mt-4">Forward Propagation</h3>
                             <p>Data flows through the network from input to output. The network makes a prediction based on its current knowledge (the weights). Initially, these predictions are pretty much random guesses 🎲</p>
                             <h3 className="text-2xl font-bold text-white mt-4">Backpropagation</h3>
                             <p>This is where the learning magic happens. The network compares its prediction with the actual answer, calculates how wrong it was, and then works backward through the layers to adjust the weights. It's like getting feedback on a test and using that feedback to study better for the next exam.</p>
                             <p>This process repeats thousands or millions of times with different examples. Gradually, the network gets better at recognizing patterns and making accurate predictions. It's like learning to ride a bike – lots of wobbling at first, but eventually, you develop the muscle memory! 🚴‍♀️</p>

                               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                 <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80" alt="Machine learning training process" className="rounded-lg object-cover w-full h-[500px]"/>
                                 <img src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80" alt="Data processing and learning" className="rounded-lg object-cover w-full h-[500px]"/>
                             </div>
                        </div>

                        {/* --- Section: Real-World Applications --- */}
                         <div ref={sectionRefs.applications} id="applications" className="mt-16 pt-8 space-y-6 text-lg leading-relaxed">
                             <h2 className="text-3xl font-bold text-white mb-4 flex items-center"><ContentIcon path={sections[4].iconPath} /> {sections[4].title}</h2>
                             <p>Neural networks aren't just theoretical concepts – they're powering many of the technologies you use every day:</p>
                             <ul className="list-disc list-inside space-y-2 pl-4">
                                <li><strong>Image Recognition:</strong> Your smartphone's camera can identify faces, objects, and even text in photos</li>
                                <li><strong>Natural Language Processing:</strong> Virtual assistants like Siri and Alexa understand and respond to your questions</li>
                                <li><strong>Recommendation Systems:</strong> Netflix suggests movies, Spotify curates playlists, and Amazon recommends products</li>
                                <li><strong>Medical Diagnosis:</strong> AI helps doctors detect diseases in X-rays and MRI scans with remarkable accuracy</li>
                                <li><strong>Autonomous Vehicles:</strong> Self-driving cars use neural networks to navigate roads and avoid obstacles</li>
                                <li><strong>Financial Services:</strong> Banks use them to detect fraudulent transactions and assess credit risk</li>
                             </ul>
                             <h3 className="text-2xl font-bold text-white mt-4">The Future is Neural</h3>
                             <p>As we generate more data and develop more powerful computing resources, neural networks are becoming even more sophisticated. From generating art and writing code to discovering new drugs and predicting climate patterns, the possibilities are expanding exponentially 🚀</p>
                             <p>The beauty of neural networks lies in their versatility – they can be adapted to solve problems across virtually any domain where patterns exist in data. And since patterns exist almost everywhere, the potential applications are limitless.</p>

                               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                 <img src="https://images.unsplash.com/photo-1535378917042-10a22c95931a?auto=format&fit=crop&w=800&q=80" alt="AI applications in daily life" className="rounded-lg object-cover w-full h-[500px]"/>
                                 <img src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=800&q=80" alt="Future of neural networks" className="rounded-lg object-cover w-full h-[500px]"/>
                             </div>
                             
                             <h3 className="text-2xl font-bold text-white mt-4">Getting Started</h3>
                             <p>If you're inspired to learn more about neural networks, here are some next steps:</p>
                             <ul className="list-disc list-inside space-y-2 pl-4">
                                <li>Start with online courses on platforms like Coursera, edX, or Udacity</li>
                                <li>Practice with beginner-friendly tools like Scratch for Machine Learning or TensorFlow Playground</li>
                                <li>Join communities like Kaggle to participate in data science competitions</li>
                                <li>Experiment with pre-built models through APIs from Google, Amazon, or OpenAI</li>
                             </ul>
                             <p>Remember, you don't need a PhD in mathematics to understand and work with neural networks. The key is to start with the basics and build your understanding step by step. Every expert was once a beginner! 💪</p>
                        </div>

                    </article>
                </div>
            </main>

            {/* Blog Section */}
            <section className="bg-black text-white w-full py-20 lg:py-28 product-sans">
                <div className="max-w-[90rem] mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
                    <div className="lg:col-span-4 flex flex-col justify-between h-full text-left">
                        <div>
                            <p className="font-semibold tracking-wider text-gray-400 product-sans">• Blog</p>
                            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semi mt-4 leading-tight product-sans">
                                The latest from our AI lab
                            </h2>
                            <button className="mt-8 bg-[#C5F277] text-black font-bold py-3 px-6 rounded-full flex items-center gap-2 hover:bg-white transition-colors duration-300 product-sans">
                                View the blog <ArrowUpRight size={20} />
                            </button>
                        </div>
                        <div className="flex gap-4 mt-12 lg:mt-0">
                            <button className="blog-swiper-prev p-3 rounded-full bg-[#222222] hover:bg-[#333333] transition-colors text-white disabled:opacity-50">
                                <ArrowLeft size={24} />
                            </button>
                            <button className="blog-swiper-next p-3 rounded-full bg-[#222222] hover:bg-[#333333] transition-colors text-white disabled:opacity-50">
                                <ArrowRight size={24} />
                            </button>
                        </div>
                    </div>
                    <div className="lg:col-span-8 overflow-hidden">
                        <Swiper
                            modules={[Navigation]}
                            spaceBetween={20}
                            slidesPerView={1.1}
                            navigation={{ prevEl: '.blog-swiper-prev', nextEl: '.blog-swiper-next' }}
                            breakpoints={{
                                640: { slidesPerView: 1.5, spaceBetween: 20 },
                                768: { slidesPerView: 2.2, spaceBetween: 30 },
                                1024: { slidesPerView: 2.5, spaceBetween: 40 },
                            }}
                            className="!overflow-visible"
                        >
                            {[
                                { id: 1, image: 'https://images.unsplash.com/photo-1555255707-c07966088b7b?auto=format&fit=crop&w=2070&q=80', readTime: '6 min read', title: 'Understanding Deep Learning Fundamentals', description: 'Dive deeper into the mathematical foundations and advanced concepts behind deep neural networks...' },
                                { id: 2, image: '/computer_vision.jpg', readTime: '10 min read', title: 'Computer Vision: How Machines See the World', description: 'Explore how convolutional neural networks revolutionized image recognition and computer vision applications...' },
                                { id: 3, image: 'https://images.unsplash.com/photo-1507146426996-ef05306b995a?auto=format&fit=crop&w=2070&q=80', readTime: '4 min read', title: 'Natural Language Processing Explained', description: 'From chatbots to language translation, discover how neural networks understand and generate human language...' },
                                { id: 4, image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=2070&q=80', readTime: '8 min read', title: 'The Ethics of Artificial Intelligence', description: 'Examining the moral implications and responsible development of AI systems in our modern society...' },
                            ].map((post) => (
                                <SwiperSlide key={post.id}>
                                    <div className="flex flex-col text-left">
                                        <img src={post.image} alt={post.title} className="w-full h-72 object-cover rounded-2xl" />
                                        <div className="mt-4">
                                            <p className="text-sm text-gray-400 product-sans">• {post.readTime}</p>
                                            <h3 className="text-xl font-bold mt-2 hover:text-[#C5F277] transition-colors cursor-pointer product-sans">{post.title}</h3>
                                            <p className="text-gray-400 mt-2 text-sm leading-relaxed product-sans">{post.description}</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default NeuralNetworksBlogPage;