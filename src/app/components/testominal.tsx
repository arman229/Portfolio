import { TESTIMONIALS } from "../data/constant";
import Image from "next/image";

export const Testominal = () => {
  return (
    <section className="py-24">
      <div className="container  max-w-7xl mx-auto mx-auto px-6">
        <div className="grid lg:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="glass-morphism p-8 rounded-3xl flex flex-col"
            >
              <div className="mb-6 flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-4 h-4 text-yellow-500 fill-current">
                    ★
                  </div>
                ))}
              </div>
              <p className="text-slate-300 italic mb-8 flex-1 leading-relaxed">
                &quot;{t.content}&quot;
              </p>
              {/* <div className="flex items-center space-x-4">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-12 h-12 rounded-full border border-indigo-500/20"
                />
                <div>
                  <div className="font-bold text-sm">{t.name}</div>
                  <div className="text-slate-500 text-xs">{t.role}</div>
                </div>
              </div> */}
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 relative rounded-full border border-indigo-500/20 overflow-hidden">
                  <Image
                    src={t.avatar}
                    alt={t.name}
                    fill
                    className="object-cover"
                    sizes="48px"
                  />
                </div>
                <div>
                  <div className="font-bold text-sm">{t.name}</div>
                  <div className="text-slate-500 text-xs">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
