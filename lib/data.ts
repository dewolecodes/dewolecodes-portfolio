import { Terminal, Code2, Boxes, ArrowRight } from "lucide-react";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiGit,
  SiGithub,
  SiVercel,
  SiFigma,
  SiFramer,
  SiFirebase,
  SiMysql,
  SiNotion,
  // SiSupabase,
  SiEjs,
  SiGooglegemini,
  SiBootstrap,
  SiSocketdotio,
  SiDjango,
  SiCss3,
  SiHtml5,
  // SiDrizzle,
  // SiClerk,
  SiEslint,
  SiPrettier,
  // SiSupabase,
  // SiPostgresql,
  SiPostman,
} from "react-icons/si";

import {
  HeroContent,
  NavItem,
  AboutContent,
  SkillsContent,
  ExperienceContent,
  ContactContent,
  ProjectSection,
  ProjectData,
} from "./types";

export const navigationItems: NavItem[] = [
  {
    name: "About",
    href: "/#about",
    label: "About section",
  },
  {
    name: "Projects",
    href: "/#projects",
    label: "Projects section",
  },
  {
    name: "Skills",
    href: "/#skills",
    label: "Skills section",
  },
  {
    name: "Experience",
    href: "/#experience",
    label: "Experience section",
  },
  // {
  //   name: "Blog",
  //   href: "/blog",
  //   label: "Blog section",
  // },
] as const;

export const heroContent: HeroContent = {
  intro: " Available for hire ",
  // intro: " CODE • CREATE • INNOVATE ",
  description:
    // "Software developer who enjoys building things for the web. Whether it's a full website or a specific feature, I create solutions that work well and look good. Discover my portfolio and explore my work.",
    "Software developer with a passion for crafting great user experiences. From responsive interfaces to full-stack applications, I build solutions that are both engaging and reliable. Discover my portfolio and explore my work.",
  // "Frontend-focused developer with a knack for building reliable full-stack applications. I specialize in creating engaging user interfaces that are responsive and scalable.",
  personal: {
    name: "Hassan Umar Hassan",
    nickname: "Nabeel",
  },
  currentRole: {
    title: "Frontend Developer",
    filename: "current_role.tsx",
  },
  roles: [
    { icon: Terminal, label: "Software Engineer" },
    { icon: Code2, label: "Frontend Developer" },
    { icon: Boxes, label: "Full Stack Developer" },
    { icon: ArrowRight, label: "Freelance Developer" },
    // Add more roles as needed
  ],
  cta: {
    primary: {
      href: "#projects",
    },
    secondary: {
      href: "https://drive.google.com/file/d/1i2bki3RXgZU2U0LNkbs2CCZLLg5i8F8A/view?usp=drive_link",
    },
  },
  social: {
    github: "https://github.com/NabsCodes",
    linkedin: "https://linkedin.com/in/hassan-umar-hassan",
  },
};

export const aboutContent: AboutContent = {
  title: "About Me",
  subtitle: "hello",
  terminalInfo: {
    command: "whoami",
    flag: "info",
    content: "Software engineer bringing ideas to life",
  },
  image: {
    src: "/images/nabeel.webp",
    alt: "Hassan Umar Hassan",
  },
  description: {
    details: [
      "Hello, I'm Hassan, though many know me as Nabeel. I love creating websites and applications that not only look great but also work smoothly. What started as just being curious about how websites work has grown into something I'm truly passionate about.",

      "When I'm working on projects, I always aim for clean and efficient solutions. I enjoy the challenge of turning complex problems into simple, user-friendly experiences. Every project is a chance to learn something new and create something meaningful.",

      // "Beyond coding, I'm always exploring new technologies and keeping up with the latest in web development & tech in general. I believe that staying curious and continuously learning is what makes a great developer and engineer. This mindset helps me bring fresh ideas and better solutions to every project I work on.",

      "As a freelance developer, I've had the opportunity to work with diverse clients, delivering tailored solutions that meet their specific needs. My experience ranges from building responsive websites to developing complex web applications, always focusing on creating intuitive user experiences and robust functionality.",
    ],
  },
  interests: [
    {
      type: "Beyond Coding",
      items: [
        "Playing & Watching Football",
        "Reading Tech Blogs and Youtube",
        "Watching Movies & TV Shows",
        "Learning New Technologies",
        "Exploring New Tech Trends",
      ],
    },
    {
      type: "What Drives Me",
      items: [
        "Building intuitive user experiences",
        "Solving complex problems",
        "Striving to be at the top",
        "Continuous learning",
        "Delivering client-focused solutions",
      ],
    },
  ],
};

