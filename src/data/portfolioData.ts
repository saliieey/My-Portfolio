export interface Project {
  id: string;
  title: string;
  subtitle: string;
  type: string;
  category: "saas" | "web-app" | "client" | "interactive";
  description: string;
  fullOverview: string;
  problem: string;
  solution: string;
  architectureDetails?: string[];
  keyFeatures: string[];
  technologies: string[];
  github?: string;
  live?: string;
  image: string;
  badge: string;
  isFeatured: boolean;
  metrics?: { label: string; value: string }[];
}

export interface Experience {
  id: string;
  period: string;
  title: string;
  company: string;
  location: string;
  type: string;
  summary: string;
  responsibilities: string[];
  technologies: string[];
}

export interface SkillCategory {
  category: string;
  iconName: string;
  color: string;
  accentClass: string;
  skills: {
    name: string;
    detail: string;
    level?: string;
  }[];
}

export interface PhilosophyPillar {
  title: string;
  tagline: string;
  desc: string;
  iconName: string;
}

export const PERSONAL_INFO = {
  name: "Mohamed Salih CK",
  shortName: "Salih",
  title: "Full-Stack Software Developer",
  roleHeadline: "Building Polished, High-Performance Web Applications & Scalable Systems",
  location: "Malappuram, Kerala, India",
  timezone: "Asia/Kolkata (IST · UTC+5:30)",
  availability: "Available for Full-time & Contract Roles",
  email: "salihck7777@gmail.com",
  phone: "+91 6238520429",
  phoneFormatted: "+91 62385 20429",
  github: "https://github.com/saliieey",
  githubRepos: "https://github.com/saliieey?tab=repositories",
  linkedin: "https://linkedin.com/in/mohamed-salih-ck",
  canonicalUrl: "https://mohamedsalih.dev",
  livePortfolioUrl: "https://mohamedsalih-portfolio.vercel.app/",
  stats: [
    { label: "Professional Experience", value: "2.5+ Years", detail: "Software Engineering & Full-Stack Development" },
    { label: "Shipped Applications", value: "9+ Products", detail: "Full-Stack SaaS, Client Platforms & Web Apps" },
    { label: "Primary Architecture", value: "React & Node", detail: "Next.js, Express, MongoDB & PostgreSQL" },
    { label: "Client Satisfaction", value: "100%", detail: "Production Quality & Responsive Performance" }
  ],
  bio: [
    "I have 2.5+ years of practical software development experience, specializing in full-stack web applications built with React, Next.js, Node.js, Express, MongoDB, and PostgreSQL.",
    "My work spans delivering digital solutions as an independent freelance developer, engineering production client platforms at Maelstrom Global, and architecting AI application interfaces at NicorAI, alongside developing complex MERN SaaS products such as automated investment engines, music streaming platforms, and multi-step agency booking systems.",
    "I focus on solving real product challenges—from multi-level referral commission engines and scheduled background cron payouts to Jamendo API audio streaming integration and sub-second Next.js page speeds."
  ],
  targetRoles: "Full-Stack Developer or Frontend Engineer roles contributing to production applications, clean user interfaces, and collaborating with focused engineering teams."
};

export const PHILOSOPHY_PILLARS: PhilosophyPillar[] = [
  {
    title: "User-Centered UI/UX",
    tagline: "Fluid, intentional, and zero layout shift",
    desc: "Interfaces should be responsive, intuitive, and accessible on all devices without layout jumping. Crafted with precise micro-interactions.",
    iconName: "Code2"
  },
  {
    title: "Maintainable Architecture",
    tagline: "Type-safe, component-driven, and scalable",
    desc: "Clean component boundaries, strict typing with TypeScript, predictable state management, and clear separation of concerns.",
    iconName: "Layers"
  },
  {
    title: "Robust Backend & APIs",
    tagline: "Transactional integrity and secure sessions",
    desc: "Secure JWT authentication, bcrypt password hashing, transactional database updates, and efficient REST API structures.",
    iconName: "ShieldCheck"
  },
  {
    title: "Performance & SEO First",
    tagline: "Sub-second paints and structured schemas",
    desc: "Optimized render pipelines, semantic HTML markup, structured JSON-LD schemas, and fast initial page loads on any connection.",
    iconName: "Zap"
  }
];

