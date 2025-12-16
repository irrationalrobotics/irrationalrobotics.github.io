import Link from "next/link";
import Image from "next/image";
import {
  Instagram,
  Youtube,
  ExternalLink,
} from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-white/10 mt-auto bg-black">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <Image
              src="/logo.jpg"
              alt="Irrational Robotics Logo"
              width={32}
              height={32}
              className="rounded-lg"
            />
            <Link href="/" className="text-sm font-semibold text-white hover:text-blue-400 transition-colors">
              Irrational Robotics
            </Link>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <Link
              href="https://instagram.com/irrationalrobotics"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-pink-400 transition-colors"
            >
              <Instagram className="w-4 h-4" />
            </Link>
            <Link
              href="https://www.youtube.com/@irrationalrobotics"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-red-400 transition-colors"
            >
              <Youtube className="w-4 h-4" />
            </Link>
            <Link
              href="https://www.robotevents.com/teams/V5RC/14142A"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-blue-400 transition-colors text-xs font-medium"
            >
              RobotEvents
            </Link>
          </div>

          {/* Copyright */}
          <div className="text-xs text-white/40">
            © 2025 Irrational Robotics
          </div>
        </div>
      </div>
    </footer>
  );
}
