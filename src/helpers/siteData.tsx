import {
  Shield,
  Zap,
  Footprints,
  Users,
  HeartPulse,
  BrainCircuit,
  Swords,
  PersonStanding,
} from "lucide-react";

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#services", label: "Disciplines" },
  { href: "#about", label: "About" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "/gallery", label: "Gallery" },
  { href: "#contact", label: "Contact" },
];

export const services = [
  { name: "Muay Thai", icon: Swords },
  { name: "Boxing", icon: Zap },
  { name: "Kickboxing", icon: Footprints },
  { name: "MMA", icon: Users },
  { name: "Wrestling", icon: PersonStanding },
  { name: "BJJ", icon: Users },
  { name: "Fitness", icon: HeartPulse },
  { name: "Self Defense", icon: Shield },
  { name: "Mindset", icon: BrainCircuit },
];

export const testimonials = [
  {
    name: "Rohan Sharma",
    role: "Student",
    avatar: "",
    quote:
      "The training here is intense but incredibly rewarding. The coaches are top-notch and really push you to be your best. I've never been in better shape.",
  },
  {
    name: "Priya Singh",
    role: "Fitness Enthusiast",
    avatar: "",
    quote:
      "Vajra Academy is more than a gym, it's a community. The atmosphere is so supportive. I started for fitness and now I'm in love with Muay Thai.",
  },
  {
    name: "Amit Kumar",
    role: "MMA Aspirant",
    avatar: "",
    quote:
      "The level of detail in the coaching is amazing. I've learned so much about technique and strategy. This is the place to be for serious martial artists.",
  },
  {
    name: "Anjali Verma",
    role: "Student",
    avatar: "",
    quote:
      "I joined for self-defense classes and my confidence has skyrocketed. The instructors are patient and create a very safe learning environment for everyone.",
  },
  {
    name: "Vikram Rathore",
    role: "Wrestler",
    avatar: "",
    quote:
      "The wrestling and BJJ programs are legit. Great training partners and a strong focus on fundamentals. Highly recommend for any grappler.",
  },
];