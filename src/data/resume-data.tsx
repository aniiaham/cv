import { JarockiMeLogo } from "@/images/logos";
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
    "Detail-oriented Front-end Developer with a focus on creating exceptional user experiences. My core stack is JavaScript, React, Next.js, and MongoDB. I am also familiar with TypeScript and SQL. I am always looking to learn new technologies. I am currently looking for a full-time position as a front-end developer.",
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
      // {
      //   name: "Instagram",
      //   url: "https://www.instagram.com/aniiahamilton/",
      //   icon: InstagramIcon,
      // },
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
    "HTML/CSS",
    "TypeScript",
    "React",
    "Next.js",
    "Tailwind",
    "Cypress",
    "Responsive/Mobile Design",
    "Web Performance",
    "Problem-Solving",
    "Creativity",
    "Teamwork",
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
      title: "Trident",
      techStack: [
        "Contract",
        "TypeScript",
        "Next.js",
        "Tailwind",
        "Shadcn",
        "Custom Componenets",
        "Zod",
      ],
      description: "Light Mode for Trident Vault",
      link: {
        label: "trident",
        href: "",
      },
    },
    {
      title: "My Portfolio Website",
      techStack: [
        "Side Project",
        "Next.js",
        "TypeScript",
        "Tailwind",
        "Framer-Motion",
      ],
      description:
        "My personal website and blog. Built with Next.js, TypeScript, Tailwind and Framer-Motion",
      link: {
        label: "aniia.dev",
        href: "https://aniia.dev/",
      },
    },
  ],
} as const;
