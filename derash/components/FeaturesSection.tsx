"use client";

import { motion } from "framer-motion";
import {
  Ambulance,
  MapPin,
  Building2,
  ShieldCheck,
  BrainCircuit,
  Bell,
} from "lucide-react";

const features = [
  {
    icon: Ambulance,
    title: "Real-Time Ambulance Dispatch",
    description:
      "Instantly dispatch the nearest available ambulance with AI-optimized routing. Drivers receive live navigation avoiding traffic and road closures.",
  },
  {
    icon: MapPin,
    title: "Live GPS Tracking",
    description:
      "Patients and families track ambulance location in real time. Emergency teams coordinate seamlessly with live position updates.",
  },
  {
    icon: Bell,
    title: "Emergency SOS Requests",
    description:
      "One-tap SOS sends your GPS location, medical history, and vital context to the nearest responders instantly.",
  },
  {
    icon: Building2,
    title: "Hospital Availability Tracking",
    description:
      "Live dashboard of hospital bed availability, ICU capacity, and specialist presence across the Derash network.",
  },
  {
    icon: BrainCircuit,
    title: "AI-Assisted Emergency Routing",
    description:
      "Machine learning models analyze traffic, road conditions, hospital capacity, and patient severity to recommend the optimal care path.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Patient Data",
    description:
      "End-to-end encrypted patient records, HIPAA-compliant storage, and role-based access control protect sensitive health information.",
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-white dark:bg-surface-950" />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold text-brand-red uppercase tracking-widest mb-3">
            Platform Capabilities
          </p>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight">
            Everything emergency care demands
          </h2>
          <p className="mt-4 text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
            Built for the speed and complexity of real-world emergencies in Ethiopia, with the reliability of enterprise infrastructure.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.07, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="group relative rounded-2xl p-6 border border-gray-100 dark:border-white/5 bg-white dark:bg-surface-900 hover:border-brand-red/20 hover:shadow-xl hover:shadow-brand-red/5 hover:-translate-y-1 transition-all duration-300 cursor-default"
            >
              <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-brand-red/10 dark:bg-brand-red/15 border border-brand-red/20 mb-4 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-5 h-5 text-brand-red" />
              </div>

              <h3 className="text-base font-bold text-gray-900 dark:text-white mb-2 leading-snug">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                {feature.description}
              </p>

              <div className="absolute bottom-0 left-6 right-6 h-0.5 rounded-full bg-brand-red/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
