"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { User, Building2, Ambulance, ShieldAlert, Check } from "lucide-react";

const personas = [
  {
    id: "patient",
    icon: User,
    label: "Patients & Families",
    amharic: "ታካሚዎች",
    headline: "Peace of mind in every emergency",
    description:
      "Whether you're the one in crisis or watching someone you love go through it, Derash puts control back in your hands. One tap is all it takes.",
    benefits: [
      "One-tap SOS with automatic GPS sharing",
      "Real-time ambulance tracking on your phone",
      "Pre-saved medical history sent ahead",
      "Family notification system",
      "Post-emergency care follow-up",
    ],
    color: "brand-red",
    gradient: "from-brand-red/20 to-orange-500/10",
    accent: "bg-brand-red",
  },
  {
    id: "hospital",
    icon: Building2,
    label: "Hospitals & Clinics",
    amharic: "ሆስፒታሎች",
    headline: "Prepare before they arrive",
    description:
      "Receive structured patient data minutes before arrival. Coordinate teams, reserve resources, and reduce ER chaos with Derash's pre-arrival intelligence.",
    benefits: [
      "Live incoming patient dashboard",
      "Pre-arrival patient vitals & history",
      "Bed & resource management tools",
      "Automated triage prioritization",
      "Multi-hospital coordination network",
    ],
    color: "blue-500",
    gradient: "from-blue-500/20 to-cyan-500/10",
    accent: "bg-blue-500",
  },
  {
    id: "ambulance",
    icon: Ambulance,
    label: "Ambulance Teams",
    amharic: "አምቡላንስ",
    headline: "Navigate smarter, respond faster",
    description:
      "Derash's driver app gives ambulance teams everything they need: optimized routes, patient history, hospital readiness, and live coordination tools.",
    benefits: [
      "AI-optimized turn-by-turn routing",
      "Patient data before you arrive on scene",
      "Hospital readiness status updates",
      "Incident reporting & documentation",
      "Fleet management for dispatch centers",
    ],
    color: "violet-500",
    gradient: "from-violet-500/20 to-purple-500/10",
    accent: "bg-violet-500",
  },
  {
    id: "responder",
    icon: ShieldAlert,
    label: "Emergency Responders",
    amharic: "ምላሽ ሰጪዎች",
    headline: "Coordinate the whole response",
    description:
      "Dispatchers and first responders get a full operational picture: active incidents, resource availability, and communication tools in one unified platform.",
    benefits: [
      "Real-time incident management board",
      "Multi-agency communication channels",
      "Resource and availability tracking",
      "Escalation protocols & automation",
      "Analytics & after-action reports",
    ],
    color: "brand-green-light",
    gradient: "from-brand-green/20 to-teal-500/10",
    accent: "bg-brand-green",
  },
];

export function ForEveryoneSection() {
  const [active, setActive] = useState("patient");
  const current = personas.find((p) => p.id === active)!;

  return (
    <section id="for-everyone" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gray-50/60 dark:bg-surface-900/50" />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-sm font-semibold text-brand-red uppercase tracking-widest mb-3">
            For Every Stakeholder
          </p>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight">
            Built for the whole ecosystem
          </h2>
          <p className="mt-4 text-lg text-gray-500 dark:text-gray-400 max-w-xl mx-auto">
            Derash serves every person in the emergency chain — from the patient to the first responder.
          </p>
        </motion.div>

        {/* Tab buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {personas.map((p) => (
            <button
              key={p.id}
              onClick={() => setActive(p.id)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200
                ${active === p.id
                  ? "bg-brand-red text-white shadow-lg shadow-brand-red/30"
                  : "bg-white dark:bg-surface-900 text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-white/10 hover:border-gray-300 dark:hover:border-white/20"
                }`}
            >
              <p.icon className="w-4 h-4" />
              {p.label}
            </button>
          ))}
        </div>

        {/* Content panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center max-w-5xl mx-auto"
          >
            {/* Text side */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-12 h-12 rounded-2xl ${current.accent} flex items-center justify-center shadow-lg`}>
                  <current.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-sm text-brand-red font-semibold">{current.amharic}</div>
                  <div className="font-bold text-gray-900 dark:text-white">{current.label}</div>
                </div>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white mb-3">
                {current.headline}
              </h3>
              <p className="text-gray-500 dark:text-gray-400 leading-relaxed mb-6">
                {current.description}
              </p>

              <ul className="space-y-3">
                {current.benefits.map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <div className={`flex-shrink-0 w-5 h-5 rounded-full ${current.accent} flex items-center justify-center mt-0.5`}>
                      <Check className="w-3 h-3 text-white" strokeWidth={3} />
                    </div>
                    <span className="text-sm text-gray-600 dark:text-gray-300">{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Visual side */}
            <div className={`relative rounded-3xl bg-gradient-to-br ${current.gradient} border border-white dark:border-white/5 p-8 overflow-hidden`}>
              <div className="absolute inset-0 grid-pattern opacity-30" />
              <div className="relative">
                <div className={`w-20 h-20 rounded-3xl ${current.accent}/20 border border-white/30 flex items-center justify-center mx-auto mb-6`}>
                  <current.icon className={`w-10 h-10 text-${current.color}`} />
                </div>

                {/* Fake UI elements */}
                <div className="space-y-3">
                  {current.benefits.slice(0, 3).map((b, i) => (
                    <motion.div
                      key={b}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-center gap-3 bg-white/70 dark:bg-black/30 backdrop-blur rounded-xl px-4 py-3 border border-white/50 dark:border-white/10"
                    >
                      <div className={`w-2 h-2 rounded-full ${current.accent} flex-shrink-0`} />
                      <span className="text-xs font-medium text-gray-700 dark:text-gray-300">{b}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
