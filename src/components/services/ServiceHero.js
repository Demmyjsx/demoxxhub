"use client";
import { motion } from "framer-motion";

export default function ServicesHero() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900 overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.span 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-orange-500 font-bold uppercase tracking-widest text-sm"
        >
          Our Offerings
        </motion.span>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-4 text-4xl md:text-6xl font-black text-gray-900 dark:text-white leading-tight"
        >
          Comprehensive Business Management & IT Consulting
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-6 text-lg text-gray-600 dark:text-gray-400 leading-relaxed"
        >
          At Demoxxhub, we offer a wide range of services designed to meet the diverse needs of our clients. 
          Our team is equipped to handle projects of any size and complexity.
        </motion.p>
      </div>
    </section>
  );
}