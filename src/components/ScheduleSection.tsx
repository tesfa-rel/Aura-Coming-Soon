"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Clock, Users, Flame, Moon, Sun, Wind, Heart, Star } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const classes = [
  {
    name: "Sunrise Vinyasa",
    time: "6:30 AM",
    duration: "60 min",
    instructor: "Helen",
    level: "All Levels",
    day: "Mon",
    icon: Sun,
    color: "bg-amber-50 text-amber-700 border-amber-200",
  },
  {
    name: "Power Flow",
    time: "12:00 PM",
    duration: "45 min",
    instructor: "Helen",
    level: "Intermediate",
    day: "Mon",
    icon: Flame,
    color: "bg-orange-50 text-orange-700 border-orange-200",
  },
  {
    name: "Gentle Hatha",
    time: "9:00 AM",
    duration: "75 min",
    instructor: "Helen",
    level: "Beginner",
    day: "Tue",
    icon: Moon,
    color: "bg-sky-50 text-sky-700 border-sky-200",
  },
  {
    name: "Restorative Yoga",
    time: "7:00 PM",
    duration: "90 min",
    instructor: "Helen",
    level: "All Levels",
    day: "Tue",
    icon: Wind,
    color: "bg-emerald-50 text-emerald-700 border-emerald-200",
  },
  {
    name: "Core Strength",
    time: "10:00 AM",
    duration: "50 min",
    instructor: "Helen",
    level: "Intermediate",
    day: "Wed",
    icon: Flame,
    color: "bg-orange-50 text-orange-700 border-orange-200",
  },
  {
    name: "Yin Yoga",
    time: "6:00 PM",
    duration: "60 min",
    instructor: "Helen",
    level: "All Levels",
    day: "Wed",
    icon: Heart,
    color: "bg-rose-50 text-rose-700 border-rose-200",
  },
  {
    name: "Pilates Mat",
    time: "8:00 AM",
    duration: "55 min",
    instructor: "Helen",
    level: "All Levels",
    day: "Wed",
    icon: Star,
    color: "bg-violet-50 text-violet-700 border-violet-200",
  },
  {
    name: "Sunrise Vinyasa",
    time: "6:30 AM",
    duration: "60 min",
    instructor: "Helen",
    level: "All Levels",
    day: "Thu",
    icon: Sun,
    color: "bg-amber-50 text-amber-700 border-amber-200",
  },
  {
    name: "Meditation & Breath",
    time: "5:30 PM",
    duration: "45 min",
    instructor: "Helen",
    level: "Beginner",
    day: "Thu",
    icon: Wind,
    color: "bg-teal-50 text-teal-700 border-teal-200",
  },
  {
    name: "Sunrise Vinyasa",
    time: "6:30 AM",
    duration: "90 min",
    instructor: "Helen",
    level: "All Levels",
    day: "Fri",
    icon: Sun,
    color: "bg-amber-50 text-amber-700 border-amber-200",
  },
  {
    name: "Power Flow",
    time: "9:00 AM",
    duration: "60 min",
    instructor: "Helen",
    level: "Intermediate",
    day: "Fri",
    icon: Flame,
    color: "bg-orange-50 text-orange-700 border-orange-200",
  },
  {
    name: "Weekend Warrior",
    time: "10:00 AM",
    duration: "90 min",
    instructor: "Helen",
    level: "Advanced",
    day: "Sat",
    icon: Star,
    color: "bg-violet-50 text-violet-700 border-violet-200",
  },
  {
    name: "Community Class",
    time: "11:30 AM",
    duration: "60 min",
    instructor: "Helen",
    level: "All Levels",
    day: "Sat",
    icon: Users,
    color: "bg-indigo-50 text-indigo-700 border-indigo-200",
  },
  {
    name: "Sunday Slow Flow",
    time: "10:00 AM",
    duration: "75 min",
    instructor: "Helen",
    level: "All Levels",
    day: "Sun",
    icon: Moon,
    color: "bg-sky-50 text-sky-700 border-sky-200",
  },
];

export default function ScheduleSection() {
  const [activeDay, setActiveDay] = useState("Wed");
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const filteredClasses = classes.filter((c) => c.day === activeDay);

  return (
    <section id="schedule" className="py-24 bg-secondary/40">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={mounted ? { opacity: 0, y: 20 } : false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            Weekly Class Schedule
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Plan your week with our diverse range of yoga, pilates, and meditation classes designed for every level.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {days.map((day) => (
            <Button
              key={day}
              variant={activeDay === day ? "default" : "outline"}
              size="sm"
              className="rounded-full px-5"
              onClick={() => setActiveDay(day)}
            >
              {day}
            </Button>
          ))}
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filteredClasses.map((cls, index) => {
            const Icon = cls.icon;
            return (
              <motion.div
                key={`${cls.name}-${cls.time}`}
                initial={mounted ? { opacity: 0, y: 20 } : false}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Card className={`border ${cls.color} bg-white/80 backdrop-blur-sm hover:shadow-md transition-shadow`}>
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg font-semibold flex items-center gap-2">
                        <Icon className="h-5 w-5" />
                        {cls.name}
                      </CardTitle>
                      <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-white/80 border border-current opacity-70">
                        {cls.level}
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="flex items-center gap-4 text-sm">
                      <div className="flex items-center gap-1.5">
                        <Clock className="h-4 w-4 opacity-70" />
                        <span>{cls.time}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Users className="h-4 w-4 opacity-70" />
                        <span>{cls.duration}</span>
                      </div>
                    </div>
                    <p className="mt-3 text-sm font-medium opacity-80">
                      with {cls.instructor}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {filteredClasses.length === 0 && (
          <div className="text-center py-12 text-muted-foreground">
            No classes scheduled for this day. Rest and recharge!
          </div>
        )}
      </div>
    </section>
  );
}
