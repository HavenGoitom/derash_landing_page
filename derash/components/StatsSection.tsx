"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { TrendingUp, Clock, Building2, Users } from "lucide-react";

const stats = [
  {
    icon: Clock,
    value: 4.2,
    suffix: "min",
    label: "Average Response Time",
    sub: "vs 18 min national avg",
  },
  {
    icon: Building2,
    value: 120,
    suffix: "+",
    label: "Partner Hospitals",
    sub: "Across 8 regions",
  },
  {
    icon: Users,
    value: 50000,
    suffix: "+",
    label: "Lives Impacted",
    sub: "Since launch in 2023",
  },
  {
    icon: TrendingUp,
    value: 99.9,
    suffix: "%",
    label: "Platform Uptime",
    sub: "Enterprise-grade reliability",
  },
];

function useCounter(target: number, duration = 2000, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    const startTime = performance.now();
    const update = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(eased * target);
      if (progress < 1) requestAnimationFrame(update);
    };
    requestAnimationFrame(update);
  }, [target, duration, start]);
  return count;
}

function StatCard({ stat, index }: { stat: (typeof stats)[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const count = useCounter(stat.value, 2200, inView);

  const formatted =
    stat.value >= 1000
      ? Math.round(count).toLocaleString()
      : stat.value % 1 !== 0
      ? count.toFixed(1)
      : Math.round(count).toString();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="relative group rounded-2xl p-6 border border-brand-red/20 bg-white dark:bg-surface-900 hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-red/10 transition-all duration-300"
    >
      <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-brand-red/10 border border-brand-red/20 mb-4">
        <stat.icon className="w-5 h-5 text-brand-red" />
      </div>

      <div className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
        {formatted}
        <span className="text-2xl font-bold ml-0.5 text-brand-red">
          {stat.suffix}
        </span>
      </div>

      <div className="mt-1 text-sm font-semibold text-gray-700 dark:text-gray-300">
        {stat.label}
      </div>

      <div className="mt-1 text-xs text-gray-400 dark:text-gray-500">
        {stat.sub}
      </div>

      <div className="absolute bottom-0 left-6 right-6 h-0.5 rounded-full bg-brand-red/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </motion.div>
  );
}

export function StatsSection() {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gray-50/80 dark:bg-surface-900/50" />
      <div className="relative mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-sm font-semibold text-brand-red uppercase tracking-widest mb-3">
            By the Numbers
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white">
            Real impact, measurable outcomes
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
