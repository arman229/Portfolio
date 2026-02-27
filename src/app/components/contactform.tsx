"use client";
import { Mail, Send, Linkedin } from "lucide-react";
import Link from "next/link";

export const ContactForm = () => {
  return (
    <section id="contact" className="py-24 bg-[#0a0f1e]">
      
        <div className="max-w-6xl mx-auto glass-morphism rounded-[40px] overflow-hidden">
          
          <div className="grid lg:grid-cols-2">
            <div className="p-4 py-12 md:p-12 lg:p-20 bg-gradient-premium">
              <h2 className="text-5xl font-bold mb-8">
              Let&#39;s build <br />                <span className="text-indigo-400">something epic</span>.
              </h2>
              <p className="text-slate-400 mb-12 max-w-sm">
                Ready to start your next big project or just want to chat about
                AI? I&#39;m always open to new ideas and collaborations.
              </p>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-2xl bg-slate-800 flex items-center justify-center text-indigo-400">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">
                      Email Me
                    </div>
                    <div></div>

                    <Link
                      className="text-lg font-medium text-white hover:underline transition-all"
                      href="mailto:armanashraf015@gmail.com"
                    >
                      armanashraf015@gmail.com
                    </Link>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-2xl bg-slate-800 flex items-center justify-center text-purple-400">
                    <Linkedin className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">
                      Linkedin
                    </div>
                    <Link
                      className="text-lg font-medium text-white hover:underline transition-all"
                      href="https://www.linkedin.com/in/arman-ashraf/"
                      target="_blank"
                    >
                      Arman Ashraf
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className=" p-4 py-12 md:p-12 lg:p-20 bg-slate-900/40">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-500 uppercase">
                      Full Name
                    </label>
                    <input
                      className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-4 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
                      placeholder="Arman Ashraf"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-500 uppercase">
                      Email Address
                    </label>
                    <input
                      className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-4 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
                      placeholder="arman@example.com"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-500 uppercase">
                    Your Message
                  </label>
                  <textarea
                    rows={5}
                    className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-4 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>
                <button className="w-full py-5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl transition-all shadow-xl shadow-indigo-500/20 flex items-center justify-center space-x-3">
                  <span>Send Message</span>
                  <Send className="w-5 h-5" />
                </button>
              </form>
            </div>
          </div>
        </div>
      
    </section>
  );
};
