import { GitHubIcon, LinkedInIcon } from "@/components/icons";
import { InstagramIcon } from "lucide-react";
import AnchorWatch from "@/images/logos/AnchorWatch.svg";

export const RESUME_DATA = {
  name: "Aniia Hamilton",
  initials: "AH",
  location: "Raleigh, North Carolina, United States",
  locationLink: "https://maps.app.goo.gl/EmsevE51WQqASxpT8",
  about:
    "Front-end Developer with 1+ years of experience |  Authorized to work for any US employer",
  summary:
    "Detail-oriented Front-end Developer with a focus on building products with extra attention to detail. My core stack is TypeScript, React, Next.js, and MongoDB. I am always looking to learn new technologies. I am currently looking for a full-time position as a front-end developer.",
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
      degree: "Bachelor’s Degree in Applied Mathematics and Computer Science",
      start: "2016",
      end: "2020",
    },
  ],
  work: [
    {
      company: "AnchorWatch",
      link: "https://anchorwatch.com",
      badges: ["Contract"],
      title: "Front-end Developer",
      start: "2023",
      end: "Current",
      description:
        "Implemented new features, delivered a fully functional website with a focus on user-friendly navigation and information accessibility. Successfully met weekly milestones, ensuring a structured and timely development process.  Technologies:  React, TypeScript, TailwindCSS, Next.js,Framer Motion,  Shadcn, Radix-ui, Zod, React-Hook-Form",
    },
    // {
    //   company: "TRAY Agency",
    //   link: "https://clevertech.biz",
    //   badges: ["Full-time"],
    //   title: "Social Media Manager → Social Media Lead",
    //   start: "2021",
    //   end: "2022",
    //   description:
    //     "Designed and implemented comprehensive social media strategies to increase brand awareness and engagement, led a team of social media managers, monitored and analyzed social media metrics. ",
    // },
    {
      company: "Begishevo International Airport",
      link: "https://nbc.aero/",
      badges: ["Full-time"],
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
    "Figma",
    "Responsive Design",
    "Performance Optimization",
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
        "React",
        "Next.js",
        "Tailwind CSS",
        "Zod",
        "React-Hook-Form",
        "Framer Motion",
      ],
      description: "A marketing website for an Insurance Company.",
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
        "React",
        "Next.js",
        "Tailwind CSS",
        "Shadcn",
        "Custom Componenets",
        "Zod",
      ],
      description:
        "I'm currently working on the light mode of the Trident Vault project. Will be live Q2.",
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
        "Raect",
        "TypeScript",
        "Tailwind CSS",
        "Framer Motion",
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
