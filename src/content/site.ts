/**
 * Ditronics — site content
 * Single source of truth for company facts, navigation and editorial copy.
 * Edit values here; components read from this file.
 */

import { unsplash } from "@/lib/img";

export const company = {
  name: "Ditronics",
  legalName: "Ditronics",
  tagline: "Engineering Digital Solutions for Tanzania.",
  description:
    "Ditronics is a Tanzanian technology company building software, IoT monitoring systems and professional visual media for organisations across East Africa.",
  url: "https://ditronics.co.tz",
  locale: "en_TZ",
  founded: "Dar es Salaam",
  email: "info@ditronics.co.tz",
  phone: "+255 700 000 000",
  whatsapp: "+255700000000",
  address: {
    street: "Shangwe Street, Kibada",
    district: "Kigamboni",
    city: "Dar es Salaam",
    country: "Tanzania",
  },
  // Centre of Kigamboni, Dar es Salaam — replace with the exact pin.
  mapQuery: "Kibada, Kigamboni, Dar es Salaam, Tanzania",
} as const;

export const nav = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Studio", href: "/photography" },
  { label: "Contact", href: "/contact" },
] as const;

export type Service = {
  slug: string;
  index: string;
  title: string;
  summary: string;
  capabilities: string[];
  stack: string[];
};

export const services: Service[] = [
  {
    slug: "software",
    index: "01",
    title: "Software Development",
    summary:
      "We design and build web platforms, mobile apps and the business systems that run behind them — from a single API to a full enterprise application.",
    capabilities: [
      "Web applications",
      "Mobile applications",
      "Business management systems",
      "APIs & integrations",
      "Cloud solutions",
      "Custom enterprise software",
    ],
    stack: ["Next.js", "React", "Flutter", "Node.js", "PostgreSQL", "Rust", "Docker"],
  },
  {
    slug: "iot",
    index: "02",
    title: "IoT Solutions",
    summary:
      "Sensors, gateways and dashboards that let an organisation see what is happening in the field — in a greenhouse, a building, or a production line — in real time.",
    capabilities: [
      "Remote monitoring systems",
      "Sensor integration",
      "Smart agriculture systems",
      "Building monitoring",
      "Environmental monitoring",
      "Industrial automation",
    ],
    stack: ["Embedded firmware", "MQTT", "Node.js", "PostgreSQL", "Firebase", "Docker"],
  },
  {
    slug: "photography",
    index: "03",
    title: "Photography Studio",
    summary:
      "An in-house studio producing commercial, product and event photography, plus media production for organisations that need their work documented well.",
    capabilities: [
      "Event photography",
      "Commercial photography",
      "Product photography",
      "Corporate photography",
      "Media production",
    ],
    stack: ["Full-frame bodies", "Prime & zoom optics", "Studio lighting", "Colour-managed post"],
  },
];

export type Project = {
  slug: string;
  name: string;
  url: string;
  sector: string;
  year: string;
  summary: string;
  client: string;
  problem: string;
  solution: string;
  technologies: string[];
  results: string[];
  image: string;
};

export const projects: Project[] = [
  {
    slug: "kibondo-green-farm",
    name: "Kibondo Green Farm",
    url: "http://store.kibondogreenfarm.co.tz/store",
    sector: "Agriculture · Web platform",
    year: "2024",
    summary:
      "A custom web platform for the Kibondo Green Farm initiative — direct produce sales paired with an internal portal for the team running day-to-day operations.",
    client:
      "Kibondo Green Farm is an agricultural enterprise built around a plain idea: “It’s possible, let’s build our Kibondo together.” Alongside its public brand site, it needed a working application to sell its produce and to coordinate the staff running the farm.",
    problem:
      "The farm needed two things at once — a way for customers to order produce directly, and an internal tool for staff to manage the operation behind it. Run through informal channels of calls, notebooks and chats, neither side had a single reliable record to work from.",
    solution:
      "We built a custom React application backed by a Laravel (PHP) API: a customer-facing side for browsing and ordering produce, and a dedicated staff portal for the team to run the operation behind the scenes. It is a single, maintainable codebase rather than a stack of off-the-shelf plugins, so it can grow with the farm.",
    technologies: ["React", "Laravel (PHP)", "Vite"],
    results: [
      "A custom platform shaped around how the farm actually works — not a generic store template.",
      "A dedicated staff portal that keeps day-to-day operations in one place.",
      "A single maintainable codebase the platform can keep growing on.",
    ],
    image: unsplash("photo-1625246333195-78d9c38ad449", 900),
  },
  {
    slug: "ai-conference-platform",
    name: "AI Conference Platform",
    url: "https://aiconference.arifa.org/",
    sector: "Events · Research",
    year: "2025",
    summary:
      "A conference management platform handling registration, paper submissions, scheduling and participant engagement.",
    client:
      "An academic and research conference needing to manage hundreds of participants, paper submissions and a multi-track programme without relying on disconnected spreadsheets and email threads.",
    problem:
      "Running the event meant juggling registration forms, a submissions inbox, a reviewer roster and a schedule that changed constantly. Participants had no single, trustworthy source for the programme, and organisers had no live view of who was attending or what had been submitted.",
    solution:
      "We delivered an end-to-end platform: online registration, a structured submission and review workflow, a published multi-track programme, and tools for organisers to communicate with participants. Organisers work from one dashboard; attendees get one clear place for everything.",
    technologies: ["Next.js", "React", "Node.js", "PostgreSQL", "Firebase"],
    results: [
      "Registration, submissions and scheduling unified in one platform.",
      "A structured review workflow replacing a shared inbox.",
      "A single live programme participants can rely on throughout the event.",
    ],
    image: unsplash("photo-1540575467063-178a50c2df87", 900),
  },
];

