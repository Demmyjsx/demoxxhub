"use client";
import { motion } from "framer-motion";
// Importing relevant icons from Lucide
import { 
  Lightbulb, 
  ShieldCheck, 
  Award, 
  UserCheck, 
  Users, 
  TrendingUp 
} from "lucide-react";

const values = [
  { 
    id: "01", 
    title: "Innovation", 
    desc: "We embrace creativity and forward-thinking solutions to keep our clients ahead.",
    icon: Lightbulb 
  },
  { 
    id: "02", 
    title: "Integrity", 
    desc: "Honesty and transparency are at the heart of everything we do, building trust.",
    icon: ShieldCheck 
  },
  { 
    id: "03", 
    title: "Excellence", 
    desc: "We strive for the highest standards, delivering quality results that exceed expectations.",
    icon: Award 
  },
  { 
    id: "04", 
    title: "Client-Centricity", 
    desc: "Our clients' success is our priority. We focus on delivering tailored solutions.",
    icon: UserCheck 
  },
  { 
    id: "05", 
    title: "Collaboration", 
    desc: "We believe in teamwork, both within our company and with our clients.",
    icon: Users 
  },
  { 
    id: "06", 
    title: "Continuous Improvement", 
    desc: "We are committed to learning, evolving, and adapting to new challenges.",
    icon: TrendingUp 
  },
];

export default function CoreValues() {
  return (
    <section className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black dark:text-white mb-4"
          >
            Our Core Values
          </motion.h2>
          <p className="text-gray-500 dark:text-gray-400 max-w-xl mx-auto">
            These values drive everything we do at Demoxxhub, ensuring top-tier services with a focus on lasting success.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {values.map((val, i) => (
            <motion.div
              key={val.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -10 }}
              className="p-8 bg-gray-50 dark:bg-gray-800 rounded-3xl border border-transparent hover:border-orange-500/50 transition-all group relative flex flex-col items-center text-center shadow-sm hover:shadow-xl"
            >
            

              {/* Icon Container - Forced to 100px */}
              <motion.div 
                animate={{ y: [0, -5, 0] }}
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut", delay: i * 0.2 }}
                className="mb-6 text-orange-500 flex items-center justify-center p-4 bg-orange-50 dark:bg-orange-500/10 rounded-2xl"
              >
                <val.icon size={100} strokeWidth={1.5} />
              </motion.div>

              <h3 className="text-2xl font-bold mb-4 dark:text-white">
                {val.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {val.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}