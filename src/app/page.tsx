 

import AboutSection from "@/app/components/about";
import Skills from "@/app/components/skills";
import Experience from "@/app/components/experience";
import Projects from "@/app/components/projects";
import MyCertificate from "@/app/components/certificate";
import Eduction from "@/app/components/education";
export default function Home() {
  return (
    <div className={" px-2 container mx-auto  "}
            >
           
                <AboutSection/>
                <Skills/>
             <Experience/>
                   <Projects/>
                   <MyCertificate/>
                 <Eduction/>
               

            </div>
  );
}
