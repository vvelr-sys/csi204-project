"use client";

import React from 'react';
import HeroSection from '../components/home/HeroSection';
import ProductCollection from '../components/home/ProductCollection';
import CircularityQuote from '../components/home/CircularityQuote';
import NewsletterSection from '../components/home/NewsletterSection';
import AnimatedPage from '../components/AnimatedPage';

export default function Home() {
  return (
    <AnimatedPage className="min-h-screen bg-[#FAF8F5]">
      <HeroSection />
      <ProductCollection />
      <CircularityQuote />
      <NewsletterSection />
    </AnimatedPage>
  );
}
