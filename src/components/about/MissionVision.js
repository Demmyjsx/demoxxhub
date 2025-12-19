"use client";
import { motion } from "framer-motion";

export default function MissionVision() {
  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-4xl mx-auto px-6">
   

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-16 p-10 bg-linear-to-br from-orange-500 to-orange-600 rounded-3xl text-center shadow-xl text-white"
        >
          <h3 className="text-xl font-bold uppercase tracking-widest mb-4 opacity-80">Our Vision</h3>
          <p className="text-2xl md:text-3xl font-medium leading-snug">
            &ldquo; at Demoxxhub To be the leading partner in driving digital innovation and transformation, empowering businesses globally.&rdquo;
          </p>
        </motion.div>

        
      </div>
    </section>
  );
}