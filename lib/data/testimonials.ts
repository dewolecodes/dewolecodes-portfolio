import { TestimonialsContent } from "@/lib/types";

export const testimonialsContent: TestimonialsContent = {
  title: "Testimonials",
  subtitle: "what people say",
  terminalInfo: {
    command: "say",
    flag: "testimonials",
    content: "Feedback from friends and collaborators",
  },
  items: [
    {
      id: "t1",
      quote:
        "Dewole has a rare mix of discipline and creativity. Even outside tech, I’ve seen him take on complex challenges with patience and persistence. Those qualities make him reliable in any team setting.",
      author: {
        name: "Praise Oluwasakin",
        role: "Frontend & Shopify Developer",
        company: "Freelance",
        avatarUrl: "/images/praise.webp",
      },
    },
    {
      id: "t2",
      quote:
        "I was really impressed by the MadeIn9ja platform Abdulrahman built. The speed, responsiveness, and attention to detail made it feel like using a real-world news site. His dedication to getting things right shows in the final product.",
      author: {
        name: "Akinbola Hadijat",
        role: "Business Coach",
        company: "Made In 9ja",
        // avatarUrl: "/images/madein9ja-feedback.webp",
      },
    },
    {
      id: "t3",
      quote:
        "I’ve watched Abdulrahman grow steadily as a developer. He’s always eager to learn, quick to share knowledge, and never shies away from helping others understand concepts better. His passion is genuine.",
      author: {
        name: "Aisha Opeyemi",
        role: "Product Designer",
        company: "MKEL Networks",
        // avatarUrl: "/images/aisha.webp",
      },
    },
  ],
};