export const WORK_EXPERIENCE: Experience[] = [
  {
    id: "freelance",
    period: "August 2026 – Present",
    title: "Freelance Full-Stack Developer",
    company: "Independent / Self-Employed",
    location: "Kerala, India · Remote",
    type: "Freelance",
    summary: "Building modern web applications, client websites, and scalable digital solutions using React, Next.js, and Node.js.",
    responsibilities: [
      "Architecting and delivering custom full-stack web applications, business portals, and responsive digital solutions using React, Next.js, and Node.js.",
      "Designing resilient RESTful backend APIs, database models (MongoDB & PostgreSQL), and secure authentication architectures.",
      "Crafting high-performance, polished user interfaces with Tailwind CSS and responsive micro-animations using GSAP and Framer Motion.",
      "Managing end-to-end client lifecycles—from technical scoping and Figma UI implementation to production deployment, SEO, and cloud maintenance."
    ],
    technologies: ["React.js", "Next.js", "Node.js", "Express.js", "MongoDB", "PostgreSQL", "Tailwind CSS", "GSAP", "Git"]
  },
  {
    id: "maelstrom",
    period: "December 2025 – July 2026",
    title: "Web Developer",
    company: "Maelstrom Global Pvt Ltd",
    location: "Kochi, Kerala, India",
    type: "Full-Time",
    summary: "Building and maintaining client websites, media portfolio showcases, and headless CMS integrations.",
    responsibilities: [
      "Built performant, mobile-first websites using Next.js, HTML5, CSS3, and JavaScript.",
      "Integrated and customized WordPress CMS / Headless CMS for non-technical content management.",
      "Ensured cross-browser compatibility, responsive layout scaling, and frontend optimization across all viewport sizes."
    ],
    technologies: ["Next.js", "HTML5", "CSS3", "JavaScript", "WordPress", "GSAP", "Responsive Design", "Git"]
  },
  {
    id: "nicorai",
    period: "August 2024 – November 2025",
    title: "Software Developer",
    company: "NicorAI Intelligent System Pvt Ltd",
    location: "Kochi, Kerala, India",
    type: "Full-Time",
    summary: "Developing web application interfaces and backend services for AI-focused product platforms.",
    responsibilities: [
      "Engineered responsive web interfaces using React.js, Next.js, and Tailwind CSS from Figma designs.",
      "Developed RESTful backend APIs and server-side data handlers with Node.js, Express, and MongoDB.",
      "Implemented smooth UI animations using GSAP and Framer Motion, enhancing frontend interactivity and render efficiency (30% render improvement).",
      "Collaborated using Git/GitHub for version control, code management, and structured release workflows."
    ],
    technologies: ["React.js", "Next.js", "Node.js", "Express", "MongoDB", "GSAP", "Figma", "Git"]
  },
  {
    id: "luminar",
    period: "July 2023 – January 2024",
    title: "MERN Stack Intern",
    company: "Luminar Technolab Pvt Ltd",
    location: "Kochi, Kerala, India",
    type: "Internship",
    summary: "Completed intensive practical training in full-stack JavaScript development across MongoDB, Express, React, and Node.js.",
    responsibilities: [
      "Gained hands-on experience developing full-stack web applications using the MERN stack.",
      "Built responsive frontends with Bootstrap, Tailwind CSS, and Material UI.",
      "Designed RESTful APIs, CRUD operations, database schemas, and client authentication integrations."
    ],
    technologies: ["React.js", "Node.js", "Express", "MongoDB", "Tailwind CSS", "Bootstrap", "REST APIs"]
  }
];

