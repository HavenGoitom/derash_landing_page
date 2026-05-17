"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "For Everyone", href: "#for-everyone" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

function DerashLogo({ size = 38 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size * 1.18}
      viewBox="0 0 100 118"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Map pin shape */}
      <path
        d="M50 2C27.9 2 10 19.9 10 42C10 64.1 50 116 50 116C50 116 90 64.1 90 42C90 19.9 72.1 2 50 2Z"
        fill="#E8182A"
      />

      {/* White horizontal divider line across pin */}
      <line
        x1="14"
        y1="48"
        x2="86"
        y2="48"
        stroke="white"
        strokeWidth="4"
      />

      {/* Heartbeat / ECG line */}
      <polyline
        points="18,48 30,48 36,30 42,62 48,38 54,58 58,48 82,48"
        fill="none"
        stroke="white"
        strokeWidth="4.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    document.querySelector(href)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.6,
          ease: [0.22, 1, 0.36, 1],
        }}
        className={cn(
          "fixed top-0 inset-x-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-white dark:bg-[#0f1117] border-b border-gray-200 dark:border-white/8 shadow-md shadow-gray-100/80 dark:shadow-black/40"
            : "bg-white/95 dark:bg-[#0f1117]/95 backdrop-blur-xl border-b border-gray-200/70 dark:border-white/6 shadow-sm shadow-gray-100/50 dark:shadow-black/20"
        )}
      >
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
          <div className="flex h-16 items-center justify-between">

            {/* Logo */}
            <a href="#" className="flex items-center gap-2.5 group">
              <div className="flex-shrink-0 drop-shadow-md group-hover:drop-shadow-lg transition-all">
                <DerashLogo size={36} />
              </div>

              <div className="flex flex-col leading-none gap-0.5">
                <span className="font-extrabold text-lg text-gray-900 dark:text-white tracking-tight leading-none">
                  DerashCare
                </span>

                <span className="text-base font-bold text-[#1a7a4a] dark:text-brand-green-light leading-none">
                  ደራሽ
                </span>
              </div>
            </a>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link.href)}
                  className="px-4 py-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white rounded-lg hover:bg-gray-100 dark:hover:bg-white/6 transition-all"
                >
                  {link.label}
                </button>
              ))}
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2">

              {/* Dark mode toggle */}
              <button
                onClick={() => setDark(!dark)}
                className="w-9 h-9 rounded-lg flex items-center justify-center text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-white/6 transition-colors"
                aria-label="Toggle dark mode"
              >
                {dark ? (
                  <Sun className="w-4 h-4" />
                ) : (
                  <Moon className="w-4 h-4" />
                )}
              </button>

              {/* Mobile menu button */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="md:hidden w-9 h-9 rounded-lg flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-white/6 transition-colors"
              >
                {mobileOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 inset-x-0 z-40 bg-white dark:bg-[#0f1117] border-b border-gray-200 dark:border-white/8 md:hidden shadow-lg"
          >
            <div className="px-6 py-4 space-y-1">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link.href)}
                  className="w-full text-left px-4 py-3 rounded-xl text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/5 transition-colors"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}