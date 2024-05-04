import React from "react";
import DataCard from "../data/projects-data";
import {BsGithub, BsLinkedin} from "react-icons/bs";
<BsGithub size={30}/>
function Projects() {
    return (
        <div>
            <div
                id="projects"
                className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]"
            >
                <div className="flex justify-center my-5 lg:py-8">
                    <div className="flex  items-center">
                        <span className="w-24 h-[2px] bg-[#1a1443]"></span>
                        <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
              Projects
            </span>
                        <span className="w-24 h-[2px] bg-[#1a1443]"></span>
                    </div>
                </div>
            </div>
            <div>
                <div className="  mx-auto ">

                    <div
                        className="grid grid-cols-1   rounded-lg md:grid-cols-2 lg:grid-cols-2  md:gap-10 gap-4 lg:gap-16 md:mx-4 mx-0 lg:mx-8">
                        {DataCard.map((item) => (
                            <div key={item.id} style={{minHeight: 600}}>
                                {<div className="bg-[#161a2f] rounded-lg shadow-md  " style={{borderRadius: '15px'}}>

                                    <img src={item.image} alt="not shows" className={" rounded-lg"} width={"100%"}/>

                                    <div className="p-4">
                                        <h3 className="text-xl font-semibold mb-2">
                                            {item.heading}
                                        </h3>

                                        <p className=" ">{item.detail}</p>
                                        <h5 className="text-lg pt-2 font-bold italic">Tech Used: React, Html, Tailwind css</h5>
                                        <div className="mt-4 flex  gap-3">
                                            <a href={item.demo} target="_blank" rel="noopener noreferrer"
                                               className="bg-blue-400 hover:bg-blue-500 text-white py-2 px-4 rounded-md">
                                                Live Demo

                                            </a>

                                            <a href={item.github}>
                                                <button
                                                    className="flex items-center px-2 py-2 gap-1 bg-gray-800 text-white rounded-lg shadow-md">
                                                   <BsGithub size={20}/>
                                                    Source Code
                                                </button>
                                            </a>
                                        </div>
                                    </div>
                                </div>}

                            </div>
                        ))}
                    </div>


                </div>
            </div>

        </div>
    );
}

export default Projects;
