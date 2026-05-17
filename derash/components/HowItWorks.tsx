"use client";

import { motion } from "framer-motion";
import { Phone, Navigation, CheckCircle2, HeartPulse, ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Phone,
    title: "Patient Triggers SOS",
    description:
      "With one tap, the DerashCare app sends GPS location, personal medical history, and emergency type to the nearest dispatch center.",
    bg: "bg-brand-red",
  },
  {
    number: "02",
    icon: Navigation,
    title: "AI Routes the Response",
    description:
      "DerashCare's AI engine identifies the nearest available ambulance, calculates optimal routing, and books the best-fit hospital simultaneously.",
    bg: "bg-brand-red",
  },
  {
    number: "03",
    icon: HeartPulse,
    title: "Coordinated Care Begins",
    description:
      "The ambulance team, hospital ER, and emergency coordinators are all connected on one live dashboard with real-time patient data.",
    bg: "bg-brand-red",
  },
  {
    number: "04",
    icon: CheckCircle2,
    title: "Patient Arrives Ready",
    description:
      "The hospital receives pre-arrival patient data so specialists and resources are prepared before the ambulance arrives.",
    bg: "bg-brand-red",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-red-50/20 to-white dark:from-surface-950 dark:via-brand-red/3 dark:to-surface-950" />
      <div className="absolute inset-0 grid-pattern opacity-40 dark:opacity-20" />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-sm font-semibold text-brand-red uppercase tracking-widest mb-3">
            How DerashCare Works
          </p>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight">
            From crisis to care in{" "}
            <span className="text-gradient">under 5 minutes</span>
          </h2>
          <p className="mt-4 text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
            A seamless, automated emergency pipeline designed for the reality of Ethiopian healthcare infrastructure.
          </p>
        </motion.div>

        {/* Steps with arrow connectors */}
        <div className="relative">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0">
            {steps.map((step, i) => (
              <div key={step.number} className="relative flex flex-col lg:flex-row items-center">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{ delay: i * 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="flex flex-col items-center text-center group w-full lg:px-4"
                >
                  <div className="relative mb-6">
                    <div className={`w-16 h-16 rounded-2xl ${step.bg} flex items-center justify-center shadow-lg shadow-brand-red/30 group-hover:scale-110 transition-transform duration-300`}>
                      <step.icon className="w-7 h-7 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-white dark:bg-surface-800 border-2 border-gray-200 dark:border-white/10 flex items-center justify-center shadow-sm">
                      <span className="text-[9px] font-bold text-gray-500 dark:text-gray-400">{step.number}</span>
                    </div>
                  </div>

                  <h3 className="text-base font-bold text-gray-900 dark:text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed max-w-[220px]">
                    {step.description}
                  </p>
                </motion.div>

                {/* Arrow connector — desktop */}
                {i < steps.length - 1 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.12 + 0.3, duration: 0.4 }}
                    className="hidden lg:flex items-center justify-center flex-shrink-0 -mx-1 z-10"
                  >
                    <div className="flex items-center gap-0.5">
                      <div className="w-6 h-px bg-brand-red/40" />
                      <ArrowRight className="w-5 h-5 text-brand-red/60" />
                    </div>
                  </motion.div>
                )}

                {/* Down arrow — mobile */}
                {i < steps.length - 1 && (
                  <div className="lg:hidden flex justify-center mt-4 mb-2">
                    <div className="flex flex-col items-center gap-0.5">
                      <div className="w-px h-5 bg-brand-red/30" />
                      <ArrowRight className="w-4 h-4 text-brand-red/50 rotate-90" />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}