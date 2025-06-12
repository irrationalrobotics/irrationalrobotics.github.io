"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { HighlightText } from "@/components/highlight-text";

import {
  Instagram,
  Youtube,
  Mail,
  Send,
  MessageCircle,
  Users,
  MapPin,
  Clock,
  Phone,
  Globe,
  ArrowRight,
  CheckCircle,
  Heart,
  Sparkles
} from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

const contactMethods = [
  {
    icon: Mail,
    title: "Email Us",
    description: "Send us an email and we'll respond within 24 hours",
    action: "irrationalvexrobotics@gmail.com",
    href: "mailto:irrationalvexrobotics@gmail.com",
    color: "from-blue-500/10 to-indigo-500/10",
    borderColor: "border-blue-500/20",
    iconColor: "text-blue-400"
  },
  {
    icon: Instagram,
    title: "Follow Us",
    description: "Follow our journey on Instagram",
    action: "@irrationalrobotics",
    href: "https://instagram.com/irrationalrobotics",
    color: "from-pink-500/10 to-purple-500/10",
    borderColor: "border-pink-500/20",
    iconColor: "text-pink-400"
  },
  {
    icon: Youtube,
    title: "Watch Videos",
    description: "Check out our latest videos on YouTube",
    action: "@irrationalrobotics",
    href: "https://www.youtube.com/@irrationalrobotics",
    color: "from-red-500/10 to-rose-500/10",
    borderColor: "border-red-500/20",
    iconColor: "text-red-400"
  }
];

const quickInfo = [
  { icon: MapPin, label: "Location", value: "Allen, Texas" },
  { icon: Users, label: "Team Size", value: "10 Members" },
  { icon: Globe, label: "Competition", value: "VEX V5" },
  { icon: Clock, label: "Response Time", value: "< 24 hours" }
];

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    // TODO: Replace with your own Formspree endpoint.
    const formspreeEndpoint = "https://formspree.io/f/xanjopjr";

    try {
      const response = await fetch(formspreeEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        toast.success("Your message has been sent successfully!");
        form.reset();
      } else {
        const responseData = await response.json();
        if (responseData.errors) {
          const errorMessage = responseData.errors.map((error: { message: string }) => error.message).join(", ");
          toast.error(`An error occurred: ${errorMessage}`);
        } else {
          toast.error("An error occurred while sending your message.");
        }
      }
    } catch (error) {
      toast.error("An error occurred while sending your message.");
    } finally {
      setIsSubmitting(false);
    }
  }

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
              <MessageCircle className="w-3 h-3 mr-1" />
              Let's Connect
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
              Get in <HighlightText type="gradient">Touch</HighlightText>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Have questions about our teams, want to collaborate, or interested in sponsoring? We'd love to hear from you!
            </p>

            {/* Quick Info Stats */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto"
            >
              {quickInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                  className="bg-card/50 backdrop-blur-sm rounded-xl p-4 border border-border/50"
                >
                  <info.icon className="w-5 h-5 text-primary mx-auto mb-2" />
                  <div className="text-sm font-medium text-primary mb-1">
                    {info.value}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {info.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 border-y border-border/50 bg-card/20 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Choose Your Preferred Method
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Multiple ways to reach out and connect with our team
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {contactMethods.map((method, index) => (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <Card className={`h-full bg-gradient-to-br ${method.color} ${method.borderColor} border transition-all duration-300 hover:scale-105 hover:shadow-xl group cursor-pointer`}>
                  <a href={method.href} target="_blank" rel="noopener noreferrer" className="block h-full">
                    <CardContent className="p-8 text-center h-full flex flex-col">
                      <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                        <method.icon className={`w-8 h-8 ${method.iconColor}`} />
                      </div>
                      <h3 className="text-xl font-semibold mb-3">{method.title}</h3>
                      <p className="text-muted-foreground text-sm mb-4 flex-grow">
                        {method.description}
                      </p>
                      <div className="flex items-center justify-center gap-2 text-primary group-hover:text-primary/80 transition-colors">
                        <span className="font-medium">{method.action}</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </CardContent>
                  </a>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-24 bg-gradient-to-b from-transparent to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                Send Us a Message
              </h2>
              <p className="text-xl text-muted-foreground">
                Fill out the form below and we'll get back to you within 24 hours
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                <CardContent className="p-8">
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-base font-medium">Full Name</FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="Your full name"
                                  className="h-12 bg-background/50 border-border/50 focus:border-primary/50"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-base font-medium">Email Address</FormLabel>
                              <FormControl>
                                <Input
                                  type="email"
                                  placeholder="your.email@example.com"
                                  className="h-12 bg-background/50 border-border/50 focus:border-primary/50"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <FormField
                        control={form.control}
                        name="subject"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-base font-medium">Subject</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="What would you like to discuss?"
                                className="h-12 bg-background/50 border-border/50 focus:border-primary/50"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-base font-medium">Message</FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Tell us more about your inquiry..."
                                className="min-h-[150px] resize-none bg-background/50 border-border/50 focus:border-primary/50"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <div className="flex flex-col sm:flex-row gap-4 pt-4">
                        <Button
                          type="submit"
                          size="lg"
                          className="flex-1 h-12 text-lg bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 shadow-lg"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? (
                            <>
                              <motion.div
                                className="mr-2"
                                animate={{ rotate: 360 }}
                                transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                              >
                                <svg
                                  className="h-4 w-4"
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                >
                                  <circle
                                    className="opacity-25"
                                    cx="12"
                                    cy="12"
                                    r="10"
                                    stroke="currentColor"
                                    strokeWidth="4"
                                  />
                                  <path
                                    className="opacity-75"
                                    fill="currentColor"
                                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                  />
                                </svg>
                              </motion.div>
                              Opening Email...
                            </>
                          ) : (
                            <>
                              <Send className="mr-2 h-5 w-5" />
                              Send Message
                            </>
                          )}
                        </Button>
                        <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="w-4 h-4 text-emerald-400" />
                          <span>We respond within 24 hours</span>
                        </div>
                      </div>
                    </form>
                  </Form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Links */}
      <section className="py-16 bg-card/30 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <Heart className="w-5 h-5 text-red-400" />
              <Sparkles className="w-4 h-4 text-amber-400" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Looking for Specific Team Info?</h3>
            <p className="text-muted-foreground mb-8">
              Want to learn more about our individual teams? Check out their dedicated pages for detailed information about team members, achievements, and projects.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" size="lg" className="border-blue-500/30 hover:bg-blue-500/10" asChild>
                <a href="/axiom">
                  <Users className="w-5 h-5 mr-2" />
                  Team 14142A Axiom
                </a>
              </Button>
              <Button variant="outline" size="lg" className="border-emerald-500/30 hover:bg-emerald-500/10" asChild>
                <a href="/theorem">
                  <Users className="w-5 h-5 mr-2" />
                  Team 14142T Theorem
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
