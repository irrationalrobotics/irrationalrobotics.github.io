"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { HeroSection } from "@/components/hero-section";
import { FeatureSection } from "@/components/feature-section";
import { HighlightText } from "@/components/highlight-text";

import { BookOpen, Award, Target, Users, Instagram, Youtube, Mail, ArrowRight, Zap, Sparkles, Code, Trophy } from "lucide-react";

export default function Home() {
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

  const achievements = [
    { icon: Trophy, label: "Competition Wins", value: "0", color: "text-amber-400" },
    { icon: Target, label: "Season Goals", value: "0/4", color: "text-blue-400" },
    { icon: Users, label: "Team Members", value: "10", color: "text-purple-400" },
    { icon: Code, label: "Teams", value: "2", color: "text-emerald-400" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/20">
      <link rel="icon" type="image/svg+xml" href="favicon.svg" />

      {/* Enhanced Hero Section */}
      <section className="relative overflow-hidden py-24 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/10" />
        <div className="container mx-auto px-4 relative z-10">
            <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl mx-auto text-center flex flex-col items-center justify-center"
            >
            <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">
              <Sparkles className="w-3 h-3 mr-1" />
              Allen, Texas • VEX Robotics
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
              Welcome to{" "}
              <HighlightText type="gradient">Irrational Robotics</HighlightText>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Home of Team 14142A Axiom and Team 14142T Theorem • Engineering the Future
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            >
              <Button size="lg" className="text-lg px-8 py-6 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 shadow-lg" asChild>
              <Link href="/axiom">
                <Users className="w-5 h-5 mr-2" />
                Meet Team Axiom
              </Link>
              </Button>
              <Button size="lg" className="text-lg px-8 py-6 bg-gradient-to-r from-secondary to-secondary/80 hover:from-secondary/90 hover:to-secondary/70 shadow-lg" asChild>
              <Link href="/theorem">
                <Code className="w-5 h-5 mr-2" />
                Meet Team Theorem
              </Link>
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6 border-primary/30 hover:bg-primary/10" asChild>
              <Link href="/donate">
                <Zap className="w-5 h-5 mr-2" />
                Support Us
              </Link>
              </Button>
            </motion.div>

            {/* Achievement Stats */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto"
            >
              {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                className="text-center"
              >
                <div className="bg-card/50 backdrop-blur-sm rounded-xl p-4 border border-border/50 hover:border-primary/30 transition-colors">
                <achievement.icon className={`w-6 h-6 mx-auto mb-2 ${achievement.color}`} />
                <div className={`text-xl font-bold ${achievement.color} mb-1`}>
                  {achievement.value}
                </div>
                <div className="text-xs text-muted-foreground">
                  {achievement.label}
                </div>
                </div>
              </motion.div>
              ))}
            </motion.div>
            </motion.div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-24 bg-card/20 backdrop-blur-sm border-y border-border/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-6xl mx-auto"
          >
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
                About Us
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Irrational Robotics is a VEX Robotics organization from Allen, Texas. We are home to Team 14142A Axiom and Team 14142T Theorem, two teams competing in the VEX Robotics Competition.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="space-y-6"
              >
                <Card className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 hover:scale-105">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-blue-500/20 p-3 rounded-full">
                        <Users className="w-6 h-6 text-blue-400" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">Our Team</h3>
                        <p className="text-muted-foreground text-sm">
                          We're a group of high school students who love robotics, programming, and problem-solving. We developed this team to compete in VEX Robotics competitions and to learn Engineering Skills.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="space-y-6"
              >
                <Card className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover:scale-105">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-purple-500/20 p-3 rounded-full">
                        <Target className="w-6 h-6 text-purple-400" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">Our Philosophy</h3>
                        <p className="text-muted-foreground text-sm">
                          Our name "Irrational Robotics" reflects our approach. Our number 14142 is the square root of 2, showing how there are always 2 solutions to every problem. We believe in thinking outside the box and embracing creativity in engineering.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What is VEX Section */}
      <section className="py-24 bg-gradient-to-b from-transparent to-secondary/10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-6xl mx-auto"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
                  What is VEX Robotics?
                </h2>
                <p className="text-xl text-muted-foreground mb-8">
                  VEX Robotics is an educational robotics program that allows students to design, build, and program robots for a competitive robotics tournament.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-muted-foreground">Annual challenges combining strategy, engineering, and programming</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-muted-foreground">Innovative hardware and software solutions</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-muted-foreground">Global competition with world championship</span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                <Card className="bg-gradient-to-br from-amber-500/10 to-orange-500/10 border-amber-500/20 hover:border-amber-500/40 transition-all duration-300 hover:scale-105">
                  <CardContent className="p-8">
                    <div className="text-center mb-6">
                      <div className="w-16 h-16 bg-amber-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Trophy className="w-8 h-8 text-amber-400" />
                      </div>
                      <h3 className="text-2xl font-bold mb-2">VEX V5 Competition</h3>
                    </div>
                    <p className="text-muted-foreground text-center mb-6">
                      Teams build robots to compete in annual challenges, combining strategy, engineering, and programming skills. Each year has a unique game that tests your abilities to develop innovative hardware and software solutions.
                    </p>
                    <div className="flex justify-center">
                      <Button variant="outline" className="border-amber-500/30 text-amber-400 hover:bg-amber-500/10" asChild>
                        <Link href="/competitions">
                          Learn More
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Goals Section */}
      <section className="py-24 bg-card/30 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
                Our Goals
              </h2>
              <p className="text-xl text-muted-foreground">
                At Irrational Robotics, we have ambitious goals that drive our innovation and competition strategy.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  icon: Trophy,
                  title: "World's Finalist",
                  description: "Become a finalist at the VEX Robotics World Championship. Our goal is to win throughout the season.",
                  color: "from-amber-500/10 to-yellow-500/10",
                  borderColor: "border-amber-500/20",
                  iconColor: "text-amber-400"
                },
                {
                  icon: Target,
                  title: "Top 10 Skills Bot at State",
                  description: "Rank our skills robot in the top 10 at the state-level competition.",
                  color: "from-emerald-500/10 to-teal-500/10",
                  borderColor: "border-emerald-500/20",
                  iconColor: "text-emerald-400"
                },
                {
                  icon: Users,
                  title: "Spread VEX in Our Community",
                  description: "Promote VEX Robotics and inspire new teams in our local area.",
                  color: "from-blue-500/10 to-indigo-500/10",
                  borderColor: "border-blue-500/20",
                  iconColor: "text-blue-400"
                }
              ].map((goal, index) => (
                <motion.div
                  key={goal.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                >
                  <Card className={`h-full bg-gradient-to-br ${goal.color} ${goal.borderColor} border transition-all duration-300 hover:scale-105 hover:shadow-xl`}>
                    <CardContent className="p-6 text-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <goal.icon className={`w-8 h-8 ${goal.iconColor}`} />
                      </div>
                      <h3 className="text-xl font-semibold mb-3">{goal.title}</h3>
                      <p className="text-muted-foreground text-sm">
                        {goal.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Connect Section */}
      <section className="py-24 bg-gradient-to-r from-primary/10 via-primary/5 to-secondary/10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-6xl mx-auto"
          >
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Connect With Us</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Have questions about Irrational Robotics or interested in learning more? Reach out to us through our social media or send us an email.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <Card className="h-full bg-gradient-to-br from-purple-500/10 to-pink-500/10 border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover:scale-105 group">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Instagram className="h-5 w-5 text-purple-400" />
                      Follow Us
                    </CardTitle>
                    <CardDescription>
                      Keep up with our latest updates, competition results, and memes on our Instagram and YouTube Page!
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center gap-2 text-sm">
                      <Instagram className="h-4 w-4 text-purple-400" />
                      <Link
                          href="https://instagram.com/irrationalrobotics"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-purple-400 transition-colors"
                      >
                        @irrationalrobotics
                      </Link>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Youtube className="h-4 w-4 text-red-400" />
                      <Link
                        href="https://youtube.com/@irrationalrobotics"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-red-400 transition-colors"
                      >
                        @irrationalrobotics
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                <Link href="/contact" className="block h-full">
                  <Card className="h-full bg-gradient-to-br from-blue-500/10 to-indigo-500/10 border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 hover:scale-105 group">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Mail className="h-5 w-5 text-blue-400" />
                        Contact Us
                      </CardTitle>
                      <CardDescription>
                        For official inquiries, collaboration, sponsorship, or just to say hello... Click here for our contact form!
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-center gap-2 text-sm text-blue-400 group-hover:text-blue-300 transition-colors">
                        <Mail className="h-4 w-4" />
                        Get in Touch
                        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
