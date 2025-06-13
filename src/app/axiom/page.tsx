"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

import {
  Trophy, Users, Target, CalendarDays, ArrowLeft, BookOpen, Award,
  Wrench, Code, CircuitBoard, Star, Zap, ExternalLink, User,
  Github, Linkedin, Mail, Clock, TrendingUp
} from "lucide-react";
import { HighlightText } from "@/components/highlight-text";

export default function AxiomPage() {
  const [stats, setStats] = useState({
    competitions: 0,
    awards: 0,
    codeCommits: 0,
    hoursWorked: 0
  });

  useEffect(() => {
    // Animate counters
    const targetStats = {
      competitions: 0,
      awards: 0,
      codeCommits: 7,
      hoursWorked: 15
    };

    const duration = 2000;
    const steps = 60;
    const stepTime = duration / steps;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      const easedProgress = 1 - Math.pow(1 - progress, 3); // Ease out cubic

      setStats({
        competitions: Math.round(targetStats.competitions * easedProgress),
        awards: Math.round(targetStats.awards * easedProgress),
        codeCommits: Math.round(targetStats.codeCommits * easedProgress),
        hoursWorked: Math.round(targetStats.hoursWorked * easedProgress)
      });

      if (currentStep >= steps) {
        clearInterval(timer);
        setStats(targetStats);
      }
    }, stepTime);

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
    return () => {
      fadeElements.forEach((el) => observer.unobserve(el));
      clearInterval(timer);
    };
  }, []);

  const teamMembers = [
    {
      img: "/images/axiom/abhirama.png",
      name: "Abhirama Sonny",
      role: "Programmer & Outreach Coordinator",
      specialty: "Autonomous Programming",
      link: "https://abhiramasonny.com",
      description: "I am a 16-year-old high school student with 6 years of competitive robotics experience. I am a programmer on the team, and I want to develop a highly ranked autonomous this season.",
      skills: ["C++", "Python", "AI/ML"]
    },
    {
      img: "/images/axiom/johnathan.webp",
      name: "Jonathan Luu",
      role: "Builder & Outreach Coordinator",
      specialty: "Pneumatic Expert",
      link: "https://www.instagram.com/ed.two?igsh=MXBlOTNzdnU1YnMxMQ%3D%3D&utm_source=qr",
      description: "Robot developmment and community engagement.",
      skills: ["CAD Design", "Marketing", "Design"]
    },
    {
      img: "/images/axiom/kevin.png",
      name: "Kevin Ye",
      role: "Builder & Primary Driver",
      specialty: "Robot Operation",
      description: "Expert in robot operation and mechanical assembly.",
      skills: ["Driver Control", "Mechanical Assembly", "Strategy"]
    },
    {
      img: "/images/axiom/shourya.jpg",
      name: "Shourya Bhogireddi",
      role: "Programmer & Secondary Driver",
      specialty: "Software Development",
      description: "Develops control systems and serves as backup driver.",
      skills: ["C++", "Control Systems", "Driver Training", "Code Review"]
    },
    {
      img: "/images/axiom/shyam.jpg",
      name: "Shyam Devanathan",
      role: "Builder & Programmer",
      specialty: "Hardware Integration",
      description: "Bridges mechanical and software systems for optimal performance.",
      skills: ["Hardware Integration", "Sensor Programming", "Assembly", "Debugging"]
    }
  ];

  return (
    <div className="axiom-theme min-h-screen bg-black">
      {/* Enhanced Hero Section */}
      <section className="relative overflow-hidden py-24 md:py-32">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-400/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <Badge className="mb-6 bg-blue-500/20 text-blue-300 border-blue-500/30 hover:bg-blue-500/30">
              <Star className="w-4 h-4 mr-2" />
              Team 14142A
            </Badge>
            <h1 className="text-4xl md:text-6xl font-light tracking-tight mb-6 text-white">
              Team <HighlightText type="gradient">Axiom</HighlightText>
            </h1>
            <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
              Building the future through mathematical precision and innovative engineering solutions.
            </p>

            {/* Team Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 max-w-2xl mx-auto"
            >
              <div className="bg-blue-500/10 rounded-xl p-4 border border-blue-500/20">
                <div className="text-2xl font-bold text-blue-400">{stats.competitions}</div>
                <div className="text-xs text-white/60">Competitions</div>
              </div>
              <div className="bg-blue-500/10 rounded-xl p-4 border border-blue-500/20">
                <div className="text-2xl font-bold text-blue-400">{stats.awards}</div>
                <div className="text-xs text-white/60">Awards</div>
              </div>
              <div className="bg-blue-500/10 rounded-xl p-4 border border-blue-500/20">
                <div className="text-2xl font-bold text-blue-400">{stats.codeCommits}</div>
                <div className="text-xs text-white/60">Commits</div>
              </div>
              <div className="bg-blue-500/10 rounded-xl p-4 border border-blue-500/20">
                <div className="text-2xl font-bold text-blue-400">{stats.hoursWorked}+</div>
                <div className="text-xs text-white/60">Hours</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Enhanced About Section */}
      <section className="py-20 bg-gradient-to-b from-black to-[#14142A]/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-light tracking-tight mb-6 text-white">About Team Axiom</h2>
            <div className="max-w-3xl mx-auto">
              <p className="text-white/70 text-lg leading-relaxed mb-6">
                Team 14142A, known as Team Axiom, is a dedicated group of high school students passionate about robotics and engineering. We are part of the VEX Robotics Competition, where we design, build, and program robots to compete in various challenges. Our team is the flaghip team of Irrational Robotics, where we are focused on winning as many competations as we can.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="bg-blue-500/10 rounded-xl p-6 border border-blue-500/20">
                  <Zap className="h-8 w-8 text-blue-400 mb-3 mx-auto" />
                  <h3 className="font-semibold text-white mb-2">Innovation First</h3>
                  <p className="text-white/60 text-sm">Pushing boundaries with creative solutions</p>
                </div>
                <div className="bg-blue-500/10 rounded-xl p-6 border border-blue-500/20">
                  <Users className="h-8 w-8 text-blue-400 mb-3 mx-auto" />
                  <h3 className="font-semibold text-white mb-2">Team Unity</h3>
                  <p className="text-white/60 text-sm">Collaboration drives our success</p>
                </div>
                <div className="bg-blue-500/10 rounded-xl p-6 border border-blue-500/20">
                  <Trophy className="h-8 w-8 text-blue-400 mb-3 mx-auto" />
                  <h3 className="font-semibold text-white mb-2">Excellence</h3>
                  <p className="text-white/60 text-sm">Striving for perfection in every detail</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Team Members Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-light tracking-tight mb-4 text-white">Meet Our Team</h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              The brilliant minds behind Team Axiom's success
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <Card className="overflow-hidden bg-gradient-to-br from-[#14142A] to-[#1a1a3a] border-blue-500/20 hover:border-blue-400/40 transition-all duration-300 h-full">
                  {/* Header with gradient */}
                  <div className="h-32 bg-gradient-to-br from-blue-600 via-blue-500 to-blue-700 relative overflow-hidden">
                    <div className="absolute inset-0 bg-black/20"></div>
                    <div className="absolute bottom-4 left-4">
                      <Badge className="bg-white/20 text-white border-white/30">
                        {member.specialty}
                      </Badge>
                    </div>
                  </div>

                  <CardContent className="p-6 -mt-8 relative">
                    {/* Profile Image */}
                    <div className="w-16 h-16 rounded-full overflow-hidden border-4 border-[#14142A] bg-blue-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      {member.img ? (
                        <img
                          src={member.img}
                          alt={member.name}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                            e.currentTarget.nextElementSibling?.classList.remove('hidden');
                          }}
                        />
                      ) : null}
                      <User className="h-8 w-8 text-blue-400 hidden" />
                    </div>

                    {/* Member Info */}
                    <h3 className="font-semibold text-white mb-1 group-hover:text-blue-400 transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-blue-400 text-sm font-medium mb-2">{member.role}</p>
                    <p className="text-white/60 text-xs mb-4 leading-relaxed">{member.description}</p>

                    {/* Skills */}
                    <div className="flex flex-wrap gap-1 mb-4">
                      {member.skills?.slice(0, 3).map((skill, skillIndex) => (
                        <Badge
                          key={skillIndex}
                          variant="secondary"
                          className="text-xs bg-blue-500/10 text-blue-300 border-blue-500/30"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>

                    {/* Action Button */}
                    {member.link && (
                      <Button
                        onClick={() => window.open(member.link, '_blank')}
                        variant="outline"
                        size="sm"
                        className="w-full border-blue-500/30 text-blue-400 hover:bg-blue-500/10 hover:border-blue-400/50"
                      >
                        <ExternalLink className="h-3 w-3 mr-2" />
                        View Profile
                      </Button>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Competition History Section */}
      <section className="py-24 bg-[#14142A]/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-light tracking-tight mb-3 text-white">Competition History</h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Our journey through VEX Robotics competitions and our achievements along the way.
            </p>
          </div>

          <Tabs defaultValue="competitions" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-2 bg-black/50">
              <TabsTrigger value="competitions" className="text-white data-[state=active]:bg-blue-500/20 data-[state=active]:text-blue-400">Competitions</TabsTrigger>
              <TabsTrigger value="awards" className="text-white data-[state=active]:bg-blue-500/20 data-[state=active]:text-blue-400">Awards</TabsTrigger>
            </TabsList>

            <TabsContent value="competitions" className="mt-8 fade-in">
              <Card className="bg-black/50 border-white/10">
                <CardContent className="pt-6 p-6">
                  <div className="flex items-start gap-6">
                    <div className="bg-blue-500/20 p-3 rounded-full h-fit">
                      <CalendarDays className="h-5 w-5 text-blue-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-medium mb-3 text-white">2025-2026 Season</h3>
                      <p className="text-white/70 mb-6">
                        VEX Robotics Competition: Push Back
                      </p>
                      <div className="space-y-4">
                        <div className="flex justify-between border-b border-white/10 pb-4">
                          <span className="text-white">Regional Qualifier</span>
                          <span className="text-blue-400">Coming Soon</span>
                        </div>
                        <div className="flex justify-between border-b border-white/10 pb-4">
                          <span className="text-white">State Championship</span>
                          <span className="text-white/50">TBD</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="awards" className="mt-8 fade-in">
              <Card className="bg-black/50 border-white/10">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-white">
                    <Trophy className="h-5 w-5 text-blue-400" />
                    Team Achievements
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-8 text-white/70">
                    As a growing team, we're working hard to earn our first awards. Check back soon as we compete in upcoming tournaments.
                  </p>
                  <div className="flex items-center justify-center p-8 border border-white/10 rounded-lg">
                    <div className="text-center">
                      <Trophy className="h-12 w-12 text-white/30 mx-auto mb-3" />
                      <p className="text-white/50 font-light">Future achievements loading...</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>



      {/* Robot Progress Showcase - Digital Notebook */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-3xl font-light tracking-tight mb-4 text-white">
              Robot Development <span className="text-blue-400 font-medium">Notebook</span>
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Follow our engineering journey through interactive documentation of our robot's evolution
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            {/* Progress Timeline */}
            <div className="relative mb-12" style={{marginBottom: "5rem"}}>
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 via-blue-400 to-blue-600"></div>

              {/* Progress Entry 1 */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="relative flex items-center mb-16"
              >
                <div className="w-1/2 pr-8 text-right">
                  <Card className="bg-[#14142A] border-blue-500/30 hover:border-blue-400/50 transition-colors">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-end gap-3 mb-3">
                        <span className="text-blue-400 font-medium">Week 1-2</span>
                        <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                      </div>
                      <h3 className="text-lg font-semibold text-white mb-2">Initial Drive CAD</h3>
                      <p className="text-white/70 text-sm">
                        Brainstorming possible designs and initial CAD models for the drivetrain and intake mechanisms.
                      </p>
                    </CardContent>
                  </Card>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-black z-10"></div>
                <div className="w-1/2 pl-8">
                  <div className="bg-[#14142A] rounded-lg p-4 border border-blue-500/30">
                    {/* Image placeholder */}
                    <div className="aspect-video rounded-lg overflow-hidden bg-blue-500/10">
                      <img
                        src="/images/axiom/cad.png"
                        alt="Initial Cad"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Progress Entry 2*/}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="relative flex items-center"
              >
                <div className="w-1/2 pr-8">
                   <div className="bg-[#14142A] rounded-lg p-4 border border-blue-500/30">
                    {/* Image placeholder */}
                    <div className="aspect-video rounded-lg overflow-hidden bg-blue-500/10">
                      <img
                        src="/images/axiom/dt.png"
                        alt="Initial Build"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-400 rounded-full border-4 border-black z-10 animate-pulse"></div>
                <div className="w-1/2 pl-8">
                  <Card className="bg-[#14142A] border-blue-400/50 hover:border-blue-400/70 transition-colors">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
                        <span className="text-blue-400 font-medium">Week 2-3</span>
                      </div>
                      <h3 className="text-lg font-semibold text-white mb-2">Initial Prototypes</h3>
                      <p className="text-white/70 text-sm">
                       Built our first drivetrain, ran bearing-comparison tests (flat vs low-profile vs retainer) and tuned with lubricant.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>

                {/* Progress Entry 3 */}
                {/* <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="relative flex items-center mb-16"
                >
                <div className="w-1/2 pr-8 text-right">
                  <Card className="bg-[#14142A] border-blue-500/30 hover:border-blue-400/50 transition-colors">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-end gap-3 mb-3">
                    <span className="text-blue-400 font-medium">Week 5-6</span>
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">Programming & Testing</h3>
                    <p className="text-white/70 text-sm">
                    Implemented autonomous routines and driver control programs. Conducted extensive testing and optimization.
                    </p>
                  </CardContent>
                  </Card>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-black z-10"></div>
                <div className="w-1/2 pl-8">
                  <div className="bg-[#14142A] rounded-lg p-4 border border-blue-500/30">
                  <div className="aspect-video bg-blue-500/10 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                    <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mx-auto mb-2">
                      <Code className="h-6 w-6 text-blue-400" />
                    </div>
                    <p className="text-white/50 text-sm">Code Testing</p>
                    </div>
                  </div>
                  </div>
                </div>
                </motion.div> */}

                {/* Progress Entry 4 - Current */}
                {/* <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="relative flex items-center"
                >
                <div className="w-1/2 pr-8">
                  <div className="bg-[#14142A] rounded-lg p-4 border border-blue-500/30">
                  <div className="aspect-video bg-blue-500/10 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                    <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mx-auto mb-2">
                      <CircuitBoard className="h-6 w-6 text-blue-400" />
                    </div>
                    <p className="text-white/50 text-sm">Final Assembly</p>
                    </div>
                  </div>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-400 rounded-full border-4 border-black z-10 animate-pulse"></div>
                <div className="w-1/2 pl-8">
                  <Card className="bg-[#14142A] border-blue-400/50 hover:border-blue-400/70 transition-colors">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                    <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
                    <span className="text-blue-400 font-medium">Current</span>
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">Competition Ready</h3>
                    <p className="text-white/70 text-sm">
                    Final robot assembly complete with optimized autonomous programs and driver control ready for competition.
                    </p>
                  </CardContent>
                  </Card>
                </div>
                </motion.div> */}
            </div>

            {/* Interactive Gallery Placeholder */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-[#14142A] rounded-2xl p-8 border border-blue-500/30"
            >
              <div className="text-center mb-6">
                <h3 className="text-xl font-semibold text-white mb-2">Interactive Image Gallery</h3>
                <p className="text-white/70">Click through our build progress photos and technical drawings</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {Array.from({ length: 6 }).map((_, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    className="aspect-square bg-blue-500/10 rounded-lg border border-blue-500/20 hover:border-blue-400/40 transition-all cursor-pointer group"
                  >
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center mx-auto mb-2 group-hover:bg-blue-400/30 transition-colors">
                          <Target className="h-4 w-4 text-blue-400" />
                        </div>
                        <p className="text-white/50 text-xs">Build Photo {index + 1}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Goals Section
      <section className="py-20 bg-[#14142A]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 fade-in">
            <h2 className="text-3xl font-light tracking-tight mb-3 text-white">Team Goals</h2>
            <p className="text-blue-200/80 max-w-2xl mx-auto">
              What drives us forward in our robotics journey.
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 fade-in" style={{ transitionDelay: "0.1s" }}>
            <div className="bg-white/5 border border-white/10 rounded-lg p-6 hover-lift">
              <div className="flex gap-4 items-start">
                <div className="bg-white/10 p-3 rounded-full">
                  <Trophy className="h-5 w-5 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2 text-white">Competition Excellence</h3>
                  <p className="text-blue-200/80">
                    Our goal is to excel in VEX competitions through strategic thinking, innovative design, and effective teamwork.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-lg p-6 hover-lift">
              <div className="flex gap-4 items-start">
                <div className="bg-white/10 p-3 rounded-full">
                  <Users className="h-5 w-5 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2 text-white">Skill Development</h3>
                  <p className="text-blue-200/80">
                    We're committed to continuously improving our programming, engineering, and problem-solving abilities.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-lg p-6 md:col-span-2 hover-lift">
              <div className="flex gap-4 items-start">
                <div className="bg-white/10 p-3 rounded-full">
                  <Target className="h-5 w-5 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2 text-white">Long-term Vision</h3>
                  <p className="text-blue-200/80">
                    We aim to establish a legacy of excellence within Irrational Robotics, inspiring future team members and contributing to the growth of STEM in our community.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>
      */}
    </div>
  );
}
