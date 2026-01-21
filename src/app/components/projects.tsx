"use client";

import React from "react";
import { ExternalLink } from "lucide-react";
import { PROJECTS } from "../data/constant";
import Image from "next/image";

function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="container  max-w-7xl mx-auto mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-slate-400">
            Explore my latest work across various industries.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 sm:gap-10">
          {PROJECTS.map((project) => (
            <div
              key={project.id}
              className="group flex flex-col bg-slate-900/40 border border-white/5 rounded-[32px] sm:rounded-[40px] overflow-hidden hover:bg-slate-800/40 transition-all duration-500 hover:border-indigo-500/20 shadow-2xl"
            >
              <div className="aspect-[16/10] overflow-hidden relative">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              {/* <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
              </div> */}
              <div className="p-8 sm:p-10 flex flex-col flex-1">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 bg-white/5 rounded-full text-[9px] sm:text-[10px] font-black text-slate-400 group-hover:text-indigo-300 group-hover:bg-indigo-500/10 uppercase tracking-widest transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold mb-4 group-hover:text-indigo-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-sm mb-6 flex-1 leading-relaxed line-clamp-3 group-hover:text-slate-300 transition-colors">
                  {project.description}
                </p>
                <div className="mt-auto pt-6 border-t border-white/5 flex items-center justify-between">
                  <a
                    href={project.liveUrl}
                    className="flex items-center text-[10px] sm:text-sm font-bold uppercase tracking-widest text-indigo-500 hover:text-indigo-300 transition-colors group/link"
                  >
                    Live Case Study{" "}
                    <ExternalLink className="ml-2 w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform group-hover/link:-translate-y-0.5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export { Projects };
