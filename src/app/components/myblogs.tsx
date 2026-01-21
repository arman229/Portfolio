import { ArrowRight } from "lucide-react";
import { BLOG_POSTS } from "../data/constant";
import Image from "next/image";

export const MyBlog = () => {
  return (
    <section id="blog" className="py-24 bg-[#0a0f1e]">
      <div className="container mx-auto px-6  max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-4xl font-bold">Latest Articles</h2>
          <a href="#" className="text-indigo-400 font-bold hover:underline">
            Read All Posts
          </a>
        </div>
        <div className="grid md:grid-cols-2 gap-12">
          {BLOG_POSTS.map((post) => (
            <div
              key={post.id}
              className="group flex flex-col md:flex-row gap-8 items-center cursor-pointer"
            >
              {/* <div className="w-full md:w-48 h-48 rounded-2xl overflow-hidden shrink-0">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div> */}

              <div className="w-full md:w-48 h-48 rounded-2xl overflow-hidden shrink-0 relative">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 12rem"
                />
              </div>
              <div>
                <div className="text-xs font-bold text-slate-500 mb-2 uppercase tracking-widest">
                  {post.date}
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-indigo-400 transition-colors">
                  {post.title}
                </h3>
                <p className="text-slate-400 leading-relaxed mb-4 line-clamp-2">
                  {post.summary}
                </p>
                <div className="flex items-center text-sm font-bold text-white group-hover:translate-x-2 transition-transform">
                  Read Story <ArrowRight className="ml-2 w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
