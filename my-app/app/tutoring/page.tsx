"use client";

import { motion } from "framer-motion";
import { TrustedCarousel } from "@/app/tutoring/components/trusted-carousel";
import { CopyEmail } from "@/app/tutoring/components/copy-email";

export default function TutoringPage() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/20">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center min-h-[50vh] px-4 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-b from-background via-background/90 to-background z-0" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 text-center max-w-4xl mx-auto space-y-6"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/50 backdrop-blur-sm border border-border/50 text-sm font-medium text-muted-foreground mb-4">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            Opening
          </div>

          <p className="text-xl md:text-2xl text-foreground max-w-2xl mx-auto leading-relaxed py-4">
            Book a session and let's start learning!
          </p>

          <CopyEmail email="pupipat.sk@gmail.com" />
        </motion.div>
      </section>

      {/* Trusted Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <TrustedCarousel />
      </motion.div>

      {/* Skill Tree Section */}
      {/* <section className="py-24 overflow-hidden bg-background">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold mb-16 text-center tracking-tight">Knowledge Tree</h2>
                    <SkillTree />
                </div>
            </section> */}
    </div>
  );
}
