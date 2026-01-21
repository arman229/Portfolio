import { SERVICES } from "@/app/data/constant";
import { ServiceIcon } from "@/app/utils/helper";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export const MyServices = () => {
  return (
    <section id="services" className="py-24 bg-[#0a0f1e]">
      <div className="con tainer  max-w-7xl mx-auto mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold mb-4">Core Services</h2>
          <p className="text-slate-400">
            Comprehensive solutions tailored to your technical and business
            needs.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="glass-morphism p-8 rounded-3xl group hover:bg-slate-800/40 transition-all duration-500 hover:-translate-y-2"
            >
              <div className="mb-6 bg-slate-800 w-16 h-16 rounded-2xl flex items-center justify-center group-hover:bg-indigo-600/20 transition-colors">
                <ServiceIcon iconName={service.icon} />
              </div>
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                {service.description}
              </p>
              <Link
                href="mailto:armanashraf015@gmail.com"
                className="text-indigo-400 font-bold text-xs uppercase tracking-widest flex items-center group-hover:text-white transition-colors"
              >
                Book a Call{" "}
                <ArrowRight className="ml-2 w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
