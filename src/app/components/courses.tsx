import { ArrowRight } from "lucide-react";
import { COURSES } from "../data/constant";
import Image from "next/image";

export const Courses = () => {
  return (
    <section id="courses" className="py-24 bg- [#0a0f1e]">
      <div className="container mx-auto px-6 text-center  max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-4">Learn From Me</h2>
        <p className="text-slate-400 mb-16">
          High-quality engineering courses for modern developers.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {COURSES.map((course) => (
            <div
              key={course.id}
              className="bg-slate-900 rounded-3xl overflow-hidden border border-slate-800 hover:border-indigo-500/50 transition-colors group"
            >
              <div className="h-48 overflow-hidden relative">
                {/* <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                /> */}

                <Image
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority
                />

                <div className="absolute top-4 right-4 bg-indigo-600 px-3 py-1 rounded-full text-[10px] font-bold uppercase">
                  {course.level}
                </div>
              </div>
              <div className="p-6 text-left">
                <h3 className="text-xl font-bold mb-2">{course.title}</h3>
                <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                  {course.description}
                </p>
                <button className="w-full py-3 bg-slate-800 rounded-xl font-bold text-sm hover:bg-white hover:text-slate-950 transition-all flex items-center justify-center">
                  View Course <ArrowRight className="ml-2 w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