export const SKILLS_DATA: SkillCategory[] = [
  {
    category: "Frontend Development",
    iconName: "Layout",
    color: "#00F59B",
    accentClass: "text-[#00F59B] bg-[#00F59B]/10 border-[#00F59B]/30",
    skills: [
      { name: "React.js", detail: "Component Architecture, Hooks, Context API, State Management" },
      { name: "Next.js", detail: "App Router, SSR, Static Site Generation, API Routes" },
      { name: "TypeScript", detail: "Strict Typing, Interfaces, Generics, Component Props" },
      { name: "JavaScript (ES6+)", detail: "Async/Await, Promises, Closures, DOM Manipulation" },
      { name: "Tailwind CSS & CSS3", detail: "Responsive Design Systems, Flexbox/Grid, Custom Properties" },
      { name: "GSAP & Motion", detail: "Timeline Animations, Micro-interactions, Scroll-Triggered Reveals" }
    ]
  },
  {
    category: "Backend & API Architecture",
    iconName: "Server",
    color: "#38BDF8",
    accentClass: "text-[#38BDF8] bg-[#38BDF8]/10 border-[#38BDF8]/30",
    skills: [
      { name: "Node.js", detail: "Server-side Runtimes, Event-driven Logic, NPM Ecosystem" },
      { name: "Express.js", detail: "RESTful Route Controllers, Middleware Pipelines, Error Handlers" },
      { name: "RESTful API Design", detail: "Clean Resource Naming, HTTP Verbs, Standardized Response Schemas" },
      { name: "Authentication & Security", detail: "JWT Tokens, Password Hashing (Bcrypt), Session Security" },
      { name: "Scheduled Automation", detail: "Node-Cron execution, Background ROI / Wallet Ledger Processing" },
      { name: "Headless CMS Integration", detail: "WordPress REST API / GraphQL content fetching" }
    ]
  },
  {
    category: "Databases & Storage",
    iconName: "Database",
    color: "#A78BFA",
    accentClass: "text-[#A78BFA] bg-[#A78BFA]/10 border-[#A78BFA]/30",
    skills: [
      { name: "MongoDB & Mongoose", detail: "Document Schemas, Indexing, Aggregation Pipelines, Atlas Cloud" },
      { name: "PostgreSQL", detail: "Relational Tables, Foreign Key Constraints, SQL Queries" },
      { name: "Drizzle ORM", detail: "Type-safe SQL Schema definitions and Migration Management" },
      { name: "Data Validation & Models", detail: "Server-side Input Sanitation, Schema Validation" }
    ]
  },
  {
    category: "Tools & Engineering Practices",
    iconName: "Wrench",
    color: "#F59E0B",
    accentClass: "text-[#F59E0B] bg-[#F59E0B]/10 border-[#F59E0B]/30",
    skills: [
      { name: "Git & GitHub", detail: "Branching workflows, Pull Requests, Code Reviews, Versioning" },
      { name: "Vite & Webpack", detail: "Modern Frontend Bundling, HMR, Build Optimizations" },
      { name: "API Testing & Docs", detail: "Postman workspace testing, Endpoint Documentation" },
      { name: "UI/UX & Prototyping", detail: "Figma design translation, Responsive Breakpoint Audits" },
      { name: "Deployment & Hosting", detail: "Vercel, Render, Netlify static & full-stack deployments" }
    ]
  }
];

