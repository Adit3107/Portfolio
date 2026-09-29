import { Icons } from "@/components/icons";
import { Cloud, DatabaseZap, HomeIcon, Radio, Terminal, Workflow } from "lucide-react";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Python } from "@/components/ui/svgs/python";
import { Golang } from "@/components/ui/svgs/golang";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Docker } from "@/components/ui/svgs/docker";
import { Kubernetes } from "@/components/ui/svgs/kubernetes";
import { Java } from "@/components/ui/svgs/java";
import { Csharp } from "@/components/ui/svgs/csharp";

export const DATA = {
  name: "Aditya Kalmegh",
  initials: "AK",
  url: "https://github.com/Adit3107",
  location: "Pune, India",
  locationLink: "https://www.google.com/maps/place/Pune,+Maharashtra,+India",
  description:
    "Computer Engineering student and full-stack developer building AI-powered, distributed, and data-intensive products.",
  summary:
    "I am a Computer Engineering student at [Pune Institute of Computer Technology](#education) with a CGPA of 9.04/10. I build full-stack systems across [AI workflows](#projects), backend services, and modern web apps, with hands-on experience in Go, Node.js, PostgreSQL, AWS, Kafka, Redis, Docker, and Python. Recently, I worked as a [Full Stack Developer at Prime Vacations](#work), where I built AI-assisted travel query resolution, automated scraping pipelines, and responsive package-building workflows.",
  avatarUrl: "/profile.png",
  achievements: [
    {
      title: "Mastercard Code for Change",
      result: "Finalist",
      year: "2025",
    },
    {
      title: "PICT TechFiesta",
      result: "Finalist",
      year: "2026",
    },
  ],
  skills: [
    { name: "C++", icon: Csharp },
    { name: "Python", icon: Python },
    { name: "Go", icon: Golang },
    { name: "TypeScript", icon: Typescript },
    { name: "Java", icon: Java },
    { name: "Next.js", icon: NextjsIconDark },
    { name: "Node.js", icon: Nodejs },
    { name: "PostgreSQL", icon: Postgresql },
    { name: "Docker", icon: Docker },
    { name: "Kubernetes", icon: Kubernetes },
    { name: "System Design", icon: Workflow },
    { name: "AWS", icon: Cloud },
    { name: "Kafka", icon: Radio },
    { name: "Redis", icon: DatabaseZap },
    { name: "Linux CLI", icon: Terminal },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
  ],
  contact: {
    email: "adityakalmegh01@gmail.com",
    tel: "+918446946020",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Adit3107",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/aditya-kalmegh",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://github.com/Adit3107",
        icon: Icons.x,
        navbar: false,
      },
      Youtube: {
        name: "Youtube",
        url: "https://github.com/Adit3107",
        icon: Icons.youtube,
        navbar: false,
      },
      email: {
        name: "Send Email",
        url: "mailto:adityakalmegh01@gmail.com",
        icon: Icons.email,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Prime Vacations",
      href: "https://github.com/Adit3107",
      badges: [],
      location: "Remote",
      title: "Full Stack Developer",
      logoUrl: "/prime-vacations.png",
      start: "Oct 2025",
      end: "Dec 2025",
      description:
        "Built an AI Query Resolver using Groq, prompt engineering, and Zod schema validation to convert unstructured WhatsApp travel queries into structured itineraries, reducing manual effort by 85% and response time from 30 minutes to 10 seconds. Developed a 500+ LOC Python Selenium scraper for hotels, flights, pricing, and itineraries with a 95% success rate, and shipped a responsive package builder UI with AWS S3 media storage.",
    },
  ],
  education: [
    {
      school: "Pune Institute of Computer Technology",
      href: "https://pict.edu",
      degree: "B.E. in Computer Engineering, CGPA: 9.04/10",
      logoUrl: "/PICT-Logo.webp",
      start: "2023",
      end: "2027",
    },
    {
      school: "P.R. Pote International School",
      href: "https://www.prpotepatilschool.com",
      degree: "Higher Secondary (12th Class), 91.6%",
      logoUrl: "/pote.webp",
      start: "2021",
      end: "2023",
    },
  ],
  projects: [
    {
      title: "Mindshelf",
      href: "https://github.com/Adit3107",
      dates: "2026",
      active: true,
      description:
        "AI-powered multimodal knowledge platform for storing and understanding short-form video content from YouTube, Instagram, and Reddit alongside documents, images, and web pages. Built concurrent ingestion in Go with Whisper transcription, OCR, chunking, metadata extraction, AWS S3 storage, semantic search, and RAG over PostgreSQL with pgvector.",
      technologies: [
        "Go",
        "Next.js",
        "PostgreSQL",
        "pgvector",
        "AWS S3",
        "Whisper",
        "RAG",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/Adit3107",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/outlierx.png",
      video: "",
    },
    {
      title: "OutlierX",
      href: "https://github.com/Adit3107/OutlierX",
      dates: "2026",
      active: true,
      description:
        "Multi-tenant financial anomaly detection SaaS with organization-based access control, transaction CSV ingestion, investigation tools, explainable rule scoring, Isolation Forest predictions, and combined risk decisions. Includes analytics, alert management, API keys, audit activity, and ML model monitoring.",
      technologies: [
        "Next.js",
        "TypeScript",
        "Express",
        "PostgreSQL",
        "Clerk",
        "FastAPI",
        "Isolation Forest",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/Adit3107/OutlierX",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/mindshelf.png",
      video: "",
    },
    {
      title: "Code Assistant",
      href: "https://github.com/Adit3107",
      dates: "2026",
      active: true,
      description:
        "Connect GitHub, index a repository with Jina, and ask questions answered from the codebase using retrieval-augmented generation with file and line citations.",
      technologies: ["Spring Boot", "Next.js", "RAG", "Code Indexing", "Jina"],
      links: [
        {
          type: "Source",
          href: "https://github.com/Adit3107",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/code-assistant.png",
      video: "",
    },
    {
      title: "FlowMind",
      href: "https://github.com/Adit3107/FlowMind",
      dates: "2026",
      active: true,
      description:
        "An AI-powered collaborative workspace for notes, tasks, whiteboards, and team collaboration, with shared pages and real-time editing.",
      technologies: [
        "Next.js",
        "TypeScript",
        "Clerk",
        "Neon PostgreSQL",
        "Drizzle ORM",
        "Liveblocks",
        "Tiptap",
        "Excalidraw",
        "Yjs",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/Adit3107/FlowMind",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/flowmind.png",
      video: "",
    },
  ],
  hackathons: [
    {
      title: "Tech Head - PICT ACM Student Chapter",
      dates: "2025 - Present",
      location: "Pune, India",
      description:
        "Conducted Web Development SIGs, led event teams, and mentored students through technical sessions and community initiatives.",
      image: "/pict-acm.png",
      links: [
        {
          title: "PICT ACM",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://pict.acm.org/",
        },
      ],
    },
  ],
} as const;
