import { projects } from "./projects";

export const siteConfig = {
  name: "Adnan Alashram",
  title: "Adnan Alashram — Software Engineer",
  description:
    "Software engineer building modern web applications, mobile experiences and custom digital products.",
  email: "hello@example.com",
  location: "Damascus · Remote",
  canonicalUrl: "https://example.com",
};

export const socialLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com" },
  { label: "GitHub", href: "https://github.com" },
  { label: "Email", href: `mailto:${siteConfig.email}` },
];

export const services = [
  {
    id: "web-development",
    number: "01",
    title: "Web",
    description:
      "High-quality websites and web applications shaped around business goals, product clarity and a premium user experience.",
    tags: ["React", "Next.js", "TypeScript"],
  },
  {
    id: "mobile-apps",
    number: "02",
    title: "Mobile",
    description:
      "Cross-platform mobile experiences built for speed, usability and practical product thinking from concept to release.",
    tags: ["React Native", "Expo", "iOS / Android"],
  },
  {
    id: "business-systems",
    number: "03",
    title: "Business Systems",
    description:
      "Dashboards, merchant workflows and internal tools that replace friction with structure and visibility.",
    tags: ["Dashboards", "APIs", "Real-time"],
  },
  {
    id: "custom-software",
    number: "04",
    title: "Custom Software",
    description:
      "Purpose-built solutions for problems that need more than a generic template or a quick bolt-on patch.",
    tags: ["Architecture", "Backend", "Integration"],
  },
];

export const technologies = [
  "React",
  "Next.js",
  "React Native",
  "Expo",
  "TypeScript",
  "Django",
  "REST APIs",
  "WebSockets",
  "PostgreSQL",
];

export const projectList = projects;
