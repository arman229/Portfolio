"use client";
import { X, Menu } from "lucide-react";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";

export const Navbar = ({
  isMenuOpen,
  setIsMenuOpen,
}: {
  isMenuOpen: boolean;
  setIsMenuOpen: (o: boolean) => void;
}) => {
  const navbarRef = useRef<HTMLDivElement>(null); // Specify the type explicitly

  const [scrolled, setScrolled] = useState(false);

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
        // setMenuOpen(false);
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
      // toggleMenu(); // Close menu after scrolling
    }
  };

  const handleClick =
    (sectionId: string) =>
    (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
      e.preventDefault(); // Prevent default Link behavior
      scrollToSection(sectionId);
    };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMenuOpen]);

  const navLinks = [
    { name: "About", href: "about" },
    { name: "Services", href: "services" },
    { name: "Projects", href: "projects" },
    { name: "Certificates", href: "certificates" },
  ];

  return (
    <nav
      className={`  fixed top-0 left-0 right-0 z-[100] transition-all duration-500 cubic-bezier(0.4, 0, 0.2, 1) ${
        scrolled || isMenuOpen
          ? "glass-morphism py-3 shadow-xl"
          : " glass-morphism  bg-transparent py-3"
      }`}
    >
      <div className="max-w-7xl mx-auto mx-auto px-6 flex justify-between items-center">
        <a
          href="/"
          className="text-2xl font-bold font-serif tracking-tighter hover:scale-105 transition-transform z-[110]"
        >
          ARMAN<span className="text-indigo-500">.</span>DEV
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={handleClick(link.href)}
              className="text-sm font-medium text-slate-400 hover:text-white transition-all hover:translate-y-[-2px]"
            >
              {link.name}
            </Link>
          ))}

          <Link
            href="mailto:armanashraf015@gmail.com"
            target="_blank"
            rel="noreferrer"
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-full text-sm font-semibold transition-all shadow-lg shadow-indigo-500/20 active:scale-95"
          >
            Hire Me
          </Link>
        </div>

        <button
          className="md:hidden text-white z-[110] p-2 rounded-lg bg-white/5 active:scale-90 transition-transform"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? (
            <X className="w-6 h-6 transition-transform rotate-90" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      <div
        className={`fixed inset-0 w-full h-screen bg-[#0a0f1e]/95 backdrop-blur-xl z-[105] transition-all duration-500 cubic-bezier(0.4, 0, 0.2, 1) transform ${
          isMenuOpen
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-6 text-center px-6 overflow-y-auto">
          {navLinks.map((link, idx) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={(e) => {
                handleClick(link.href)(e);
                setIsMenuOpen(false);
              }}
              className={`text-3xl font-bold tracking-tight transition-all duration-500 hover:text-indigo-400 ${
                isMenuOpen
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
              style={{ transitionDelay: `${idx * 50}ms` }}
            >
              {link.name}
            </Link>
          ))}
          <div
            className={`mt-4 transition-all duration-500 delay-300 ${
              isMenuOpen
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <Link
              href="mailto:armanashraf015@gmail.com"
              target="_blank"
              rel="noreferrer"
              onClick={() => setIsMenuOpen(false)}
              className="inline-block bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-12 py-4 rounded-full text-xl font-bold shadow-xl shadow-indigo-500/30 active:scale-95 transition-all"
            >
              Hire Me
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
