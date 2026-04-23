'use client';

import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSlider from '@/components/HeroSlider';
import Image from 'next/image';

export default function Home() {
  useEffect(() => {
    // Dynamically import ScrollReveal to avoid SSR issues
    const initScrollReveal = async () => {
      const { default: ScrollReveal } = await import('scrollreveal');
      
      const sr = ScrollReveal({
        origin: 'bottom',
        distance: '60px',
        duration: 2000,
        delay: 400,
        reset: true
      });

      sr.reveal('.featured-item', { interval: 200 });
      sr.reveal('.section-title', { origin: 'left' });
      sr.reveal('.section-desc', { origin: 'right', delay: 600 });
    };

    initScrollReveal();
  }, []);

  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section id="home">
        <HeroSlider />
      </section>

      {/* Footer */}
      <footer className="py-20 bg-black border-t border-white/10">
        <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
          <div className="flex items-center">
            <div className="relative w-24 h-12">
              <Image 
                src="/logo-nike-name.svg" 
                alt="Nike Logo" 
                fill 
                className="object-contain invert brightness-0"
              />
            </div>
            <span className="ml-2 text-xl font-semibold tracking-tighter italic invisible">NIKE PUFFER</span>
          </div>

          <div className="flex space-x-8 text-sm text-white/40">
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
          </div>

          <div className="text-white/40 text-sm">
            © 2026 Nike, Inc. All Rights Reserved
          </div>
        </div>
      </footer>
    </main>
  );
}
