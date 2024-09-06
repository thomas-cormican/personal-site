import Link from "next/link";
import Navbar from "../components/Navbar";
import blogposts from "@/lib/blogposts";

blogposts.sort((a, b) => new Date(b.date) - new Date(a.date));

const BlogPost = ({ title, date, readTime, excerpt, id }) => (
  <div className="mb-2 sm:mb-2 pb-6 sm:pb-8 border-terminal-green last:border-b-0">
    <h3 className="text-base sm:text-lg font-bold mb-2">
      <Link href={`/blog/${id}`} className="hover:underline">
        {title}
      </Link>
    </h3>
    <div className="text-xs sm:text-sm mb-2">
      {date} • {readTime} min read
    </div>
  </div>
);

export default function Blog() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-6 sm:py-8 max-w-3xl">
        <h1 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">Blog</h1>
        <section>
          {blogposts.map((post, index) => (
            <BlogPost
              key={index}
              title={post.title}
              date={post.date}
              readTime={post.readTime}
              excerpt={post.excerpt || post.title}
              id={post.id}
            />
          ))}
        </section>
      </main>
      <footer className="border-t border-terminal-green py-3 sm:py-4 text-center text-xs sm:text-sm">
        &copy; 2024 Thomas Cormican. All rights reserved.
      </footer>
    </div>
  );
}
