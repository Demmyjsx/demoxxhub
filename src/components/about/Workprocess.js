"use client";
import { motion } from "framer-motion";

const steps = [
  { n: "1", t: "Consultation", d: "Understanding your needs through discussions." },
  { n: "2", t: "Planning", d: "Crafting a detailed, result-oriented strategy." },
  { n: "3", t: "Execution", d: "Bringing your vision to life with expert tools." },
  { n: "4", t: "Review & Refine", d: "Polishing details for the perfect outcome." },
  { n: "5", t: "Delivery", d: "On-time delivery ready to make an impact." },
];

export default function WorkProcess() {
  return (
    <section className="py-24 bg-gray-900 text-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl font-bold mb-4">Working Process</h2>
          <p className="text-gray-400 italic">Here’s how we deliver exceptional results</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-12 relative">
          {steps.map((step, i) => (
            <motion.div 
              key={step.n}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="relative text-center"
            >
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-black shadow-lg">
                {step.n}
              </div>
              <h3 className="text-xl font-bold mb-2">{step.t}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{step.d}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}