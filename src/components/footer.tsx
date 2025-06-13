import Link from "next/link";
import Image from "next/image";
import {
  Instagram,
  Youtube,
  ExternalLink,
  Heart,
  Code,
  Zap,
} from "lucide-react";
import { HighlightText } from "./highlight-text";

export function Footer() {
  return (
    <footer className="border-t border-border/50 mt-auto bg-gradient-to-b from-card/20 to-card/40 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="space-y-4 md:col-span-1">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/logo.jpg"
                alt="Irrational Robotics Logo"
                width={32}
                height={32}
                className="rounded-lg"
              />
              <span className="text-xl font-bold">
                Irrational
                <HighlightText type="gradient">Robotics</HighlightText>
              </span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Irrational Robotics is fiscally sponsored by Hack Club, a
              501(c)(3) nonprofit. <br></br>Our registered EIN is 81-2908499.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <div className="bg-primary/10 p-2 rounded-full">
                <Code className="w-4 h-4 text-primary" />
              </div>
              <div className="bg-amber-500/10 p-2 rounded-full">
                <Zap className="w-4 h-4 text-amber-400" />
              </div>
              <div className="bg-emerald-500/10 p-2 rounded-full">
                <Heart className="w-4 h-4 text-emerald-400" />
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-primary">
              Quick Links
            </h3>
            <nav className="space-y-3 text-sm">
              <div>
                <Link
                  href="/"
                  className="text-muted-foreground hover:text-primary transition-colors duration-200 flex items-center gap-2 group"
                >
                  <span>Home</span>
                  <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </div>
              <div>
                <Link
                  href="/about"
                  className="text-muted-foreground hover:text-primary transition-colors duration-200 flex items-center gap-2 group"
                >
                  <span>About Us</span>
                  <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </div>
              <div>
                <Link
                  href="/competitions"
                  className="text-muted-foreground hover:text-primary transition-colors duration-200 flex items-center gap-2 group"
                >
                  <span>Competitions</span>
                  <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </div>
              <div>
                <Link
                  href="/donate"
                  className="text-muted-foreground hover:text-amber-400 transition-colors duration-200 flex items-center gap-2 group"
                >
                  <span>Donate</span>
                  <Heart className="w-3 h-3 text-amber-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </div>
              <div>
                <Link
                  href="/contact"
                  className="text-muted-foreground hover:text-primary transition-colors duration-200 flex items-center gap-2 group"
                >
                  <span>Contact</span>
                  <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </div>
            </nav>
          </div>

          {/* Teams */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-primary">
              Our Teams
            </h3>
            <nav className="space-y-3 text-sm">
              <div>
                <Link
                  href="/axiom"
                  className="text-muted-foreground hover:text-blue-400 transition-colors duration-200 flex items-center gap-2 group"
                >
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span>Team 14142A Axiom</span>
                </Link>
              </div>
              <div>
                <Link
                  href="/theorem"
                  className="text-muted-foreground hover:text-emerald-400 transition-colors duration-200 flex items-center gap-2 group"
                >
                  <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                  <span>Team 14142T Theorem</span>
                </Link>
              </div>
              <div className="pt-2">
                <Link
                  href="https://www.robotevents.com/teams/V5RC/14142A"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors duration-200 flex items-center gap-2 group"
                >
                  <span>RobotEvents Profile</span>
                  <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </div>
            </nav>
          </div>

          {/* Connect */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-primary">
              Connect
            </h3>
            <div className="space-y-3">
              <Link
                href="https://instagram.com/irrationalrobotics"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-muted-foreground hover:text-pink-400 transition-colors duration-200 group"
              >
                <div className="bg-gradient-to-r from-pink-500 to-purple-500 p-2 rounded-full group-hover:scale-110 transition-transform">
                  <Instagram className="w-3 h-3 text-white" />
                </div>
                <span>@irrationalrobotics</span>
              </Link>
              <Link
                href="https://www.youtube.com/@irrationalrobotics"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-muted-foreground hover:text-red-400 transition-colors duration-200 group"
              >
                <div className="bg-gradient-to-r from-red-500 to-red-600 p-2 rounded-full group-hover:scale-110 transition-transform">
                  <Youtube className="w-3 h-3 text-white" />
                </div>
                <span>@irrationalrobotics</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border/50 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <span>© 2025 Irrational Robotics. All rights reserved.</span>
              <span className="hidden md:inline">•</span>
              <span className="text-primary">Made with</span>
              <Heart className="w-3 h-3 text-red-400 animate-pulse" />
              <span className="text-primary">in Allen, Texas</span>
            </div>
            <div className="flex items-center gap-6 text-xs text-muted-foreground">
              <Link
                href="https://www.vexrobotics.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors duration-200 flex items-center gap-1 group"
              >
                <span>VEX Robotics</span>
                <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
              <Link
                href="https://hackclub.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors duration-200 flex items-center gap-1 group"
              >
                <span>Hack Club</span>
                <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
