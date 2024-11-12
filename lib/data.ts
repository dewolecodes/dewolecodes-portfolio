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
  // SiDocker,
  // SiPrisma,
  SiFirebase,
  SiMysql,
  SiNotion,
  SiSupabase,
  SiPostgresql,
  SiPrisma,
} from "react-icons/si";
// import { FaJava } from "react-icons/fa";
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
    name: "Skills",
    href: "/#skills",
    label: "Skills section",
  },
  {
    name: "Projects",
    href: "/#projects",
    label: "Projects section",
  },
  {
    name: "Experience",
    href: "/#experience",
    label: "Experience section",
  },
] as const;

export const heroContent: HeroContent = {
  intro: " CODE • CREATE • INNOVATE ",
  description:
    "I am a Frontend developer passionate about creating exceptional user experiences. I turn complex challenges into clean, efficient, and delightful solutions.",
  personal: {
    name: "Hassan Umar Hassan",
    nickname: "Nabeel",
  },
  currentRole: {
    title: "Full Stack Developer",
    filename: "current_role.tsx",
  },
  roles: [
    { icon: Terminal, label: "Software Engineer" },
    { icon: Code2, label: "React Developer" },
    { icon: Code2, label: "Frontend Developer" },
    { icon: Boxes, label: "Full Stack Developer" },
    { icon: ArrowRight, label: "Freelancer" },
    // Add more roles as needed
  ],
  cta: {
    primary: {
      href: "#projects",
    },
    secondary: {
      href: "/resume.pdf",
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
    content: "Turning ideas into reality through code",
  },
  image: {
    src: "/images/nabeel.webp",
    alt: "Hassan Umar Hassan",
  },
  description: {
    details: [
      "Hey there! I'm Hassan (Nabeel), a developer who believes in the power of technology to create meaningful experiences. My journey into tech began with a simple curiosity about how things work on the web, and it quickly turned into a passion for creating beautiful, functional solutions.",

      "When I'm not crafting code, I dive into various activities that keep my creativity flowing and mind sharp. I'm an avid reader of tech blogs and science fiction, which fuels my imagination and keeps me updated with the latest innovations.",

      "What truly excites me about technology is its potential to solve real-world problems. Every project is an opportunity to learn something new and create something meaningful. I believe in writing clean, maintainable code that makes a difference.",
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
      ],
    },
    {
      type: "What Drives Me",
      items: [
        "Building intuitive user experiences",
        "Solving complex problems",
        "Striving to be at the top",
        "Continuous learning",
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
    content: "Technologies and tools I work with to bring ideas to life",
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
        // { name: "Java", icon: FaJava },
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
      ],
    },
    {
      title: "Backend & Database",
      skills: [
        { name: "Express.js", icon: SiExpress },
        { name: "MongoDB", icon: SiMongodb },
        { name: "MySQL", icon: SiMysql },
        { name: "Firebase", icon: SiFirebase },
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
    title: "Modern E-commerce Platform",
    description:
      "A full-stack e-commerce solution with real-time inventory and seamless payments.",
    featured: true,
    cover: {
      // 1200x675 for 16:9 aspect ratio
      url: "https://picsum.photos/seed/ecommerce/1200/675",
      alt: "E-commerce platform dashboard",
    },
    tech: [
      { name: "Next.js", icon: SiNextdotjs },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Tailwind", icon: SiTailwindcss },
      { name: "MongoDB", icon: SiMongodb },
      { name: "Prisma", icon: SiPrisma },
    ],
    links: {
      github: "https://github.com/...",
      live: "https://...",
    },
    details: {
      challenge:
        "Building a scalable e-commerce platform with real-time inventory management and fast checkout process.",
      solution:
        "Implemented Next.js for optimal performance, MongoDB for flexible data structure, and integrated real-time features.",
      keyFeatures: [
        "Real-time inventory tracking",
        "Secure payment processing",
        "Responsive admin dashboard",
        "Advanced search and filtering",
      ],
    },
  },
  {
    id: "project-2",
    title: "Social Media Dashboard",
    description:
      "A real-time social media analytics dashboard with customizable widgets and data visualization.",
    featured: true,
    cover: {
      url: "https://picsum.photos/seed/dashboard/1200/675",
      alt: "Social media analytics dashboard",
    },
    tech: [
      { name: "React", icon: SiReact },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Tailwind", icon: SiTailwindcss },
      { name: "Firebase", icon: SiFirebase },
      { name: "Framer", icon: SiFramer },
    ],
    links: {
      github: "https://github.com/...",
      live: "https://...",
    },
    details: {
      challenge:
        "Creating a performant dashboard that handles real-time data updates and complex visualizations.",
      solution:
        "Used React with Firebase for real-time updates, and implemented efficient data caching strategies.",
      keyFeatures: [
        "Real-time data updates",
        "Interactive charts",
        "Customizable widgets",
        "Data export capabilities",
      ],
    },
  },
  {
    id: "project-3",
    title: "Task Management API",
    description:
      "A RESTful API for task management with authentication, real-time updates, and team collaboration features.",
    featured: true,
    cover: {
      url: "https://picsum.photos/seed/api/1200/675",
      alt: "API documentation interface",
    },
    tech: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Express", icon: SiExpress },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "Prisma", icon: SiPrisma },
    ],
    links: {
      github: "https://github.com/...",
      live: "https://...",
    },
  },
  {
    id: "project-4",
    title: "Blog Platform",
    description:
      "A modern blog platform with rich text editing, image optimization, and SEO features.",
    featured: false,
    cover: {
      url: "https://picsum.photos/seed/blog/1200/675",
      alt: "Blog platform interface",
    },
    tech: [
      { name: "Next.js", icon: SiNextdotjs },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Supabase", icon: SiSupabase },
      { name: "Tailwind", icon: SiTailwindcss },
    ],
    links: {
      github: "https://github.com/...",
      live: "https://...",
    },
  },
  {
    id: "project-5",
    title: "AI-Powered Chat Application",
    description:
      "Real-time chat platform with AI-driven language translation and sentiment analysis.",
    featured: false,
    cover: {
      url: "https://picsum.photos/seed/chat/1200/675",
      alt: "Chat application interface",
    },
    tech: [
      { name: "Next.js", icon: SiNextdotjs },
      { name: "TypeScript", icon: SiTypescript },
      { name: "MongoDB", icon: SiMongodb },
      { name: "Firebase", icon: SiFirebase },
    ],
    links: {
      github: "https://github.com/...",
      live: "https://...",
    },
  },
  {
    id: "project-6",
    title: "Fitness Tracking Platform",
    description:
      "Comprehensive fitness tracking application with workout planning and progress visualization.",
    featured: false,
    cover: {
      url: "https://picsum.photos/seed/fitness/1200/675",
      alt: "Fitness tracking dashboard",
    },
    tech: [
      { name: "React", icon: SiReact },
      { name: "Node.js", icon: SiNodedotjs },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "Prisma", icon: SiPrisma },
    ],
    links: {
      github: "https://github.com/...",
      live: "https://...",
    },
  },
  {
    id: "project-7",
    title: "Property Management System",
    description:
      "Cloud-based property management solution for real estate agencies and landlords.",
    featured: false,
    cover: {
      url: "https://picsum.photos/seed/property/1200/675",
      alt: "Property management interface",
    },
    tech: [
      { name: "Next.js", icon: SiNextdotjs },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Supabase", icon: SiSupabase },
      { name: "Tailwind", icon: SiTailwindcss },
    ],
    links: {
      github: "https://github.com/...",
      live: "https://...",
    },
  },
  {
    id: "project-8",
    title: "Learning Management System",
    description:
      "Interactive learning platform with video courses, quizzes, and progress tracking.",
    featured: false,
    cover: {
      url: "https://picsum.photos/seed/learning/1200/675",
      alt: "Learning platform dashboard",
    },
    tech: [
      { name: "React", icon: SiReact },
      { name: "Express", icon: SiExpress },
      { name: "MongoDB", icon: SiMongodb },
      { name: "Firebase", icon: SiFirebase },
    ],
    links: {
      github: "https://github.com/...",
      live: "https://...",
    },
  },
];

