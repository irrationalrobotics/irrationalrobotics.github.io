"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { HeroSection } from "@/components/hero-section";
import { FeatureSection } from "@/components/feature-section";
import { HighlightText } from "@/components/highlight-text";

import { BookOpen, Code, Lightbulb, Wrench, CircuitBoard, Share2, Trophy, Users, Target } from "lucide-react";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div>
      {/* Hero Section - Fixed button centering */}
      <HeroSection
        title={
          <>
            About <HighlightText type="gradient">Irrational Robotics</HighlightText>
          </>
        }
        subtitle="Our story, mission, and values"
        showRobot={false}
      >
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <Button asChild>
            <Link href="/axiom">
              Meet Team Axiom
            </Link>
          </Button>
          <Button asChild>
            <Link href="/theorem">
              Meet Team Theorem
            </Link>
          </Button>
          <Button variant="outline">
            <Link href="/contact">
              Contact Us
            </Link>
          </Button>
        </div>
      </HeroSection>

      {/* Our Story Section - Removed robot, simplified */}
      <FeatureSection
        title="Our Story"
        description="Irrational Robotics began as a group of select students who competed in various teams in First and VEX. We came together to form our organization and to compete together. We chose our name to represent how we approach complex problems. Just like irrational numbers that continue infinitely without repeating patterns, our creativity and innovation know no bounds."
      >
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-2">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Target className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-medium">Our Mission</h3>
              <p className="text-sm text-muted-foreground">
                To continue competitive VEX Robotics in our community in Allen, Texas.
              </p>
            </div>
            <div className="space-y-2">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-medium">Our Values</h3>
              <p className="text-sm text-muted-foreground">
                Collaboration, continuous learning, and pushing the boundaries of what's possible in robotics.
              </p>
            </div>
            <div className="space-y-2">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Trophy className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-medium">Our Goal</h3>
              <p className="text-sm text-muted-foreground">
                Excellence in VEX Robotics competitions, winning awards, and inspiring the next generation of engineers.
              </p>
            </div>
          </div>
        </div>
      </FeatureSection>

      {/* Our Teams Section - Kept as requested */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Teams</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Irrational Robotics is the parent organization for multiple VEX Robotics Competition teams.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
            <Card className="overflow-hidden">
              <div className="h-20 bg-[#14142A]" />
              <CardHeader className="-mt-4">
                <CardTitle className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-white">
                    A
                  </div>
                  Team 14142A Axiom
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-6">
                  Our main team, focused on winning VEX Robotics Competitions.
                </p>
                <Button asChild>
                  <Link href="/axiom">Learn More</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="h-20 bg-gradient-to-r from-gray-700 to-gray-900" />
              <CardHeader className="-mt-4">
                <CardTitle className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-white">
                    T
                  </div>
                  Team 14142T Theorem
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-6">
                  Our upcoming team (not yet registered), which will focus on
                  development.
                </p>
                <Button asChild>
                  <Link href="/theorem">
                    Learn More
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Approach Section - Redesigned for better visual appeal */}
      <FeatureSection
        title="Our Approach"
        description="We combine mathematical principles with engineering creativity to develop innovative robotics solutions through a systematic methodology."
      >
        <div className="w-full max-w-4xl">
          {/* Main approach cards stacked vertically */}
          <div className="space-y-8 mb-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex items-center gap-6 bg-card/50 rounded-2xl p-6 border border-border/50"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0">
                <Wrench className="h-8 w-8 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Build & Iterate</h3>
                <p className="text-muted-foreground">
                  We construct prototypes, test rigorously, and refine our designs through multiple iterations.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex items-center gap-6 bg-card/50 rounded-2xl p-6 border border-border/50"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0">
                <Code className="h-8 w-8 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Program & Optimize</h3>
                <p className="text-muted-foreground">
                  We write code that is optimized and modular, ensuring our robots operate efficiently and effectively.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex items-center gap-6 bg-card/50 rounded-2xl p-6 border border-border/50"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0">
                <CircuitBoard className="h-8 w-8 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Integrate & Test</h3>
                <p className="text-muted-foreground">
                  We combine all systems into a cohesive robot and conduct comprehensive testing before competition.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </FeatureSection>

      {/* About VEX Section - Simplified and less text-heavy */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">About <HighlightText type="gradient">VEX Robotics</HighlightText></h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The world's largest high school robotics competition, challenging students to innovate and excel.
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Trophy className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">Competition Format</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Teams design robots for annual game challenges, competing in qualification and elimination rounds.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lightbulb className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">Skills Development</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Students gain hands-on experience in programming, engineering design, and project management.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">Global Community</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Connect with thousands of students worldwide who share a passion for robotics and innovation.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg">
              <Link href="/competitions">
                Learn About Competitions
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
