import { AboutContent } from "@/lib/types";

export const aboutContent: AboutContent = {
  title: "About Me",
  subtitle: "hello",
  terminalInfo: {
    command: "whoami",
    flag: "info",
    content: "Software engineer building scalable, user-friendly applications.",
  },
  image: {
    src: "/images/dewole.webp",
    alt: "Akinbola Abdulrahmon Adewole",
  },
  description: {
    details: [
      "Hello, I’m Abdulrahman, though many know me as Dewole Codes. I design and develop software solutions that balance clean design with powerful functionality, turning ideas into practical solutions that solve real problems.",

      "With hands-on experience across both frontend and backend development, I specialize in building scalable, efficient, and user-friendly applications. My focus is always on writing clean, maintainable code that not only works seamlessly today but also provides a strong foundation for future growth.",

      // "As a freelance developer, I've had the opportunity to work with diverse clients, delivering tailored solutions that meet their specific needs. My experience ranges from building responsive websites to developing complex web applications, always focusing on creating intuitive user experiences and robust functionality.",

      "My toolkit spans frontend frameworks (React, Next.js), backend development (Node.js, Express.js), and databases (PostgreSQL). I also use modern styling tools like Tailwind CSS and version control with Git/GitHub, enabling me to build and maintain scalable, production-ready applications.",

      "Whether collaborating with teams or working independently, I bring creativity, problem-solving, and professionalism to every project I take on.",
    ],
  },
  interests: [
    {
      type: "Professional Philosophy",
      items: [
        "Collaboration over competition",
        "Clear communication & transparency",
        "Learning & Exploring new tech trends",
        "Business value over technical complexity",
        "User-centered design principles",
      ],
    },
    {
      type: "What Drives Results",
      items: [
        "Building scalable architectures",
        "Optimizing for performance & user experience",
        "Delivering ROI-focused solutions",
        "Staying ahead of industry trends",
        "Mentoring & knowledge sharing",
      ],
    },
  ],
};
