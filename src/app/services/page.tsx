"use client";
import React from 'react';
import { useRouter } from 'next/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Navbar from '@/app/components/navbar';
import Footer from '@/app/components/footer';

/**
 * SVG icon for the arrow
 */
const ArrowIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="stroke-current opacity-0 group-hover:opacity-100 transition-opacity duration-300"
    strokeWidth="1.5"
  >
    <path d="M7 17L17 7M17 7H7M17 7V17" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

interface BlogPost {
  id: number;
  image: string;
  readTime: string;
  title: string;
  excerpt: string;
  slug: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    readTime: '11 min read',
    title: 'How To Create A Killer Web Design Brief (Free Template Included)',
    excerpt: 'So you want a new website but don\'t know how to write a website design brief? Here\'s our full guide, including FREE...',
    slug: 'how-to-create-killer-web-design-brief'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    readTime: '6 min read',
    title: 'Our Culture, Our Value & Our Studio',
    excerpt: 'In our own words, how important culture, values and studio environment is to us as a web design agency at...',
    slug: 'our-culture-our-value-our-studio'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    readTime: '4 min read',
    title: 'Why our clients choose Manchester',
    excerpt: 'Hi, I\'m Andrew, Creative Director of MadeByenhc. I wanted to share with you why our clients choose...',
    slug: 'why-our-clients-choose-manchester'
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    readTime: '8 min read',
    title: 'The Future of AI in Web Development',
    excerpt: 'Exploring how artificial intelligence is revolutionizing the way we build and design websites in 2024...',
    slug: 'future-ai-web-development'
  }
];

/**
 * ServicesPage Component
 */
