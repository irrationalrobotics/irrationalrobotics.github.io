"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { HeroSection } from "@/components/hero-section";
import { FeatureSection } from "@/components/feature-section";
import { HighlightText } from "@/components/highlight-text";

import { CalendarDays, Users, Trophy, Clock, Map, Target } from "lucide-react";

export default function CompetitionsPage() {
  const [activeTab, setActiveTab] = useState("current");

  return (
    <div>
      {/* Hero Section */}
      <HeroSection
        title={
          <>
            VEX <HighlightText type="gradient">Competitions</HighlightText>
          </>
        }
        subtitle="Where robotics engineering meets competitive challenge"
      >
        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mt-8">
          <Button asChild>
            <Link href="/axiom">
              Team Axiom Results
            </Link>
          </Button>
          <Button asChild>
            <Link href="/theorem">
              Team Theorem Results
            </Link>
          </Button>
        </div>
      </HeroSection>

      {/* Current Season Section */}
      <FeatureSection
        title="Current Season: 2024-2025"
        description="This year's VEX Robotics Competition game is Push Back, where robots compete to gather and dispense objects into scoring zones."
      >
        <div className="w-full max-w-md aspect-video relative rounded-lg overflow-hidden bg-gradient-to-br from-primary/80 to-primary flex items-center justify-center">
          <div className="absolute inset-0 flex items-center justify-center bg-black/30">
            <div className="text-center p-8 text-white">
              <h3 className="text-2xl font-bold">VRC Push Back</h3>
              <p className="mt-2 text-sm text-white/80">
                Teams build robots to intake and outtake blocks into scoring zones while defending their territories.
              </p>
            </div>
          </div>
        </div>
      </FeatureSection>

      {/* Competition Phases Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Competition Structure</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              VEX Robotics Competition follows a progressive structure from local to global events.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Tabs defaultValue="local" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="local">Local Events</TabsTrigger>
                <TabsTrigger value="regional">Regional</TabsTrigger>
                <TabsTrigger value="state">State</TabsTrigger>
                <TabsTrigger value="world">World</TabsTrigger>
              </TabsList>

              <TabsContent value="local" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Map className="h-5 w-5 text-primary" />
                      Local Tournaments
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <p>
                        Local tournaments are the first level of VEX Robotics Competition. These events:
                      </p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>Are hosted by schools, community centers, or robotics organizations</li>
                        <li>Typically include 20-40 teams from the surrounding area</li>
                        <li>Offer qualification spots for regional championships</li>
                        <li>Feature qualification matches followed by elimination rounds</li>
                        <li>Present awards for tournament champions, excellence, design, and more</li>
                      </ul>
                      <p className="text-muted-foreground text-sm">
                        These tournaments provide an accessible entry point for teams to gain competitive experience.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="regional" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Map className="h-5 w-5 text-primary" />
                      Regional Championships
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <p>
                        Regional championships bring together top-performing teams from local tournaments within a region:
                      </p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>Typically include 40-80 teams who qualified through local events</li>
                        <li>Offer higher level of competition and increased challenge</li>
                        <li>Award qualification spots for state or provincial championships</li>
                        <li>Feature more extensive judging for team awards</li>
                        <li>Often span multiple days for competition rounds</li>
                      </ul>
                      <p className="text-muted-foreground text-sm">
                        Success at regional events demonstrates a team's growth and competitive abilities within their region.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="state" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Map className="h-5 w-5 text-primary" />
                      State/Provincial Championships
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <p>
                        State championships represent the highest level of competition within a state or province:
                      </p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>Feature the best teams from throughout the state/province</li>
                        <li>Higher stakes with limited World Championship qualification spots</li>
                        <li>More rigorous judging and technical inspections</li>
                        <li>Typically hosted at larger venues with multiple competition fields</li>
                        <li>Often include opening/closing ceremonies and special events</li>
                      </ul>
                      <p className="text-muted-foreground text-sm">
                        Qualifying for World Championships is a primary goal for many teams at this level.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="world" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Trophy className="h-5 w-5 text-primary" />
                      VEX Robotics World Championship
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <p>
                        The World Championship is the pinnacle event of the VEX Robotics Competition season:
                      </p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>Brings together over 1,600 teams from more than 40 countries</li>
                        <li>Held annually in Dallas, Texas as a multi-day event</li>
                        <li>Teams compete in divisional formats before advancing to finals</li>
                        <li>Features the VEX Excellence Award - the highest honor in VEX Robotics</li>
                        <li>Includes special events, workshops, and networking opportunities</li>
                      </ul>
                      <p className="text-muted-foreground text-sm">
                        Competing at the World Championship represents the highest achievement for VEX teams.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Match Structure Section */}
      <FeatureSection
        title="Match Structure"
        description="VEX Robotics Competition matches follow a standardized format that combines autonomous and driver-controlled periods."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-3xl">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-primary" />
                Autonomous Period
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                The match begins with a 15-second autonomous period where robots operate solely through pre-programmed instructions without driver input.
              </p>
              <div className="flex items-center gap-2 text-muted-foreground text-sm">
                <div className="w-3 h-3 rounded-full bg-primary"></div>
                <span>Special autonomous bonus points available</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground text-sm mt-2">
                <div className="w-3 h-3 rounded-full bg-primary"></div>
                <span>Tests programming skills and strategy</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5 text-primary" />
                Driver Control Period
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Following autonomous, the 1:45 minute driver-controlled period allows team members to directly control their robots using controllers.
              </p>
              <div className="flex items-center gap-2 text-muted-foreground text-sm">
                <div className="w-3 h-3 rounded-full bg-primary"></div>
                <span>Tests driving skill and strategic thinking</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground text-sm mt-2">
                <div className="w-3 h-3 rounded-full bg-primary"></div>
                <span>Real-time adaptability to field conditions</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </FeatureSection>

      {/* Team Axiom Competition History */}
      <section className="py-16 bg-[#14142A] text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Team Axiom Competition History</h2>
            <p className="text-blue-200/80 max-w-2xl mx-auto">
              Follow Team 14142A Axiom's journey through VEX Robotics competitions.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="bg-white/10 text-white border-none">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CalendarDays className="h-5 w-5 text-blue-300" />
                  2024-2025 Season
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <p>
                    Team Axiom is preparing for its first competitive season in the VEX Robotics Competition.
                    Stay tuned for upcoming competition results and highlights!
                  </p>

                  <div className="p-6 bg-white/5 rounded-lg text-center">
                    <Target className="h-12 w-12 text-blue-300 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Upcoming Competitions</h3>
                    <p className="text-blue-200/80">
                      Our competition schedule will be announced soon. Check back for updates!
                    </p>
                  </div>

                  <div className="flex justify-center">
                    <Button asChild variant="outline" className="border-white/30 hover:bg-white/10 text-white">
                      <Link href="/axiom">
                        More About Team Axiom
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
