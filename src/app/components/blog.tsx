"use client";
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { ArrowUpRight, ArrowLeft, ArrowRight } from 'lucide-react';

// Font import via CSS-in-JS
const fontStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Product+Sans&display=swap');
  
  .product-sans {
    font-family: 'Product Sans', sans-serif;
  }
`;

const blogPosts = [
  { id: 1, image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=2070&q=80', readTime: '6 min read', title: 'Our Mission to Advance AI Innovation', description: 'In our own words, how AIInnovate is pushing the boundaries of artificial intelligence to solve real-world problems...' },
  { id: 2, image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=2070&q=80', readTime: '10 min read', title: 'Why We Focus on Ethical AI Development', description: 'Co-Founder of AIInnovate, Dr. Jane Smith, explains our commitment to responsible AI and why ethics matter...' },
  { id: 3, image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=2070&q=80', readTime: '4 min read', title: 'Why Choose AIInnovate for AI Solutions?', description: 'Hi, I’m Dr. Jane, Co-Founder of AIInnovate, an AI company based in San Francisco dedicated to innovative AI solutions...' },
  { id: 4, image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=2070&q=80', readTime: '8 min read', title: 'The Future of AI-Powered Automation', description: 'Exploring how AIInnovate’s tools are transforming industries through intelligent automation and machine learning...' },
];

export default function Blog() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: fontStyles }} />
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
              <button className="blog-swiper-prev p-3 rounded-full bg-[#222222] hover:bg-[#333333] transition-colors text-white disabled:opacity-50"><ArrowLeft size={24} /></button>
              <button className="blog-swiper-next p-3 rounded-full bg-[#222222] hover:bg-[#333333] transition-colors text-white disabled:opacity-50"><ArrowRight size={24} /></button>
            </div>
          </div>
          <div className="lg:col-span-8 overflow-hidden">
            <Swiper
              modules={[Navigation]}
              spaceBetween={30}
              slidesPerView={1.2}
              navigation={{ prevEl: '.blog-swiper-prev', nextEl: '.blog-swiper-next' }}
              breakpoints={{
                640: { slidesPerView: 1.5, spaceBetween: 20 },
                768: { slidesPerView: 2.2, spaceBetween: 30 },
                1024: { slidesPerView: 2.5, spaceBetween: 40 },
              }}
              className="!overflow-visible"
            >
              {blogPosts.map((post) => (
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
    </>
  );
};