export const industries = [
  {
    title: "Agriculture",
    note: "Storefronts, traceability and field monitoring for farms and agribusiness.",
    image: unsplash("photo-1500382017468-9049fed747ef", 800),
  },
  {
    title: "Education",
    note: "Management systems and platforms for schools, colleges and training bodies.",
    image: unsplash("photo-1503676260728-1c00da094a0b", 800),
  },
  {
    title: "Research",
    note: "Data capture, submission and event tooling for institutions and conferences.",
    image: unsplash("photo-1505373877841-8d25f7d46678", 800),
  },
  {
    title: "NGOs",
    note: "Reporting, monitoring and field applications for programme delivery.",
    image: unsplash("photo-1488521787991-ed7bbaae773c", 800),
  },
  {
    title: "SMEs",
    note: "Business systems and online presence for small and growing enterprises.",
    image: unsplash("photo-1556761175-5973dc0f32e7", 800),
  },
] as const;

export const process = [
  {
    index: "01",
    title: "Discover",
    body: "We sit with the people who will use the system, map how the work happens today and agree on what success looks like before any code is written.",
  },
  {
    index: "02",
    title: "Design",
    body: "We shape the architecture and the interface together — data model, workflows and screens — so the build is grounded in real use, not assumptions.",
  },
  {
    index: "03",
    title: "Build",
    body: "We develop in short, reviewable increments. You see working software early and often, and we adjust as the real thing takes shape.",
  },
  {
    index: "04",
    title: "Support",
    body: "We deploy, hand over and stay on. Maintenance, monitoring and iteration keep the system healthy long after launch.",
  },
] as const;

export type Insight = {
  tag: string;
  date: string;
  readTime: string;
  title: string;
  summary: string;
  href: string;
  image: string;
};

/** Editorial / news feed for the Worley-style "Latest insights" carousel. */
export const insights: Insight[] = [
  {
    tag: "Software",
    date: "June 2026",
    readTime: "3 min read",
    title: "Why we build custom platforms instead of stitching plugins together",
    summary:
      "A single, maintainable codebase outlasts a stack of off-the-shelf add-ons — here is how we weigh that trade-off with clients.",
    href: "/projects#kibondo-green-farm",
    image: unsplash("photo-1517694712202-14dd9538aa97", 700),
  },
  {
    tag: "IoT",
    date: "May 2026",
    readTime: "4 min read",
    title: "Putting sensors where the decisions are made",
    summary:
      "Remote monitoring only pays off when the dashboard answers a real operational question. We start from the question, not the hardware.",
    href: "/services#iot",
    image: unsplash("photo-1544197150-b99a580bb7a8", 700),
  },
  {
    tag: "Studio",
    date: "April 2026",
    readTime: "2 min read",
    title: "Documenting the work, not just the highlight reel",
    summary:
      "Good commercial photography gives a project a face. A note on how our studio approaches event and product shoots.",
    href: "/photography",
    image: unsplash("photo-1452780212940-6f5c0d14d848", 700),
  },
  {
    tag: "Research",
    date: "March 2026",
    readTime: "3 min read",
    title: "Running a conference on one platform instead of ten spreadsheets",
    summary:
      "Registration, submissions and a live programme in one place — what we learned building the AI Conference platform.",
    href: "/projects#ai-conference-platform",
    image: unsplash("photo-1454165804606-c3d57bc86b40", 700),
  },
] as const;

export const techStack = [
  "Next.js",
  "React",
  "Flutter",
  "Node.js",
  "PostgreSQL",
  "Firebase",
  "Docker",
  "Rust",
] as const;
