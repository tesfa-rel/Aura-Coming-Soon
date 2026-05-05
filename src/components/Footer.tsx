"use client";

import { Leaf, Camera, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-secondary/30 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <a href="#home" className="flex items-center gap-2 text-primary">
              <Leaf className="h-6 w-6" />
              <span className="text-xl font-semibold tracking-tight">Aura Yoga & Pilates</span>
            </a>
            <p className="mt-4 text-sm text-muted-foreground max-w-xs">
              A modern yoga & pilates studio built for mindfulness, movement, and community. Opening soon in Bole, Addis Ababa.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2.5">
              <li>
                <a href="#home" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#schedule" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Class Schedule
                </a>
              </li>
              <li>
                <a href="#register" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Join Waitlist
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Contact</h3>
            <ul className="space-y-2.5">
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4" />
                aurayogaddis@auray.studio
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" />
                Bole, Addis Ababa, ET
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Camera className="h-4 w-4" />
                @auraddis.studio
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Aura Yoga & Pilates Studio. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Made with care for the mindful community.
          </p>
        </div>
      </div>
    </footer>
  );
}
