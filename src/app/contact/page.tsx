// contactpage.tsx
"use client";

import React, { useState } from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

const ArrowIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 sm:h-10 sm:w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>);
const ArrowUpRightIcon = ({ className = "w-6 h-6" }: { className?: string }) => (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" /></svg>);
const ChevronDownIcon = ({ className = "w-5 h-5 text-[var(--text-muted)]" }: { className?: string }) => (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className={className}><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" /></svg>);
const FaqUpArrow = () => (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-[var(--text-main)]"><path d="M7 15L12 10L17 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>);

const LinkedInIcon = ({ className = "w-5 h-5" }) => (<svg className={className} fill="currentColor" viewBox="0 0 24 24"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-4.47 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" /></svg>);
const XIcon = ({ className = "w-5 h-5" }) => (<svg className={className} fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.616l-5.21-6.817-6.022 6.817h-3.308l7.73-8.835-7.995-10.66h6.772l4.643 6.226 5.431-6.226zm-2.45 16.35h1.86l-9.94-13.2h-1.99l9.94 13.2z" /></svg>);
const InstagramIcon = ({ className = "w-5 h-5" }) => (<svg className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>);
const GithubIcon = ({ className = "w-5 h-5" }) => (<svg className={className} fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.164 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.866-.014-1.698-2.782.604-3.369-1.34-3.369-1.34-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.004.071 1.532 1.031 1.532 1.031.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.087.636-1.338-2.22-.253-4.555-1.111-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.641.699 1.028 1.592 1.028 2.683 0 3.841-2.337 4.687-4.565 4.936.359.307.678.919.678 1.852 0 1.336-.012 2.415-.012 2.741 0 .267.18.579.688.482A10.002 10.002 0 0022 12c0-5.523-4.477-10-10-10z" /></svg>);

const SocialLink = ({ href, children }: { href: string, children: React.ReactNode }) => (<a href={href} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-[var(--bg-card-secondary)] rounded-full flex items-center justify-center text-[var(--text-main)] hover:bg-[var(--brand-primary)] hover:text-white transition-all duration-300">{children}</a>);

const faqData = [
  { question: 'How long does a website project usually take to complete?', answer: (<div className="space-y-4"><p>Timelines depend on the spec of the website project, but here are some guidelines...</p><ul className="list-none space-y-3"><li>- <span className="underline">Shopify</span> projects usually take around four weeks.</li><li>- <span className="underline">Craft CMS</span> projects usually take a minimum of five weeks.</li><li>- <span className="underline">Craft Commerce</span> projects usually take a minimum of eight weeks.</li><li>- <span className="underline">Branding</span> projects usually take around four weeks.</li></ul></div>), },
  { question: 'How much does a website cost?', answer: <p>Costs vary based on the project scope. We provide detailed quotes after an initial consultation to understand your specific needs.</p>, },
  { question: 'We have a limited budget, will you still work with us?', answer: <p>We can often tailor a solution to fit your budget. Let's discuss your needs and see what's possible. We're open to finding a scope that works for both of us.</p>, },
  { question: 'Do you outsource any work?', answer: <p>No, all our work is done in-house by our dedicated team of designers and developers. This ensures quality and seamless communication.</p>, },
  { question: 'What services do you offer?', answer: <p>We offer a range of services including web design, web development, branding, e-commerce solutions (like Shopify and Craft Commerce), and digital strategy.</p>, },
  { question: "We're not based in Manchester, does that matter?", answer: <p>Not at all! We work with clients from all over the world. We use video calls and project management tools to keep communication frequent and clear, no matter where you are.</p>, },
];

const FaqItem = ({ faq, isOpen, onToggle }: { faq: { question: string; answer: React.ReactNode }, isOpen: boolean, onToggle: () => void }) => {
    return (
        <div className="bg-[var(--bg-card)] rounded-2xl mb-4">
            <button onClick={onToggle} className="w-full flex justify-between items-start text-left p-6 text-[var(--text-main)]" aria-expanded={isOpen}>
                <span className="text-lg sm:text-xl font-medium pr-4">{faq.question}</span>
                <div className="shrink-0 pt-1">{isOpen ? <FaqUpArrow /> : <ArrowUpRightIcon className="w-6 h-6 text-[var(--text-main)]" />}</div>
            </button>
            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[500px]' : 'max-h-0'}`}>
                <div className="px-6 pb-6 text-[var(--text-muted)] text-base sm:text-lg leading-relaxed">{isOpen && faq.answer}</div>
            </div>
        </div>
    );
};

const FaqSection = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const handleToggle = (index: number) => setOpenIndex(openIndex === index ? null : index);

    return (
        <div className="w-full max-w-7xl mx-auto my-16 sm:my-32 px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 items-start">
                <div className="lg:sticky lg:top-24 text-center lg:text-left">
                    <p className="flex items-center text-[var(--text-muted)] mb-2 justify-center lg:justify-start">
                        <span className="w-2 h-2 bg-[var(--text-muted)] rounded-full mr-3"></span>Anything else?
                    </p>
                    <h2 className="text-4xl sm:text-5xl font-semibold tracking-tighter text-[var(--text-main)] mb-8">The answers to<br />your questions.</h2>
                    <a href="#" className="group bg-[var(--brand-primary)] text-white font-medium text-sm py-2 px-4 rounded-full self-center lg:self-start inline-flex items-center gap-1 transition-transform hover:scale-105">
                        View all FAQS
                        <div className="bg-white/20 rounded-full p-0.5 transition-transform group-hover:rotate-45"><ArrowUpRightIcon className="w-4 h-4" /></div>
                    </a>
                </div>
                <div className="w-full lg:max-w-2xl mx-auto">{faqData.map((faq, index) => <FaqItem key={index} faq={faq} isOpen={openIndex === index} onToggle={() => handleToggle(index)} />)}</div>
            </div>
        </div>
    );
};

const ContactPage = () => {
  const inputStyles = "w-full bg-[var(--bg-card-secondary)] text-[var(--text-main)] p-4 rounded-2xl border border-transparent focus:outline-none focus:ring-2 focus:ring-[var(--brand-primary)] font-google-sans";

  return (
    <main className="bg-[var(--bg-main)] text-[var(--text-main)] min-h-screen font-google-sans p-4 sm:p-8 overflow-x-hidden">
        <Navbar />
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 sm:gap-16 items-center w-full max-w-7xl mx-auto pt-20 lg:pt-0">
            <div className="lg:col-span-3 lg:translate-y-24 text-center lg:text-left">
                <div className="flex items-center text-[var(--text-muted)] text-md mb-6 justify-center lg:justify-start"><span className="w-2 h-2 bg-[var(--text-muted)] rounded-full mr-3"></span>Contact</div>
                <h1 className="text-6xl sm:text-7xl lg:text-9xl font-semibold tracking-tighter leading-tight">
                    <span className="block lg:inline-block lg:transform lg:translate-x-70 lg:-translate-y-27 lg:text-8xl xl:text-9xl">It's nice to</span>
                    <div className="flex items-center justify-center lg:justify-start mt-2 lg:mt-0">
                        <span className="block lg:inline-block lg:transform lg:translate-x-40 lg:-translate-y-28 lg:text-8xl xl:text-9xl">meet ya</span>
                        <button className="bg-[var(--brand-primary)] text-white rounded-full w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center ml-4 sm:ml-6 shrink-0 transition-transform lg:transform lg:-translate-y-26 lg:translate-x-40 hover:scale-110" aria-label="Meet us"><ArrowIcon /></button>
                    </div>
                </h1>
            </div>
            <div className="hidden lg:block lg:col-span-2 lg:justify-end"><div className="relative w-full max-w-xs sm:max-w-sm"></div></div>
        </div>

        <div className="w-full max-w-7xl mx-auto my-16"><div className="h-px bg-[var(--border-main)]"></div></div>
        <div className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <div className="flex flex-col justify-center space-y-8 lg:animate-fade-in-left lg:-translate-y-27 lg:-translate-x-20 text-center lg:text-left">
                <p className="text-base md:text-lg leading-relaxed text-[var(--text-muted)]">For general enquiries, please fill out the form to get in touch. Alternatively, if you know your project details — head over to our project planner for a more refined step-by-step process.</p>
                <a href="#" className="group bg-[var(--brand-primary)] text-white font-medium text-sm py-2 px-4 rounded-full self-center lg:self-start flex items-center gap-2 transition-transform hover:scale-105 mt-4">
                    Go to Project Planner
                    <div className="bg-white/20 rounded-full p-1 transition-transform group-hover:rotate-45"><ArrowUpRightIcon className="w-5 h-5" /></div>
                </a>
                <p className="text-sm text-[var(--text-muted)]">Hate contact forms? <a href="mailto:hello@madebycontact@enhc.tech" className="text-[var(--text-main)] font-semibold hover:text-blue-400 transition-colors">hello@madebycontact@enhc.tech</a></p>
            </div>
            <div className="w-full lg:animate-fade-in-right lg:translate-y-8">
                <form className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6"><input type="text" placeholder="Name" className={inputStyles} /><input type="email" placeholder="Email Address" className={inputStyles} /></div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <input type="tel" placeholder="Phone (Optional)" className={inputStyles} />
                        <div className="relative">
                            <select className={`${inputStyles} appearance-none cursor-pointer`} defaultValue="" required>
                                <option value="" disabled>How did you hear about enhc?</option>
                                <option value="google">Google</option><option value="social-media">Social Media</option><option value="referral">Referral</option><option value="other">Other</option>
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4"><ChevronDownIcon /></div>
                        </div>
                    </div>
                    <textarea placeholder="Tell us about your project" rows={5} className={inputStyles}></textarea>
                    <div className="flex items-center space-x-3">
                        <input type="checkbox" id="newsletter" className="h-4 w-4 bg-[var(--bg-card-secondary)] border-[var(--border-main)] rounded text-[var(--brand-primary)] focus:ring-[var(--brand-primary)] focus:ring-offset-0 focus:ring-1 cursor-pointer" />
                        <label htmlFor="newsletter" className="text-sm text-[var(--text-muted)] cursor-pointer">Subscribe to our newsletter for all the latest enhc goss!</label>
                    </div>
                    <p className="text-xs text-gray-500 pt-2">By submitting this form I accept the Privacy Policy of this site.</p>
                    <button type="submit" className="group bg-[var(--bg-card)] text-[var(--text-main)] font-semibold text-lg py-4 px-6 rounded-full self-start flex items-center gap-3 transition-transform hover:scale-105 w-full sm:w-auto justify-center">
                        Send Message
                        <div className="bg-[var(--bg-main)] rounded-full p-1 transition-transform group-hover:rotate-45"><ArrowUpRightIcon className="w-5 h-5" /></div>
                    </button>
                </form>
            </div>
        </div>

        <div className="w-full max-w-6xl mx-auto my-24 px-4">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 bg-[var(--bg-card)] rounded-3xl p-6 sm:p-12 items-center">
                <div className="lg:col-span-3 flex flex-col justify-between h-full order-2 lg:order-1 mt-8 lg:mt-0 text-center lg:text-left">
                    <div>
                        <h2 className="text-4xl sm:text-5xl font-semibold tracking-tighter mb-4 text-[var(--text-main)]">Our Ahmedabad<br /> Studio</h2>
                        <p className="text-[var(--text-muted)] mb-8 lg:mb-12 leading-relaxed max-w-lg mx-auto lg:mx-0">Located in Shivalik Shilp, our studio is in a convenient location in Ahmedabad, Gujrat.</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8 lg:mb-12">
                            <div>
                                <h3 className="text-sm text-gray-500 mb-3 font-medium tracking-wide">Studio Address</h3>
                                <p className="text-[var(--text-main)] leading-relaxed">MadeByenhc<br />Shivalik Shilp<br />Ahmedabad<br />Gujrat</p>
                            </div>
                            <div>
                                <h3 className="text-sm text-gray-500 mb-3 font-medium tracking-wide lg:-translate-x-20">Follow us</h3>
                                <div className="flex flex-wrap gap-1.5 justify-center sm:justify-start lg:-translate-x-22"><SocialLink href="#"><LinkedInIcon className="w-4 h-4" /></SocialLink><SocialLink href="#"><XIcon className="w-4 h-4" /></SocialLink><SocialLink href="#"><InstagramIcon className="w-4 h-4" /></SocialLink><SocialLink href="#"><GithubIcon className="w-4 h-4" /></SocialLink></div>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center lg:justify-start">
                        <a href="#" className="group bg-[var(--brand-primary)] text-white font-medium text-sm py-2 px-4 rounded-full self-start flex items-center gap-2 transition-transform hover:scale-105 mt-4">
                            Get directions
                            <div className="bg-white/20 rounded-full p-0.5 transition-transform group-hover:rotate-45"><ArrowUpRightIcon className="w-4 h-4" /></div>
                        </a>
                    </div>
                </div>
                <div className="lg:col-span-2 w-full h-80 sm:h-96 lg:h-[500px] rounded-2xl overflow-hidden order-1 lg:order-2">
                    <img src="/office_image.jpg" alt="Office space" className="w-full h-full object-cover" onError={(e) => { const target = e.target as HTMLImageElement; target.onerror = null; target.src = 'https://placehold.co/600x800/1c1c1c/ffffff?text=Our+Studio'; }} />
                </div>
            </div>
        </div>

        <FaqSection />

        <style jsx>{`
            @import url('https://fonts.googleapis.com/css2?family=Google+Sans:wght@300;400;500;600;700&display=swap');
            .font-google-sans { font-family: 'Google Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; }
            @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
            .animate-fade-in-left { animation: fadeIn 0.5s ease-out forwards; }
            .animate-fade-in-right { animation: fadeIn 0.5s ease-out 0.2s forwards; opacity: 0; }
        `}</style>
        <Footer />
    </main>
  );
};

export default ContactPage;