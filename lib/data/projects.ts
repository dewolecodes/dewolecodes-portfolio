import {
  SiReact,
  SiReactrouter,
  SiAxios,
  SiSass,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiFramer,
  SiGooglegemini,
  SiBootstrap,
  SiSocketdotio,
  SiDjango,
  SiCss3,
  SiHtml5,
  SiEjs,
  SiClerk,
  SiOpenai,
} from "react-icons/si";
import { HiOutlineSparkles } from "react-icons/hi";
import { ProjectSection, ProjectData } from "@/lib/types";

export const projectsSection: ProjectSection = {
  title: "Projects",
  subtitle: "portfolio",
  terminalInfo: {
    command: "projects",
    flag: "list",
    content: "A growing collection of projects that highlight my skills and journey.",
  },
};
export const projectsData: ProjectData[] = [
  {
    id: "project-1",
    title: "MADE IN 9JA",
    description:
      "Responsive news platform featuring real-time updates, intuitive navigation, and scalable architecture. Built to deliver engaging content with optimized performance and a seamless user experience.",
    featured: true,
    cover: {
      url: "/projects/madein9ja.webp",
      alt: "Made In 9ja",
    },
  tech: [
  { name: "React", icon: SiReact },
  { name: "JavaScript", icon: SiJavascript },
  { name: "React Router", icon: SiReactrouter },
  { name: "Axios", icon: SiAxios },
  { name: "Sass", icon: SiSass },
  { name: "React Icons", icon: SiReact },
],

    links: {
      github: "https://github.com/dewolecodes/madein9ja",
      live: "https://madein9ja-sigma.vercel.app/",
    },
  },
  
 {
    id: "project-2",
    title: "FarmTech",
    description:
      " A project about agriculture and technology. It shows how better tractors and farm machines can help farmers work faster and better.",
    featured: true,
    cover: {
      url: "/projects/farm.webp",
      alt: "FarmTech agriculture and technology ",
    },
    tech: [
  { name: "React", icon: SiReact },
  { name: "JavaScript", icon: SiJavascript },
  { name: "React Router", icon: SiReactrouter },
  { name: "Axios", icon: SiAxios },
  { name: "Sass", icon: SiSass },
  { name: "React Icons", icon: SiReact },
    ],
    links: {
      github: "https://github.com/dewolecodes/farm-tech-project",
      live: "https://farm-tech-green.vercel.app/",
    },
    },
    {
    id: "project-3",
    title: "Spendex",
    description:
      "AI-powered finance management platform that helps users track expenses, analyze spending habits, and gain intelligent financial insights for smarter money decisions.",
    featured: true,
    cover: {
      url: "/projects/spendex.webp",
      alt: "Spendex",
    },
    tech: [
  { name: "Next.js", icon: SiNextdotjs },
  { name: "React", icon: SiReact },
  { name: "JavaScript", icon: SiJavascript },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "Framer Motion", icon: SiFramer },
  { name: "OpenAI", icon: SiOpenai },
  { name: "Heroicons", icon: HiOutlineSparkles },
  { name: "React Icons", icon: SiReact },
],

    links: {
      github: "https://github.com/dewolecodes/spendex-project",
      live: "https://spendex-project.vercel.app/",
    },
  },
   {
    id: "project-4",
    title: "Talents - Record Label",
    description:
     "Artist-centered music label website that highlights new releases, displays artist catalogs, and integrates an e-commerce shop for music, tickets, and merchandise.",
    featured: true,
    cover: {
      url: "/projects/talents.webp",
      alt: "Talents - Record Label",
    },
    tech: [
  { name: "React", icon: SiReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "TypeScript", icon: SiTypescript },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "Framer Motion", icon: SiFramer }
],

    links: {
      github: "https://github.com/dewolecodes/talents",
      live: "https://talents-dusky.vercel.app/",
    },
  },
  
 
  
  // {
  //   id: "project-5",
  //   title: "SMS Scheduler App",
  //   description:
  //     "An SMS Scheduler app developed for MKEL Networks to schedule SMS messages. It allows automation of sending recurring messages at specific times and intervals using third-party API(s).",
  //   featured: false,
  //   tech: [
  //     { name: "Node.js", icon: SiNodedotjs },
  //     { name: "Express", icon: SiExpress },
  //     { name: "Bootstrap", icon: SiBootstrap },
  //     { name: "EJS", icon: SiEjs },
  //     { name: "Socket.io", icon: SiSocketdotio },
  //     { name: "MongoDB", icon: SiMongodb },
  //   ],
  //   links: {
  //     github: "https://github.com/NabsCodes/sms-scheduler",
  //   },
  // },
  // {
  //   id: "project-6",
  //   title: "Elderly Care Management System",
  //   description:
  //     "An elderly care management system to monitor and manage the health and well-being of elderly individuals.",
  //   featured: false,
  //   cover: {
  //     url: "/projects/ecms.webp",
  //     alt: "Fitness tracking dashboard",
  //   },
  //   tech: [
  //     { name: "React", icon: SiReact },
  //     { name: "Node.js", icon: SiNodedotjs },
  //     { name: "Express", icon: SiExpress },
  //     { name: "MongoDB", icon: SiMongodb },
  //     { name: "Tailwind", icon: SiTailwindcss },
  //   ],
  //   links: {
  //     github: "https://github.com/NabsCodes/ecms",
  //   },
  // },
  // {
  //   id: "project-7",
  //   title: "CGPA Calculator",
  //   description:
  //     "A CGPA calculator for students to calculate their cumulative grade point average.",
  //   featured: false,
  //   tech: [
  //     { name: "HTML", icon: SiHtml5 },
  //     { name: "CSS", icon: SiCss3 },
  //     { name: "JavaScript", icon: SiJavascript },
  //     { name: "Bootstrap", icon: SiBootstrap },
  //     { name: "Django", icon: SiDjango },
  //   ],
  //   links: {
  //     github: "https://github.com/NabsCodes/cgpa_calculator",
  //     live: "https://nabeelhassan.pythonanywhere.com",
  //   },
  // },
  // {
  //   id: "project-8",
  //   title: "CGPA Calculator V2",
  //   description:
  //     "Enhanced academic planning platform with goal setting, scenario analysis, and progress visualization. Empowers students to make strategic academic decisions and track long-term performance trends.",
  //   featured: true,
  //   cover: {
  //     url: "/projects/cgpa-calculator.png",
  //     alt: "CGPA Calculator V2",
  //   },
  //   tech: [
  //     { name: "TypeScript", icon: SiTypescript },
  //     { name: "Next.js", icon: SiNextdotjs },
  //     { name: "React", icon: SiReact },
  //     { name: "Tailwind", icon: SiTailwindcss },
  //   ],
  //   links: {
  //     github: "https://github.com/NabsCodes/cgpa_calculator",
  //     live: "https://cgpa-calculator-v2.vercel.app",
  //   },
  // },
  // {
  //   id: "project-9",
  //   title: "Drive-X",
  //   description:
  //     "Drive X is a google drive clone built with Next.js and TypeScript. It was inspired by a tutorial by Theo - T3.gg",
  //   featured: true,
  //   cover: {
  //     url: "/projects/drive-x.png",
  //     alt: "Drive-X",
  //   },
  //   tech: [
  //     { name: "TypeScript", icon: SiTypescript },
  //     { name: "Next.js", icon: SiNextdotjs },
  //     { name: "React", icon: SiReact },
  //     { name: "Tailwind", icon: SiTailwindcss },
  //     { name: "Clerk", icon: SiClerk },
  //   ],
  //   links: {
  //     github: "https://github.com/NabsCodes/drive-x",
  //     live: "https://drive-x.vercel.app",
  //   },
  // },
];
