import { projects } from "./projects";

export const siteConfig = {
  /** Studio brand — used for the wordmark, page titles and OG tags. */
  name: "Future Horizon",
  /** The person behind the studio. */
  owner: "Adnan Alashram",
  title: "Future Horizon — Software Engineering Studio",
  description:
    "We design and engineer web applications, mobile experiences and custom digital products that turn complex problems into clear, scalable systems.",
  // TODO: replace the three placeholders below before deploying.
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
