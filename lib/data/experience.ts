import { ExperienceContent } from "@/lib/types";

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
      role: "Frontend Developer (Trainee)",
      company: "Self-Learning & Training",
      location: "Remote",
      type: "Learning",
      dates: {
        start: "2022",
        end: "2023",
      },
      description:
        "Focused on building a solid foundation in frontend and full-stack development through structured self-learning and practice.",
      achievements: [
        "Completed guided tutorials and hands-on exercises in React, Next.js, Node.js, and PostgreSQL.",
        "Built mini-projects to strengthen problem-solving and coding skills.",
        "Prepared for real-world development by following best practices in Git, deployment, and responsive design.",
      ],
      current: false,
    },
    {
      id: "exp-2",
      role: "Freelance Developer",
      company: "Self-Employed",
      location: "Remote",
      type: "Freelance",
      dates: {
        start: "2023",
        end: "Present",
      },
      description:
        "Work independently on diverse web development projects, creating responsive and user-friendly applications.",
      achievements: [
        "Designed and built full-stack projects including a news platform, an AI finance tracker, and a record label website.",
        "Collaborated with peers and clients to translate ideas into functional, scalable applications.",
        "Deployed projects using modern tools like Vercel and GitHub, ensuring accessibility and performance.",
      ],
      current: true,
    },
  ],
};
