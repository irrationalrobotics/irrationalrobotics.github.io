"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface HeroSectionProps {
  title: React.ReactNode;
  subtitle?: string;
  variant?: "default" | "axiom";
  className?: string;
  children?: React.ReactNode;
  showRobot?: boolean;
}

export function HeroSection({
  title,
  subtitle,
  variant = "default",
  className,
  children,
}: HeroSectionProps) {
  const bgClass =
    variant === "default"
      ? "bg-background"
      : "bg-[#14142A] text-white";

  return (
    <div className={cn(
      "relative overflow-hidden py-24 md:py-32",
      bgClass,
      className
    )}>
      {/* Subtle background gradient */}
      {variant === "default" ? (
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent to-muted/30" />
      ) : (
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent to-black/20" />
      )}

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto">
          <div className="text-center space-y-6">
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
            >
              {title}
            </motion.h1>

            {subtitle && (
              <motion.p
                className="text-xl md:text-2xl text-muted-foreground font-light"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1, ease: [0.33, 1, 0.68, 1] }}
              >
                {subtitle}
              </motion.p>
            )}

            {children && (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2, ease: [0.33, 1, 0.68, 1] }}
                className="mt-8"
              >
                {children}
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
