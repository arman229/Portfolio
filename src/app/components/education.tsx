"use client";
import "react-vertical-timeline-component/style.min.css";
import { CheckCircle2, GraduationCap, Trophy } from "lucide-react";
import { EDUCATION, ACHIEVEMENTS, SKILLS } from "../data/constant";

function Eduction() {
  return (
    <section id="about" className="py-24 bg- [#0a0f1e] ">
      <div className="max-w-7xl mx-auto mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-4xl font-bold mb-8">
              Building Production-Ready AI
              <span className="text-indigo-400"> Projects</span>.
            </h2>
            <p className="text-slate-400 mb-6 leading-relaxed">
              I’m a Backend AI Engineer specializing in FastAPI, agentic AI
              pipelines, and RAG systems. I design and deploy production-ready
              AI solutions that automate complex workflows, power scalable APIs,
              and deliver real-world impact across content, e-commerce, and
              intelligent applications.
            </p>

            <div className="mt-12">
              <div className="flex items-center space-x-4 mb-6">
                <GraduationCap className="w-8 h-8 text-indigo-400" />
                <h3 className="text-2xl font-bold">Education</h3>
              </div>
              <div className="space-y-8 relative before:absolute before:inset-0 before:left-3.5 before:w-[1px] before:bg-slate-800">
                {EDUCATION.map((edu) => (
                  <div key={edu.id} className="relative pl-12 group">
                    <div className="absolute left-0 top-1.5 w-7 h-7 bg-[#0a0f1e] border border-slate-700 rounded-full flex items-center justify-center group-hover:border-indigo-500 transition-colors">
                      <div className="w-2 h-2 rounded-full bg-slate-700 group-hover:bg-indigo-500 transition-colors" />
                    </div>
                    <div className="text-indigo-400 text-sm font-bold mb-1">
                      {edu.period}
                    </div>
                    <h4 className="text-lg font-bold">{edu.degree}</h4>
                    <div className="text-slate-500 text-sm font-medium mb-2">
                      {edu.institution}
                    </div>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      {edu.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="glass-morphism p-8 rounded-3xl">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                <Trophy className="w-6 h-6 text-yellow-500" />
                Key Achievements
              </h3>
              <div className="space-y-6">
                {ACHIEVEMENTS.map((ach) => (
                  <div key={ach.id} className="flex gap-4">
                    <div className="mt-1">
                      <CheckCircle2 className="w-5 h-5 text-indigo-500" />
                    </div>
                    <div>
                      <div className="font-bold text-slate-200">
                        {ach.title}
                      </div>
                      <p className="text-slate-400 text-sm">
                        {ach.description}
                      </p>
                      <div className="text-xs text-slate-600 mt-1 font-bold">
                        {ach.date}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {SKILLS.map((skillGroup) => (
              <div
                key={skillGroup.category}
                className="glass-morphism p-6 rounded-2xl"
              >
                <h3 className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-4">
                  {skillGroup.category}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {skillGroup.items.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 bg-slate-800/80 text-indigo-300 rounded-lg text-sm font-medium border border-indigo-500/10 hover:border-indigo-500/30 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Eduction;
