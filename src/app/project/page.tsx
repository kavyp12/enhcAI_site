"use client";

import React, { useState } from 'react';
import Navbar from '@/app/components/navbar';
import Footer from '@/app/components/footer';

// Define the type for a single project
interface Project {
  id: string;
  year: number;
  client: string;
  title: string;
  imageUrl: string;
  column: 'left' | 'right';
  tags: string[];
  category: string;
}

// Define the type for a single category filter
interface Category {
  name: string;
  count: number;
}

// ProjectFilters component for the top section
function ProjectFilters({ categories, selectedCategory, onCategorySelect }: { 
  categories: Category[]; 
  selectedCategory: string; 
  onCategorySelect: (category: string) => void;
}) {
  return (
    <div className="mb-12 sm:mb-20">
      <p className="text-sm text-gray-400 mb-6">• Our Work</p>
      <div className="flex flex-wrap gap-x-4 sm:gap-x-8 gap-y-4 items-center">
        {categories.map((category) => (
          <button
            key={category.name}
            onClick={() => onCategorySelect(category.name)}
            className={`
              font-medium transition-colors duration-300 capitalize cursor-pointer
              ${selectedCategory.toLowerCase() === category.name.toLowerCase()
                ? 'text-white text-3xl sm:text-5xl font-bold'
                : 'text-gray-600 hover:text-white text-2xl sm:text-4xl'
              }
            `}
          >
            {category.name}
            <sup className="text-xs ml-1 font-light -top-2 sm:-top-3">
              {category.count}
            </sup>
          </button>
        ))}
      </div>
    </div>
  );
}

// ProjectCard component
function ProjectCard({ project }: { project: Project }) {
  const hasSpecialLogo = project.id === 'ai-core-platform';

  return (
    <div>
      <div className="group relative w-full min-h-[380px] sm:min-h-[480px] overflow-hidden rounded-2xl cursor-pointer">
        <img
          src={project.imageUrl}
          alt={project.title}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"></div>
        <div className="absolute top-4 left-4 sm:top-8 sm:left-8 flex flex-wrap gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
          {project.tags.map((tag: string) => (
            <span key={tag} className="bg-white/10 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1.5 rounded-full">
              {tag}
            </span>
          ))}
        </div>

        {hasSpecialLogo && (
          <div className="absolute inset-0 flex items-center justify-center text-white/80" aria-hidden="true">
            <span className="text-7xl sm:text-8xl font-thin tracking-widest">A</span>
            <span className="w-12 sm:w-16 h-px bg-white/80 mx-2 sm:mx-4"></span>
            <span className="text-7xl sm:text-8xl font-thin tracking-widest">I</span>
          </div>
        )}
      </div>

      <div className="pt-6 text-white">
        <p className="text-sm text-gray-400">{project.year} • {project.client}</p>
        <h3 className="text-xl sm:text-2xl font-medium mt-2 leading-tight">
          {project.title}
        </h3>
      </div>
    </div>
  );
}

// Function to get dynamic heading based on category
function getDynamicHeading(category: string): string {
  const headings: { [key: string]: string } = {
    'explore all': 'Discover our<br />AI innovations',
    'healthcare': 'Transforming healthcare<br />with AI solutions',
    'education': 'Revolutionizing education<br />through AI learning',
    'finance': 'Empowering finance<br />with AI analytics',
    'retail': 'Enhancing retail<br />with AI personalization',
    'logistics': 'Optimizing logistics<br />with AI efficiency',
    'security': 'Strengthening security<br />with AI detection',
    'manufacturing': 'Streamlining manufacturing<br />with AI automation',
    'customer service': 'Elevating customer service<br />with AI chatbots',
    'research': 'Accelerating research<br />with AI insights',
    'marketing': 'Boosting marketing<br />with AI strategies',
  };
  
  return headings[category.toLowerCase()] || 'Discover our<br />AI innovations';
}