export const ALL_PROJECTS: Project[] = [
  {
    id: "maelstrom-frames",
    title: "Maelstrom Frames",
    subtitle: "Editorial Photography Portfolio",
    type: "Frontend Showcase",
    category: "interactive",
    badge: "Featured Showcase",
    isFeatured: true,
    description: "High-performance editorial photography showcase website featuring dynamic media handling, interactive grid galleries, and smooth scroll animations.",
    fullOverview: "Editorial gallery experience designed for high-resolution visual photography portfolios with minimal chrome and rich typography. Built with Next.js and GSAP to deliver cinematic scroll timelines and ultra-fluid layout rendering.",
    problem: "Displaying heavy photography assets without page lag or stutter during scroll.",
    solution: "Optimized image loading pipelines, lazy decoding, and GSAP scroll transitions.",
    keyFeatures: [
      "Dynamic Masonry Image Grid",
      "Smooth Kinetic Scrolling with GSAP",
      "High-Resolution Image Lightbox View",
      "Minimalist Dark Editorial Theme"
    ],
    architectureDetails: [
      "Framework: Next.js with React 19, TypeScript, and Tailwind CSS",
      "Motion: GSAP timeline scrolls and Framer Motion layout transitions",
      "Media Pipeline: Responsive masonry grid with lazy decoding"
    ],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "GSAP", "Framer Motion"],
    github: "https://github.com/saliieey?tab=repositories",
    live: "https://maelstrom-frames.vercel.app/",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=1200&h=750&fit=crop&q=80",
    metrics: [
      { label: "Animation Engine", value: "GSAP 3" },
      { label: "Rendering Speed", value: "60 FPS" },
      { label: "Asset Pipeline", value: "Next/Image" }
    ]
  },
  {
    id: "musicflow",
    title: "MusicFlow",
    subtitle: "Spotify-Inspired Streaming Web App",
    type: "Full-Stack Web App",
    category: "web-app",
    badge: "Featured App",
    isFeatured: true,
    description: "Full-stack music streaming platform that allows users to search tracks, play audio seamlessly, build custom playlists, and save favorite songs using the Jamendo API.",
    fullOverview: "MusicFlow is a Spotify-inspired web streaming application engineered with React, TypeScript, Node.js, Express, and PostgreSQL. It features real-time audio playback controls, persistent custom playlists, track search via Jamendo API integration, and clean responsive UI styling.",
    problem: "Delivering smooth, uninterrupted audio playback while managing state transitions, track searches, and asynchronous playlist updates on mobile and desktop devices without memory leaks.",
    solution: "Architected a centralized audio playback engine with React Context, type-safe API requests, PostgreSQL database relational storage via Drizzle ORM, and responsive dark media layout patterns.",
    keyFeatures: [
      "Jamendo API Integration for Global Track Search",
      "Persistent Audio Playback Engine with Progress Controls",
      "Custom User Playlist Creation & Management",
      "Type-Safe Backend API with Express & PostgreSQL",
      "Responsive Dark Aesthetics with Tailwind CSS"
    ],
    architectureDetails: [
      "Frontend: React with TypeScript, Context API Audio State, Tailwind CSS",
      "Backend: Express.js REST API with Drizzle ORM",
      "Database: PostgreSQL relational tables for users, tracks, and playlists",
      "Third-Party: Jamendo REST Audio API with streaming proxies"
    ],
    technologies: ["React", "TypeScript", "Node.js", "Express", "PostgreSQL", "Drizzle ORM", "Tailwind CSS"],
    github: "https://github.com/saliieey?tab=repositories",
    live: "https://musicflow-1.onrender.com/",
    image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=1000&q=80",
    metrics: [
      { label: "Track Source", value: "Jamendo API" },
      { label: "Storage", value: "PostgreSQL" },
      { label: "Type Safety", value: "100% TypeScript" }
    ]
  },
  {
    id: "pikuboo",
    title: "Pikuboo",
    subtitle: "Lightweight Web App",
    type: "Web Application",
    category: "web-app",
    badge: "Featured Web App",
    isFeatured: true,
    description: "Modern, responsive web application built with React and Vite featuring dynamic component architecture and clean frontend performance.",
    fullOverview: "Interactive web utility demonstrating rapid UI prototyping, state handling, and clean responsive CSS. Designed for rapid client interaction with zero bloat and instant interactivity.",
    problem: "Fast client delivery requirements requiring lightweight runtime footprint.",
    solution: "Leveraged Vite build tooling and clean reusable React components with zero bloat.",
    keyFeatures: [
      "Instant Vite HMR & Sub-Second Page Boot",
      "Clean Modular Component Structure",
      "Responsive Layout across Mobile & Tablet",
      "Type-Safe Props & Reusable UI Tokens"
    ],
    architectureDetails: [
      "Client: React with TypeScript and Tailwind CSS",
      "Build: Vite next-gen frontend tooling for fast HMR",
      "Performance: Zero runtime bloat, tree-shaken icons & utilities"
    ],
    technologies: ["React", "Vite", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/saliieey?tab=repositories",
    live: "https://pikuboo-website.vercel.app/",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80",
    metrics: [
      { label: "Build Tool", value: "Vite HMR" },
      { label: "Bundle Overhead", value: "< 50 KB" },
      { label: "Component Pattern", value: "Atomic UI" }
    ]
  },
  {
    id: "investment-saas",
    title: "Enterprise MERN Investment, ROI & Referral SaaS",
    subtitle: "Full-Stack Financial SaaS Platform",
    type: "Full-Stack SaaS",
    category: "saas",
    badge: "Featured SaaS",
    isFeatured: true,
    description: "Production-grade MERN SaaS application featuring secure JWT authentication, MongoDB Atlas integration, investment package management, automated daily ROI payouts, multi-level referral commissions, wallet tracking, and audit ledger history.",
    fullOverview: "This application demonstrates enterprise full-stack development capability beyond standard landing pages. Built with Node.js, Express, and MongoDB on the backend, paired with a fast React & Vite frontend, it handles complete investment workflows, wallet transactions, automated daily ROI yield calculations via background cron scheduling, multi-level referral payouts (5 levels), and an administrative analytics dashboard.",
    problem: "Financial platforms require absolute data consistency, secure session handling, transactional wallet updates, and automated background calculations without manual database updates or floating-point discrepancies.",
    solution: "Designed a modular MERN architecture with JWT-authenticated API endpoints, schema validation, scheduled node-cron processes for daily ROI payouts, and a real-time analytics dashboard with immutable transaction logging.",
    keyFeatures: [
      "JWT Authentication & Password Hashing with Bcrypt",
      "Investment Package Subscription & Wallet Balance Management",
      "Automated Daily ROI Yield Processing via Node-Cron",
      "Multi-Level Referral Commission Calculation (5 Levels Deep)",
      "Transactional Wallet Audit Ledger & Transaction History",
      "Admin Control Panel & Real-Time Analytics Dashboard"
    ],
    architectureDetails: [
      "Client: React 18, Vite, Tailwind CSS, Axios, Lucide Icons",
      "Server: Node.js, Express.js REST API with modular controllers",
      "Database: MongoDB Atlas with Mongoose ODM schemas & indexing",
      "Background Jobs: Node-Cron running daily automated payout worker routines",
      "Security: HTTP-only cookies/JWT bearer tokens, input sanitation, bcrypt salting"
    ],
    technologies: ["React", "Vite", "Node.js", "Express", "MongoDB", "JWT", "Tailwind CSS", "Node-Cron"],
    github: "https://github.com/saliieey?tab=repositories",
    live: "https://investment-app-inky.vercel.app",
    image: "https://images.unsplash.com/photo-1642543492481-44e81e3914a7?w=1000&q=80",
    metrics: [
      { label: "Commission Depth", value: "5 Levels" },
      { label: "ROI Automation", value: "Daily Cron" },
      { label: "Auth Model", value: "JWT + Bcrypt" }
    ]
  },
  {
    id: "nicorai",
    title: "NicorAI Platform",
    subtitle: "AI Enterprise Company Showcase & RAG Interface",
    type: "Professional / Client Work",
    category: "client",
    badge: "Client Work",
    isFeatured: false,
    description: "Production company web platform for NicorAI, featuring an integrated RAG-based AI chat interface, modular content structure, and AWS cloud deployment.",
    fullOverview: "Built for NicorAI Intelligent System Pvt Ltd, this web application communicates company services, AI capabilities, and interactive product demonstrations. Includes an AI chat component, clean content rendering, and responsive UI performance.",
    problem: "Presenting complex AI solutions and platform capabilities through a clean, fast, and accessible digital interface while keeping server render latency minimal.",
    solution: "Utilized Next.js App Router for server-rendered page speed, Tailwind CSS for modular visual components, and Framer Motion for subtle interactive transitions with AWS hosting.",
    keyFeatures: [
      "Next.js App Router with Server-Side Rendering",
      "RAG AI Chat Assistant Interface Integration",
      "Responsive Component Architecture with Tailwind CSS",
      "Framer Motion Micro-Interactions",
      "AWS Infrastructure Deployment"
    ],
    architectureDetails: [
      "Framework: Next.js App Router (SSR & SSG)",
      "UI Layer: React, TypeScript, Tailwind CSS, Framer Motion",
      "Cloud: AWS container / serverless integration for high availability"
    ],
    technologies: ["Next.js", "React", "TypeScript", "Node.js", "Express", "AWS", "Tailwind CSS"],
    github: "https://github.com/saliieey?tab=repositories",
    live: "https://nicorai-website.vercel.app",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1000&q=80",
    metrics: [
      { label: "Architecture", value: "Next.js App Router" },
      { label: "AI Feature", value: "RAG Chatbot" },
      { label: "Hosting", value: "AWS Cloud" }
    ]
  },
  {
    id: "simpex",
    title: "Simpex Services",
    subtitle: "HVAC & Appliance Repair Booking Platform",
    type: "Web Application",
    category: "web-app",
    badge: "Featured Web App",
    isFeatured: false,
    description: "Agency-grade home services and appliance repair platform with an interactive multi-step booking drawer, dynamic SEO metadata schema, and responsive service pages.",
    fullOverview: "Simpex Services is a dedicated booking web app built with React 19 and Vite for AC repair, refrigerator maintenance, and washer servicing. Features lazy-loaded routing, an interactive multi-step booking drawer, structured JSON-LD SEO schema integration, and zero layout shift.",
    problem: "Service business web applications require immediate booking clarity, fast mobile response, and strong search engine visibility across localized search queries.",
    solution: "Engineered an instant booking modal drawer with client validation, dynamic React Router pages for individual repair categories, and structured meta schema.",
    keyFeatures: [
      "Interactive Multi-step Service Booking Drawer",
      "Category Pages for AC, Washer, and Refrigerator Repair",
      "Dynamic SEO Metadata & JSON-LD Structured Schema",
      "React 19 & Vite for Sub-Second Load Speeds",
      "Responsive Mobile-First UI Layout"
    ],
    architectureDetails: [
      "Core: React 19, Vite bundle pipeline, React Router 6",
      "Motion: Framer Motion drawer transitions & Lucide iconography",
      "SEO: JSON-LD LocalBusiness & Service Schema"
    ],
    technologies: ["React 19", "Vite", "React Router", "Framer Motion", "Lucide Icons", "Vanilla CSS"],
    github: "https://github.com/saliieey/Simpex-Website",
    live: "https://simpex-website.vercel.app",
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=1000&q=80",
    metrics: [
      { label: "React Version", value: "React 19" },
      { label: "Booking Speed", value: "< 3 Steps" },
      { label: "SEO Schema", value: "JSON-LD" }
    ]
  },
  {
    id: "luxe-noir",
    title: "LUXE NOIR",
    subtitle: "Luxury Product Showcase",
    type: "Interactive Showcase",
    category: "interactive",
    badge: "Creative",
    isFeatured: false,
    description: "High-end luxury watch showcase website demonstrating advanced GSAP animation sequences, dark gold-accented styling, and responsive layout craftsmanship.",
    fullOverview: "A crafted digital product landing experience highlighting luxury horology with cinematic micro-interactions and scroll-bound timelines.",
    problem: "Creating an ultra-premium feel with high aesthetic standards using vanilla web fundamentals.",
    solution: "Used GSAP ScrollTrigger timelines, dark velvet color hierarchy, and precise typography spacing.",
    keyFeatures: [
      "GSAP ScrollTrigger Product Reveal Sequences",
      "Gold-Accented Dark Visual Identity",
      "Refined Responsive Micro-interactions",
      "High Performance Zero-Dependency Bundle"
    ],
    technologies: ["HTML5", "CSS3", "JavaScript", "GSAP ScrollTrigger"],
    github: "https://github.com/saliieey?tab=repositories",
    live: "https://luxenoirwatches.netlify.app/",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80"
  },
  {
    id: "podnest",
    title: "Podnest YouTube Agent",
    subtitle: "YouTube Content Workflow Platform",
    type: "Web Application",
    category: "web-app",
    badge: "App",
    isFeatured: false,
    description: "Content workflow platform built with Next.js, React, and TypeScript for organizing video agent tasks and channel content workflows.",
    fullOverview: "Workflow management tool created for video creators and podcast agencies to schedule, track, and streamline YouTube content pipelines.",
    problem: "Content teams juggling disparate spreadsheets and unstructured note apps for video production stages.",
    solution: "Engineered a clean Next.js task board with status tracking, creator notes, and clean UI components.",
    keyFeatures: [
      "Channel Content Pipeline Tracking",
      "Task Card Categorization & Status Board",
      "Clean Responsive UI with Tailwind CSS",
      "TypeScript Type Safety"
    ],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/saliieey?tab=repositories",
    live: "https://podnest-youtube-agent.vercel.app",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80"
  },
  {
    id: "maelstrom-website",
    title: "Maelstrom Global Website",
    subtitle: "Corporate Web Platform & Headless CMS",
    type: "Client Work",
    category: "client",
    badge: "Client Work",
    isFeatured: false,
    description: "Official company website for Maelstrom Global Pvt Ltd featuring Next.js, custom GSAP scroll triggers, and WordPress Headless CMS integration for dynamic content management.",
    fullOverview: "Production company platform connecting marketing teams to custom content workflows via headless CMS endpoints.",
    problem: "Empowering non-technical content editors to publish case studies and portfolio pieces without developer redeploys.",
    solution: "Coupled Next.js with WordPress Headless REST API and smooth GSAP timeline animations.",
    keyFeatures: [
      "Headless CMS Content Ingestion",
      "GSAP ScrollTrigger Interactions",
      "SEO Metadata Optimization",
      "Cross-device Responsive Layout"
    ],
    technologies: ["Next.js", "React", "GSAP", "CSS", "WordPress CMS"],
    github: "https://github.com/saliieey?tab=repositories",
    live: "https://maelstrom-global-website.vercel.app/",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80"
  }
];

