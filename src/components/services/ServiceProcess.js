"use client";
import { motion } from "framer-motion";

const steps = [
  { id: "01", t: "Consultation", d: "Understanding your needs and goals through in-depth discussions." },
  { id: "02", t: "Planning", d: "Our team crafts a detailed strategy tailored to your objectives." },
  { id: "03", t: "Execution", d: "We bring your vision to life using the latest tools and technologies." },
  { id: "04", t: "Review & Refine", d: "We ensure every detail is perfect, making adjustments as needed." },
  { id: "05", t: "Delivery", d: "Your project is delivered on time, ready to make an impact." },
];

export default function ServiceProcess() {
  return (
    <section className="py-24 bg-gray-900 text-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-black mb-16">Working Process</h2>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {steps.map((step, i) => (
            <motion.div 
              key={step.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="relative"
            >
              <div className="text-6xl font-black text-white opacity-10 absolute -top-8 left-1/2 -translate-x-1/2">
                {step.id}
              </div>
              <div className="relative z-10">
                <div className="w-12 h-12 bg-orange-500 rounded-full mx-auto mb-6 flex items-center justify-center font-bold">
                  {step.id.replace('0','')}
                </div>
                <h4 className="text-xl font-bold mb-3">{step.t}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{step.d}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}