// App component
export default function App() {
  const [selectedCategory, setSelectedCategory] = useState('explore all');

  const projectData: Project[] = [
    {
      id: 'ai-core-platform',
      year: 2023,
      client: 'HealthAI Solutions',
      title: 'AI-Driven Disease Prediction System',
      imageUrl: '/AI_deses_image.jpg',
      column: 'left',
      tags: ['AI', 'Healthcare', 'Predictive Analytics'],
      category: 'healthcare',
    },
    {
      id: 'edu-ai-system',
      year: 2024,
      client: 'SmartLearn Tech',
      title: 'AI-Powered Adaptive Learning Platform',
      imageUrl: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1920&auto=format&fit=crop',
      column: 'right',
      tags: ['AI', 'Education', 'Adaptive Learning'],
      category: 'education',
    },
    {
      id: 'finance-ai',
      year: 2024,
      client: 'FinTech Innovations',
      title: 'AI-Based Fraud Detection Engine',
      imageUrl: '/fraud_detaction.jpg',
      column: 'left',
      tags: ['AI', 'Finance', 'Fraud Detection'],
      category: 'finance',
    },
    {
      id: 'retail-ai',
      year: 2025,
      client: 'RetailTech Group',
      title: 'AI Customer Personalization Engine',
      imageUrl: '/personlayze_image.jpg',
      column: 'right',
      tags: ['AI', 'Retail', 'Personalization'],
      category: 'retail',
    },
    {
      id: 'logistics-ai',
      year: 2024,
      client: 'Global Logistics Co.',
      title: 'AI Supply Chain Optimization',
      imageUrl: '/still-life-supply-chain-representation.jpg',
      column: 'left',
      tags: ['AI', 'Logistics', 'Optimization'],
      category: 'logistics',
    },
    {
      id: 'security-ai',
      year: 2024,
      client: 'SecureTech Systems',
      title: 'AI Threat Detection Platform',
      imageUrl: '/threat_Detaction.jpg',
      column: 'right',
      tags: ['AI', 'Security', 'Threat Detection'],
      category: 'security',
    },
    {
      id: 'manufacturing-ai',
      year: 2024,
      client: 'IndustryTech Solutions',
      title: 'AI Predictive Maintenance System',
      imageUrl: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1920&auto=format&fit=crop',
      column: 'left',
      tags: ['AI', 'Manufacturing', 'Maintenance'],
      category: 'manufacturing',
    },
    {
      id: 'customer-service-ai',
      year: 2024,
      client: 'ServiceAI Corp',
      title: 'AI Conversational Chatbot',
      imageUrl: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1920&auto=format&fit=crop',
      column: 'right',
      tags: ['AI', 'Customer Service', 'Chatbot'],
      category: 'customer service',
    },
    {
      id: 'research-ai',
      year: 2023,
      client: 'ResearchAI Labs',
      title: 'AI Data Analysis Tool',
      imageUrl: '/Data_analysis.jpg',
      column: 'left',
      tags: ['AI', 'Research', 'Data Analysis'],
      category: 'research',
    },
    {
      id: 'marketing-ai',
      year: 2024,
      client: 'MarketTech Solutions',
      title: 'AI Campaign Optimization Platform',
      imageUrl: '/AI Campaign Optimization.jpg',
      column: 'right',
      tags: ['AI', 'Marketing', 'Optimization'],
      category: 'marketing',
    },
    {
      id: 'healthcare-ai-2',
      year: 2024,
      client: 'MedAI Innovations',
      title: 'AI Patient Monitoring System',
      imageUrl: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1920&auto=format&fit=crop',
      column: 'left',
      tags: ['AI', 'Healthcare', 'Monitoring'],
      category: 'healthcare',
    },
    {
      id: 'education-ai-2',
      year: 2024,
      client: 'EduAI Systems',
      title: 'AI Virtual Classroom Assistant',
      imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1920&auto=format&fit=crop',
      column: 'right',
      tags: ['AI', 'Education', 'Virtual Assistant'],
      category: 'education',
    },
  ];

  const categoryData: Category[] = [
    { name: 'explore all', count: projectData.length },
    { name: 'healthcare', count: projectData.filter(p => p.category === 'healthcare').length },
    { name: 'education', count: projectData.filter(p => p.category === 'education').length },
    { name: 'finance', count: projectData.filter(p => p.category === 'finance').length },
    { name: 'retail', count: projectData.filter(p => p.category === 'retail').length },
    { name: 'logistics', count: projectData.filter(p => p.category === 'logistics').length },
    { name: 'security', count: projectData.filter(p => p.category === 'security').length },
    { name: 'manufacturing', count: projectData.filter(p => p.category === 'manufacturing').length },
    { name: 'customer service', count: projectData.filter(p => p.category === 'customer service').length },
    { name: 'research', count: projectData.filter(p => p.category === 'research').length },
    { name: 'marketing', count: projectData.filter(p => p.category === 'marketing').length },
  ];

  const filteredProjects = selectedCategory.toLowerCase() === 'explore all' 
    ? projectData 
    : projectData.filter(project => project.category.toLowerCase() === selectedCategory.toLowerCase());

  const arrangedProjects = selectedCategory.toLowerCase() === 'explore all' 
    ? {
        left: filteredProjects.filter(p => p.column === 'left'),
        right: filteredProjects.filter(p => p.column === 'right')
      }
    : {
        left: filteredProjects.filter((_, index) => index % 2 === 0),
        right: filteredProjects.filter((_, index) => index % 2 === 1)
      };

  const dynamicHeading = getDynamicHeading(selectedCategory);

  return (
    <>
      <Navbar />
      <section className="bg-black text-white pt-24 sm:pt-32 pb-16 px-4 sm:px-8 lg:px-16">
<div className="max-w-screen-2xl mx-auto mb-24">
            <ProjectFilters 
            categories={categoryData} 
            selectedCategory={selectedCategory}
            onCategorySelect={setSelectedCategory}
          />

          {/* START: CHANGE 1 - Add a mobile-only heading */}
          {/* This heading block is only visible on screens smaller than the 'lg' breakpoint */}
          <div className="lg:hidden mb-12">
            <p className="text-sm text-gray-400">• Our Work</p>
            <h2 
              className="text-4xl sm:text-6xl font-bold mt-4 leading-tight"
              dangerouslySetInnerHTML={{ __html: dynamicHeading }}
            />
          </div>
          {/* END: CHANGE 1 */}

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-16 items-start">
            <div className="flex flex-col gap-16">
              {arrangedProjects.left.map(project => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
            <div className="flex flex-col gap-16">

              {/* START: CHANGE 2 - Modify the original heading to be desktop-only */}
              {/* This heading block is now hidden on mobile and only appears on 'lg' screens and larger */}
              <div className="hidden lg:block lg:pt-8 mb-12 lg:mb-0">
                <p className="text-sm text-gray-400">• Our Work</p>
                <h2 
                  className="text-4xl sm:text-6xl font-bold mt-4 leading-tight"
                  dangerouslySetInnerHTML={{ __html: dynamicHeading }}
                />
              </div>
              {/* END: CHANGE 2 */}

              {arrangedProjects.right.map(project => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        </div>

        <style jsx>{`
          @import url('https://fonts.googleapis.com/css2?family=Product+Sans&display=swap');

          section, div, p, h1, h2, h3, span, button {
            font-family: 'Product Sans', sans-serif;
          }
        `}</style>
      <Footer />
      </section>
    </>
  );
}