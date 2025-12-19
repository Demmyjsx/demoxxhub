import { blogPosts } from "@/constants/blogData";
import { notFound } from "next/navigation";


// Make sure the function is "async"
export default async function FullStory({ params }) {
  
  // STEP 1: Await the params to get the ID
  const { id } = await params; 

  // STEP 2: Find the post in your blogData
  const post = blogPosts.find((p) => p.id === id);

  // STEP 3: If no match is found, show 404
  if (!post) {
    return notFound();
  }

  return (
    <article className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl md:text-6xl font-black mb-8 dark:text-white">
          {post.title}
        </h1>
        {/* Render your content here */}
        <div 
          className="prose prose-lg dark:prose-invert max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content }} 
        />
      </div>
    </article>
  );
}