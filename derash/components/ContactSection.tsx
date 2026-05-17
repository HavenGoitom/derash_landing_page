"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ContactSection() {
  return (
    <section id="contact" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gray-50/60 dark:bg-surface-900/50" />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-sm font-semibold text-brand-red uppercase tracking-widest mb-3">
            Get In Touch
          </p>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight">
            Contact Us
          </h2>
          <p className="mt-4 text-lg text-gray-500 dark:text-gray-400 max-w-xl mx-auto">
            Whether you're a hospital, ministry partner, investor, or someone who wants to help — we'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Let's talk</h3>
              <p className="text-gray-500 dark:text-gray-400 leading-relaxed">
                Our team is based in Addis Ababa and typically responds within one business day.
              </p>
            </div>

            {[
              { icon: Mail, label: "Email", value: "hello@derashcare.com", href: "mailto:hello@derashcare.com" },
              { icon: Phone, label: "Phone", value: "+251 11 000 0000", href: "tel:+251110000000" },
              { icon: MapPin, label: "Office", value: "Bole, Addis Ababa, Ethiopia", href: "#" },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="flex items-center gap-4 group"
              >
                <div className="w-11 h-11 rounded-xl bg-brand-red/10 border border-brand-red/20 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-red group-hover:border-brand-red transition-all duration-200">
                  <item.icon className="w-5 h-5 text-brand-red group-hover:text-white transition-colors" />
                </div>
                <div>
                  <div className="text-xs text-gray-400 dark:text-gray-500 font-medium">{item.label}</div>
                  <div className="text-sm font-semibold text-gray-800 dark:text-gray-200 group-hover:text-brand-red transition-colors">{item.value}</div>
                </div>
              </a>
            ))}
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white dark:bg-surface-900 rounded-2xl border border-gray-100 dark:border-white/5 p-7 shadow-sm"
          >
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1.5">First Name</label>
                  <input
                    type="text"
                    className="w-full rounded-xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-surface-800 px-3.5 py-2.5 text-sm text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-red/30 focus:border-brand-red/50 transition-all"
                    placeholder="Abebe"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1.5">Last Name</label>
                  <input
                    type="text"
                    className="w-full rounded-xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-surface-800 px-3.5 py-2.5 text-sm text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-red/30 focus:border-brand-red/50 transition-all"
                    placeholder="Kebede"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1.5">Email</label>
                <input
                  type="email"
                  className="w-full rounded-xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-surface-800 px-3.5 py-2.5 text-sm text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-red/30 focus:border-brand-red/50 transition-all"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1.5">I am a...</label>
                <select className="w-full rounded-xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-surface-800 px-3.5 py-2.5 text-sm text-gray-700 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-red/30 transition-all">
                  <option>Patient / Family</option>
                  <option>Hospital Administrator</option>
                  <option>Ambulance Operator</option>
                  <option>Government / Ministry</option>
                  <option>Investor / Partner</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1.5">Message</label>
                <textarea
                  rows={3}
                  className="w-full rounded-xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-surface-800 px-3.5 py-2.5 text-sm text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-red/30 focus:border-brand-red/50 transition-all resize-none"
                  placeholder="Tell us how Derash can help you..."
                />
              </div>
              <Button className="w-full gap-2 mt-1" size="lg">
                Send Message
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
