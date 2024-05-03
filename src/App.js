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
        <div>
            <Navbar/>
            <div className={"container mx-auto"}
            >
                <MyCertificate/>
                <AboutSection/>
                <Skills/>
                <Experience/>
                <Projects/>
                <Eduction/>
               

            </div>
            <Footer/>

        </div>
    );
}

export default App;
