import { Github, Code, Palette, Smartphone, Database } from "lucide-react";

export const projects = [
  {
    title: "TaskNest",
    description:
      "A production-ready task management app featuring secure authentication, protected routes, and responsive theming. It includes RESTful APIs, efficient state management with React Query, advanced form handling, and UX enhancements like debouncing.",
    tech: [
      "Next.js",
      "React",
      "Typescript",
      "Tailwind CSS",
      "React Query",
      "React Hook Form",
      "Mongo DB",
    ],
    image: "/images/tasknest.webp",
    github: "https://github.com/Hareesh7036/todo_list_nextjs",
    live: "#",
  },
  {
    title: "Info Bricks",
    description:
      " Created a dynamic single-page news application using React, showcasing proficiency in web development. Integrated an external API to fetch real-time news data, providing users with up-to-date information. ",
    tech: ["React", "HTML", "CSS", "JavaScript", "External API Integration"],
    image: "/images/infobricks.jpg",
    github: "https://github.com/Hareesh7036/News-Apllication",
    live: "https://news-apllication.vercel.app/",
  },
  {
    title: "Multiplication Test App",
    description:
      "Multiplication App is a web application it asks the user some random questions on multiplication and shows user score.",
    tech: ["HTML", "CSS", "JavaScript"],
    image: "/images/MultiplicationApp.png",
    github: "https://github.com/Hareesh7036/Multiplication-App",
    live: "https://hareesh7036.github.io/Multiplication-App/",
  },
  {
    title: "Digital Clock",
    description:
      "Digital Clock is a project which shows current time with hours, minutes, seconds and AM/PM",
    tech: ["HTML", "CSS"],
    image: "/images/digitalClock.png",
    github: "https://github.com/Hareesh7036/Digital-Clock",
    live: "https://hareesh7036.github.io/Digital-Clock",
  },
];

export const skills = [
  { name: "React", icon: Code, level: 90 },
  { name: "Next.js", icon: Code, level: 85 },
  { name: "Elysia.js", icon: Code, level: 85 },
  { name: "TypeScript", icon: Code, level: 85 },
  { name: "JavaScript", icon: Code, level: 95 },
  { name: "Tailwind CSS", icon: Palette, level: 90 },
  { name: "HTML/CSS", icon: Palette, level: 95 },
  { name: "Responsive Design", icon: Smartphone, level: 90 },
  { name: "REST APIs", icon: Database, level: 80 },
  { name: "MongoDB", icon: Database, level: 80 },
  { name: "Git/GitHub", icon: Github, level: 85 },
];
