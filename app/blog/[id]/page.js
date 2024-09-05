import Link from "next/link";
import Navbar from "@/app/components/Navbar";
import blogposts from "@/lib/blogposts";
import "./../styles.css";

export default function BlogPost({ params }) {
  const post = blogposts.find((post) => post.id == params.id);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className="min-h-screen flex flex-col bg-black text-text">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-6 sm:py-8 max-w-3xl">
        <article>
          <header className="mb-4">
            <h1 className="text-2xl sm:text-3xl font-bold mb-2 text-text">
              {post.title}
            </h1>
            <div className="text-sm text-muted">
              {post.date} • {post.readTime} min read
            </div>
          </header>
          <div className="prose prose-invert max-w-none text-text">
            {post.content}
          </div>
        </article>
        <div className="mt-8">
          <Link href="/blog" className="text-sm hover:underline text-text">
            ← Back to all posts
          </Link>
        </div>
      </main>
      <footer className="border-t border-muted py-4 text-center text-sm text-muted">
        &copy; 2024 Thomas Cormican. All rights reserved.
      </footer>
    </div>
  );
}

export async function generateStaticParams() {
  return blogposts.map((post) => ({
    id: post.id,
  }));
}
