"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaEnvelope } from "react-icons/fa";
import { MdDownload } from "react-icons/md";
import { RiContactsFill } from "react-icons/ri";
import Link from "next/link";
import Typewriter, { TypewriterClass } from "typewriter-effect";
import { MutableRefObject } from "react";
import { personalData } from "../data/constant";

function AboutSection() {
  const typewriterRef: MutableRefObject<TypewriterClass | null> = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (typewriterRef.current) {
        typewriterRef.current
          .typeString("Full-Stack Developer")
          .pauseFor(1000)
          .deleteAll()
          .typeString("Developing AI Systems.")
          .pauseFor(1000)
          .deleteAll()
          .typeString("Backend API Builder")
          .pauseFor(1000)
          .deleteAll()
          .typeString("Visual & Textual RAG expert.")
          .pauseFor(800)
          .deleteAll()
          .typeString("Production-ready AI web apps.")
          .pauseFor(1000)
          .deleteAll()
          .start();
      }
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
     
      className="relative min-h-screen pt-24 md:pt-12 px -6 max-w-7xl mx-auto flex items-center"
    >
      <div className="w-full flex flex-col lg:flex-row items-center justify-around gap-16">
        {/* ================= TEXT CONTENT ================= */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
          <div className="inline-block px-4 py-1.5 mb-6 bg-slate-800/50 border border-slate-700 rounded-full text-xs font-bold tracking-widest text-indigo-400 uppercase">
            Available for New Opportunities
          </div>

          <h1 className="text-2xl sm:text-3xl lg:text-5xl font-extrabold text-[#16f2b3]">
            <span className="text-red-400">Hi, </span>
            <Typewriter
              onInit={(typewriter) => {
                typewriter.typeString("I'm Arman.").start();
              }}
            />
          </h1>

          <h2 className="mt-3 min-h-[40px] text-lg sm:text-xl lg:text-3xl font-semibold text-white">
            <Typewriter
              options={{ loop: true }}
              onInit={(typewriter) => {
                typewriterRef.current = typewriter;
              }}
            />
          </h2>

          {/* ================= SOCIAL LINKS ================= */}
          <div className="my-8 flex items-center gap-6">
            <Link
              href="https://github.com/arman229"
              target="_blank"
              className="text-pink-500 hover:scale-125 transition-all"
            >
              <BsGithub size={28} />
            </Link>

            <Link
              href="https://www.linkedin.com/in/arman-ashraf/"
              target="_blank"
              className="text-pink-500 hover:scale-125 transition-all"
            >
              <BsLinkedin size={28} />
            </Link>

            <Link
              href="mailto:armanashraf015@gmail.com"
              className="text-pink-500 hover:scale-125 transition-all"
            >
              <FaEnvelope size={28} />
            </Link>
          </div>

          {/* ================= CTA BUTTONS ================= */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-4">
            <Link
              href="mailto:armanashraf015@gmail.com"
              className="bg-gradient-to-r from-violet-600 to-pink-500 p-[1px] rounded-full"
            >
              <button className="px-6 py-3 bg-[#0d1224] rounded-full text-sm font-semibold text-white flex items-center gap-2 hover:gap-3 transition-all">
                Contact Me
                <RiContactsFill size={16} />
              </button>
            </Link>

            <a
              href="https://raw.githubusercontent.com/arman229/arman229/master/Arman_Ashraf_Backend_AI_Engineer.pdf"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 text-sm font-semibold text-white hover:gap-3 transition-all"
            >
              Get Resume
              <MdDownload size={16} />
            </a>
          </div>

          {/* ================= STATS ================= */}
          <div className="mt-12 flex items-center gap-8 opacity-70">
            <Stat number="3+" label="Years Exp." />
            <Divider />
            <Stat number="10+" label="Projects" />
            <Divider />
            <Stat number="12+" label="Courses" />
          </div>
        </div>

        <div className=" relative relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
          <div className="relative z-10 w-full aspect-square max-w-md mx-auto overflow-hidden rounded-3xl border border-white/10 shadow-2xl">
            {" "}
            <Image
              src={personalData.profile}
              width={450}
              height={280}
              alt="Arman"
              className="rounded-lg transition-all duration-1000 grayscale hover:scale-110 cursor-pointer"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;

/* ================= SMALL COMPONENTS ================= */

const Stat = ({ number, label }: { number: string; label: string }) => (
  <div className="text-center lg:text-left">
    <div className="text-2xl font-bold">{number}</div>
    <div className="text-xs uppercase tracking-wider text-slate-500 font-bold">
      {label}
    </div>
  </div>
);

const Divider = () => <div className="h-8 w-[1px] bg-slate-700" />;
