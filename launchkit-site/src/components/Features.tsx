'use client';

import { useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { gsap } from 'gsap';
import { 
  Layers, 
  Code2, 
  Zap, 
  Moon, 
  Smartphone, 
  Sparkles,
  Database
} from 'lucide-react';

const features = [
  {
    icon: Database,
    title: 'Sanity CMS Integrated',
    description: 'Every template comes with Sanity CMS wired up. Edit content without touching code — perfect for clients.',
    gradient: 'from-orange-500 to-amber-500',
    badge: 'KEY FEATURE',
  },
  {
    icon: Layers,
    title: 'Multi-Page, Not Just Landing',
    description: 'Real websites with About, Services, Contact, Blog — not just hero sections. Complete site architecture out of the box.',
    gradient: 'from-purple-500 to-violet-500',
  },
  {
    icon: Code2,
    title: 'Production-Ready Code',
    description: 'Clean TypeScript, proper architecture, scalable patterns. No spaghetti code or hacky solutions.',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Zap,
    title: 'Modern Stack',
    description: 'Next.js 14, Tailwind CSS, Framer Motion — what the pros use. Stay current, stay competitive.',
    gradient: 'from-orange-500 to-red-500',
  },
  {
    icon: Moon,
    title: 'Dark Mode Built-In',
    description: 'Every template supports light/dark with system preference. No extra setup required.',
    gradient: 'from-indigo-500 to-purple-500',
  },
  {
    icon: Smartphone,
    title: 'Responsive Everything',
    description: 'Pixel-perfect on desktop, tablet, and mobile. We test on real devices, not just browser resize.',
    gradient: 'from-emerald-500 to-teal-500',
  },
];

function FeatureCard({ feature, index }: { feature: typeof features[0] & { badge?: string }; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, margin: '-50px' });
  const Icon = feature.icon;

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative"
    >
      <div className={`relative h-full p-8 glass rounded-2xl card-hover overflow-hidden ${feature.badge ? 'ring-2 ring-orange-500/50' : ''}`}>
        {/* Badge */}
        {feature.badge && (
          <div className="absolute top-4 right-4">
            <span className="px-2 py-1 text-xs font-bold bg-gradient-to-r from-orange-500 to-amber-500 rounded-full text-white">
              {feature.badge}
            </span>
          </div>
        )}
        
        {/* Background Gradient */}
        <div className={`absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br ${feature.gradient} rounded-full opacity-0 group-hover:opacity-20 blur-3xl transition-opacity duration-500`} />
        
        {/* Icon */}
        <div className={`relative w-14 h-14 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
          <Icon className="w-7 h-7 text-white" />
        </div>

        {/* Content */}
        <h3 className="text-xl font-bold mb-3 group-hover:text-purple-400 transition-colors">
          {feature.title}
        </h3>
        <p className="text-gray-400 leading-relaxed">
          {feature.description}
        </p>

        {/* Decorative corner */}
        <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-white/5 to-transparent rounded-tl-3xl" />
      </div>
    </motion.div>
  );
}

export default function Features() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    // GSAP animation for title
    if (titleRef.current) {
      const words = titleRef.current.querySelectorAll('.word');
      gsap.fromTo(
        words,
        { opacity: 0, y: 30, rotateX: -90 },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: titleRef.current,
            start: 'top 80%',
          },
        }
      );
    }
  }, []);

  return (
    <section id="features" ref={sectionRef} className="section-padding relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px] -translate-x-1/2" />
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] translate-x-1/2" />

      <div className="container-custom relative">
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-purple-400 mb-6"
          >
            <Sparkles className="w-4 h-4" />
            Why Choose LaunchKit
          </motion.div>
          
          <h2 ref={titleRef} className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6" style={{ perspective: '1000px' }}>
            <span className="word inline-block">Built</span>{' '}
            <span className="word inline-block">for</span>{' '}
            <span className="word inline-block gradient-text">Developers</span>{' '}
            <span className="word inline-block">Who</span>{' '}
            <span className="word inline-block gradient-text">Ship</span>
          </h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-xl text-gray-400 max-w-2xl mx-auto"
          >
            Every template is built with the same care and attention we put into our own products. 
            No corners cut.
          </motion.p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={feature.title} feature={feature} index={index} />
          ))}
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { value: '13', label: 'Templates' },
            { value: '100+', label: 'Components' },
            { value: '50+', label: 'Pages' },
            { value: '24/7', label: 'Support' },
          ].map((stat) => (
            <div key={stat.label} className="text-center p-6 glass rounded-xl">
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">{stat.value}</div>
              <div className="text-gray-400">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
