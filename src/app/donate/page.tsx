"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { HighlightText } from "@/components/highlight-text";
import Link from "next/link";
import {
  DollarSign,
  Heart,
  Trophy,
  Users,
  Star,
  Gift,
  Target,
  ArrowRight,
  CheckCircle,
  Sparkles,
  Zap,
  Crown
} from "lucide-react";

export default function DonatePage() {
  const moneyearened = 0; // Enter money we have earned
  const percentFunded = moneyearened/120; // Use to calculate progress

  const donationTiers = [
    {
      title: "Supporter",
      amount: "$25+",
      description: "Help us get started",
      benefits: [
        "Digital thank you",
        "Recognition on website"
      ],
      icon: Heart,
      color: "bg-gradient-to-br from-blue-500/10 to-purple-500/10",
      borderColor: "border-blue-500/20",
      popular: false,
      donationlink: "https://hcb.hackclub.com/donations/start/irrationalrobotics?monthly=true&amount=2500"
    },
    {
      title: "Pi Level Sponsor",
      amount: "$314+",
      description: "Make a real impact",
      benefits: [
        "Everything in Supporter",
        "Name on team shirts",
        "Competition updates",
        "Small logo on robot"
      ],
      icon: Star,
      color: "bg-gradient-to-br from-purple-500/10 to-pink-500/10",
      borderColor: "border-purple-500/20",
      popular: true,
      donationlink: "https://hcb.hackclub.com/donations/start/irrationalrobotics?amount=31400"
    },
    {
      title: "Golden Level Sponsor",
      amount: "$610+",
      description: "Become our hero",
      benefits: [
        "Everything in Pi Level Sponsor",
        "Large logo on robot",
        "Social media shoutouts",
        "Competition photos",
        "Recognition at events"
      ],
      icon: Trophy,
      color: "bg-gradient-to-br from-amber-500/10 to-orange-500/10",
      borderColor: "border-amber-500/20",
      popular: false,
      donationlink: "https://hcb.hackclub.com/donations/start/irrationalrobotics?amount=61000"
    },
    {
      title: "Pythagoras Level Sponsor",
      amount: "$1,414+",
      description: "Change everything",
      benefits: [
        "Everything in Golden Level Sponsor",
        "Premium logo placement",
        "Personal team visit",
        "Custom recognition",
        "VIP competition access"

      ],
      icon: Crown,
      color: "bg-gradient-to-br from-emerald-500/10 to-teal-500/10",
      borderColor: "border-emerald-500/20",
      popular: false,
      donationlink: "https://hcb.hackclub.com/donations/start/irrationalrobotics?amount=141400"
    }
  ];

  const impactStats = [
    { label: "Competition Entries", value: "12+", icon: Target },
    { label: "Team Members Supported", value: "15", icon: Users },
    { label: "Robot Parts Funded", value: "200+", icon: Zap },
    { label: "Community Events", value: "8", icon: Sparkles }
  ];


  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/20">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-24 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/10" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">
              <Heart className="w-3 h-3 mr-1" />
              Make an Impact
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
              Fuel {" "}
              <HighlightText type="gradient">Irrational Robotics</HighlightText>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Every donation brings us closer to our goals. Help us compete, innovate, and inspire the next generation of engineers.
            </p>

            {/* Progress Indicator */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="max-w-md mx-auto mb-8"
            >
              <div className="bg-card/50 backdrop-blur-sm rounded-xl p-6 border border-border/50">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium">Season Goal</span>
                  <span className="text-sm text-muted-foreground">${moneyearened} / $12,000</span>
                </div>
                <Progress value={percentFunded} className="mb-2" />
                <p className="text-xs text-muted-foreground">
                  {Math.round(percentFunded)}% funded • Help us reach the World Championships!
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button size="lg" className="text-lg px-8 py-6 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 shadow-lg">
                <a href="https://hcb.hackclub.com/donations/start/irrationalrobotics" target="_blank" rel="noopener noreferrer" className="flex items-center">
                  <Heart className="w-5 h-5 mr-2" />
                  Donate Now
                </a>
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6" asChild>
                <Link href="#tiers">
                  View Tiers
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>


      {/* Donation Tiers */}
      <section id="tiers" className="py-24 bg-gradient-to-b from-transparent to-secondary/10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
              Choose Your Impact Level
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Every contribution makes a difference. Select the tier that feels right for you.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {donationTiers.map((tier, index) => (
              <motion.div
                key={tier.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="relative"
              >
                {tier.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                    <Badge className="bg-gradient-to-r from-primary to-primary/80 text-white px-4 py-1">
                      <Star className="w-3 h-3 mr-1" />
                      Most Popular
                    </Badge>
                  </div>
                )}
                <Card className={`h-full ${tier.color} ${tier.borderColor} border-2 transition-all duration-300 hover:scale-105 hover:shadow-xl group`}>
                  <CardHeader className="text-center pb-4">
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <tier.icon className="w-8 h-8 text-primary" />
                    </div>
                    <CardTitle className="text-2xl font-bold mb-2">{tier.title}</CardTitle>
                    <div className="text-3xl font-bold text-primary mb-2">{tier.amount}</div>
                    <p className="text-muted-foreground">{tier.description}</p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <ul className="space-y-2">
                      {tier.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                    <Button
                      className="w-full mt-6 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70"
                      asChild
                    >
                      <a href={tier.donationlink} target="_blank" rel="noopener noreferrer">
                        Choose {tier.title}
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Donate Section */}
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
                Why Your Support Matters
              </h2>
              <p className="text-xl text-muted-foreground">
                See exactly how your contribution transforms our team's potential
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="space-y-6"
              >
                <Card className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 border-blue-500/20">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-blue-500/20 p-3 rounded-full">
                        <Target className="w-6 h-6 text-blue-400" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-2">Competition Excellence</h3>
                        <p className="text-muted-foreground text-sm">
                          Fund robot parts, travel expenses, and entry fees for regional and world championships.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border-purple-500/20">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-purple-500/20 p-3 rounded-full">
                        <Users className="w-6 h-6 text-purple-400" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-2">Team Development</h3>
                        <p className="text-muted-foreground text-sm">
                          Support workshops, training materials, and skill development for our passionate team members.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-emerald-500/10 to-teal-500/10 border-emerald-500/20">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-emerald-500/20 p-3 rounded-full">
                        <Sparkles className="w-6 h-6 text-emerald-400" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-2">Community Impact</h3>
                        <p className="text-muted-foreground text-sm">
                          Enable outreach programs to inspire and mentor younger students in STEM.
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
                <Card className="bg-gradient-to-br from-amber-500/10 to-orange-500/10 border-amber-500/20">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-amber-500/20 p-3 rounded-full">
                        <Gift className="w-6 h-6 text-amber-400" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-2">Tax Benefits</h3>
                        <p className="text-muted-foreground text-sm">
                          All donations are tax-deductible as we're a 501(c)(3) non-profit under The Hack Foundation.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-rose-500/10 to-pink-500/10 border-rose-500/20">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-rose-500/20 p-3 rounded-full">
                        <Heart className="w-6 h-6 text-rose-400" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-2">Recognition</h3>
                        <p className="text-muted-foreground text-sm">
                          Get featured on our website, social media, and robot displays at competitions.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-indigo-500/10 to-blue-500/10 border-indigo-500/20">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-indigo-500/20 p-3 rounded-full">
                        <Trophy className="w-6 h-6 text-indigo-400" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-2">Exclusive Access</h3>
                        <p className="text-muted-foreground text-sm">
                          Get behind-the-scenes content, competition updates, and direct access to our team.
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

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-primary/10 via-primary/5 to-secondary/10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
              Ready to Make a Difference?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join our mission to excel in robotics and inspire the next generation of engineers. Every contribution counts.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="text-lg px-8 py-6 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 shadow-lg"
                asChild
              >
                <a href="https://hcb.hackclub.com/donations/start/irrationalrobotics" target="_blank" rel="noopener noreferrer">
                  <Heart className="w-5 h-5 mr-2" />
                  Donate Now
                </a>
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6" asChild>
                <Link href="/contact">
                  <Users className="w-5 h-5 mr-2" />
                  Become a Sponsor
                </Link>
              </Button>
            </div>

            <p className="text-sm text-muted-foreground mt-6">
              Secure donation processing powered by The Hack Foundation • 501(c)(3) tax-exempt
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
