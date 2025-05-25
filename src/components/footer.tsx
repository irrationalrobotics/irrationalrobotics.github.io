"use client";

import Link from "next/link";
import { Instagram } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { HighlightText } from "./highlight-text";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="space-y-4">
            <h3 className="text-lg font-light">
              Irrational<HighlightText type="gradient">Robotics</HighlightText>
            </h3>
            <p className="text-sm text-muted-foreground">
              VEX Robotics organization 14142 from Allen, Texas. Developing innovative solutions and competing in VEX Robotics competitions.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-medium uppercase tracking-wider mb-4 text-muted-foreground">Quick Links</h3>
            <nav className="space-y-3 text-sm">
              <div>
                <Link href="/" className="hover:text-primary transition-colors">
                  Home
                </Link>
              </div>
              <div>
                <Link href="/about" className="hover:text-primary transition-colors">
                  About Us
                </Link>
              </div>
              <div>
                <Link href="/axiom" className="hover:text-primary transition-colors">
                  Team 14142A Axiom
                </Link>
              </div>
              <div>
                <Link href="/competitions" className="hover:text-primary transition-colors">
                  Competitions
                </Link>
              </div>
              <div>
                <Link href="/contact" className="hover:text-primary transition-colors">
                  Contact
                </Link>
              </div>
            </nav>
          </div>

          <div>
            <h3 className="text-sm font-medium uppercase tracking-wider mb-4 text-muted-foreground">Connect</h3>
            <div className="space-y-3">
              <Link
                href="https://instagram.com/irrationalrobotics"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm hover:text-primary transition-colors"
              >
                <Instagram className="w-4 h-4" />
                <span>@irrationalrobotics</span>
              </Link>
              <div className="text-sm text-muted-foreground pt-1">
                <Link
                  href="https://www.robotevents.com/teams/V5RC/14142A"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  RobotEvents Profile
                </Link>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8 opacity-50" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            © {currentYear} Irrational Robotics. All rights reserved.
          </p>

          <div className="flex items-center gap-6 text-xs text-muted-foreground">
            <Link
              href="https://www.vexrobotics.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              VEX Robotics
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
