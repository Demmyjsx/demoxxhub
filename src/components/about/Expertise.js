"use client";
import { motion } from "framer-motion";

const expertises = [
  { title: "Translation Services", text: "Bridging language barriers with precise translations." },
  { title: "Content Creation", text: "Crafting narratives that engage and elevate brands." },
  { title: "Transcription Services", text: "Accurate captures of audio and video content." },
  { title: "Website Development", text: "Stunning, high-performance digital impressions." },
  { title: "Software Development", text: "Custom solutions that drive business efficiency." },
];

export default function Expertise() {
  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-black dark:text-white mb-6 leading-tight">Our Expertise</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              At Demoxxhub, we deliver tailored solutions that combine technical expertise with deep industry insights.
            </p>
          </motion.div>
          
          <div className="space-y-6">
            {expertises.map((exp, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-4 p-4 border-b border-gray-200 dark:border-gray-800 hover:bg-white dark:hover:bg-gray-800 transition-colors rounded-xl"
              >
                <div className="h-2 w-2 rounded-full bg-orange-500 mt-2 shrink-0" />
                <div>
                  <h4 className="font-bold dark:text-white">{exp.title}</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{exp.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}