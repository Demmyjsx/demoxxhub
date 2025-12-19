"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function ServiceCTA() {
  return (
    <section className="py-20 bg-white dark:bg-gray-900 text-center">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto px-6 p-12 bg-orange-50 dark:bg-orange-500/5 rounded-[3rem] border-2 border-dashed border-orange-200 dark:border-orange-500/20"
      >
        <h2 className="text-3xl md:text-5xl font-black text-gray-900 dark:text-white mb-6">
          Request a Free Quote
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto">
          Request your Free quote today! Our experts are ready to help you achieve 
          your business goals with tailored solutions designed to fit your needs.
        </p>
        <Link 
          href="/contact"
          className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-10 rounded-full transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-orange-500/20"
        >
          Click Here for Quote
        </Link>
      </motion.div>
    </section>
  );
}