"use client";
export default function Aboutus() {
  return (
    <>
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Product+Sans&display=swap');
        
        * {
          font-family: 'Product Sans', sans-serif;
        }
      `}</style>
      <style jsx>{`
        .left-text { animation: slideLeftToRight 20s linear infinite; }
        .right-text { animation: slideRightToLeft 20s linear infinite; }
        @keyframes slideLeftToRight { 0% { transform: translateX(-100%); } 100% { transform: translateX(100%); } }
        @keyframes slideRightToLeft { 0% { transform: translateX(100%); } 100% { transform: translateX(-100%); } }


        @media (max-width: 640px) {
            .animate-scroll-left { animation: scroll-left 8s linear infinite; } /* Faster on mobile */
            .animate-scroll-right { animation: scroll-right 8s linear infinite; } /* Faster on mobile */
        }
      `}</style>
      
      <section className="bg-[var(--bg-main)] text-[var(--text-main)] flex items-center px-6 lg:px-12 py-20 md:h-[600px]">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-12 items-start">
            <div className="space-y-2">
              <div className="relative -top-4 flex items-center space-x-2 text-sm">
                <div className="w-2 h-2 bg-[var(--brand-primary)] rounded-full"></div>
                <span className="text-[var(--text-muted)]">Innovating the Future</span>
              </div>
              <h1 className="text-3xl lg:text-4xl font-normal leading-tight tracking-tight">
                An AI innovation company in Ahmedabad, Gujarat that cares about solving complex problems for your brand, no matter the size or industry.
              </h1>
            </div>

            <div className="space-y-8 text-[var(--text-muted)]">
              <div className="flex flex-col space-y-4">
                <p className="text-base lg:text-lg leading-relaxed">
                  Founded in 2022, AIInnovate is a leading AI solutions provider based in Shivalik Shilp, Ahmedabad, Gujarat, specialising in{' '}
                  <span className="underline">Machine Learning</span>,{' '}
                  <span className="underline">Data Science</span>,{' '}
                  <span className="underline">Computer Vision</span>, and{' '}
                  <span className="underline">Natural Language Processing (NLP)</span>.
                </p>
                <p className="text-base lg:text-lg leading-relaxed">
                  Our technology stack is built on cutting-edge frameworks like{' '}
                  <span className="underline">TensorFlow</span> and{' '}
                  <span className="underline">PyTorch</span>, allowing us to build scalable and powerful AI models that integrate seamlessly with your existing systems.
                </p>
                <p className="text-base lg:text-lg leading-relaxed">
                  So, if you need a professional AI partner to support you with your next big project,{' '}
                  <span className="underline">get in touch</span> with us today.
                </p>
              </div>
              <button className="bg-[var(--brand-primary)] hover:bg-[var(--brand-primary-hover)] text-white px-8 py-3 rounded-full font-medium transition-colors duration-200 flex items-center space-x-2">
                <span>About AIInnovate</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>
      
      <div className="overflow-hidden bg-[var(--bg-main)] py-8">
        <div className="left-text w-full text-[var(--text-main)] text-6xl md:text-8xl xl:text-9xl font-bold whitespace-nowrap leading-none">
          Let's work together. Let's work together. Let's work together.
        </div>
        <div className="right-text w-full text-[var(--text-main)] text-6xl md:text-8xl xl:text-9xl font-bold whitespace-nowrap leading-none">
          Let's work together. Let's work together. Let's work together.
        </div>
      </div>
    </>
  );
}
