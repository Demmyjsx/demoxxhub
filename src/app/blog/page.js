"use client";
import { blogPosts } from "@/constants/blogData";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function BlogListing() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900 min-h-screen">
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-5xl font-black mb-12 dark:text-white">Latest <span className="text-orange-500">Insights</span></h1>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogPosts.map((post, i) => (
            <motion.div 
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-4xl overflow-hidden shadow-lg border border-gray-100 dark:border-gray-700 group"
            >
              <div className="relative h-60 w-full overflow-hidden">
                <Image src={post.image} alt={post.title} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="p-8">
                <span className="text-orange-500 font-bold text-xs uppercase tracking-widest">{post.category}</span>
                <h2 className="text-2xl font-bold mt-2 mb-4 dark:text-white leading-tight">{post.title}</h2>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 line-clamp-3">{post.excerpt}</p>
                <Link href={`/blog/${post.id}`} className="inline-block bg-orange-500 text-white px-6 py-3 rounded-full font-bold text-sm hover:bg-orange-600 transition-colors">
                  Read More
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}