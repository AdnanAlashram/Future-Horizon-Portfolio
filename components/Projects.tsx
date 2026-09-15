import { projectList } from "@/data/site";
import ProjectCard from "@/components/ProjectCard";
import Reveal from "@/components/Reveal";

export default function Projects() {
  return (
    <section id="work" className="section section--projects">
      <Reveal className="shell">
        <div className="section-heading section-heading--split">
          <div>
            <p className="eyebrow">Selected work</p>
            <h2>Ideas become real when they&apos;re engineered well.</h2>
          </div>
          <p className="section-lead">
            Selected projects combining product thinking, engineering and polished interfaces.
          </p>
        </div>
      </Reveal>

      <div className="projects-grid shell">
        {projectList.map((project, index) => (
          <ProjectCard key={project.slug} project={project} delay={index * 0.08} />
        ))}
      </div>
    </section>
  );
}
