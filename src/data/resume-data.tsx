import { GitHubIcon, LinkedInIcon } from "@/components/icons";
import { InstagramIcon } from "lucide-react";
import AnchorWatch from "@/images/logos/AnchorWatch.svg";

export const RESUME_DATA = {
  name: "Aniia Hamilton",
  initials: "AH",
  location: "Nashville, Tennessee, United States",
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
        "Utilized TypeScript, React, Next.js, and Framer-Motion to develop an interactive layout that enhanced user engagement and satisfaction on the website. Implemented new features and delivered a fully functional website with improved navigation. Designed a responsive website for desktop and mobile devices using Tailwind CSS, leading to mobile traffic and overall user satisfaction. Successfully met milestones, ensuring a structured and timely development process. Technologies: React, TypeScript, Tailwind CSS, Next.js, Node.js, Framer Motion, Shadcn, Radix-ui, Zod, React-Hook-Form",
    },
    {
      company: "TRAY Agency",
      link: "https://clevertech.biz",
      badges: ["Full-time"],
      title: "Social Media Manager → Social Media Lead",
      start: "2021",
      end: "2022",
      description:
        "Designed and implemented comprehensive social media strategies to increase brand awareness and engagement. Monitored and analyzed social media metrics, using data to optimize social media campaigns.Collaborated with cross-functional teams, to ensure a consistent brand voice and messaging across all social media channels. Participated in creative content shoots, contributing to the development and execution of visual concepts. Skills: Digital Marketing, Facebook Ads Manager, Trello, Adobe Photoshop, Adobe Premiere Pro",
    },
    {
      company: "Begishevo International Airport",
      link: "https://nbc.aero/",
      badges: ["Full-time"],
      title: "Software Engineer",
      start: "2020",
      end: "2021",
      description:
        "Collaborated with cross-functional teams, including product management and quality assurance, to develop and implement software solutions using 1C:Enterprise platform, resulting in a seamless integration process and improved business efficiency. Provided technical support to users experiencing issues with the software, resolving 95% of reported problems within a timely manner, leading to increased user satisfaction. Participated in code reviews with team members, offering constructive feedback that resulted in a 20% decrease in bugs and errors within the software.",
    },
  ],
  skills: [
    "JavaScript",
    "HTML/CSS",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Tailwind",
    "Jest/Cypress",
    "Figma",
    "Responsive Design",
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
