import { personalData } from "@/app/data/personaldata";
import Image from "next/image";
function AboutSection() {
  return (
    <div id="about" className="   my-12 lg:my-16 relative md:px-8">
      <div className="hidden lg:flex flex-col items-center absolute  top-16 -right-8">
        <span className="bg-[#1a1443] w-fit text-white rotate-90 p-2 px-5 text-xl rounded-md">
          ABOUT ME
        </span>
        <span className="h-36 w-[2px] bg-[#1a1443]"></span>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 ">
        <div className="order-2 lg:order-1">
          <p className="font-medium mb-5 text-[#16f2b3] text-xl uppercase">
            🧠 Who I am?
          </p>
          <p className="text-gray-200 text-sm lg:text-lg">
            {/* I’m Arman Muhammad Ashraf, a Backend AI Engineer and Agentic AI
            Specialist passionate about building autonomous, intelligent systems
            that solve real-world problems. With a strong foundation in
            mathematics and hands-on expertise in Python, FastAPI, and Next.js,
            I design and develop scalable APIs, AI-powered agents, and RAG
            pipelines that merge cutting-edge AI capabilities with robust
            backend architectures. I thrive at the intersection of AI innovation
            and software engineering precision, turning concepts into
            production-ready products that deliver impact.{" "} */}

            I’m Arman Ashraf, a
             Backend AI Engineer with over two years of experience in FastAPI, multi-agent pipelines, and RAG systems. Proven ability to design and deploy efficient, production-ready AI solutions that automate complex workflows. Successfully founded and built an Agentic AI platform that produces YouTube Shorts from simple story prompts, fully automating the content creation pipeline. Skilled in building scalable APIs and integrating AI agents to power applications for e-commerce, chatbots, and video automation.
         
          </p>
        </div>
        <div className="flex justify-center order-1 lg:order-2">
          <Image
            src={personalData.profile}
            width={280}
            height={280}
            alt="Arman"
            className="rounded-lg transition-all duration-1000 grayscale  hover:scale-110 cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
