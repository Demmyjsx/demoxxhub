"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-32 flex flex-col-reverse lg:flex-row items-center gap-12">
        
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 text-center lg:text-left"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-6 leading-tight">
            Empowering Businesses Through Technology
          </h1>
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
            At Demoxxhub, we deliver innovative, scalable, and client-focused IT solutions.
            From cutting-edge software to strategic digital transformation, we help your business stay ahead in the rapidly evolving digital landscape.
          </p>
          <div className="flex justify-center lg:justify-start gap-4 flex-wrap">
            <a
              href="services"
              className="px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg shadow-lg hover:bg-orange-600 transition"
            >
              Explore Services
            </a>
            <a
              href="https://wa.me/2348103929078"
              className="px-6 py-3 border border-orange-500 text-orange-500 font-semibold rounded-lg hover:bg-orange-500 hover:text-white transition"
            >
              Request a Quote
            </a>
          </div>
        </motion.div>

        {/* Hero Image / Illustration */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 flex justify-center lg:justify-end"
        >
          <Image
            src="/HeroImage.png"
            alt="Demoxxhub Hero Illustration"
            width={600}
            height={600}
            className="w-80 md:w-100 lg:w-135 h-auto"
          />
        </motion.div>
      </div>

      {/* Optional Background Shapes */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden">
        <div className="bg-orange-100 dark:bg-orange-900 w-[600px] h-[600px] rounded-full absolute -top-40 -left-40 opacity-30 blur-3xl"></div>
        <div className="bg-blue-100 dark:bg-blue-900 w-[500px] h-[500px] rounded-full absolute -bottom-40 -right-40 opacity-20 blur-3xl"></div>
      </div>
    </section>
  );
}
