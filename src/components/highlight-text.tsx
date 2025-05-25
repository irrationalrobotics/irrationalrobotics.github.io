"use client";

import { cn } from "@/lib/utils";

interface HighlightTextProps {
  children: React.ReactNode;
  className?: string;
  type?: "primary" | "gradient";
}

export function HighlightText({
  children,
  className,
  type = "primary",
}: HighlightTextProps) {
  if (type === "primary") {
    return (
      <span className={cn("highlight-text", className)}>
        {children}
      </span>
    );
  }

  if (type === "gradient") {
    return (
      <span className={cn("gradient-text", className)}>
        {children}
      </span>
    );
  }

  return <>{children}</>;
}
