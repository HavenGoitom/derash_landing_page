"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, Star, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    quote:
      "Derash dispatched an ambulance in under 3 minutes when my father had a stroke. By the time we reached Black Lion Hospital, the team was already ready for him. I truly believe it saved his life.",
    name: "Tigist Haile",
    role: "Family Member, Addis Ababa",
    avatar: "TH",
    rating: 5,
  },
  {
    quote:
      "As an ER director, Derash transformed our intake process. Pre-arrival patient data means we've cut critical care setup time by 40%. It's the infrastructure Ethiopian healthcare has always needed.",
    name: "Dr. Yonas Bekele",
    role: "ER Director, St. Paul's Hospital",
    avatar: "YB",
    rating: 5,
  },
  {
    quote:
      "The routing is unlike anything I've used before. Derash finds routes I wouldn't think of, and the hospital knows I'm coming. My job is faster and patients have better outcomes.",
    name: "Mulugeta Tesfaye",
    role: "Senior Ambulance Driver, Addis Ababa",
    avatar: "MT",
    rating: 5,
  },
  {
    quote:
      "Coordinating 12 ambulances across the city used to be chaos. Now our dispatch center has a live view of everything. Response SLAs are up 60% in just 6 months.",
    name: "Hirut Alemu",
    role: "Dispatch Coordinator, EMS Addis",
    avatar: "HA",
    rating: 5,
  },
  {
    quote:
      "I pressed the SOS button when I witnessed a car accident. Within seconds I had confirmation that help was on the way. That confidence in a scary moment is priceless.",
    name: "Dawit Girma",
    role: "Bystander, Bole, Addis Ababa",
    avatar: "DG",
    rating: 5,
  },
  {
    quote:
      "Derash's patient data integration with our hospital system means no duplicate data entry, no miscommunication. Clean, fast, and genuinely life-saving technology.",
    name: "Dr. Selamawit Tadesse",
    role: "Head of Cardiology, Tikur Anbessa",
    avatar: "ST",
    rating: 5,
  },
];

export function TestimonialsSection() {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? testimonials : testimonials.slice(0, 3);

  return (
    <section id="testimonials" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-white dark:bg-surface-950" />
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-red/30 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold text-brand-red uppercase tracking-widest mb-3">
            Real Stories
          </p>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight">
            Voices from the field
          </h2>
          <p className="mt-4 text-lg text-gray-500 dark:text-gray-400 max-w-xl mx-auto">
            From patients to doctors to dispatchers — here's what Derash means to the people who use it every day.
          </p>
        </motion.div>

        {/* 3-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence>
            {visible.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ delay: i * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="group relative bg-white dark:bg-surface-900 rounded-2xl p-6 border border-gray-100 dark:border-white/5 hover:border-brand-red/20 hover:shadow-xl hover:shadow-brand-red/5 hover:-translate-y-1 transition-all duration-300"
              >
                <Quote className="w-8 h-8 text-gray-100 dark:text-white/5 absolute top-5 right-5" />

                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: t.rating }).map((_, s) => (
                    <Star key={s} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-5">
                  "{t.quote}"
                </p>

                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-brand-red/10 dark:bg-brand-red/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-xs font-bold text-brand-red">{t.avatar}</span>
                  </div>
                  <div>
                    <div className="text-sm font-bold text-gray-900 dark:text-white">{t.name}</div>
                    <div className="text-xs text-gray-400 dark:text-gray-500">{t.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* See more button */}
        {!showAll && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-10 flex justify-center"
          >
            <Button
              variant="outline"
              size="lg"
              onClick={() => setShowAll(true)}
              className="gap-2 group"
            >
              See More Stories
              <ChevronDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
            </Button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
