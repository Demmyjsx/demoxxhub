"use client";
import { motion } from "framer-motion";
import { Code, PenTool, Globe, Palette, Languages, Mic } from "lucide-react";

const services = [
  { 
    title: "Software Development", 
    desc: "Harness the power of custom-built software tailored to your unique business needs to boost efficiency.",
    icon: Code 
  },
  { 
    title: "Content Creation", 
    desc: "From blog posts to marketing copy, we craft compelling content that resonates with your audience.",
    icon: PenTool 
  },
  { 
    title: "Web Development", 
    desc: "Visually stunning, user-friendly websites that leave a lasting impression and drive engagement.",
    icon: Globe 
  },
  { 
    title: "Graphics Design", 
    desc: "Custom graphics that captivate your audience and ensure your brand stands out in a crowded market.",
    icon: Palette 
  },
  { 
    title: "Translation Services", 
    desc: "Accurate communication across languages and cultures, connecting you to a worldwide audience.",
    icon: Languages 
  },
  { 
    title: "Transcription Services", 
    desc: "Precision and speed for legal, business, or media transcripts, ensuring every word is captured.",
    icon: Mic 
  },
];

export default function ServiceGrid() {
  return (
    <section className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="group p-10 bg-gray-50 dark:bg-gray-800 rounded-[2.5rem] border border-transparent hover:border-orange-500 transition-all shadow-sm hover:shadow-xl"
            >
              <div className="mb-6 w-16 h-16 bg-white dark:bg-gray-700 rounded-2xl flex items-center justify-center text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-colors duration-300">
                <service.icon size={32} />
              </div>
              <h3 className="text-2xl font-bold dark:text-white mb-4">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}