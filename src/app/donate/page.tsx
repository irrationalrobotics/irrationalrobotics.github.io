"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { HighlightText } from "@/components/highlight-text";
import Link from "next/link";
import { HeroSection } from "@/components/hero-section";
import { FeatureSection } from "@/components/feature-section";
import { DollarSign, Smile} from "lucide-react";

export default function DonatePage() {
  return (
    <div className="flex flex-col pb-12">
      <HeroSection
        title={
          <>
            Support <HighlightText>Irrational Robotics</HighlightText>
          </>
        }
        subtitle="Your contributions help us perform better at what we do"
      />
      
      {/*Why you should donate*/}
      <FeatureSection
        title="Why Donate?"
        description="Your donations can help grow our robotics team into something bigger than what it is today"
      >
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <DollarSign className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-medium">Our Benefits</h3>
              <ul className="text-sm text-muted-foreground">Have the ability to buy parts to develop our robots</ul>
              <ul className="text-sm text-muted-foreground">Being able to afford competition entrance costs for signature events and the world championship</ul>
              <ul className="text-sm text-muted-foreground">Fund outreach efforts to spread robotics in Allen and other marketing medias</ul>
            </div>
            <div className="space-y-2">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Smile className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-medium">Your Benefits</h3>
              <ul className="text-sm text-muted-foreground">Have your name on most marketing material</ul>
              <ul className="text-sm text-muted-foreground">Have your name on robots and other devices that's presented at competitions</ul>
              <ul className="text-sm text-muted-foreground">Any donations are tax exempt as we are considered a 501(c)(3) non-profit under The Hack Foundation</ul>
            </div>
          </div>
        </div>
      </FeatureSection>

      {/* Donation Form */}
      <section className="py-12">
        <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
          <Card className="border border-border/50 bg-card/60 group-hover:border-primary/50 transition-colors group hover-lift">
            <CardHeader>
              <CardTitle className="text-2xl text-white mb-2">
                Make a Donation
              </CardTitle>
              <p className="text-white/70 text-base">
                We accept donations via the link. All funds go directly to
                supporting our robotics teams.
              </p>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col items-center">
                <Button
                  asChild
                  size="lg"
                  className="w-full max-w-xs text-lg font-medium bg-blue-500 hover:bg-blue-600"
                >
                  <a
                    href="https://hcb.hackclub.com/donations/start/irrationalrobotics"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Donate with HCB
                  </a>
                </Button>
                <span className="text-xs text-white/50 block mt-4 text-center">
                  You will be redirected to The Hack Foundation to complete your donation.
                </span>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
      
      {/* Other Ways to Support */}
      <section className="py-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.75}}
          className="container mx-auto px-4 text-center"
        >
          <h2 className="text-2xl font-light text-white mb-4">
            Other Ways to Support
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto mb-6">
            Interested in sponsoring us, donating equipment, or collaborating?
            Reach out and we'll get in touch!
          </p>
          <Button asChild variant="outline" size="lg">
            <Link href="/contact">Become a Sponsor</Link>
          </Button>
        </motion.div>
      </section>
    </div>
  );
}