"use client";
import AboutSection from "@/app/components/about";
import Skills from "@/app/components/skills";
import { Projects } from "@/app/components/projects";
import { HowIbuild } from "./components/howibuild";
import { MyServices } from "./components/services";
import { Faq } from "./components/faq";
import { ContactForm } from "./components/contactform";
import Footer from "./components/footer";
import { useState } from "react";
import { Navbar } from "./components/navbar";
import { Testominal } from "./components/testominal";
import { AiChat } from "./components/aichatbot";
import { MyBlog } from "./components/myblogs";
import { CertificateCarousel } from "./components/certificate";
import Eduction from "./components/education";
import { Courses } from "./components/courses";
export default function Home() {
  const [filter, setFilter] = useState<string>("All");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="min-h-screen selection:bg-indigo-500/30 overflow-x-hidden ">
      <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <AboutSection />
      <Skills />
      <HowIbuild />
      <Projects />
      <MyServices />
      <Courses />
      <CertificateCarousel />
      <Eduction />
      <ContactForm />
      <Footer />
      {/* 
      <Testominal />
      <MyBlog />
      <Faq />
       <AiChat isNavbarOpen={isMenuOpen} />
       */}
    </div>
  );
}
