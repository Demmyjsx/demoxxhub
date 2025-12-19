"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutHero() {
  return (
    <section className="py-20 bg-white dark:bg-gray-900 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <span className="text-orange-500 font-bold uppercase tracking-[0.2em] text-sm">About Us</span>
          <h1 className="text-4xl md:text-6xl font-black text-gray-900 dark:text-white leading-tight">
            We Are Increasing Business Success With Technology
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 border-l-4 border-orange-500 pl-4 italic">
            Founded with a clear vision: to bridge the often daunting gap between business and technology.
          </p>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
            At Demoxxhub, we are a forward-thinking Business Management and IT Consulting firm, dedicated to helping businesses thrive in the digital age.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8, rotate: 2 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative h-[450px] w-full rounded-b-full overflow-hidden shadow-2xl"
        >
          <Image 
            src="/about.png" // Ensure this image is in your public folder
            alt="Demoxxhub Team"
            fill
            className="object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}