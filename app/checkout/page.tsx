'use client';

import React, { Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Image from 'next/image';
import { motion } from 'motion/react';
import { ArrowLeft, Check, ChevronRight, CreditCard, Shield } from 'lucide-react';

const JACKETS_DATA = [
  {
    id: 'green',
    title: 'Resistance',
    description: 'Jackets designed to withstand anything. Durable materials, reinforced seams, and wind and rain protection to accompany you through any challenge.',
    price: '$105.00',
    color: 'bg-[linear-gradient(135deg,hsl(98,63%,37%)_0%,hsl(97,45%,71%)_100%)]',
    image: '/jacket-1.png',
  },
  {
    id: 'orange',
    title: 'Comfy Snug',
    description: 'Softness you feel from the first moment. These jackets hug your body with lightweight warmth, perfect for cold days without sacrificing style.',
    price: '$99.00',
    color: 'bg-[linear-gradient(135deg,hsl(17,98%,56%)_0%,hsl(14,97%,64%)_100%)]',
    image: '/jacket-2.png',
  },
  {
    id: 'blue',
    title: 'Relaxed Fit',
    description: 'Uncompromising comfort with a relaxed fit that gives you freedom of movement. Ideal for a casual, modern look that adapts to your daily routine.',
    price: '$110.00',
    color: 'bg-[linear-gradient(135deg,hsl(210,96%,55%)_0%,hsl(205,51%,73%)_100%)]',
    image: '/jacket-3.png',
  },
  {
    id: 'purple',
    title: 'Protective Type',
    description: 'More than a jacket, a barrier against the weather. Designed to offer maximum protection with thermal and waterproof technology, keeping you safe.',
    price: '$135.00',
    color: 'bg-[linear-gradient(135deg,hsl(259,92%,63%)_0%,hsl(260,52%,68%)_100%)]',
    image: '/jacket-4.png',
  },
];

function CheckoutContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const id = searchParams.get('id');
  const [selectedSize, setSelectedSize] = React.useState('M');
  
  const jacket = JACKETS_DATA.find(j => j.id === id) || JACKETS_DATA[0];

  return (
    <div className={`min-h-screen ${jacket.color} text-white font-sans overflow-x-hidden`}>
      {/* Header */}
      <header className="px-6 py-6 md:px-12 flex justify-between items-center relative z-20">
        <button 
          onClick={() => router.push('/')}
          className="flex items-center space-x-2 text-white/80 hover:text-white transition-colors cursor-pointer group"
        >
          <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
          <span className="text-xs font-semibold uppercase tracking-wider">Back</span>
        </button>
        <div className="text-lg font-bold tracking-tighter uppercase italic">NIKE</div>
        <div className="w-10" /> {/* Spacer */}
      </header>

      <main className="container mx-auto px-6 md:px-12 py-6 md:py-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          
          {/* Left Side: Product Preview */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col space-y-8"
          >
            <div className="relative aspect-square w-full max-w-[320px] md:max-w-[420px] mx-auto">
              <motion.div
                animate={{
                  y: [0, -10, 0],
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
                  className="object-contain drop-shadow-[0_30px_60px_rgba(0,0,0,0.3)]"
                  referrerPolicy="no-referrer"
                  priority
                />
              </motion.div>
            </div>
            
            <div className="space-y-4">
              <h1 className="text-3xl md:text-5xl font-bold tracking-tighter leading-tight">{jacket.title}</h1>
              <p className="text-base text-white/70 max-w-md leading-relaxed font-medium">{jacket.description}</p>
              <div className="text-2xl md:text-3xl font-bold">{jacket.price}</div>
            </div>
          </motion.div>

          {/* Right Side: Detailed Info & Checkout Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-black/20 backdrop-blur-3xl p-6 md:p-10 rounded-[32px] border border-white/10 space-y-8"
          >
            {/* Steps */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-white">
                <div className="w-5 h-5 rounded-full bg-white text-black flex items-center justify-center text-[10px] font-bold">1</div>
                <span className="text-[10px] font-bold uppercase tracking-widest">Details</span>
              </div>
              <ChevronRight className="w-4 h-4 text-white/30" />
              <div className="flex items-center space-x-2 text-white/30">
                <div className="w-5 h-5 rounded-full border border-white/30 flex items-center justify-center text-[10px] font-bold">2</div>
                <span className="text-[10px] font-bold uppercase tracking-widest">Payment</span>
              </div>
            </div>

            {/* Sizes */}
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="text-[10px] font-bold uppercase tracking-widest">Select Size</h3>
                <span className="text-[10px] text-white/50 border-b border-white/30 cursor-pointer hover:text-white transition-colors">Size Guide</span>
              </div>
              <div className="grid grid-cols-5 gap-2">
                {['S', 'M', 'L', 'XL', 'XXL'].map((size) => (
                  <button 
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`py-2 rounded-xl border text-xs font-bold transition-all cursor-pointer ${
                      size === selectedSize ? 'bg-white text-black border-white' : 'border-white/10 hover:border-white/50'
                    }`}
                  >
                        {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Shipping Info Placeholder */}
            <div className="space-y-4">
              <h3 className="text-[10px] font-bold uppercase tracking-widest">Shipping Address</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <input type="text" placeholder="First Name" className="bg-white/5 border border-white/10 rounded-xl p-3 text-xs focus:outline-none focus:border-white/30 transition-all cursor-text" />
                <input type="text" placeholder="Last Name" className="bg-white/5 border border-white/10 rounded-xl p-3 text-xs focus:outline-none focus:border-white/30 transition-all cursor-text" />
                <input type="email" placeholder="Email Address" className="md:col-span-2 bg-white/5 border border-white/10 rounded-xl p-3 text-xs focus:outline-none focus:border-white/30 transition-all cursor-text" />
              </div>
            </div>

            {/* Secure Checkout Button */}
            <div className="space-y-6">
              <button 
                className="w-full bg-white text-black py-4 rounded-full font-bold text-base shadow-xl hover:scale-[1.01] active:scale-[0.99] transition-all cursor-pointer flex items-center justify-center space-x-3"
              >
                <CreditCard className="w-4 h-4" />
                <span>Purchase Now — {jacket.price}</span>
              </button>
              
              <div className="flex items-center justify-center space-x-6 text-[10px] uppercase font-bold tracking-widest text-white/40">
                <div className="flex items-center space-x-2">
                  <Shield className="w-3 h-3" />
                  <span>Secure Server</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="w-3 h-3" />
                  <span>Warranty Included</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </main>

      {/* Decorative BG Text */}
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-bold text-black/5 select-none z-0 pointer-events-none uppercase italic pointer-events-none">
        NIKE
      </div>
    </div>
  );
}

export default function CheckoutPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-black flex items-center justify-center text-white font-bold tracking-[0.2em]">LOADING...</div>}>
      <CheckoutContent />
    </Suspense>
  );
}
