"use client";
import {
  Calendar,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Award,
} from "lucide-react";
import { useState, useEffect } from "react";
import { CERTIFICATES } from "../data/constant";

export const CertificateCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleItems, setVisibleItems] = useState(1);

  useEffect(() => {
    const updateVisibleItems = () => {
      if (window.innerWidth >= 1024) setVisibleItems(3);
      else if (window.innerWidth >= 768) setVisibleItems(2);
      else setVisibleItems(1);
    };
    updateVisibleItems();
    window.addEventListener("resize", updateVisibleItems);
    return () => window.removeEventListener("resize", updateVisibleItems);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex(
        (prev) => (prev + 1) % (CERTIFICATES.length - (visibleItems - 1))
      );
    }, 5000);
    return () => clearInterval(timer);
  }, [visibleItems]);

  const nextSlide = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentIndex(
      (prev) => (prev + 1) % (CERTIFICATES.length - (visibleItems - 1))
    );
  };

  const prevSlide = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentIndex((prev) =>
      prev - 1 < 0 ? CERTIFICATES.length - visibleItems : prev - 1
    );
  };

  return (
    <section id="certificates" className="py-24 overflow-hidden bg-[#0a0f1e]">
      <div className="container mx-auto px-6  max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-12 sm:mb-16 gap-4">
          <div className="flex flex-col">
            <div className="flex items-center space-x-4">
              <Award className="w-10 h-10 sm:w-12 sm:h-12 text-indigo-400" />
              <h2 className="text-4xl sm:text-5xl font-bold font-serif tracking-tight">
                Certifications
              </h2>
            </div>
          </div>
         
        </div>
        <div className="relative group/carousel px-10">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-700 cubic-bezier(0.4, 0, 0.2, 1)"
              style={{
                transform: `translateX(-${
                  currentIndex * (100 / visibleItems)
                }%)`,
              }}
            >
              {CERTIFICATES.map((cert) => (
                <div
                  key={cert.id}
                  className="w-full flex-shrink-0 px-2 sm:px-4"
                  style={{ width: `${100 / visibleItems}%` }}
                >
                  <div className="glass-morphism p-6 sm:p-8 rounded-3xl h-full flex flex-col justify-between hover:bg-slate-800/40 transition-all border border-white/5 relative group/card overflow-hidden min-h-[250px] sm:min-h-[280px]">
                    <div className="relative z-10">
                      <div className="text-indigo-400 font-bold text-[10px] sm:text-xs uppercase tracking-widest mb-3 flex items-center gap-2">
                        <Calendar className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                        {cert.date}
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold mb-2 group-hover/card:text-indigo-300 transition-colors line-clamp-2 leading-snug">
                        {cert.title}
                      </h3>
                      <p className="text-slate-500 font-medium text-sm sm:text-base">
                        {cert.issuer}
                      </p>
                    </div>

                    <div className="relative z-10 mt-auto pt-6 border-t border-white/5 flex items-center justify-between">
                      <a
                        href={cert.url}
                        className="inline-flex items-center text-xs sm:text-sm font-bold text-slate-300 hover:text-white transition-colors group/link"
                      >
                        Verify Certificate
                        <ArrowRight className="ml-2 w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform group-hover/link:translate-x-1" />
                      </a>
                    </div>

                    <div className="absolute -bottom-10 -right-10 w-24 h-24 sm:w-32 sm:h-32 bg-indigo-500/5 rounded-full blur-3xl group-hover/card:bg-indigo-500/10 transition-colors" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons - Styled Blue Chevrons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 text-indigo-500 hover:text-indigo-400 transition-colors p-2 z-20 group/btn"
            aria-label="Previous Certificate"
          >
            <ChevronLeft className="w-8 h-8 sm:w-10 sm:h-10 transform group-hover/btn:scale-110" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 text-indigo-500 hover:text-indigo-400 transition-colors p-2 z-20 group/btn"
            aria-label="Next Certificate"
          >
            <ChevronRight className="w-8 h-8 sm:w-10 sm:h-10 transform group-hover/btn:scale-110" />
          </button>

          {/* Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({
              length: Math.max(0, CERTIFICATES.length - (visibleItems - 1)),
            }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`h-1.5 transition-all duration-500 rounded-full ${
                  currentIndex === i
                    ? "w-10 bg-indigo-500"
                    : "w-2.5 bg-slate-800"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>{" "}
      </div>
    </section>
  );
};