export const TERMINAL_COMMANDS: Record<string, string> = {
  help: "Available commands:\n  whoami      - Developer profile & background\n  skills      - Categorized technical stack breakdown\n  projects    - List of 9 production & client projects\n  experience  - Career timeline & employers\n  contact     - Direct channels & verified email\n  stack       - Primary engineering stack\n  clear       - Reset terminal screen",
  whoami: "MOHAMED SALIH CK\nRole: Full-Stack Software Developer\nExperience: 2.5+ Years\nLocation: Malappuram, Kerala, India\nSpecialization: React, Next.js, Node.js, Express, MongoDB, PostgreSQL\nStatus: Available for Full-Time & Contract Engineering Roles",
  skills: "FRONTEND:  React.js, Next.js (App Router), TypeScript, JavaScript (ES6+), Tailwind CSS, GSAP, Motion\nBACKEND:   Node.js, Express.js, RESTful APIs, JWT Auth, Bcrypt, Node-Cron, WordPress Headless CMS\nDATABASES: MongoDB (Mongoose, Atlas), PostgreSQL, Drizzle ORM\nTOOLS:     Git, GitHub, Vite, Webpack, Postman, Figma, Vercel, AWS",
  projects: "1. Maelstrom Frames (Photography Showcase, GSAP)\n2. MusicFlow (Spotify-Clone, React, PostgreSQL, Jamendo API)\n3. Pikuboo (Lightweight Web App, React, Vite)\n4. Enterprise MERN Investment SaaS (JWT, Node-Cron, 5-Level Referral)\n5. NicorAI Platform (Next.js, RAG AI Chat, AWS)\n6. Simpex Services (React 19, Multi-Step Drawer, SEO Schema)\n7. LUXE NOIR (Luxury Product Showcase, ScrollTrigger)\n8. Podnest YouTube Agent (Workflow Platform)\n9. Maelstrom Global Website (Next.js, GSAP, Headless CMS)",
  experience: "[Freelance / Independent] August 2026 - Present (Freelance)\n  Freelance Full-Stack Developer: Building modern web apps, client websites, React, Next.js, Node.js, Express, MongoDB, GSAP.\n\n[Maelstrom Global] December 2025 - July 2026 (Full-Time)\n  Web Developer: Next.js, Headless WordPress CMS, Performance.\n\n[NicorAI Intelligent System] August 2024 - November 2025 (Full-Time)\n  Software Developer: React, Next.js, Express, MongoDB, GSAP animations.\n\n[Luminar Technolab] July 2023 - January 2024 (Internship)\n  MERN Stack Intern: MongoDB, Express, React, Node.js, REST APIs.",
  contact: "Email:    salihck7777@gmail.com\nPhone:    +91 6238520429\nGitHub:   https://github.com/saliieey\nLinkedIn: https://linkedin.com/in/mohamed-salih-ck\nLocation: Malappuram, Kerala, India",
  stack: "PRIMARY TECH STACK:\n- React 19 & Next.js 16+ App Router\n- TypeScript (Strict Type Safety)\n- Node.js & Express.js REST API\n- MongoDB Atlas & PostgreSQL (Drizzle ORM)\n- Tailwind CSS & Custom Design Tokens\n- GSAP & Framer Motion Animation"
};
