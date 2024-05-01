import React from "react";
import DataCard from "../data/projects-data";

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
                                        <div className="mt-4 flex justify-between">
                                            <a href={item.demo} target="_blank" rel="noopener noreferrer"
                                               className="bg-blue-400 hover:bg-blue-500 text-white py-2 px-4 rounded-md">
                                                Live Demo

                                            </a>

                                            <a href={item.github}>
                                                <button
                                                    className="flex items-center px-4 py-2 bg-gray-800 text-white rounded-lg shadow-md">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mr-2"
                                                         viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                         stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                        <path
                                                            d="M9 19c-4.418 0-8-3.582-8-8s3.582-8 8-8c3.534 0 6.465 2.291 7.512 5.469.37 1.077.044 2.28-.731 3.156-.706.865-1.747 1.375-2.781 1.375h-2v4.5c0 .276-.224.5-.5.5h-3c-.276 0-.5-.224-.5-.5v-4.5h-2c-1.034 0-2.075-.51-2.781-1.375-.774-.876-1.101-2.079-.731-3.156 1.047-3.178 3.978-5.469 7.512-5.469 4.418 0 8 3.582 8 8s-3.582 8-8 8z"/>
                                                    </svg>
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
