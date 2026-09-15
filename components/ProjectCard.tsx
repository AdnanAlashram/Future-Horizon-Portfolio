"use client";

import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import type { Project } from "@/data/projects";
import ProjectImage from "@/components/ProjectImage";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.article
      className={`project-card project-card--${project.layout ?? "standard"}`}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.22, ease: "easeOut" }}
    >
      <Link href={`/projects/${project.slug}`} className="project-card__link" aria-label={`View ${project.title} case study`}>
      <div className="project-card__media">
        <ProjectImage src={project.coverImage} alt={`${project.name} preview`} />
      </div>

      <div className="project-card__content">
        <div className="project-card__meta">
          <span>{project.category}</span>
          <span>{project.year ?? "2026"}</span>
        </div>

        <div className="project-card__heading-row">
          <h3>{project.name}</h3>
          <span className="project-arrow" aria-hidden="true">
            <ArrowUpRight size={18} />
          </span>
        </div>

        <p>{project.description}</p>

        <div className="project-tags" aria-label={`${project.name} technologies`}>
          {project.technologies.map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>
        <span className="project-card__action">View case study <ArrowUpRight size={15} /></span>
      </div>
      </Link>
    </motion.article>
  );
}
