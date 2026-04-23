'use client';

import React from 'react';
import { ShoppingBag, Search } from 'lucide-react';
import { motion } from 'motion/react';
import Image from 'next/image';

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="fixed top-0 left-0 w-full z-[70] flex items-center justify-between px-6 py-4 md:px-12 md:py-6"
    >
      <div className="flex items-center">
        <div className="relative w-16 h-10">
          <Image 
            src="/logo-nike.svg" 
            alt="Nike Logo" 
            fill 
            className="object-contain"
            priority
          />
        </div>
      </div>

      <div className="hidden md:flex flex-1 justify-center items-center space-x-12">
        {['Home', 'Special', 'Contact'].map((item) => (
          <a 
            key={item} 
            href="#" 
            className="text-sm font-semibold tracking-wide text-white/90 hover:text-white transition-colors relative group cursor-pointer"
          >
            {item}
            {item === 'Home' && (
              <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-full h-0.5 bg-white origin-center" />
            )}
            {item !== 'Home' && (
              <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-full h-0.5 bg-white scale-x-0 group-hover:scale-x-100 transition-transform origin-center" />
            )}
          </a>
        ))}
      </div>

      <div className="flex items-center space-x-6">
        <button className="text-white hover:text-white/70 transition-colors cursor-pointer">
          <ShoppingBag className="w-6 h-6 stroke-1" />
        </button>
        <button className="text-white hover:text-white/70 transition-colors cursor-pointer">
          <Search className="w-6 h-6 stroke-1" />
        </button>
      </div>
    </motion.nav>
  );
}
