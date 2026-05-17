"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, MapPin, Ambulance, Heart, Clock, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  }),
};

const cards = [
  {
    id: "sos",
    icon: MapPin,
    label: "SOS Activated",
    sub: "Meskel Square, Addis",
    accent: "#E8182A",
    bg: "#fff1f2",
    iconBg: "#E8182A",
    delay: 0,
  },
  {
    id: "dispatch",
    icon: Ambulance,
    label: "Dispatching AMB-07",
    sub: "ETA 4 minutes away",
    accent: "#2563eb",
    bg: "#eff6ff",
    iconBg: "#2563eb",
    delay: 0.15,
  },
  {
    id: "hospital",
    icon: Heart,
    label: "St. Gabriel Ready",
    sub: "ER team notified",
    accent: "#16a34a",
    bg: "#f0fdf4",
    iconBg: "#16a34a",
    delay: 0.3,
  },
  {
    id: "time",
    icon: Clock,
    label: "Response Time",
    sub: "4.2 min average",
    accent: "#d97706",
    bg: "#fffbeb",
    iconBg: "#d97706",
    delay: 0.45,
  },
];

export function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-start overflow-hidden pt-16"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-red-50/15 to-white dark:from-surface-950 dark:via-brand-red/4 dark:to-surface-950" />
      <div className="absolute inset-0 grid-pattern opacity-40 dark:opacity-15" />
      <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full bg-brand-red/5 dark:bg-brand-red/10 blur-[130px] pointer-events-none -translate-x-1/3 -translate-y-1/4" />

      <motion.div style={{ opacity }} className="relative z-10 w-full pt-2 pb-16">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

            {/* LEFT — text */}
            <div className="flex flex-col items-start">

              {/* Amharic at top */}
              <motion.div custom={0} variants={fadeUp} initial="hidden" animate="visible" className="mb-2">
                <span className="text-3xl font-bold text-brand-red">ደራሽ</span>
              </motion.div>

              <motion.h1
                custom={1}
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                className="text-4xl sm:text-[2.75rem] lg:text-5xl font-extrabold leading-[1.1] tracking-tight text-gray-900 dark:text-white mb-4"
              >
                Emergency care,
                <br />
                <span className="text-gradient">when seconds</span>
                <br />
                matter most
              </motion.h1>

              <motion.p
                custom={2}
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                className="text-base text-gray-500 dark:text-gray-400 max-w-[420px] leading-relaxed mb-7"
              >
                DerashCare connects patients, hospitals, ambulances, and emergency responders across Ethiopia in real time.{" "}
                <span className="text-gray-700 dark:text-gray-300 font-medium">
                  Someone who is there for you in your hardest times.
                </span>
              </motion.p>

              <motion.div
                custom={3}
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                className="flex flex-col sm:flex-row gap-3"
              >
                <Button size="lg" className="group">
                  Get Early Access
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="#contact">Contact Us</a>
                </Button>
              </motion.div>
            </div>

            {/* RIGHT — Google Stitch-style illustration */}
            <motion.div
              custom={4}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="relative flex items-center justify-center mt-8 lg:mt-0"
            >
              {/* Soft background blob */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-red-50/80 via-white to-blue-50/60 dark:from-brand-red/5 dark:via-surface-900 dark:to-blue-900/10 pointer-events-none" />

              {/* Outer card */}
              <div className="relative w-full max-w-[420px] rounded-3xl p-6 bg-white/70 dark:bg-surface-900/60 backdrop-blur border border-gray-100 dark:border-white/8 shadow-xl shadow-gray-200/60 dark:shadow-black/30">

                {/* Header row */}
                <div className="flex items-center justify-between mb-5">
                  <div>
                    <p className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-widest">Live Dashboard</p>
                    <p className="text-base font-bold text-gray-800 dark:text-white mt-0.5">Emergency Response</p>
                  </div>
                  <div className="flex items-center gap-1.5 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-700/30 rounded-full px-3 py-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-[11px] font-semibold text-green-600 dark:text-green-400">Active</span>
                  </div>
                </div>

                {/* 2×2 card grid */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                  {cards.map((card) => (
                    <motion.div
                      key={card.id}
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 + card.delay, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                      className="rounded-2xl p-4 border transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md cursor-default"
                      style={{
                        backgroundColor: card.bg,
                        borderColor: card.accent + "22",
                      }}
                    >
                      <div
                        className="w-9 h-9 rounded-xl flex items-center justify-center mb-3 shadow-sm"
                        style={{ backgroundColor: card.iconBg }}
                      >
                        <card.icon className="w-5 h-5 text-white" strokeWidth={2} />
                      </div>
                      <p className="text-xs font-bold text-gray-800 leading-snug">{card.label}</p>
                      <p className="text-[10px] text-gray-500 mt-0.5">{card.sub}</p>
                    </motion.div>
                  ))}
                </div>

                {/* Bottom map card */}
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.1, duration: 0.5 }}
                  className="rounded-2xl border border-gray-100 dark:border-white/8 bg-gray-50 dark:bg-surface-800 overflow-hidden"
                >
                  {/* Map strip */}
                  <div className="h-24 relative bg-[#e8ecf0]">
                    <svg viewBox="0 0 380 96" className="w-full h-full" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
                      <rect width="380" height="96" fill="#e8ecf0" />
                      <ellipse cx="190" cy="8" rx="180" ry="35" fill="#d4e8c2" opacity="0.65" />
                      <path d="M 0 50 Q 95 38 190 50 T 380 44" stroke="#fff" strokeWidth="8" fill="none" />
                      <path d="M 0 50 Q 95 38 190 50 T 380 44" stroke="#e8b84b" strokeWidth="2.5" fill="none" opacity="0.7" />
                      <path d="M 160 0 L 164 96" stroke="#fff" strokeWidth="6" />
                      <path d="M 160 0 L 164 96" stroke="#e8b84b" strokeWidth="2" opacity="0.6" />
                      <path d="M 260 0 L 256 96" stroke="#fff" strokeWidth="5" />
                      <circle cx="163" cy="50" r="12" fill="#dde0e6" stroke="#fff" strokeWidth="3.5" />
                      <circle cx="163" cy="50" r="5" fill="#cdd3d9" />
                      <path d="M 295 76 Q 255 60 215 52" stroke="#E8182A" strokeWidth="3" fill="none" strokeDasharray="8 4" opacity="0.85">
                        <animate attributeName="stroke-dashoffset" from="0" to="-120" dur="1.8s" repeatCount="indefinite" />
                      </path>
                    </svg>

                    {/* SOS pin */}
                    <div className="absolute top-[46%] left-[42%] -translate-x-1/2 -translate-y-1/2">
                      <div className="relative w-6 h-6">
                        <div className="absolute inset-0 rounded-full bg-brand-red animate-ping opacity-35" />
                        <div className="relative w-6 h-6 rounded-full bg-brand-red shadow-lg flex items-center justify-center">
                          <MapPin className="w-3.5 h-3.5 text-white" />
                        </div>
                      </div>
                    </div>

                    {/* Ambulance pin */}
                    <motion.div
                      animate={{ x: [0, -18, -36, -54], y: [0, -6, -12, -18] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "linear", repeatType: "loop" }}
                      className="absolute top-[72%] left-[76%]"
                    >
                      <div className="w-7 h-7 rounded-full bg-blue-600 flex items-center justify-center shadow-lg">
                        <Ambulance className="w-3.5 h-3.5 text-white" />
                      </div>
                    </motion.div>

                    {/* Hospital pin */}
                    <div className="absolute top-[28%] left-[58%]">
                      <div className="w-6 h-6 rounded-lg bg-[#16a34a] flex items-center justify-center shadow-md">
                        <span className="text-white text-[9px] font-extrabold">H</span>
                      </div>
                    </div>
                  </div>

                  {/* Info row */}
                  <div className="flex items-center justify-between px-4 py-3">
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-green-600" />
                      <span className="text-xs font-semibold text-gray-700 dark:text-gray-300">Route optimized</span>
                    </div>
                    <span className="text-xs font-bold text-brand-red">ETA 4 min</span>
                  </div>
                </motion.div>

              </div>
            </motion.div>

          </div>
        </div>
      </motion.div>
    </section>
  );
}