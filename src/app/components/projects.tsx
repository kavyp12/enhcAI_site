"use client";
import React from 'react';

// Font import via CSS-in-JS
const fontStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Product+Sans&display=swap');
  
  .product-sans {
    font-family: 'Product Sans', sans-serif;
  }
`;

interface Project {
  id: string;
  year: number;
  client: string;
  title: string;
  imageUrl: string;
  column: 'left' | 'right';
  tags: string[];
}

function ProjectCard({ project }: { project: Project }) {
  const hasSpecialLogo = project.id === 'gary-neville';
  return (
    <div>
      <div className="group relative w-full min-h-[400px] sm:min-h-[480px] overflow-hidden rounded-2xl cursor-pointer">
        <img
          src={project.imageUrl}
          alt={project.title}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"></div>
        <div className="absolute top-4 left-4 lg:top-8 lg:left-8 flex flex-wrap gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
          {project.tags.map((tag: string) => (
            <span key={tag} className="bg-white/10 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1.5 rounded-full product-sans">
              {tag}
            </span>
          ))}
        </div>
        {hasSpecialLogo && (
          <div className="absolute inset-0 flex items-center justify-center text-white/80 product-sans" aria-hidden="true">
            <span className="text-6xl lg:text-8xl font-thin tracking-widest">G</span>
            <span className="w-12 h-px lg:w-16 bg-white/80 mx-4"></span>
            <span className="text-6xl lg:text-8xl font-thin tracking-widest">N</span>
          </div>
        )}
      </div>
      <div className="pt-6 text-white">
        <p className="text-sm text-gray-400 product-sans">
          {project.year} • {project.client}
        </p>
        <h3 className="text-xl lg:text-2xl font-medium mt-2 leading-tight product-sans">
          {project.title}
        </h3>
      </div>
    </div>
  );
}

export default function App() {
  const projectData: Project[] = [
    { id: 'gary-neville', year: 2023, client: 'MediTech Solutions', title: 'AI-Enhanced Medical Imaging Analysis', imageUrl: 'https://images.unsplash.com/photo-1521119989659-a83eee488004?q=80&w=1920&auto=format&fit=crop', column: 'left', tags: ['AI', 'Medical Imaging', 'Deep Learning']},
    { id: 'sketch-studios', year: 2024, client: 'Global Retail Group', title: 'Intelligent Customer Behavior Prediction', imageUrl: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1920&auto=format&fit=crop', column: 'right', tags: ['AI', 'Retail', 'Predictive Analytics']},
    { id: 'project-three', year: 2024, client: 'SmartFinance Ltd.', title: 'AI-Driven Risk Assessment Platform', imageUrl: 'https://images.unsplash.com/photo-1628191013085-990d39ec25b8?q=80&w=1920&auto=format&fit=crop', column: 'left', tags: ['AI', 'Finance', 'Risk Management']},
    { id: 'project-four', year: 2025, client: 'TransGlobal Logistics', title: 'AI-Powered Route Optimization', imageUrl: 'https://images.unsplash.com/photo-1556742111-a301076d9d18?q=80&w=1920&auto=format&fit=crop', column: 'right', tags: ['AI', 'Logistics', 'Optimization']}
  ];
  const leftColumnProjects = projectData.filter(p => p.column === 'left');
  const rightColumnProjects = projectData.filter(p => p.column === 'right');

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: fontStyles }} />
      <section className="bg-black text-white py-16 px-4 sm:px-8 lg:px-16 product-sans">
        
        {/* --- CHANGE 1: Mobile-Only Header --- */}
        {/* This header is visible on mobile and hidden on large screens (lg:hidden) */}
        <div className="lg:hidden mb-12">
          <p className="text-sm text-gray-400 product-sans">• Our Work</p>
          <h2 className="text-4xl sm:text-5xl font-bold mt-4 leading-tight product-sans">Take a look at<br />our AI projects</h2>
        </div>

        <div className="max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-16 items-start">
          <div className="flex flex-col gap-16">
            {leftColumnProjects.map(project => <ProjectCard key={project.id} project={project} />)}
          </div>
          <div className="flex flex-col gap-16">

            {/* --- CHANGE 2: Desktop-Only Header --- */}
            {/* This header is hidden by default and becomes visible as a flex container on large screens (hidden lg:flex) */}
            <div className="hidden lg:flex lg:flex-col lg:pt-8">
              <p className="text-sm text-gray-400 product-sans">• Our Work</p>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mt-4 leading-tight product-sans">Take a look at<br />our AI projects</h2>
            </div>
            
            {rightColumnProjects.map(project => <ProjectCard key={project.id} project={project} />)}
          </div>
        </div>
      </section>
    </>
  );
}