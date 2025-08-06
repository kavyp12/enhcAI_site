"use client";

import React from 'react';
import Navbar from '@/app/components/navbar';
import Footer from '@/app/components/footer';

const BlogPage1 = () => {
  return (
    <>
      <Navbar />
      <main className="bg-black text-white min-h-screen p-10 pt-28">
        <h1 className="text-4xl font-bold mb-6">Demystifying Neural Networks: A Beginner's Guide</h1>
        <p className="text-lg leading-relaxed">
          Welcome to the world of neural networks! In this guide, we’ll explore the basic concepts behind how they work and how you can start building your own.
        </p>
      </main>
      <Footer />
    </>
  );
};

export default BlogPage1;