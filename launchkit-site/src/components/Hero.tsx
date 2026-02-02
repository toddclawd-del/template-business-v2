'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ArrowRight, Sparkles, Check } from 'lucide-react';
import Link from 'next/link';

const trustBadges = [
  { name: 'Next.js 14', icon: '⚡' },
  { name: 'Tailwind CSS', icon: '🎨' },
  { name: 'TypeScript', icon: '📘' },
  { name: 'Vercel Ready', icon: '▲' },
];

const previewTemplates = [
  { name: 'Aurora', gradient: 'from-purple-600 to-blue-600' },
  { name: 'Studio', gradient: 'from-orange-500 to-pink-500' },
  { name: 'Minimal', gradient: 'from-emerald-500 to-teal-500' },
];

export default function Hero() {
  const browserRef = useRef<HTMLDivElement>(null);
  const [activePreview, setActivePreview] = useState(0);

  useEffect(() => {
    // GSAP floating animation for browser mockup
    if (browserRef.current) {
      gsap.to(browserRef.current, {
        y: 15,
        duration: 3,
        ease: 'power1.inOut',
        repeat: -1,
        yoyo: true,
      });
    }

    // Auto-rotate previews
    const interval = setInterval(() => {
      setActivePreview((prev) => (prev + 1) % previewTemplates.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 grid-bg" />
      <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-purple-500/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-blue-500/20 rounded-full blur-[120px]" />
      
      <div className="container-custom relative z-10 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8"
            >
              <Sparkles className="w-4 h-4 text-purple-400" />
              <span className="text-sm text-gray-300">13 Premium Templates</span>
            </motion.div>

            {/* Headline */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              Ship Your Website{' '}
              <span className="gradient-text">This Weekend</span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl text-gray-400 mb-8 max-w-lg">
              13 production-ready Next.js templates. Multi-page. Dark mode. Responsive. 
              Just add your content.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 mb-12">
              <Link href="#templates" className="btn-primary group">
                Browse Templates
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="#pricing" className="btn-secondary">
                Get Full Bundle — $249
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-4">
              {trustBadges.map((badge, index) => (
                <motion.div
                  key={badge.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10"
                >
                  <span>{badge.icon}</span>
                  <span className="text-sm text-gray-300">{badge.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Content - Browser Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div ref={browserRef} className="relative">
              {/* Glow Effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-3xl blur-2xl" />
              
              {/* Browser Window */}
              <div className="relative glass rounded-2xl overflow-hidden glow">
                {/* Browser Header */}
                <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  </div>
                  <div className="flex-1 mx-4">
                    <div className="w-full max-w-xs mx-auto px-4 py-1.5 rounded-lg bg-white/5 text-sm text-gray-500 text-center">
                      launchkit.dev
                    </div>
                  </div>
                </div>

                {/* Browser Content - Template Preview */}
                <div className="relative aspect-[16/10] bg-[#0a0a0f]">
                  {previewTemplates.map((template, index) => (
                    <motion.div
                      key={template.name}
                      initial={{ opacity: 0 }}
                      animate={{ 
                        opacity: activePreview === index ? 1 : 0,
                        scale: activePreview === index ? 1 : 0.95,
                      }}
                      transition={{ duration: 0.5 }}
                      className={`absolute inset-0 bg-gradient-to-br ${template.gradient} flex items-center justify-center`}
                    >
                      <div className="text-center">
                        <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-white/10 backdrop-blur flex items-center justify-center">
                          <span className="text-3xl font-bold">{template.name[0]}</span>
                        </div>
                        <h3 className="text-2xl font-bold mb-2">{template.name} Template</h3>
                        <p className="text-white/70">Premium Next.js Starter</p>
                      </div>
                    </motion.div>
                  ))}
                  
                  {/* Template Indicator */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                    {previewTemplates.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setActivePreview(index)}
                        className={`w-2 h-2 rounded-full transition-all ${
                          activePreview === index 
                            ? 'bg-white w-6' 
                            : 'bg-white/30 hover:bg-white/50'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-6 -right-6 p-4 glass rounded-xl glow-sm"
              >
                <div className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-green-400" />
                  <span className="text-sm font-medium">Production Ready</span>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-4 -left-4 p-4 glass rounded-xl glow-sm"
              >
                <div className="flex items-center gap-2">
                  <span className="text-2xl">🚀</span>
                  <div>
                    <div className="text-sm font-medium">Deploy in Minutes</div>
                    <div className="text-xs text-gray-400">Vercel, Netlify, anywhere</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a0f] to-transparent" />
    </section>
  );
}