export const skillsContent: SkillsContent = {
  title: "Skills",
  subtitle: "tech stack",
  terminalInfo: {
    command: "skill",
    flag: "list",
    content:
      "Some few technologies and tools I work with to bring ideas to life",
  },
  groups: [
    {
      title: "Core Technologies",
      skills: [
        { name: "React.js", icon: SiReact },
        { name: "Next.js", icon: SiNextdotjs },
        { name: "TypeScript", icon: SiTypescript },
        { name: "JavaScript", icon: SiJavascript },
        { name: "Tailwind CSS", icon: SiTailwindcss },
        { name: "Node.js", icon: SiNodedotjs },
        { name: "HTML5", icon: SiHtml5 },
        { name: "CSS3", icon: SiCss3 },
      ],
    },
    {
      title: "Development Tools",
      skills: [
        { name: "Git", icon: SiGit },
        { name: "GitHub", icon: SiGithub },
        { name: "Vercel", icon: SiVercel },
        { name: "Notion", icon: SiNotion },
        { name: "Figma", icon: SiFigma },
        { name: "Framer", icon: SiFramer },
        { name: "ESLint", icon: SiEslint },
        { name: "Prettier", icon: SiPrettier },
      ],
    },
    {
      title: "Backend & Database",
      skills: [
        { name: "Express.js", icon: SiExpress },
        { name: "REST APIs", icon: SiNodedotjs },
        { name: "MongoDB", icon: SiMongodb },
        { name: "MySQL", icon: SiMysql },
        // { name: "PostgreSQL", icon: SiPostgresql },
        // { name: "Supabase", icon: SiSupabase },
        { name: "Firebase", icon: SiFirebase },
        { name: "Postman", icon: SiPostman },
      ],
    },
  ],
};

export const projectsSection: ProjectSection = {
  title: "Projects",
  subtitle: "portfolio",
  terminalInfo: {
    command: "projects",
    flag: "list",
    content: "A collection of my selected works & key projects",
  },
};

export const projectsData: ProjectData[] = [
  {
    id: "project-1",
    title: "Abdamin International Limited",
    description:
      "A responsive web application for Abdamin International Limited, a multi-sector company in Nigeria.",
    featured: true,
    cover: {
      url: "/projects/abdamin.webp",
      alt: "Abdamin International Limited",
    },
    tech: [
      { name: "React", icon: SiReact },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Tailwind", icon: SiTailwindcss },
      { name: "Framer Motion", icon: SiFramer },
    ],
    links: {
      github: "https://github.com/NabsCodes/abdamin",
      live: "https://abdamin.com/",
    },
  },
  {
    id: "project-2",
    title: "Horizon - Crypto SaaS ",
    description:
      "Horizon is designed for AI-powered SaaS startups to explore real-time trends, decode user queries with precision, and make strategic decisions with foresight.",
    featured: true,
    cover: {
      url: "/projects/horizon.webp",
      alt: "Horizon - Crypto SaaS",
    },
    tech: [
      { name: "React", icon: SiReact },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Tailwind", icon: SiTailwindcss },
      { name: "Framer Motion", icon: SiFramer },
    ],
    links: {
      github: "https://github.com/NabsCodes/horizon",
      live: "https://horizonbusiness.vercel.app/",
    },
  },
  {
    id: "project-3",
    title: "Library Meta Bot System",
    description:
      "An advanced library management system integrating AI-assisted cataloging, comprehensive classification tools, and robust metadata management.",
    featured: true,
    cover: {
      url: "/projects/lib-meta-bot.webp",
      alt: "Library Metabot System",
    },
    tech: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Express", icon: SiExpress },
      { name: "MongoDB", icon: SiMongodb },
      { name: "React", icon: SiReact },
      { name: "Tailwind", icon: SiTailwindcss },
      { name: "Gemini", icon: SiGooglegemini },
    ],
    links: {
      github: "https://github.com/NabsCodes/LibMetaBot",
      live: "https://lib-meta-bot.vercel.app/",
    },
  },
  {
    id: "project-4",
    title: "Yara - eCommerce Landing Page",
    description:
      "A landing page built for eCommerce small businesses. Yara is a project crafted from my time at Perxcels UI/UX school.",
    featured: false,
    cover: {
      url: "/projects/yara.webp",
      alt: "Blog platform interface",
    },
    tech: [
      // { name: "Next.js", icon: SiNextdotjs },
      { name: "React", icon: SiReact },
      { name: "TypeScript", icon: SiTypescript },
      // { name: "Supabase", icon: SiSupabase },
      { name: "Tailwind", icon: SiTailwindcss },
    ],
    links: {
      github: "https://github.com/NabsCodes/yara",
      live: "https://yara-seven.vercel.app/",
    },
  },
  {
    id: "project-5",
    title: "SMS Scheduler App",
    description:
      "An SMS Scheduler app developed for MKEL Networks to schedule SMS messages. It allows automation of sending recurring messages at specific times and intervals using third-party API(s).",
    featured: false,
    tech: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Express", icon: SiExpress },
      { name: "Bootstrap", icon: SiBootstrap },
      { name: "EJS", icon: SiEjs },
      { name: "Socket.io", icon: SiSocketdotio },
      { name: "MongoDB", icon: SiMongodb },
    ],
    links: {
      github: "https://github.com/NabsCodes/sms-scheduler",
    },
  },
  {
    id: "project-6",
    title: "Elderly Care Management System",
    description:
      "An elderly care management system to monitor and manage the health and well-being of elderly individuals.",
    featured: false,
    cover: {
      url: "/projects/ecms.webp",
      alt: "Fitness tracking dashboard",
    },
    tech: [
      { name: "React", icon: SiReact },
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Express", icon: SiExpress },
      { name: "MongoDB", icon: SiMongodb },
      { name: "Tailwind", icon: SiTailwindcss },
    ],
    links: {
      github: "https://github.com/NabsCodes/ecms",
    },
  },
  {
    id: "project-7",
    title: "CGPA Calculator",
    description:
      "A CGPA calculator for students to calculate their cumulative grade point average.",
    featured: false,
    tech: [
      { name: "HTML", icon: SiHtml5 },
      { name: "CSS", icon: SiCss3 },
      { name: "JavaScript", icon: SiJavascript },
      { name: "Bootstrap", icon: SiBootstrap },
      { name: "Django", icon: SiDjango },
    ],
    links: {
      github: "https://github.com/NabsCodes/cgpa_calculator",
      live: "https://nabeelhassan.pythonanywhere.com",
    },
  },
  {
    id: "project-8",
    title: "CGPA Calculator V2",
    description:
      "CGPA Calculator V2 – an enhanced version with goal planning, what-if analysis, and grade tracking. Works offline and empowers students to simulate future scenarios, set achievement targets, and visualize academic progress.",
    featured: true,
    cover: {
      url: "/projects/cgpa-calculator.png",
      alt: "CGPA Calculator V2",
    },
    tech: [
      { name: "TypeScript", icon: SiTypescript },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "React", icon: SiReact },
      { name: "Tailwind", icon: SiTailwindcss },
    ],
    links: {
      github: "https://github.com/NabsCodes/cgpa_calculator",
      live: "https://cgpa-calculator-v2.vercel.app",
    },
  },
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

