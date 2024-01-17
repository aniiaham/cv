import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";
import { InstagramIcon } from "lucide-react";
import AnchorWatch from "@/images/logos/AnchorWatch.svg";

export const RESUME_DATA = {
  name: "Aniia Hamilton",
  initials: "AH",
  location: "Raleigh, North Carolina, United States",
  locationLink: "https://maps.app.goo.gl/EmsevE51WQqASxpT8",
  about:
    "Front-end Engineer focused on building products with extra attention to detail",
  summary:
    "Detail-oriented Frontend Engineer with a focus on creating exceptional user experiences using React and TypeScript. Currently contributing to the success of AnchorWatch in Raleigh, NC, by delivering user-friendly and accessible web solutions. Demonstrated proficiency in consistently meeting project milestones and implementing a well-organized development process.",
  avatarUrl: "https://avatars.githubusercontent.com/u/101609705?v=4",
  personalWebsiteUrl: "https://www.aniia.dev/",
  contact: {
    email: "aniya_axm@icloud.com",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/aniiaham",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/aniia-hamilton/",
        icon: LinkedInIcon,
      },
      {
        name: "Instagram",
        url: "https://www.instagram.com/aniiahamilton/",
        icon: InstagramIcon,
      },
    ],
  },
  education: [
    {
      school: "Kazan Federal University | Russia",
      degree: "Bachelor’s Degree in Mathematics and Computer Science",
      start: "2016",
      end: "2020",
    },
  ],
  work: [
    {
      company: "AnchorWatch",
      link: "https://anchorwatch.com",
      badges: ["Remote"],
      title: "Front-end Developer",
      start: "2023",
      end: "Current",
      description:
        "Implemented new features, delivered a fully functional website with a focus on user-friendly navigation and information accessibility. Successfully met weekly milestones, ensuring a structured and timely development process.  Technologies:  React, TypeScript, TailwindCSS, Next.js,Framer Motion,  Shadcn, Radix-ui, Zod, React-Hook-Form",
    },
    {
      company: "TRAY Agency",
      link: "https://clevertech.biz",
      badges: ["On site"],
      title: "Social Media Manager → Social Media Lead",
      start: "2021",
      end: "2022",
      description:
        "Designed and implemented comprehensive social media strategies to increase brand awareness and engagement, led a team of social media managers, monitored and analyzed social media metrics. ",
    },
    {
      company: "Begishevo Airport",
      link: "https://nbc.aero/",
      badges: ["On site"],
      title: "Software Engineer",
      start: "2020",
      end: "2021",
      description:
        "Designed and implemented software solutions for business management using 1C:Enterprise platform. Collaborated with other teams, including product management and quality assurance, to ensure software meets business requirements. Provided technical support and troubleshoot issues reported by users.",
    },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "React/Next.js",
    "Tailwind CSS",
    "Cypress",
    "Git",
  ],
  projects: [
    {
      title: "AnchorWatch",
      techStack: [
        "Contract",
        "TypeScript",
        "Next.js",
        "Tailwind",
        "Zod",
        "React-Hook-Form",
        "Framer-Motion",
      ],
      description: "A marketing website for Insurance Company",
      logo: AnchorWatch,
      link: {
        label: "anchorwatch.com",
        href: "https://anchorwatch.com/",
      },
    },
    {
      title: "Linktree",
      techStack: ["Side Project", "TypeScript", "Next.js"],
      description: "Linktree project",
      logo: "",
      link: {
        label: "linktree.aniia.dev",
        href: "https://linktree.aniia.dev/",
      },
    },
    {
      title: "Aniia.Dev",
      techStack: ["Side Project", "Next.js"],
      description: "My personal website and blog. Built with Next.js and TypeScript",
      logo: JarockiMeLogo,
      link: {
        label: "github.com",
        href: "https://aniia.dev/",
      },
    },
  ],
} as const;
