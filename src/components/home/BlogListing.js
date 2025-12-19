"use client";

import { blogPosts } from "@/constants/blogData";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function BlogListing() {
  // slice(0, 3) ensures only the 3 most recent posts show on the landing page
  const displayedPosts = blogPosts.slice(0, 3);

  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* --- Section Header --- */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white leading-tight">
              Latest <span className="text-orange-500">Insights</span> & News
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mt-4 text-lg">
              Stay ahead with expert advice on business growth, technology trends, and professional services.
            </p>
          </div>
          <Link 
            href="/blog" 
            className="hidden md:flex items-center gap-2 text-orange-500 font-bold hover:gap-3 transition-all"
          >
            Explore All Articles
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </Link>
        </div>

        {/* --- Blog Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {displayedPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group flex flex-col bg-white dark:bg-gray-800 rounded-[2.5rem] overflow-hidden border border-gray-100 dark:border-gray-700 hover:border-orange-500/50 transition-all hover:shadow-2xl shadow-sm"
            >
              {/* Image Container */}
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 bg-orange-500 text-white text-[10px] font-black uppercase tracking-widest px-4 py-2 rounded-full">
                  {post.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center gap-3 text-xs text-gray-500 mb-4 font-medium">
                  <span>{post.date}</span>
                  <span className="w-1 h-1 bg-gray-300 rounded-full" />
                  <span>By {post.author}</span>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 leading-tight group-hover:text-orange-500 transition-colors line-clamp-2">
                  {post.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-400 mb-8 line-clamp-3 text-sm leading-relaxed">
                  {post.excerpt}
                </p>

                {/* The "Read More" button linking to dynamic [id] route */}
                <div className="mt-auto">
                  <Link 
                    href={`/blog/${post.id}`} 
                    className="inline-flex items-center justify-center w-full py-4 bg-gray-900 dark:bg-white dark:text-gray-900 text-white rounded-2xl font-bold text-sm hover:bg-orange-500 dark:hover:bg-orange-500 dark:hover:text-white transition-colors"
                  >
                    Read Full Article
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile-only View All Button */}
        <div className="mt-12 md:hidden">
          <Link 
            href="/blog" 
            className="flex items-center justify-center gap-2 text-orange-500 font-bold"
          >
            View All Posts
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </Link>
        </div>

      </div>
    </section>
  );
}