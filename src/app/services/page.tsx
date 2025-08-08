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

const ArrowIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="stroke-current opacity-0 group-hover:opacity-100 transition-opacity duration-300" strokeWidth="1.5">
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
  { id: 1, image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', readTime: '11 min read', title: 'How To Create A Killer Web Design Brief (Free Template Included)', excerpt: 'So you want a new website but don\'t know how to write a website design brief? Here\'s our full guide, including FREE...', slug: 'how-to-create-killer-web-design-brief' },
  { id: 2, image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', readTime: '6 min read', title: 'Our Culture, Our Value & Our Studio', excerpt: 'In our own words, how important culture, values and studio environment is to us as a web design agency at...', slug: 'our-culture-our-value-our-studio' },
  { id: 3, image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', readTime: '4 min read', title: 'Why our clients choose Manchester', excerpt: 'Hi, I\'m Andrew, Creative Director of MadeByenhc. I wanted to share with you why our clients choose...', slug: 'why-our-clients-choose-manchester' },
  { id: 4, image: 'https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', readTime: '8 min read', title: 'The Future of AI in Web Development', excerpt: 'Exploring how artificial intelligence is revolutionizing the way we build and design websites in 2024...', slug: 'future-ai-web-development' }
];

const ServicesPage = () => {
  const router = useRouter();

  const handleServiceClick = (serviceName: string) => {
    const slug = serviceName.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and');
    router.push(`/services/${slug}`);
  };

  const handleBlogClick = (slug: string) => router.push(`/blog/${slug}`);

  const aiServices = [
    { number: "01", name: "Custom AI Solutions" }, { number: "02", name: "Machine Learning Models" },
    { number: "03", name: "AI Automation" }, { number: "04", name: "AI Integration" },
    { number: "05", name: "Predictive Analytics" },
  ];

  const consultingServices = [
    { number: "01", name: "AI Strategy" }, { number: "02", name: "Data Analytics" },
    { number: "03", name: "Process Optimization" }, { number: "04", name: "Digital Transformation" },
    { number: "05", name: "AI Audit & Assessment" },
  ];

  const developmentServices = [
    { number: "01", name: "Chatbot Development" }, { number: "02", name: "Computer Vision" },
    { number: "03", name: "Natural Language Processing" }, { number: "04", name: "Recommendation Systems" },
    { number: "05", name: "AI Model Training" },
  ];

  const supportServices = [
    { number: "01", name: "AI Maintenance" }, { number: "02", name: "Performance Monitoring" },
    { number: "03", name: "Model Updates" }, { number: "04", name: "Technical Support" },
    { number: "05", name: "Training & Documentation" },
  ];

  const ServiceButton = ({ service, onClick }: { service: { number: string; name: string }, onClick: (serviceName: string) => void }) => (
    <li className="border-b border-[var(--border-main)] py-4">
      <button onClick={() => onClick(service.name)} className="w-full group transition-all duration-300 hover:bg-[var(--bg-card-secondary)]/30 hover:border-[var(--text-main)]/20 border border-transparent rounded-lg px-4 py-3 cursor-pointer">
        <div className="flex items-center justify-between">
          <div className="flex items-baseline gap-4">
            <span className="text-sm font-light text-[var(--text-muted)] group-hover:text-[var(--text-main)] transition-colors duration-300">{service.number}</span>
            <span className="text-xl md:text-2xl font-medium group-hover:text-[var(--text-main)] transition-colors duration-300">{service.name}</span>
          </div>
          <ArrowIcon />
        </div>
        <div className="h-px bg-gradient-to-r from-transparent via-[var(--text-main)]/40 to-transparent mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </button>
    </li>
  );

  return (
    <>
      <Navbar />
      <main className="bg-[var(--bg-main)] text-[var(--text-main)] min-h-screen px-6 sm:px-16 md:px-24 pt-28 sm:pt-24 font-sans">
        <div className="mb-12 md:mb-16">
          <div className="flex items-center space-x-2 text-[var(--text-main)] text-base">
            <span className="text-lg">•</span>
            <span>Services</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          <div><h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium leading-tight tracking-tight">We're an AI company with cutting-edge expertise</h1></div>
          <div className="lg:justify-self-end lg:self-end lg:translate-y-38 mt-8 lg:mt-0">
            <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl max-w-lg text-[var(--text-main)] leading-tight font-normal">We bring our passion for intelligent solutions to forward-thinking businesses and deliver AI that transforms.</p>
          </div>
        </div>

        <div className="w-full h-px bg-[var(--border-secondary)] mt-16 lg:mt-24 mb-12 lg:mb-16 lg:translate-y-40"></div>
        <div className="pt-16 lg:pt-24">
          <h2 className="text-5xl sm:text-7xl md:text-[8rem] lg:text-[10rem] font-bold leading-none tracking-tighter">AI Development</h2>
          <div className="mt-12 md:mt-20 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12 md:gap-y-16">
            <div><p className="text-lg max-w-sm leading-relaxed font-medium">AI engineers and data scientists in-house building intelligent systems tailored to your business needs.</p></div>
            <div><ul>{aiServices.map((service) => <ServiceButton key={service.number} service={service} onClick={handleServiceClick} />)}</ul></div>
          </div>
        </div>
        <div className="w-full h-px bg-[var(--border-secondary)] mt-24 mb-12 md:mb-16"></div>
        <div className="pt-16 lg:pt-24">
          <h2 className="text-5xl sm:text-7xl md:text-[8rem] lg:text-[10rem] font-bold leading-none tracking-tighter">Consulting</h2>
          <div className="mt-12 md:mt-20 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12 md:gap-y-16">
            <div><p className="text-lg max-w-sm leading-relaxed font-medium">Strategic AI consultants helping you identify opportunities and implement AI-driven transformation.</p></div>
            <div><ul>{consultingServices.map((service) => <ServiceButton key={service.number} service={service} onClick={handleServiceClick} />)}</ul></div>
          </div>
        </div>
        <div className="w-full h-px bg-[var(--border-secondary)] mt-24 mb-12 md:mb-16"></div>
        <div className="pt-16 lg:pt-24">
          <h2 className="text-5xl sm:text-7xl md:text-[8rem] lg:text-[10rem] font-bold leading-none tracking-tighter">Solutions</h2>
          <div className="mt-12 md:mt-20 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12 md:gap-y-16">
            <div><p className="text-lg max-w-sm leading-relaxed font-medium">End-to-end AI solutions from concept to deployment, powered by the latest in artificial intelligence.</p></div>
            <div><ul>{developmentServices.map((service) => <ServiceButton key={service.number} service={service} onClick={handleServiceClick} />)}</ul></div>
          </div>
        </div>
        <div className="w-full h-px bg-[var(--border-secondary)] mt-24 mb-12 md:mb-16"></div>
        <div className="pt-16 lg:pt-24">
          <h2 className="text-5xl sm:text-7xl md:text-[8rem] lg:text-[10rem] font-bold leading-none tracking-tighter">Support</h2>
          <div className="mt-12 md:mt-20 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12 md:gap-y-16">
            <div><p className="text-lg max-w-sm leading-relaxed font-medium">Comprehensive support services ensuring your AI systems perform optimally and evolve with your business.</p></div>
            <div><ul>{supportServices.map((service) => <ServiceButton key={service.number} service={service} onClick={handleServiceClick} />)}</ul></div>
          </div>
        </div>
        <div className="w-full h-px bg-[var(--border-secondary)] mt-24 mb-12 md:mb-16"></div>

        <section className="pt-16 lg:pt-24 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">
            <div className="lg:col-span-4 flex flex-col justify-between h-full">
              <div><h2 className="text-4xl sm:text-5xl lg:text-6xl font-medium mt-4 leading-tight text-left">Latest from our studio</h2></div>
              <div className="flex gap-8 mt-8 lg:mt-16">
                <button className="blog-swiper-prev p-3 rounded-full bg-[var(--bg-card-secondary)] hover:bg-[var(--border-main)] transition-colors text-[var(--text-main)] disabled:opacity-50"><ArrowLeft size={24} /></button>
                <button className="blog-swiper-next p-3 rounded-full bg-[var(--bg-card-secondary)] hover:bg-[var(--border-main)] transition-colors text-[var(--text-main)] disabled:opacity-50"><ArrowRight size={24} /></button>
              </div>
            </div>
            <div className="lg:col-span-8 overflow-hidden">
              <Swiper modules={[Navigation]} spaceBetween={30} slidesPerView={1.2} navigation={{ prevEl: '.blog-swiper-prev', nextEl: '.blog-swiper-next', }} breakpoints={{ 768: { slidesPerView: 1.5, spaceBetween: 30 }, 1024: { slidesPerView: 2.2, spaceBetween: 40 }, }} className="!overflow-visible">
                {blogPosts.map((post) => (
                  <SwiperSlide key={post.id}>
                    <div className="rounded-2xl overflow-hidden h-full flex flex-col cursor-pointer group transition-all duration-300" style={{ height: '500px' }} onClick={() => handleBlogClick(post.slug)}>
                      <div className="relative overflow-hidden rounded-2xl mb-6">
                        <img src={post.image} alt={post.title} className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300 rounded-2xl" onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'; }} />
                        <div className="absolute top-4 left-4 w-12 h-12 bg-[var(--brand-primary)] rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="stroke-white" strokeWidth="2"><path d="M7 17L17 7M17 7H7M17 7V17" strokeLinecap="round" strokeLinejoin="round" /></svg></div>
                      </div>
                      <div className="flex flex-col flex-grow">
                        <div className="flex items-center gap-2 text-[var(--text-muted)] text-sm mb-4"><span className="w-2 h-2 bg-[var(--text-muted)] rounded-full"></span><span>{post.readTime}</span></div>
                        <h3 className="text-2xl font-bold mb-4 leading-tight group-hover:text-[var(--text-main)] transition-colors duration-300">{post.title}</h3>
                        <p className="text-[var(--text-muted)] text-base leading-relaxed flex-grow">{post.excerpt}</p>
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
          * { font-family: 'Plus Jakarta Sans', sans-serif; }
        `}</style>
      </main>
      <Footer />
    </>
  );
};

export default ServicesPage;