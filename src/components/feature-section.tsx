"use client";

import { cn } from "@/lib/utils";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface FeatureSectionProps {
  title: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
  reverseOnMobile?: boolean;
  alignment?: "center" | "left" | "right";
}

export function FeatureSection({
  title,
  description,
  children,
  className,
  reverseOnMobile = false,
  alignment = "center",
}: FeatureSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const alignmentClasses = {
    center: "text-center items-center",
    left: "text-left items-start",
    right: "text-right items-end",
  };

  const mobileOrder = reverseOnMobile ? "flex-col-reverse" : "flex-col";

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <section
      ref={sectionRef}
      className={cn(
        "py-20 md:py-28",
        className
      )}
    >
      <div className="container mx-auto px-4">
        <div className={cn("flex gap-12 md:gap-16", mobileOrder, "md:flex-row", "items-center")}>
          <motion.div
            className={cn("flex flex-col gap-5 flex-1", alignmentClasses[alignment])}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={variants}
          >
            <h2 className="text-3xl md:text-4xl font-light tracking-tight">{title}</h2>
            {description && (
              <p className="text-muted-foreground text-lg max-w-2xl">
                {description}
              </p>
            )}
          </motion.div>

          <motion.div
            className="flex-1 flex items-center justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
              delay: 0.2
            }}
          >
            {children}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
