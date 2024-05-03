import {BsPersonWorkspace} from "react-icons/bs";
import lottieFile from '../lottie/code.json';
import Lottie from "lottie-react";
import {experiences} from "../data/experience";
import GlowCard from '../components/glow-card'
import sectionIcon from "../images/experience/section.svg"
import blurIcon from "../images/experience/blur-23.svg"


function Experience() {

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: lottieFile,
        style: {
            width: '95%',
        }
    };
    return (
        <div id="experience" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
            <img
                src={sectionIcon}
                alt="Hero"
                width={1572}
                height={795}
                className="absolute top-0 -z-10"
            />

            <div className="flex justify-center my-5 lg:py-8">
                <div className="flex  items-center">
                    <span className="w-24 h-[2px] bg-[#1a1443]"></span>
                    <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            Experiences
          </span>
                    <span className="w-24 h-[2px] bg-[#1a1443]"></span>
                </div>
            </div>

            <div className="py-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
                    <div className="flex justify-center items-start">
                        <div className="w-full h-full">
                            <Lottie {...defaultOptions} />

                        </div>
                    </div>

                    <div>
                        <div className="flex flex-col gap-6">
                            {
                                experiences.map(experience => (
                                    <GlowCard key={experience.id} identifier={`experience-${experience.id}`}>
                                        <div className="p-3 relative">
                                            <img
                                                src={blurIcon}
                                                alt="Hero"
                                                width={1080}
                                                height={200}
                                                className="absolute bottom-0 opacity-80"
                                            />
                                            <div className="flex justify-center">
                                                <p className="text-xs sm:text-sm text-[#16f2b3]">
                                                    {experience.duration}
                                                </p>
                                            </div>
                                            <div className="flex items-center gap-x-8 px-3 py-5">
                                                <div
                                                    className="text-violet-500  transition-all duration-300 hover:scale-125">
                                                    <BsPersonWorkspace size={36}/>
                                                </div>
                                                <div>
                                                    <p className="text-base sm:text-xl mb-2 font-medium uppercase">
                                                        {experience.title}
                                                    </p>
                                                    <p className="text-base sm:text-md mb-2 font-medium ">
                                                        {experience.company}                                                   </p>
                                                   {experience.description.map((des)=>{
                                                    return <p className="text-sm sm:text-base">
                                                    {des}
                                                </p>
                                                   })} 
                                                </div>
                                            </div>
                                        </div>
                                    </GlowCard>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Experience;
