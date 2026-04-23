'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, EffectFade, Autoplay } from 'swiper/modules';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';
import { ShoppingBag } from 'lucide-react';

const JACKETS = [
  {
    id: 'green',
    title: 'Resistance',
    description: 'Jackets designed to withstand anything. Durable materials, reinforced seams, and wind and rain protection to accompany you through any challenge.',
    price: '$105.00',
    color: 'bg-[linear-gradient(135deg,hsl(98,63%,37%)_0%,hsl(97,45%,71%)_100%)]',
    bgLogoColor: 'text-green-900/20',
    image: '/jacket-1.png',
  },
  {
    id: 'orange',
    title: 'Comfy Snug',
    description: 'Softness you feel from the first moment. These jackets hug your body with lightweight warmth, perfect for cold days without sacrificing style.',
    price: '$99.00',
    color: 'bg-[linear-gradient(135deg,hsl(17,98%,56%)_0%,hsl(14,97%,64%)_100%)]',
    bgLogoColor: 'text-orange-900/20',
    image: '/jacket-2.png',
  },
  {
    id: 'blue',
    title: 'Relaxed Fit',
    description: 'Uncompromising comfort with a relaxed fit that gives you freedom of movement. Ideal for a casual, modern look that adapts to your daily routine.',
    price: '$110.00',
    color: 'bg-[linear-gradient(135deg,hsl(210,96%,55%)_0%,hsl(205,51%,73%)_100%)]',
    bgLogoColor: 'text-blue-900/20',
    image: '/jacket-3.png',
  },
  {
    id: 'purple',
    title: 'Protective Type',
    description: 'More than a jacket, a barrier against the weather. Designed to offer maximum protection with thermal and waterproof technology, keeping you safe.',
    price: '$135.00',
    color: 'bg-[linear-gradient(135deg,hsl(259,92%,63%)_0%,hsl(260,52%,68%)_100%)]',
    bgLogoColor: 'text-purple-900/20',
    image: '/jacket-4.png',
  },
];

export default function HeroSlider() {
  const [activeIndex, setActiveIndex] = React.useState(0);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <Swiper
        modules={[Pagination, EffectFade, Autoplay]}
        effect="fade"
        speed={1000}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ 
          clickable: true,
          el: '.custom-pagination',
        }}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        className="w-full h-full"
      >
        {JACKETS.map((jacket, index) => (
          <SwiperSlide key={jacket.id}>
            <div className={`relative w-full h-full ${jacket.color} flex flex-col justify-center transition-colors duration-1000`}>
              
              {/* Background Large Logo - Single Centered */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
                <motion.div
                  key={`bg-logo-${index}`}
                  initial={{ scale: 0.8, opacity: 0, rotate: -15 }}
                  animate={{ scale: 1, opacity: 0.1, rotate: -10 }}
                  transition={{ duration: 1.5, ease: 'easeOut' }}
                  className="relative w-[120%] h-[120%] flex items-center justify-center transform scale-150"
                >
                  <Image 
                    src="/nike.png" 
                    alt="" 
                    fill 
                    className="object-contain"
                    priority
                  />
                </motion.div>
              </div>

              <div className="container mx-auto h-full px-6 md:px-12 relative z-10 flex flex-col justify-between py-12 md:py-20">
                
                {/* Top Spacer for Navbar */}
                <div className="h-16 md:h-20" />

                {/* Center Content: Jacket Image */}
                <div className="relative flex flex-col items-center justify-center flex-1">
                  <motion.div
                    key={`img-${index}`}
                    initial={{ scale: 0.8, opacity: 0, y: 50 }}
                    animate={activeIndex === index ? { scale: 1, opacity: 1, y: 0 } : { scale: 0.8, opacity: 0, y: 50 }}
                    transition={{ duration: 1, type: 'spring', bounce: 0.3 }}
                    className="relative w-full aspect-square max-w-[180px] md:max-w-[500px]"
                  >
                    <motion.div
                      animate={{
                        y: [0, -15, 0],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="relative w-full h-full"
                    >
                      <Image 
                        src={jacket.image}
                        alt={jacket.title}
                        fill
                        className="object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.3)]"
                        priority
                        referrerPolicy="no-referrer"
                      />
                    </motion.div>
                  </motion.div>
                </div>

                {/* Bottom Row: Text, Price, Button - Stabilized with fixed heights */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-8 items-end relative pb-4 md:pb-12 min-h-[100px] md:min-h-[180px]">
                  
                  {/* Title and Description */}
                  <motion.div
                    initial={{ x: -50, opacity: 0 }}
                    animate={activeIndex === index ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="flex flex-col text-left h-full justify-end"
                  >
                    <div className="h-auto md:h-[60px] flex items-end">
                      <h1 className="text-2xl md:text-5xl font-bold text-white tracking-tight leading-none">
                        {jacket.title}
                      </h1>
                    </div>
                    <div className="h-auto md:h-[60px] mt-2 md:mt-4">
                      <p className="max-w-full md:max-w-[280px] text-white/80 text-[10px] md:text-sm leading-relaxed font-medium">
                        {jacket.description}
                      </p>
                    </div>
                  </motion.div>

                  {/* Price Section */}
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={activeIndex === index ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="flex flex-col items-center justify-end h-auto md:h-[120px] py-1 md:py-0"
                  >
                    <div className="text-3xl md:text-6xl font-bold text-white tracking-tighter leading-none mb-1 md:mb-2 italic">
                      {jacket.price}
                    </div>
                  </motion.div>

                  {/* Buy Button Right-aligned */}
                  <motion.div
                    initial={{ x: 50, opacity: 0 }}
                    animate={activeIndex === index ? { x: 0, opacity: 1 } : { x: 50, opacity: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="flex justify-center md:justify-end items-end h-auto md:h-[120px]"
                  >
                    <button 
                      onClick={() => window.location.href = `/checkout?id=${jacket.id}`}
                      className="btn-fill-hover flex items-center space-x-2 md:space-x-3 bg-white text-black px-6 md:px-10 py-3 md:py-4 rounded-full font-bold shadow-xl border-2 border-white group cursor-pointer text-sm md:text-base"
                    >
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        viewBox="0 0 24 24" 
                        fill="currentColor"
                        className="w-5 h-5 text-black group-hover:text-white transition-colors duration-500 relative z-10"
                      >
                        <path d="M9 6C9 4.34315 10.3431 3 12 3C13.6569 3 15 4.34315 15 6H9ZM7 6H4C3.44772 6 3 6.44772 3 7V21C3 21.5523 3.44772 22 4 22H20C20.5523 22 21 21.5523 21 21V7C21 6.44772 20.5523 6 20 6H17C17 3.23858 14.7614 1 12 1C9.23858 1 7 3.23858 7 6ZM9 10C9 11.6569 10.3431 13 12 13C13.6569 13 15 11.6569 15 10H17C17 12.7614 14.7614 15 12 15C9.23858 15 7 12.7614 7 10H9Z"></path>
                      </svg>
                      <span className="relative z-10 transition-colors duration-500">Buy Now</span>
                    </button>
                  </motion.div>

                </div>

              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* Custom Pagination - Responsive positioning */}
      <div 
        className="custom-pagination absolute left-0 w-full flex justify-center items-center z-[100] pointer-events-none [&>*]:pointer-events-auto bottom-4 md:bottom-[calc(50%-12rem)]" 
      />
    </div>
  );
}
