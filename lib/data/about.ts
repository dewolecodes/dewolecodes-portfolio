import { AboutContent } from "@/lib/types";

export const aboutContent: AboutContent = {
  title: "About Me",
  subtitle: "hello",
  terminalInfo: {
    command: "whoami",
    flag: "info",
    content: "Software engineer delivering measurable business value",
  },
  image: {
    src: "/images/nabeel.webp",
    alt: "Hassan Umar Hassan",
  },
  description: {
    details: [
      "Hello, I'm Hassan, though many know me as Nabeel. I architect and develop web applications that combine elegant design with robust functionality, ensuring they deliver measurable business value. What started as curiosity about how websites work has evolved into a passion for creating solutions that drive real results.",

      "With experience delivering client projects and maintaining a 100% satisfaction rate, I specialize in transforming business challenges into scalable digital solutions. My approach focuses on clean, efficient code that not only works flawlessly but also provides the foundation for future growth and scalability.",

      // "As a freelance developer, I've had the opportunity to work with diverse clients, delivering tailored solutions that meet their specific needs. My experience ranges from building responsive websites to developing complex web applications, always focusing on creating intuitive user experiences and robust functionality.",

      "As a freelance developer, I've had the opportunity to work with diverse clients across fintech, e-commerce, and SaaS platforms. My expertise ranges from building responsive websites to developing complex web applications, always with a focus on creating intuitive user experiences and robust functionality that drives measurable ROI.",
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
