"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-white dark:bg-surface-950" />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative rounded-3xl overflow-hidden"
        >
          {/* Background */}
          <div className="absolute inset-0 bg-brand-red" />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-red-light/60 via-brand-red to-brand-crimson" />
          <div className="absolute inset-0 grid-pattern opacity-20" />
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-white/5 blur-3xl -translate-y-1/2 translate-x-1/4 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-black/10 blur-2xl translate-y-1/2 -translate-x-1/4 pointer-events-none" />

          {/* Content */}
          <div className="relative px-8 py-16 sm:px-16 sm:py-20 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-1.5 text-white text-sm font-semibold mb-6">
                <span className="relative flex w-2 h-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-white" />
                </span>
                Early access open — limited spots
              </div>

              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-4">
                Be part of the
                <br />
                emergency revolution
              </h2>

              <p className="text-red-100 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
                Whether you're a hospital administrator, a ministry official, an investor, or simply an Ethiopian who cares about emergency care — join Derash today.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button size="xl" variant="white" className="group w-full sm:w-auto">
                  Get Early Access
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button size="xl" variant="glass" className="w-full sm:w-auto group">
                  <Building2 className="w-5 h-5" />
                  Partner with Us
                </Button>
              </div>

              <div className="mt-8 flex items-center justify-center gap-2 text-red-200 text-sm">
                <Mail className="w-4 h-4" />
                <span>Or reach us at </span>
                <a href="mailto:hello@derashcare.com" className="text-white font-semibold underline underline-offset-2">
                  hello@derashcare.com
                </a>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
