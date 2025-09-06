"use client";

import React from "react";
import DataCard from "../data/projects-data";
import { BsGithub } from "react-icons/bs";
import Image from "next/image";

function Projects() {
  return (
    <div>
      <div
        id="projects"
        className="relative z-50 border-t my-12 lg:my-24 md:px-8 border-[#25213b]"
      >
        <div className="flex justify-center my-5 lg:py-8">
          <div className="flex items-center">
            <span className="w-16 md:w-24 h-[2px] bg-[#1a1443]"></span>
            <span className="bg-[#1a1443] w-fit text-white px-4 py-2 md:px-5 text-lg md:text-xl rounded-md">
              Projects
            </span>
            <span className="w-16 md:w-24 h-[2px] bg-[#1a1443]"></span>
          </div>
        </div>
      </div>

      <div className="mx-auto mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 lg:gap-16 px-2 sm:px-4 md:px-6 lg:px-8">
          {DataCard.map((item) => (
            <div
              key={item.id}
              className="bg-[#161a2f] rounded-lg shadow-md overflow-hidden flex flex-col"
            >
              {/* Responsive image */}
              <div className="relative w-full h-56 sm:h-64 md:h-72 lg:h-80">
                <Image
                  src={item.image}
                  alt={item.heading}
                  fill
                  className="object-cover rounded-t-lg"
                  priority
                />
              </div>

              {/* Content */}
              <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-base sm:text-lg md:text-xl font-medium mb-2">
                  {item.heading}
                </h3>
                <p className="text-sm sm:text-base text-gray-300 mb-3">
                  {item.detail}
                </p>

                <div className="mt-auto">
                  <h2 className="text-sm sm:text-base md:text-lg font-semibold mb-1">
                    Tech Used:
                  </h2>
                  <p className="text-xs sm:text-sm md:text-base text-gray-400">
                    {item.techused
                      .map(
                        (tech) =>
                          tech.charAt(0).toUpperCase() + tech.slice(1)
                      )
                      .join(", ")}
                  </p>

                  {/* Buttons */}
                  <div className="mt-4 flex flex-wrap gap-2">
                    <a
                      href={item.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-500 hover:bg-blue-600 text-white text-sm sm:text-base py-2 px-4 rounded-md transition"
                    >
                      Live Demo
                    </a>
                    <a
                      href={item.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 bg-gray-800 hover:bg-gray-700 text-white text-sm sm:text-base px-3 py-2 rounded-md transition"
                    >
                      <BsGithub size={18} /> Source Code
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
