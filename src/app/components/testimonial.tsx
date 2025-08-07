"use client";
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { ArrowUpRight, ArrowLeft, ArrowRight, Star } from 'lucide-react';

// Font import via CSS-in-JS
const fontStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Product+Sans&display=swap');
  
  .product-sans {
    font-family: 'Product Sans', sans-serif;
  }
`;

interface Testimonial {
  id: number; avatar: string; author: string; company: string; text: string; rating: number;
}

const testimonials: Testimonial[] = [
  { id: 1, avatar: 'https://randomuser.me/api/portraits/men/32.jpg', author: 'Alex Johnson', company: 'CEO, Tech Innovators', text: 'Working with this team has been a game-changer for our business. Their dedication and expertise are second to none. We saw a 150% increase in efficiency.', rating: 5 },
  { id: 2, avatar: 'https://randomuser.me/api/portraits/women/44.jpg', author: 'Maria Garcia', company: 'Founder, Creative Solutions', text: 'The level of professionalism and the quality of the final product exceeded all our expectations. I would highly recommend them to anyone looking for top-tier results.', rating: 5 },
  { id: 3, avatar: 'https://randomuser.me/api/portraits/men/46.jpg', author: 'James Smith', company: 'CTO, Future Systems', text: 'An absolutely seamless experience from start to finish. The communication was clear, the deadlines were met, and the outcome was simply outstanding.', rating: 5 },
  { id: 4, avatar: 'https://randomuser.me/api/portraits/women/68.jpg', author: 'Priya Patel', company: 'Director of Ops, NextGen', text: 'They transformed our entire workflow. Their innovative approach solved problems we didn\'t even know we had. Truly a five-star partner.', rating: 5 },
];

const Testimonial: React.FC = () => {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: fontStyles }} />
      <section className="bg-black text-white w-full py-20 lg:py-28 product-sans">
        <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-4 flex flex-col justify-between h-full text-left">
            <div>
              <p className="font-semibold tracking-wider text-gray-400 text-left product-sans">• Testimonials</p>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold mt-4 leading-tight text-left product-sans">
                Trusted by leading innovators
              </h2>
              <button className="mt-8 sm:mt-12 bg-[#102d4d] text-white font-bold py-3 px-6 rounded-full flex items-center gap-2 hover:bg-[#0d2640] transition-colors duration-300 product-sans">
                View all stories
                <ArrowUpRight size={20} />
              </button>
            </div>
            <div className="flex gap-4 sm:gap-8 mt-12 lg:mt-16">
              <button className="testimonial-swiper-prev p-3 rounded-full bg-[#222222] hover:bg-[#333333] transition-colors text-white disabled:opacity-50"><ArrowLeft size={24} /></button>
              <button className="testimonial-swiper-next p-3 rounded-full bg-[#222222] hover:bg-[#333333] transition-colors text-white disabled:opacity-50"><ArrowRight size={24} /></button>
            </div>
          </div>
          <div className="lg:col-span-8 overflow-hidden">
            <Swiper modules={[Navigation]} spaceBetween={30} slidesPerView={1.1} navigation={{ prevEl: '.testimonial-swiper-prev', nextEl: '.testimonial-swiper-next' }} breakpoints={{ 640: { slidesPerView: 1.2 }, 768: { slidesPerView: 1.5, spaceBetween: 30 }, 1024: { slidesPerView: 2.2, spaceBetween: 40 } }} className="!overflow-visible">
              {testimonials.map((testimonial) => (
                <SwiperSlide key={testimonial.id} className="h-auto">
                  <div className="bg-[#1C1C1C] p-8 rounded-2xl h-full flex flex-col justify-between min-h-[380px] sm:min-h-[400px]">
                    <div>
                      <div className="flex justify-center text-blue-400">
                        {[...Array(testimonial.rating)].map((_, i) => (<Star key={i} fill="currentColor" strokeWidth={0} size={20} />))}
                      </div>
                      <p className="text-gray-300 mt-6 text-base sm:text-lg leading-relaxed text-center product-sans">"{testimonial.text}"</p>
                    </div>
                    <div className="flex items-center gap-4 mt-8">
                      <img src={testimonial.avatar} alt={testimonial.author} className="w-12 h-12 rounded-full object-cover" />
                      <div className="text-left">
                        <h3 className="font-bold text-lg product-sans">{testimonial.author}</h3>
                        <p className="text-gray-400 product-sans">{testimonial.company}</p>
                      </div>
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

export default Testimonial;