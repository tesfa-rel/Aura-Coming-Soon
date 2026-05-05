"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Leaf, ArrowDown } from "lucide-react";

function CountdownTimer() {
  const [target] = useState(() => Date.now() + 14 * 24 * 60 * 60 * 1000);
  const [timeLeft, setTimeLeft] = useState(() => {
    const distance = target - Date.now();
    return {
      days: Math.floor(distance / (1000 * 60 * 60 * 24)),
      hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((distance % (1000 * 60)) / 1000),
    };
  });

  useEffect(() => {
    const interval = setInterval(() => {
      let distance = target - Date.now();
      if (distance < 0) {
        distance = 14 * 24 * 60 * 60 * 1000 + (distance % (14 * 24 * 60 * 60 * 1000));
      }
      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [target]);

  const units = [
    { value: timeLeft.days, label: "Days" },
    { value: timeLeft.hours, label: "Hours" },
    { value: timeLeft.minutes, label: "Minutes" },
    { value: timeLeft.seconds, label: "Seconds" },
  ];

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-lg mx-auto">
      {units.map((unit) => (
        <motion.div
          key={unit.label}
          whileHover={{ scale: 1.05 }}
          className="flex flex-col items-center rounded-xl bg-white/60 backdrop-blur-sm border border-border p-4"
        >
          <span className="text-3xl sm:text-4xl font-bold text-primary">
            {String(unit.value).padStart(2, "0")}
          </span>
          <span className="text-xs sm:text-sm text-muted-foreground uppercase tracking-wider mt-1">
            {unit.label}
          </span>
        </motion.div>
      ))}
    </div>
  );
}

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[#eef4ec] via-background to-background" />

      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={mounted ? { opacity: 0, y: 30 } : false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center gap-6"
        >
          <motion.div
            initial={mounted ? { scale: 0.8, opacity: 0 } : false}
            animate={{ scale: [1, 1.08, 1], opacity: 1 }}
            transition={{
              scale: { duration: 2.5, repeat: Infinity, ease: "easeInOut" },
              opacity: { duration: 0.6, ease: "easeOut" },
            }}
            className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-5 py-2 text-base font-semibold text-primary shadow-sm"
          >
            <motion.div
              animate={{ rotate: [0, 15, -15, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <Leaf className="h-5 w-5" />
            </motion.div>
            <span>Studio Opening Soon</span>
          </motion.div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-foreground">
            Find Your{" "}
            <span className="text-primary">Inner Peace</span>
          </h1>

          <p className="max-w-2xl text-lg sm:text-xl text-muted-foreground leading-relaxed">
            Aura Yoga & Pilates is launching a sanctuary for mind, body, and soul in Bole, Addis Ababa.
            Register now for early access to our classes and exclusive founding member benefits.
          </p>

          <div className="mt-4">
            <CountdownTimer />
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Button
              size="lg"
              className="rounded-full px-8"
              onClick={() => document.querySelector("#register")?.scrollIntoView({ behavior: "smooth" })}
            >
              Join the Waitlist
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="rounded-full px-8"
              onClick={() => document.querySelector("#schedule")?.scrollIntoView({ behavior: "smooth" })}
            >
              View Schedule
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={mounted ? { opacity: 0 } : false}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-16"
        >
          <a
            href="#schedule"
            className="inline-flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <span className="text-sm">Explore</span>
            <ArrowDown className="h-5 w-5 animate-bounce" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
