import AboutSection from "./components/about";
import Skills from "./components/skills";
import Experience from "./components/experience";
import Projects from "./components/projects";
import Eduction from "./components/education";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer";
import MyCertificate from "./components/certificate";

function App() {
    return (
        <div  className="text-white">
            <Navbar/>
            <div className={" px-2 container mx-auto  "}
            >
           
                <AboutSection/>
                <Skills/>
                <Experience/>
                <Projects/>
                <MyCertificate/>
                <Eduction/>
               

            </div>
            <Footer/>

        </div>
    );
}

export default App;
