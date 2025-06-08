"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { HeroSection } from "@/components/hero-section";
import { FeatureSection } from "@/components/feature-section";
import { HighlightText } from "@/components/highlight-text";

import { BookOpen, Award, Target, Users, Instagram, Youtube, Mail, ArrowRight } from "lucide-react";

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

  return (
    <div>
      <link rel="icon" type="image/svg+xml" href="favicon.svg" />
      {/* Hero Section */}
      <HeroSection
        title={
          <>
            Welcome to <HighlightText type="gradient">Irrational Robotics</HighlightText>
          </>
        }
        subtitle="Home of Team 14142A Axiom and Team 14142T Theorem"
      >
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
          {/* Wanted to make the button secondary but add borders*/}
          <Button variant="outline" className="px-8 bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80" asChild>
            <Link href="/donate">
              Donate
            </Link>
          </Button>
          <Button variant="outline" className="px-8" asChild>
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </HeroSection>

      {/* About Us Section */}
      <FeatureSection
        title="About Us"
        description="Irrational Robotics is a VEX Robotics organization from Allen, Texas. We are home to Team 14142A Axiom and Team 14142T Theorem, two teams competing in the VEX Robotics Competition. Our mission is to continue competitive VEX Robotics in our community (Allen, Texas)."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          <div className="fade-in space-y-6">
            <div className="flex gap-4 items-start">
              <div className="bg-primary/10 p-3 rounded-full">
                <Users className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-medium mb-2">Our Team</h3>
                <p className="text-muted-foreground">
                  We're a group of high school students who love robotics, programming, and problem-solving. We developed this team to compete in VEX Robotics competitions and to learn Engineering Skills.
                </p>
              </div>
            </div>
          </div>

          <div className="fade-in space-y-6" style={{ transitionDelay: "0.1s" }}>
            <div className="flex gap-4 items-start">
              <div className="bg-primary/10 p-3 rounded-full">
                <Target className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-medium mb-2">Our Philosophy</h3>
                <p className="text-muted-foreground">
                  Our name "Irrational Robotics" reflects our approach. Our number 14142 is the square root of 2, showing how there are always 2 solutions to every problem. We believe in thinking outside the box and embracing creativity in engineering.
                </p>
              </div>
            </div>
          </div>
        </div>
      </FeatureSection>

      {/* What is VEX Section */}
      <FeatureSection
        title="What is VEX Robotics?"
        description="VEX Robotics is an educational robotics program that allows students to design, build, and program robots for a competitive robotics tournament."
        className="bg-secondary/50"
        reverseOnMobile={true}
      >
        <div className="fade-in w-full max-w-xl">
          <Card className="bg-gradient-to-br from-secondary to-secondary/70 border-none">
            <CardContent className="p-8">
              <h3 className="text-2xl font-light mb-6">VEX V5 Competition</h3>
              <p className="text-muted-foreground">
                Teams build robots to compete in annual challenges, combining strategy, engineering, and programming skills. Each year has a unique game that tests your abilities to develop innovative hardware and software solutions.
              </p>
              <div className="mt-8">
                <Button variant="outline" className="border-white/20 text-primary hover:bg-secondary" asChild>
                  <Link href="/competitions">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </FeatureSection>

      {/* Goals Section */}
      <FeatureSection
        title="Our Goals"
        description="At Irrational Robotics, we have a couple of goals that we aim to achieve this season, in addition to wining as many games as possible."
      >
        <div className="grid grid-cols-1 gap-8 max-w-2xl mx-auto w-full">
          <div className="fade-in space-y-6">
            <div className="flex gap-4 items-start">
              <div className="bg-primary/10 p-3 rounded-full">
                <Target className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-medium mb-2">World's Finalist</h3>
                <p className="text-muted-foreground">
                  Become a finalist at the VEX Robotics World Championship. Our goal is to win throughout the season.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="bg-primary/10 p-3 rounded-full">
                <BookOpen className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-medium mb-2">Top 10 Skills Bot at State</h3>
                <p className="text-muted-foreground">
                  Rank our skills robot in the top 10 at the state-level competition.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="bg-primary/10 p-3 rounded-full">
                <Users className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-medium mb-2">Spread VEX in Our Community</h3>
                <p className="text-muted-foreground">
                  Promote VEX Robotics and inspire new teams in our local area.
                </p>
              </div>
            </div>
          </div>
        </div>
      </FeatureSection>

      {/* Contact Us Section */}
      <section className="py-24 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 fade-in">
            <h2 className="text-3xl font-light tracking-tight mb-4">Connect With Us</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Have questions about Irrational Robotics or interested in learning more? Reach out to us through our social media or send us an email.
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-8 justify-center items-center fade-in" style={{ transitionDelay: "0.1s" }}>
            <Card className="w-full max-w-sm border border-border/50 bg-card/60 group-hover:border-primary/50 transition-colors group hover-lift">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Instagram className="h-5 w-5 text-primary" />
                  Follow Us
                </CardTitle>
                <CardDescription>
                  Keep up with our latest updates, competition results, and memes on our Instagram and YouTube Page!
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-center gap-2 text-sm">
                  <Instagram className="h-4 w-4" />
                  <Link
                      href="https://instagram.com/irrationalrobotics"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group hover-lift"
                  >
                    @irrationalrobotics
                  </Link>
                </div>
                <div className="flex items-center justify-center gap-2 text-sm">
                  <Youtube className="h-4 w-4" />
                  <Link 
                    href="https://youtube.com/@irrationalrobotics" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="group hover-lift"
                  >
                    @irrationalrobotics
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Link href="/contact" className="group hover-lift">
              <Card className="w-full max-w-sm border border-border/50 bg-card/60 group-hover:border-primary/50 transition-colors">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Mail className="h-5 w-5 text-primary" />
                    Contact Us
                  </CardTitle>
                  <CardDescription>
                    For official inquiries, collaboration, sponsorship, or just to say hello... Click here for our contact form!
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-center gap-2 text-sm">
                    <Mail className="h-4 w-4" />
                    Get in Touch
                  </div>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
