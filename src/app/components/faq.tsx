'use client'
import { ChevronDown } from "lucide-react";
import { FAQS } from "../data/constant";

export const Faq =()=>{
    return (
        
 
      <section id="faq" className="py-24 bg-[#0a0f1e]">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">Expertise & FAQ</h2>
          <p className="text-slate-500 text-lg">Common inquiries about my work and process.</p>
        </div>
        <div className="max-w-3xl mx-auto space-y-4">
          {FAQS.map((faq, i) => (
            <div key={i} className="glass-morphism rounded-2xl overflow-hidden group">
              <button 
                className="w-full p-6 text-left flex justify-between items-center hover:bg-white/5 transition-colors"
                onClick={(e) => {
                  const content = e.currentTarget.nextElementSibling as HTMLElement;
                  content.classList.toggle('hidden');
                  e.currentTarget.querySelector('svg')?.classList.toggle('rotate-180');
                }}
              >
                <span className="font-bold text-lg sm:text-xl">{faq.question}</span>
                <ChevronDown className="w-5 h-5 text-indigo-500 transition-transform" />
              </button>
              <div className="p-6 pt-0 text-slate-400 text-sm sm:text-base hidden animate-in slide-in-from-top-2 duration-300">
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    )
}