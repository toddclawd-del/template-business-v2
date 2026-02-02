'use client';

import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { Rocket, ArrowRight, Shield, Zap, Download } from 'lucide-react';

export default function FinalCTA() {
  const sectionRef = useRef<HTMLElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Animate the glow effect
    if (glowRef.current) {
      gsap.to(glowRef.current, {
        scale: 1.2,
        opacity: 0.8,
        duration: 3,
        ease: 'power1.inOut',
        repeat: -1,
        yoyo: true,
      });
    }
  }, []);

  return (
    <section ref={sectionRef} className="section-padding relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-t from-purple-500/10 via-transparent to-transparent" />
      <div
        ref={glowRef}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/20 rounded-full blur-[150px]"
      />

      <div className="container-custom relative">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Icon */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}
            className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-500 to-blue-500 mb-8 glow"
          >
            <Rocket className="w-10 h-10 text-white" />
          </motion.div>

          {/* Headline */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Ready to{' '}
            <span className="gradient-text">Ship?</span>
          </h2>

          {/* Subheadline */}
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Stop building from scratch. Get the complete bundle and launch your next project 
            this weekend.
          </p>

          {/* Early Bird Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-orange-500/20 to-pink-500/20 border border-orange-500/30 mb-8"
          >
            <span className="text-orange-400">🔥</span>
            <span className="text-sm font-medium text-orange-400">Early Bird Pricing — Limited Time</span>
          </motion.div>

          {/* Price Display */}
          <div className="mb-8">
            <div className="flex items-center justify-center gap-4">
              <span className="text-2xl text-gray-500 line-through">$799</span>
              <span className="text-6xl md:text-7xl font-bold gradient-text">$249</span>
            </div>
            <p className="text-gray-400 mt-2">One-time payment • Lifetime access</p>
          </div>

          {/* CTA Button */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <button className="btn-primary text-lg px-12 py-5 group">
              Get All 13 Templates Now
              <ArrowRight className="w-5 h-5 ml-2 inline-block group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>

          {/* Trust Elements */}
          <div className="flex flex-wrap justify-center gap-6 mt-12 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-green-500" />
              <span>Secure Checkout</span>
            </div>
            <div className="flex items-center gap-2">
              <Download className="w-4 h-4 text-blue-500" />
              <span>Instant Access</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-yellow-500" />
              <span>30-Day Guarantee</span>
            </div>
          </div>

          {/* Testimonial/Social Proof */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-16 p-8 glass rounded-2xl text-left max-w-2xl mx-auto"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center flex-shrink-0">
                <span className="text-lg font-bold">JD</span>
              </div>
              <div>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  &quot;I used to spend 2-3 weeks just on the frontend for client projects. 
                  With LaunchKit, I shipped a complete restaurant website in a weekend. 
                  The code quality is exactly what I&apos;d write myself — maybe better.&quot;
                </p>
                <div>
                  <p className="font-semibold">Jake Developer</p>
                  <p className="text-sm text-gray-500">Freelance Developer</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
