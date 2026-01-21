import { PROCESS_STEPS } from "../data/constant";
import { ServiceIcon } from "../utils/helper";

export const HowIbuild = () => {
  return (
    <>
      <section className="py-24 bg-[#0a0f1e] ">
        <div className="container mx-auto px-6  max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">How I Build</h2>
            <p className="text-slate-500 text-lg">
              A systematic approach to solving complex problems.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {PROCESS_STEPS.map((step, idx) => (
              <div
                key={step.id}
                className="relative glass-morphism p-8 rounded-3xl group overflow-hidden hover:bg-white/5 transition-all"
              >
                <div className="absolute top-0 right-0 p-4 text-4xl font-black text-white/5 group-hover:text-white/10 transition-colors">
                  0{idx + 1}
                </div>
                <div className="mb-6 text-indigo-400">
                  <ServiceIcon iconName={step.icon} />
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-slate-400 text-xs leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

  