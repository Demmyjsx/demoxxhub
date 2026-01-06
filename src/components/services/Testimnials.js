"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: "Obinna",
    role: "Business Consultant",
    quote: "The level of professionalism at Demmoxxhub is truly top-tier. I approached them with a complex project requirement, and they didn't just meet my expectations—they exceeded them.",
    color: "text-blue-400",
    bgColor: "bg-blue-400/10"
  },
  {
    id: 2,
    name: "Tochukwu",
    role: "E-commerce Founder",
    quote: "Scaling my online business was a headache until I started working with Demmoxxhub. They handled our digital infrastructure with so much ease. Highly recommended!",
    color: "text-purple-400",
    bgColor: "bg-purple-400/10"
  },
  {
    id: 3,
    name: "Ademola",
    role: "Creative Director",
    quote: "As a creative, I am very particular about aesthetics. Demmoxxhub turned my vision into a digital reality. They blend beautiful design with high-performance functionality.",
    color: "text-orange-400",
    bgColor: "bg-orange-400/10"
  },
  {
    id: 4,
    name: "Faraday",
    role: "Tech Startup Lead",
    quote: "Reliability is hard to find, but Demmoxxhub makes it look easy. We had a tight deadline, and the team worked tirelessly to ensure everything was bug-free.",
    color: "text-green-400",
    bgColor: "bg-green-400/10"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const cardVariants = {
  hidden: { y: 40, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1, 
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } 
  }
};

export default function Testimonials() {
  return (
    <section className="relative py-24 bg-slate-950 overflow-hidden">
      {/* Dynamic Background Blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-80 h-80 bg-blue-600 rounded-full mix-blend-screen filter blur-[120px] opacity-10 animate-blob"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-purple-600 rounded-full mix-blend-screen filter blur-[120px] opacity-10 animate-blob animation-delay-2000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="text-4xl md:text-6xl font-black text-white tracking-tight"
          >
            Trusted by <span className="text-blue-500">Industry Leaders</span>
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            className="h-1.5 bg-blue-600 mx-auto mt-6 rounded-full"
          />
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {testimonials.map((item) => (
            <motion.div
              key={item.id}
              variants={cardVariants}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
              className="group relative bg-slate-900/40 backdrop-blur-md border border-white/5 p-8 rounded-[2rem] hover:bg-slate-900/60 transition-colors"
            >
              {/* Quote Mark */}
              <div className={`text-4xl font-serif ${item.color} opacity-20 mb-2`}>“</div>
              
              <p className="text-gray-400 text-sm leading-relaxed mb-8">
                {item.quote}
              </p>

              <div className="flex items-center gap-4 mt-auto border-t border-white/5 pt-6">
                {/* User Icon Wrapper */}
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${item.bgColor} ${item.color}`}>
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 24 24" 
                    fill="currentColor" 
                    className="w-6 h-6"
                  >
                    <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clipRule="evenodd" />
                  </svg>
                </div>
                
                <div>
                  <h4 className="text-white font-bold text-sm">{item.name}</h4>
                  <p className="text-gray-500 text-[10px] uppercase font-bold tracking-widest leading-none mt-1">
                    {item.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}