"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { toast } from "sonner";
import { Mail, User, CheckCircle2, Sparkles } from "lucide-react";

export default function RegistrationSection() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    experience: "",
    interest: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    await new Promise((resolve) => setTimeout(resolve, 1200));

    setIsLoading(false);
    setIsSubmitted(true);
    toast.success(`Welcome to Aura Yoga & Pilates, ${formData.firstName}!`, {
      description: "You're on the waitlist. We'll notify you as soon as we open.",
    });
  };

  return (
    <section id="register" className="py-24 bg-background">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={mounted ? { opacity: 0, y: 20 } : false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            Join the Waitlist
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Be the first to know when Aura Yoga & Pilates opens in Bole, Addis Ababa. Early registrants receive a free founding member class pack and exclusive studio previews.
          </p>
        </motion.div>

        <motion.div
          initial={mounted ? { opacity: 0, y: 30 } : false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <Card className="border border-border shadow-sm bg-white/80 backdrop-blur-sm">
            <CardHeader className="text-center pb-2">
              <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                <Sparkles className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="text-2xl">Register Your Interest</CardTitle>
              <CardDescription>
                No commitment required. Just early access to our launch.
              </CardDescription>
            </CardHeader>
            <CardContent>
              {isSubmitted ? (
                <div className="flex flex-col items-center gap-4 py-8 text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 15 }}
                  >
                    <CheckCircle2 className="h-16 w-16 text-primary" />
                  </motion.div>
                  <h3 className="text-2xl font-semibold">Congratulations, {formData.firstName}!</h3>
                  <div className="text-muted-foreground max-w-md space-y-2">
                    <p>
                      You've been added to our exclusive waitlist. We'll send updates to{" "}
                      <span className="font-medium text-foreground">{formData.email}</span>{" "}
                      as we get closer to opening day.
                    </p>
                    <p className="text-sm">
                      As a founding member, you'll receive early class access and a complimentary welcome pack.
                    </p>
                  </div>
                  <Button
                    variant="outline"
                    className="rounded-full mt-2"
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        firstName: "",
                        lastName: "",
                        email: "",
                        experience: "",
                        interest: "",
                      });
                    }}
                  >
                    Register Another Person
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">
                        <span className="flex items-center gap-1.5">
                          <User className="h-3.5 w-3.5" />
                          First Name
                        </span>
                      </Label>
                      <Input
                        id="firstName"
                        placeholder="Jane"
                        required
                        value={formData.firstName}
                        onChange={(e) =>
                          setFormData({ ...formData, firstName: e.target.value })
                        }
                        className="rounded-lg"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">
                        <span className="flex items-center gap-1.5">
                          <User className="h-3.5 w-3.5" />
                          Last Name
                        </span>
                      </Label>
                      <Input
                        id="lastName"
                        placeholder="Doe"
                        required
                        value={formData.lastName}
                        onChange={(e) =>
                          setFormData({ ...formData, lastName: e.target.value })
                        }
                        className="rounded-lg"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">
                      <span className="flex items-center gap-1.5">
                        <Mail className="h-3.5 w-3.5" />
                        Email Address
                      </span>
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="jane@example.com"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="rounded-lg"
                    />
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="experience">Yoga Experience</Label>
                      <Select
                        value={formData.experience}
                        onValueChange={(value) =>
                          setFormData({ ...formData, experience: value ?? "" })
                        }
                      >
                        <SelectTrigger id="experience" className="rounded-lg">
                          <SelectValue placeholder="Select level" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all-levels">All Levels</SelectItem>
                          <SelectItem value="intermediate">Intermediate</SelectItem>
                          <SelectItem value="beginner">Beginner</SelectItem>
                          <SelectItem value="advanced">Advanced</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="interest">Primary Interest</Label>
                      <Select
                        value={formData.interest}
                        onValueChange={(value) =>
                          setFormData({ ...formData, interest: value ?? "" })
                        }
                      >
                        <SelectTrigger id="interest" className="rounded-lg">
                          <SelectValue placeholder="Select interest" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="yoga">Yoga</SelectItem>
                          <SelectItem value="pilates">Pilates</SelectItem>
                          <SelectItem value="flexibility">Flexibility</SelectItem>
                          <SelectItem value="strength">Strength</SelectItem>
                          <SelectItem value="mindfulness">Mindfulness</SelectItem>
                          <SelectItem value="community">Community</SelectItem>
                          <SelectItem value="all">All of the above</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <Button
                    type="submit"
                    className="w-full rounded-lg"
                    size="lg"
                    disabled={isLoading}
                  >
                    {isLoading ? "Submitting..." : "Join Waitlist — It's Free"}
                  </Button>

                  <p className="text-xs text-center text-muted-foreground">
                    We respect your privacy. Unsubscribe at any time.
                  </p>
                </form>
              )}
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
