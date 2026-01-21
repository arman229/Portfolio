import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Github, Linkedin, LinkIcon, Twitter } from "lucide-react";

function Footer() {
  const [scrolled, setScrolled] = useState(false);
  const navbarRef = useRef<HTMLDivElement>(null); // Specify the type explicitly

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        navbarRef.current &&
        !navbarRef.current.contains(event.target as Node)
      ) {
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleClick =
    (sectionId: string) =>
    (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
      e.preventDefault(); // Prevent default Link behavior
      scrollToSection(sectionId);
    };

  return (
    <footer className="py-12 border-t border-slate-800 mt-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-2xl font-bold font-serif tracking-tighter">
            Arman<span className="text-indigo-500">.</span>DEV
          </div>

          <div className="flex space-x-8 text-sm text-slate-500">
            <Link
              href="/"
              onClick={handleClick("about")}
              className="hover:text-white transition-colors"
            >
              Privacy
            </Link>
            <Link
              href="/"
              onClick={handleClick("about")}
              className="hover:text-white transition-colors"
            >
              Terms
            </Link>
            <Link
              href="/"
              onClick={handleClick("about")}
              className="hover:text-white transition-colors"
            >
              Colophon
            </Link>
          </div>

          <div className="flex space-x-4">
            <Link
              href="https://github.com/arman229"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-indigo-600 transition-all border border-slate-700"
            >
              <Github className="w-5 h-5" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/arman-ashraf/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-indigo-600 transition-all border border-slate-700"
            >
              <Linkedin className="w-5 h-5" />
            </Link>
          </div>
        </div>
        <div className="text-center mt-12 text-slate-600 text-xs">
          © {new Date().getFullYear()} Arman Dev Portfolio.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
