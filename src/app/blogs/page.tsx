"use client";

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import Navbar from '@/app/components/navbar';
import Footer from '../components/footer';

// --- TYPE DEFINITIONS ---
type BlogCategory = 'all' | 'machine learning' | 'data science' | 'ai ethics' | 'industry news' | 'tutorials';

interface Author {
  name: string;
  avatarUrl: string;
}

interface BlogPost {
  id: number;
  category: Exclude<BlogCategory, 'all'>;
  title: string;
  readTime: string;
  imageUrl: string;
  author: Author;
}

// --- SVG ICON ---
const ArrowIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" >
    <path d="M7 17L17 7M17 7H7M17 7V17" />
  </svg>
);

// --- AI-FOCUSED BLOG DATA (18 posts) ---
const allBlogPosts: BlogPost[] = [
    { id: 1, category: 'machine learning', title: 'Demystifying Neural Networks: A Beginner\'s Guide', readTime: '12 min read', imageUrl: '/neural_network.jpg', author: { name: 'Dr. Evelyn Reed', avatarUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80' } },
    { id: 2, category: 'data science', title: 'The Art of Feature Engineering: Transforming Data for ML', readTime: '15 min read', imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80', author: { name: 'Johnathan Chen', avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80' } },
    { id: 3, category: 'tutorials', title: 'Building Your First Image Classifier with PyTorch', readTime: '18 min read', imageUrl: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=800&q=80', author: { name: 'Peter Jones', avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80' } },
    { id: 4, category: 'industry news', title: 'Generative AI: The State of the Industry in 2025', readTime: '8 min read', imageUrl: 'https://images.unsplash.com/photo-1677756119517-756a188d2d94?w=800&q=80', author: { name: 'Mike Williams', avatarUrl: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=200&q=80' } },
    { id: 5, category: 'ai ethics', title: 'Algorithmic Bias: How to Identify and Mitigate It', readTime: '10 min read', imageUrl: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&q=80', author: { name: 'Emily White', avatarUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80' } },
    { id: 6, category: 'data science', title: 'From Big Data to Smart Data: Strategies for Success', readTime: '9 min read', imageUrl: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=800&q=80', author: { name: 'Chris Green', avatarUrl: 'https://images.unsplash.com/photo-1517070208541-6ddc4d3efbcb?w=200&q=80' } },
    { id: 7, category: 'machine learning', title: 'An Introduction to Reinforcement Learning', readTime: '14 min read', imageUrl: 'https://images.unsplash.com/photo-1641973909184-a15d533b6326?w=800&q=80', author: { name: 'Sarah Tech', avatarUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&q=80' } },
    { id: 8, category: 'tutorials', title: 'Deploying a TensorFlow Model with Docker and Flask', readTime: '20 min read', imageUrl: 'https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?w=800&q=80', author: { name: 'Alex Color', avatarUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80' } },
    { id: 9, category: 'industry news', title: 'The Impact of AI on the Global Supply Chain', readTime: '7 min read', imageUrl: 'https://images.unsplash.com/photo-1577563908411-5797437c35a2?w=800&q=80', author: { name: 'Design Master', avatarUrl: 'https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?w=200&q=80' } },
    { id: 10, category: 'machine learning', title: 'Natural Language Processing (NLP) Explained', readTime: '11 min read', imageUrl: 'https://images.unsplash.com/photo-1555952494-035d833b3a63?w=800&q=80', author: { name: 'Luna Dark', avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&q=80' } },
    { id: 11, category: 'ai ethics', title: 'Data Privacy in the Age of AI: A New Social Contract', readTime: '9 min read', imageUrl: 'https://images.unsplash.com/photo-1555861496-0666c8981751?w=800&q=80', author: { name: 'Code Less', avatarUrl: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=200&q=80' } },
    { id: 12, category: 'data science', title: 'Predictive Analytics for Customer Churn', readTime: '13 min read', imageUrl: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80', author: { name: 'API Expert', avatarUrl: 'https://images.unsplash.com/photo-1463453091185-61582044d556?w=200&q=80' } },
    { id: 13, category: 'industry news', title: 'How AI is Revolutionizing Drug Discovery', readTime: '8 min read', imageUrl: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80', author: { name: 'Type Designer', avatarUrl: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=200&q=80' } },
    { id: 14, category: 'machine learning', title: 'Exploring the Power of Generative Adversarial Networks (GANs)', readTime: '16 min read', imageUrl: 'https://images.unsplash.com/photo-1549619829-08b5c9a6a4e3?w=800&q=80', author: { name: 'Access Pro', avatarUrl: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=200&q=80' } },
    { id: 15, category: 'tutorials', title: 'Time-Series Forecasting with LSTMs in Keras', readTime: '22 min read', imageUrl: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80', author: { name: 'Biz Growth', avatarUrl: 'https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?w=200&q=80' } },
    { id: 16, category: 'ai ethics', title: 'The Explainability Problem: Making Black Box Models Transparent', readTime: '12 min read', imageUrl: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&q=80', author: { name: 'Eco Designer', avatarUrl: 'https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=200&q=80' } },
    { id: 17, category: 'data science', title: 'Principal Component Analysis (PCA) for Data Visualization', readTime: '10 min read', imageUrl: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=80', author: { name: 'Micro Dev', avatarUrl: 'https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?w=200&q=80' } },
    { id: 18, category: 'industry news', title: 'Quantum Computing and Its Potential Synergy with AI', readTime: '9 min read', imageUrl: 'https://images.unsplash.com/photo-1534447677768-be436a0976f2?w=800&q=80', author: { name: 'Story Teller', avatarUrl: 'https://images.unsplash.com/photo-1502764613149-7f1d229e230f?w=200&q=80' } },
];

const categories: BlogCategory[] = ['all', 'machine learning', 'data science', 'ai ethics', 'industry news', 'tutorials'];

// --- MAIN COMPONENT ---
const BlogsPage: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<BlogCategory>('all');

  const postCounts = useMemo(() => {
    const counts: { [key in BlogCategory]?: number } = {};
    counts.all = allBlogPosts.length;
    for (const post of allBlogPosts) {
        counts[post.category] = (counts[post.category] || 0) + 1;
    }
    return counts;
  }, []);

  const filteredPosts = activeFilter === 'all'
    ? allBlogPosts
    : allBlogPosts.filter(post => post.category === activeFilter);

  return (
    <>
      <Navbar />
      {/* Google Font Import */}
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Product+Sans:wght@400;500;600&display=swap');
        
        main, nav, span, button, h3 {
          font-family: 'Product Sans', sans-serif;
        }
      `}</style>
      
      <main className="bg-black text-gray-200 min-h-screen pt-20 md:pt-24 p-4 sm:p-10 md:p-16">
        <header className="mb-10">
          <span className="text-base text-gray-400">• The Blog</span>
          <nav className="flex flex-wrap gap-x-4 sm:gap-x-8 gap-y-2 sm:gap-y-4 mt-5">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`text-2xl sm:text-3xl md:text-4xl font-medium capitalize transition-colors duration-300 ${activeFilter === category ? 'text-white' : 'text-gray-600 hover:text-white'}`}
              >
                {category === 'all' ? 'explore all' : category}
                <sup className={`text-sm sm:text-base lg:text-lg ml-1 ${activeFilter === category ? 'text-gray-400' : 'text-gray-600'}`}>
                  {postCounts[category] || 0}
                </sup>
              </button>
            ))}
          </nav>
        </header>

        {/* --- Updated Grid Layout with Hover Effect and Link --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 mb-10">
          {filteredPosts.map((post) => (
<Link href={`/blogs/${post.id}`} key={post.id}>
              <article className="group cursor-pointer">
                {/* Image container with hover effect */}
                <div className="relative mb-4 overflow-hidden rounded-2xl">
                  <img
                    src={post.imageUrl}
                    alt={post.title}
                    className="w-full h-64 object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                  />
                  
                  {/* Overlay that appears on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"></div>
                  
                  {/* Author info that slides up on hover */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out">
                    <div className="flex items-center gap-3">
                      <img
                        src={post.author.avatarUrl}
                        alt={post.author.name}
                        className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover border-2 border-white/20"
                      />
                      <div>
                        <p className="text-white text-sm font-medium">{post.author.name}</p>
                        <p className="text-gray-300 text-xs">Author</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Decorative text overlay */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
                  </div>
                </div>
                
                {/* Info section */}
                <div className="flex justify-between items-start gap-4">
                    <div>
                        <span className="text-gray-400 text-sm">• {post.readTime}</span>
                        <h3 className="text-white text-lg font-medium leading-snug mt-1 transition-colors duration-300 group-hover:text-blue-400">
                            {post.title}
                        </h3>
                    </div>
                    {/* Arrow Icon */}
                    <div className="flex-shrink-0 mt-2">
                        <ArrowIcon className="stroke-gray-600 transition-all duration-300 group-hover:stroke-blue-400 group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
        <Footer/>
      </main>
    </>
  );
};

export default BlogsPage;