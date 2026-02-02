'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <h1 className="font-serif text-8xl md:text-9xl text-white mb-4">404</h1>
        <p className="text-neutral-400 mb-8 max-w-md mx-auto">
          The page you&apos;re looking for has wandered off frame.
          Let&apos;s get you back to familiar territory.
        </p>
        <Link
          href="/"
          className="inline-block px-8 py-4 border border-white text-white text-sm tracking-widest uppercase hover:bg-white hover:text-black transition-colors"
        >
          Return Home
        </Link>
      </motion.div>
    </div>
  );
}
