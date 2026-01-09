"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { HighlightText } from "@/components/highlight-text";
import { Users, Zap, Trophy, Target, Code, ArrowRight } from "lucide-react";
import DonatePage from "./donate/page";

export default function Home() {
  const Sponsors = [
    {
      title: "Pythagoras Level Sponsor",
      sponsors: ["EnLiSense"],
      imghrefs: ["images/sponsors/enlisense_logo_white.svg"],
      imglinks: ["https://enlisense.com/"],
      imgheight: "30vh",
      txtsize: "md:text-4xl",
      color: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30"
    },
    {
      title: "Golden Level Sponsor",
      sponsors: ["Contextra"],
      imghrefs: ["images/sponsors/contextra.svg"],
      imglinks: ["https://contextra.org/"],
      imgheight: "30vh",
      txtsize: "md:text-3xl",
      color: "bg-amber-500/20 text-amber-400 border-amber-500/30"
    },
    {
      title: "Pi Level Sponsor",
      sponsors: ["Choyce"],
      imghrefs: ["images/sponsors/chenghao.jpg"],
      imglinks: ["https://www.instagram.com/chenghaohuang17/"],
      imgheight: "36vh",
      txtsize: "md:text-2xl",
      color: "bg-purple-500/20 text-purple-400 border-purple-500/30"
    },
    // {
    //   title: "Pi Level Sponsor",
    //   sponsors: [],
    //   imghrefs: [],
    //   imglinks: [],
    //   imgheight: "5vh",
    //   txtsize: "md:text-2xl",
    //   color: "bg-purple-500/20 text-purple-400 border-purple-500/30"
    // },
  ];
  useEffect(() => {
    const fadeElements = document.querySelectorAll(".fade-in");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.1 }
    );

    fadeElements.forEach((el) => observer.observe(el));
    return () => fadeElements.forEach((el) => observer.unobserve(el));
  }, []);

  return (
    <div className="min-h-screen bg-black overflow-x-hidden">
      <section
        className="relative w-screen flex items-center justify-center overflow-hidden -mx-4 md:-mx-0 md:w-full"
        style={{ height: "calc(100vh - 88px)" }}
      >
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
          <div
            className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          />
          <div
            className="absolute top-1/2 left-1/2 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "2s" }}
          />
        </div>

        <div className="container mx-auto px-4 relative z-10 flex flex-col items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center w-full"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.8 }}
              className="font-bold mb-6 md:mb-8 text-white tracking-tighter leading-tight whitespace-nowrap md:whitespace-normal"
              style={{ fontSize: "clamp(2.5rem, 12vw, 120px)" }}
            >
              <span className="inline-block">
                <HighlightText type="gradient">Irrational</HighlightText>
              </span>
              <span className="hidden md:inline-block text-white ml-4 md:ml-6">
                Robotics
              </span>
              <br className="md:hidden" />
              <span className="md:hidden text-white">Robotics</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-lg md:text-xl lg:text-2xl text-white/70 max-w-2xl md:max-w-3xl mx-auto mb-8 md:mb-12 leading-relaxed px-2"
            ></motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center"
            >
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white text-base md:text-lg px-6 md:px-8 py-5 md:py-6 group w-full sm:w-auto"
                asChild
              >
                <Link
                  href="/axiom"
                  className="flex items-center gap-2 justify-center"
                >
                  Meet Axiom
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10 text-base md:text-lg px-6 md:px-8 py-5 md:py-6 w-full sm:w-auto"
                asChild
              >
                <Link href="/donate">Support Our Mission</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block"
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-center justify-center">
            <div className="w-1 h-2 bg-white/50 rounded-full" />
          </div>
        </motion.div>
      </section>

      <section className="py-16 md:py-24 bg-gradient-to-b from-black to-blue-950/10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Philosophy
            </h2>
            <p className="text-base md:text-lg text-white/70 leading-relaxed mb-8">
              We aim for creativity, collaboration, and excellence in everything we do.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-8">
              {[
                {
                  icon: Code,
                  title: "Innovation",
                  description: "We design creative solutions through engineering and code.",
                },
                {
                  icon: Users,
                  title: "Collaboration",
                  description: "Teamwork and mentorship drive our success on and off the field.",
                },
                {
                  icon: Zap,
                  title: "Excellence",
                  description: "We pursue high performance, reliability, and continuous improvement.",
                },
              ].map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                >
                  <Card className="bg-white/5 backdrop-blur border-white/10 hover:border-blue-500/30 transition-colors h-full">
                    <CardContent className="p-4 md:p-6">
                      <value.icon className="w-8 h-8 md:w-10 md:h-10 text-blue-400 mb-3" />
                      <h3 className="text-lg md:text-xl font-semibold text-white mb-2">
                        {value.title}
                      </h3>
                      <p className="text-white/60 text-sm">
                        {value.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <div className="bg-gradient-to-br from-blue-500/10 to-blue-500/5 border border-blue-500/20 rounded-xl p-6 md:p-8">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
                2025-2026 Goals
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Reach VEX World Championship",
                  "Top 10 ranking in Skills Challenge",
                  "Build strong community partnerships",
                  "Mentor next generation of engineers",
                  "Innovate robot design & programming",
                  "Lead by example in STEM education",
                ].map((goal, index) => (
                  <motion.div
                    key={goal}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05, duration: 0.4 }}
                    className="flex items-center gap-3"
                  >
                    <Target className="w-5 h-5 text-blue-400 flex-shrink-0" />
                    <span className="text-white/80">{goal}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-black border-t border-white/10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-white">
              Meet Our Partners
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              We're grateful to our sponsors who believe in our mission and make innovation possible.
            </p>
          </motion.div>

          <div className="space-y-16">
            {Sponsors.map((tier, tierIdx) => (
              <motion.div
                key={tier.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: tierIdx * 0.1, duration: 0.6 }}
              >
                <div className="text-center mb-8">
                  <div className="inline-block">
                    <Badge className={`${tier.color} px-4 py-2 text-sm font-semibold`}>
                      {tier.title}
                    </Badge>
                  </div>
                </div>

                {tier.imghrefs.length > 0 || tier.sponsors.length > 0 ? (
                  <div className="flex items-center justify-center max-w-6xl mx-auto">
                    {tier.imghrefs.map((img, idx) => (
                      <motion.div
                        key={img}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: idx * 0.05, duration: 0.4 }}
                        className="flex flex-col items-center justify-center"
                      >
                        {tier.imglinks && tier.imglinks[idx] ? (
                          <a href={tier.imglinks[idx]} target="_blank" rel="noopener noreferrer" className="hover:scale-105 transition-transform duration-300">
                            <img
                              src={img}
                              alt={tier.sponsors[idx] || "Sponsor"}
                              style={{ height: tier.imgheight, maxWidth: "100%" }}
                              className="object-contain"
                            />
                          </a>
                        ) : (
                          <img
                            src={img}
                            alt={tier.sponsors[idx] || "Sponsor"}
                            style={{ height: tier.imgheight, maxWidth: "100%" }}
                            className="object-contain"
                          />
                        )}
                        <div className="text-center text-base font-semibold mt-6">{tier.sponsors[idx]}</div>
                      </motion.div>
                    ))}
                    {tier.sponsors.length > tier.imghrefs.length &&
                      tier.sponsors.slice(tier.imghrefs.length).map((name, idx) => (
                        <motion.div
                          key={name}
                          initial={{ opacity: 0, scale: 0.9 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: (tier.imghrefs.length + idx) * 0.05, duration: 0.4 }}
                          className="flex items-center justify-center"
                        >
                          <span className="font-semibold text-center text-4xl md:text-6xl">{name}</span>
                        </motion.div>
                      ))}
                  </div>
                ) : null}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-black border-t border-white/10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 md:mb-6">
              Ready to Support Innovation?
            </h2>
            <p className="text-base md:text-lg text-white/70 mb-8">
              Join us in supporting the next generation of engineers and
              innovators. Every contribution makes a difference.
            </p>
            <Button
              size="lg"
              variant="donate"
              className="text-white text-base md:text-lg px-6 md:px-10 py-5 md:py-6 group" // bg-blue-600 hover:bg-blue-700
              asChild
            >
              <Link href="/donate" className="flex items-center gap-2">
                <Zap className="w-5 h-5" />
                Donate Now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