export const experienceData: ExperienceContent = {
  title: "Experience",
  subtitle: "journey",
  terminalInfo: {
    command: "career",
    flag: "experiences",
    content: "Discover my career journey and work experience",
  },
  experiences: [
    {
      id: "exp-1",
      role: "Technical Support",
      company: "Nigerian Communications Commission (NCC)",
      companyUrl: "https://www.ncc.gov.ng/",
      location: "Abuja, Nigeria",
      type: "Internship",
      dates: {
        start: "Jul 2022",
        end: "Aug 2022",
      },
      description:
        "Supported Technical Standards & Network Integrity Department with data analysis and documentation.",
      achievements: [
        "Implemented efficient MySQL queries to analyze and manage telecommunications user data, processing over 10,000 records.",
        "Developed technical documentation from industry meetings, enhancing team knowledge base of Mobile Network Operators (MNOs) standards.",
        "Supported data integrity through MySQL database management, working closely with the Technical Standards unit.",
      ],
    },
    {
      id: "exp-2",
      role: "Full Stack Developer",
      company: "Mkel Networks Limited",
      companyUrl: "https://mkelnetworks.com",
      location: "Abuja, Nigeria",
      type: "Internship",
      dates: {
        start: "Aug 2023",
        end: "May 2024",
      },
      description:
        "Developed and maintained multiple client projects and supported team members, focusing on scalable web applications.",
      achievements: [
        "Enhanced team productivity by 50% through the development of an SMS scheduling app with Node.js and Express.",
        "Monitored client queries remotely during night shifts, maintaining a 95% response rate.",
        "Led 80% of frontend and 20% of backend development for an HR Management system, implementing user authentication and core features.",
      ],
    },
    {
      id: "exp-3",
      role: "Freelance Developer",
      company: "Self-Employed",
      location: "Remote",
      type: "Freelance",
      dates: {
        start: "May 2023",
        end: "Present",
      },
      description:
        "Deliver end-to-end freelance web development services, collaborating with cross-functional teams to create tailored client solutions.",
      achievements: [
        "Work closely with designers and backend developers to build seamless, user-focused web applications for diverse clients.",
        "Manage full project lifecycles, from requirements gathering and UI/UX design to deployment and ongoing support.",
        "Build responsive, scalable websites and applications, ensuring high performance and client satisfaction.",
      ],
    },
  ],
};

export const contactData: ContactContent = {
  title: "Get in Touch",
  subtitle: "connect",
  terminalInfo: {
    command: "contact",
    flag: "send",
    content: "Let's collaborate on something amazing",
  },
  description:
    "Have a project in mind or want to discuss opportunities? Feel free to reach out!",
  email: "hassanhauda@gmail.com",
  socials: {
    github: "https://github.com/NabsCodes",
    linkedin: "https://linkedin.com/in/hassan-umar-hassan",
    twitter: "https://twitter.com/nabeelhassan_",
  },
};
