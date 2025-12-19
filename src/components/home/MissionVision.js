"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Target, Eye, CheckCircle2 } from "lucide-react";

export default function MissionVision() {
  const missionPoints = [
    { title: "Innovative Solutions", desc: "Deliver cutting-edge IT consulting tailored to stay ahead in the digital landscape." },
    { title: "Client-Centric", desc: "Build long-lasting partnerships by focusing on measurable business results." },
    { title: "Empowerment", desc: "Providing tools and expertise that transform challenges into opportunities." },
  ];

  return (
    <section className="py-24 bg-white dark:bg-gray-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid lg:grid-cols-2 gap-12 items-stretch">
          
          {/* --- VISION CARD --- */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative p-8 md:p-12 rounded-[3rem] bg-orange-50 dark:bg-orange-900/10 border border-orange-100 dark:border-orange-800/30 flex flex-col justify-center"
          >
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-orange-500/10 rounded-full blur-3xl" />
            
            <div className="w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center mb-8 rotate-3 shadow-lg shadow-orange-500/20">
              <Eye className="text-white w-8 h-8" />
            </div>

            <h3 className="text-4xl font-black text-gray-900 dark:text-white mb-6">
              Our <span className="text-orange-500">Vision</span>
            </h3>
            <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed font-medium">
              To be the leading partner in driving digital innovation and transformation, empowering businesses globally to harness technology for sustainable growth and success.
            </p>
          </motion.div>

          {/* --- MISSION CARD (With Circular Image) --- */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative p-8 md:p-12 rounded-[3rem] bg-gray-900 dark:bg-gray-800 text-white flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20">
                  <Target className="text-orange-500 w-6 h-6" />
                </div>
                <h3 className="text-3xl font-bold">Our Mission</h3>
              </div>

              <div className="space-y-6">
                {missionPoints.map((point, i) => (
                  <div key={i} className="flex gap-4">
                    <CheckCircle2 className="text-orange-500 w-6 h-6 shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-lg text-orange-400">{point.title}</h4>
                      <p className="text-gray-400 text-sm leading-relaxed">{point.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Circular Surprise Image */}
            
          </motion.div>

        </div>

        {/* --- BOTTOM TAGLINE --- */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-500 dark:text-gray-400 font-bold tracking-[0.2em] uppercase text-xs">
            Demoxxhub • Empowering Through Technology
          </p>
        </motion.div>
      </div>
    </section>
  );
}