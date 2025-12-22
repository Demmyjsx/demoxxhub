import { blogPosts } from "@/constants/blogData";
import { notFound } from "next/navigation";

// 1. Generate Metadata for SEO
export async function generateMetadata({ params }) {
  const { id } = await params;
  const post = blogPosts.find((p) => String(p.id) === id);
  return { title: post ? `${post.title} | DemoxxHub` : "Post Not Found" };
}

// 2. Pre-render pages for speed (Static Site Generation)
export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    id: String(post.id),
  }));
}

// 3. The Page Component
export default async function FullStory({ params }) {
  const { id } = await params;
  const post = blogPosts.find((p) => String(p.id) === id);

  if (!post) notFound();

  return (
    <article className="py-20 max-w-4xl mx-auto px-6">
      <header className="mb-10 text-center">
        <span className="text-orange-500 font-bold uppercase tracking-widest text-sm">
          {post.category}
        </span>
        <h1 className="text-4xl md:text-6xl font-black mt-4">{post.title}</h1>
        <p className="text-gray-500 mt-4">By {post.author} • {post.date}</p>
      </header>
      
      <div 
        className="prose prose-lg dark:prose-invert max-w-none"
        dangerouslySetInnerHTML={{ __html: post.content }} 
      />
    </article>
  );
}