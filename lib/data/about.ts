import { AboutContent } from "../types";

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
