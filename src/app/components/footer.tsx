"use client";
import React from "react";

// Font import via CSS-in-JS
const fontStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Product+Sans&display=swap');
  
  .product-sans {
    font-family: 'Product Sans', sans-serif;
  }
`;

// Icons...
const IconLinkedin = (props: React.SVGProps<SVGSVGElement>) => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>);
const IconX = (props: React.SVGProps<SVGSVGElement>) => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>);
const IconGithub = (props: React.SVGProps<SVGSVGElement>) => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>);
const IconInstagram = (props: React.SVGProps<SVGSVGElement>) => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>);
const IconBehance = (props: React.SVGProps<SVGSVGElement>) => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M4 12h8a4 4 0 0 1 4 4 4 4 0 0 1-4 4H4v-8z"></path><path d="M4 4h9a4 4 0 0 1 4 4 4 4 0 0 1-4 4H4V4z"></path><path d="M14 12h1"></path></svg>);

export default function Footer() {
  const socialLinks = [ { icon: IconLinkedin, href: "#", "aria-label": "LinkedIn" }, { icon: IconX, href: "#", "aria-label": "X (formerly Twitter)" }, { icon: IconGithub, href: "#", "aria-label": "GitHub" }, { icon: IconInstagram, href: "#", "aria-label": "Instagram" }, { icon: IconBehance, href: "#", "aria-label": "Behance" } ];
  const learnLinks = ["About", "Culture", "Testimonials", "Processes", "FAQs", "Branding FAQs", "Blog"];
  const exploreLinks = [ { text: "Home" }, { text: "Work", isNew: true }, { text: "Services" }, { text: "Careers" }, { text: "Sectors" }, { text: "HexTest" }, { text: "Contact" } ];
  const contactDetails = [ { icon: "📞", text: "01942 694 596", href: "tel:01942694596" }, { icon: "✉️", text: "hello@madebyenhc.co.uk", href: "mailto:hello@madebyenhc.co.uk" }, { icon: "📍", text: "MadeByenhc\n1 Gibfield Park Avenue\nAtherton Manchester\nM46 0SU", href: "#" }, { icon: "///", text: "topped.little.pirate", href: "#" } ];

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: fontStyles }} />
      <footer className="bg-[#111111] text-white product-sans rounded-t-3xl">
        <div className="max-w-screen-2xl mx-auto px-6 lg:px-12">
          <div className="text-center md:text-right pt-10">
            <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors product-sans">Sh*t I've gone too far, send me back up 👋</a>
          </div>
          <div className="py-16 lg:py-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-y-12 lg:gap-x-8">
            <div className="col-span-1 sm:col-span-2 lg:col-span-1">
              <div className="flex justify-center sm:justify-start space-x-2 lg:flex-col lg:space-x-0 lg:space-y-2">
                {socialLinks.map((social, index) => (
                  <a key={index} href={social.href} aria-label={social["aria-label"]} className="w-10 h-10 bg-[#2d2d2d] hover:bg-[#102d4d] text-white rounded-full flex items-center justify-center transition-colors"><social.icon className="w-5 h-5" /></a>
                ))}
              </div>
            </div>
            <div className="col-span-1 sm:col-span-2 lg:col-span-4 text-center sm:text-left">
              <h2 className="text-4xl md:text-5xl font-semi tracking-tighter leading-tight product-sans">Do you like<br />what you see?</h2>
              <a href="#" className="inline-flex items-center gap-2 bg-[#102d4d] text-white font-bold py-3 px-6 rounded-full mt-6 hover:bg-white hover:text-black transition-colors product-sans">Start a project<span className="text-lg">↗</span></a>
              <div className="mt-6 flex items-center justify-center sm:justify-start gap-2 text-sm text-gray-400">
                <span className="text-white product-sans">5.0 from 69 reviews</span>
                <svg className="w-4 h-4" viewBox="0 0 48 48"><path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3C33.6 32 29.3 35 24 35c-6.1 0-11-4.9-11-11s4.9-11 11-11c2.8 0 5.4 1.1 7.4 2.9l6.4-6.4C34.4 5.1 29.5 3 24 3 12.4 3 3 12.4 3 24s9.4 21 21 21c10.5 0 19.4-7.6 20.8-17.5.1-.9.2-1.8.2-2.7 0-1.2-.1-2.3-.4-3.3z" /></svg>
                <div className="flex text-yellow-400">{[...Array(5)].map((_, i) => (<svg key={i} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 24 24" className="mr-0.5"><path d="M12 .587l3.668 7.57 8.332 1.151-6.001 5.847 1.416 8.272L12 18.896l-7.415 4.531 1.416-8.272-6.001-5.847 8.332-1.151z" /></svg>))}</div>
              </div>
            </div>
            <div className="hidden lg:block lg:col-span-1"></div>
            <div className="col-span-1 sm:col-span-1 lg:col-span-2 text-center sm:text-left">
              <h3 className="font-bold mb-4 product-sans">Learn</h3>
              <ul className="space-y-2 text-gray-400">{learnLinks.map((link, index) => (<li key={index}><a href="#" className="hover:text-white transition-colors product-sans">{link}</a></li>))}</ul>
            </div>
            <div className="col-span-1 sm:col-span-1 lg:col-span-2 text-center sm:text-left">
              <h3 className="font-bold mb-4 product-sans">Explore</h3>
              <ul className="space-y-2 text-gray-400">{exploreLinks.map((link, index) => (<li key={index}><a href="#" className="hover:text-white transition-colors flex items-center justify-center sm:justify-start product-sans">{link.text}{link.isNew && (<span className="ml-2 text-xs font-bold bg-[#102d4d] text-white px-2 py-0.5 rounded-full product-sans">NEW</span>)}</a></li>))}</ul>
            </div>
            <div className="col-span-1 sm:col-span-2 lg:col-span-2 text-center sm:text-left">
              <h3 className="font-bold mb-4 product-sans">Get in touch</h3>
              <ul className="space-y-4 text-gray-400">{contactDetails.map((item, index) => (<li key={index} className="flex items-start justify-center sm:justify-start gap-3"><span className="mt-1 font-bold text-base">{item.icon}</span><a href={item.href} className="hover:text-white transition-colors whitespace-pre-line product-sans">{item.text}</a></li>))}</ul>
            </div>
          </div>
          <div className="text-center py-16 lg:py-24">
            <h1 className="text-5xl sm:text-7xl md:text-9xl lg:text-[180px] font-extrabold tracking-tighter text-white leading-none product-sans">Crafting since 2010</h1>
          </div>
          <div className="border-t border-gray-800 rounded-t-lg py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs sm:text-sm text-gray-500 text-center">
            <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-2">
              <span className="font-bold text-white product-sans">enhc.</span>
              <span className="product-sans">© MadeByenhc Ltd 2025</span>
              <span className="hidden md:inline">|</span>
              <span className="product-sans">Company Reg Number 10529058</span>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-2">
              <span className="product-sans">Web Design Manchester</span>
              <span className="hidden md:inline">|</span>
              <span className="product-sans">All Rights Reserved</span>
              <span className="hidden md:inline">|</span>
              <span className="product-sans">Privacy Policy (you really care?)</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}