const ServicesPage = () => {
  const router = useRouter();

  const handleServiceClick = (serviceName: string) => {
    // Convert service name to URL-friendly slug
    const slug = serviceName.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and');
    router.push(`/services/${slug}`);
  };

  const handleBlogClick = (slug: string) => {
    router.push(`/blog/${slug}`);
  };

  const aiServices = [
    { number: "01", name: "Custom AI Solutions" },
    { number: "02", name: "Machine Learning Models" },
    { number: "03", name: "AI Automation" },
    { number: "04", name: "AI Integration" },
    { number: "05", name: "Predictive Analytics" },
  ];

  const consultingServices = [
    { number: "01", name: "AI Strategy" },
    { number: "02", name: "Data Analytics" },
    { number: "03", name: "Process Optimization" },
    { number: "04", name: "Digital Transformation" },
    { number: "05", name: "AI Audit & Assessment" },
  ];

  const developmentServices = [
    { number: "01", name: "Chatbot Development" },
    { number: "02", name: "Computer Vision" },
    { number: "03", name: "Natural Language Processing" },
    { number: "04", name: "Recommendation Systems" },
    { number: "05", name: "AI Model Training" },
  ];

  const supportServices = [
    { number: "01", name: "AI Maintenance" },
    { number: "02", name: "Performance Monitoring" },
    { number: "03", name: "Model Updates" },
    { number: "04", name: "Technical Support" },
    { number: "05", name: "Training & Documentation" },
  ];

  const ServiceButton = ({ service, onClick }: { service: { number: string; name: string }, onClick: (serviceName: string) => void }) => (
    <li className="border-b border-neutral-700 py-4">
      <button 
        onClick={() => onClick(service.name)}
        className="w-full group transition-all duration-300 hover:bg-neutral-900/30 hover:border-white/20 border border-transparent rounded-lg px-4 py-3 cursor-pointer"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-baseline gap-4">
            <span className="text-sm font-light text-neutral-400 group-hover:text-white transition-colors duration-300">
              {service.number}
            </span>
            <span className="text-xl md:text-2xl font-medium group-hover:text-white transition-colors duration-300">
              {service.name}
            </span>
          </div>
          <ArrowIcon />
        </div>
        <div className="h-px bg-gradient-to-r from-transparent via-white/40 to-transparent mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </button>
    </li>
  );

  return (
    <>
      <Navbar />
      <main className="bg-black text-white min-h-screen p-8 sm:p-16 md:p-24 font-sans">
        <div className="mb-16">
          <div className="flex items-center space-x-2 text-white text-base">
            <span className="text-lg">•</span>
            <span>Services</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-medium leading-tight tracking-tight">
              We're an AI company with cutting-edge expertise
            </h1>
          </div>

          <div className="lg:justify-self-end lg:self-end translate-y-38">
            <p className="text-2xl md:text-3xl lg:text-4xl max-w-lg text-white leading-tight font-normal">
              We bring our passion for intelligent solutions to forward-thinking businesses and deliver AI that transforms.
            </p>
          </div>
        </div>

        <div className="w-full h-px bg-gray-800 mt-24 mb-16 translate-y-40"></div>

        {/* AI Development Section */}
        <div className="pt-24">
          <h2 className="text-[6rem] sm:text-[8rem] md:text-[10rem] font-bold leading-none tracking-tighter">
            AI Development
          </h2>

          <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
            <div>
              <p className="text-lg md:text-xl max-w-sm leading-relaxed font-medium">
                AI engineers and data scientists in-house building intelligent systems tailored to your business needs.
              </p>
            </div>
            <div>
              <ul>
                {aiServices.map((service) => (
                  <ServiceButton 
                    key={service.number} 
                    service={service} 
                    onClick={handleServiceClick}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="w-full h-px bg-gray-800 mt-24 mb-16"></div>

        {/* Consulting Section */}
        <div className="pt-24">
          <h2 className="text-[6rem] sm:text-[8rem] md:text-[10rem] font-bold leading-none tracking-tighter">
            Consulting
          </h2>

          <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
            <div>
              <p className="text-lg md:text-xl max-w-sm leading-relaxed font-medium">
                Strategic AI consultants helping you identify opportunities and implement AI-driven transformation.
              </p>
            </div>
            <div>
              <ul>
                {consultingServices.map((service) => (
                  <ServiceButton 
                    key={service.number} 
                    service={service} 
                    onClick={handleServiceClick}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="w-full h-px bg-gray-800 mt-24 mb-16"></div>

        {/* Solutions Section */}
        <div className="pt-24">
          <h2 className="text-[6rem] sm:text-[8rem] md:text-[10rem] font-bold leading-none tracking-tighter">
            Solutions
          </h2>

          <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
            <div>
              <p className="text-lg md:text-xl max-w-sm leading-relaxed font-medium">
                End-to-end AI solutions from concept to deployment, powered by the latest in artificial intelligence.
              </p>
            </div>
            <div>
              <ul>
                {developmentServices.map((service) => (
                  <ServiceButton 
                    key={service.number} 
                    service={service} 
                    onClick={handleServiceClick}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="w-full h-px bg-gray-800 mt-24 mb-16"></div>

        {/* Support Section */}
        <div className="pt-24">
          <h2 className="text-[6rem] sm:text-[8rem] md:text-[10rem] font-bold leading-none tracking-tighter">
            Support
          </h2>

          <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
            <div>
              <p className="text-lg md:text-xl max-w-sm leading-relaxed font-medium">
                Comprehensive support services ensuring your AI systems perform optimally and evolve with your business.
              </p>
            </div>
            <div>
              <ul>
                {supportServices.map((service) => (
                  <ServiceButton 
                    key={service.number} 
                    service={service} 
                    onClick={handleServiceClick}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="w-full h-px bg-gray-800 mt-24 mb-16"></div>

        {/* Latest from our studio Section */}
        <section className="pt-24 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
            {/* Left Column */}
            <div className="lg:col-span-4 flex flex-col justify-between h-full">
              <div>
                {/* <p className="font-semibold tracking-wider text-gray-400 text-left">• Latest from our studio</p> */}
                <h2 className="text-5xl lg:text-6xl font-medium mt-4 leading-tight text-left">
                  Latest from our studio
                </h2>
              </div>
              <div className="flex gap-8 mt-16">
                <button className="blog-swiper-prev p-3 rounded-full bg-[#222222] hover:bg-[#333333] transition-colors text-white disabled:opacity-50">
                  <ArrowLeft size={24} />
                </button>
                <button className="blog-swiper-next p-3 rounded-full bg-[#222222] hover:bg-[#333333] transition-colors text-white disabled:opacity-50">
                  <ArrowRight size={24} />
                </button>
              </div>
            </div>

            {/* Right Column (Slider) */}
            <div className="lg:col-span-8 overflow-hidden">
              <Swiper
                modules={[Navigation]}
                spaceBetween={30}
                slidesPerView={1.2}
                navigation={{
                  prevEl: '.blog-swiper-prev',
                  nextEl: '.blog-swiper-next',
                }}
                breakpoints={{
                  768: { slidesPerView: 1.5, spaceBetween: 30 },
                  1024: { slidesPerView: 2.2, spaceBetween: 40 },
                }}
                className="!overflow-visible"
              >
                {blogPosts.map((post) => (
                  <SwiperSlide key={post.id}>
                    <div 
                      className="rounded-2xl overflow-hidden h-full flex flex-col cursor-pointer group transition-all duration-300" 
                      style={{ height: '500px' }}
                      onClick={() => handleBlogClick(post.slug)}
                    >
                      <div className="relative overflow-hidden rounded-2xl mb-6">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300 rounded-2xl"
                          onError={(e) => {
                            e.currentTarget.src = 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';
                          }}
                        />
                        {/* Green arrow overlay */}
                        <div className="absolute top-4 left-4 w-12 h-12 bg-[#C5F277] rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            className="stroke-black"
                            strokeWidth="2"
                          >
                            <path d="M7 17L17 7M17 7H7M17 7V17" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </div>
                      </div>
                      <div className="flex flex-col flex-grow">
                        <div className="flex items-center gap-2 text-gray-400 text-sm mb-4">
                          <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
                          <span>{post.readTime}</span>
                        </div>
                        <h3 className="text-2xl font-bold mb-4 leading-tight group-hover:text-white transition-colors duration-300">
                          {post.title}
                        </h3>
                        <p className="text-gray-400 text-base leading-relaxed flex-grow">
                          {post.excerpt}
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </section>

        <style jsx>{`
          @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;700;800&display=swap');
          
          * {
            font-family: 'Plus Jakarta Sans', sans-serif;
          }
        `}</style>
      </main>
      <Footer />
    </>
  );
};

export default ServicesPage;