export const experienceData: ExperienceContent = {
  title: "Experience",
  subtitle: "journey",
  terminalInfo: {
    command: "career",
    flag: "path",
    content: "Building & growing through meaningful challenges",
  },
  experiences: [
    {
      id: "exp-1",
      role: "Senior Frontend Developer",
      company: "TechCorp Solutions",
      companyUrl: "https://techcorp.com",
      location: "San Francisco, CA (Remote)",
      type: "Full-time",
      dates: {
        start: "Jun 2022",
        end: "Present",
      },
      description:
        "Led the frontend development team in building and maintaining large-scale web applications.",
      achievements: [
        "Reduced application load time by 40% through performance optimization",
        "Implemented new design system used across 5 product teams",
        "Mentored 4 junior developers and established frontend best practices",
      ],
    },
    {
      id: "exp-2",
      role: "Full Stack Developer",
      company: "InnovateTech",
      companyUrl: "https://innovatetech.com",
      location: "London, UK",
      type: "Contract",
      dates: {
        start: "Mar 2021",
        end: "May 2022",
      },
      description:
        "Developed and maintained multiple client projects focusing on scalable web applications.",
      achievements: [
        "Built and launched 3 major client projects with 99.9% uptime",
        "Implemented automated testing reducing bugs by 60%",
        "Developed reusable component library used across projects",
      ],
    },
  ],
};

export const contactData: ContactContent = {
  title: "Get in touch",
  subtitle: "contact",
  terminalInfo: {
    command: "contact",
    flag: "email",
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
