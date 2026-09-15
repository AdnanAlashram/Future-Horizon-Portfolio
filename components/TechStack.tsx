import { technologies } from "@/data/site";
import Reveal from "@/components/Reveal";

export default function TechStack() {
  return (
    <section className="section section--tech">
      <div className="shell">
        <Reveal>
          <div className="section-heading section-heading--stacked">
            <p className="eyebrow">Technology</p>
            <h2>Modern tools. Practical engineering.</h2>
          </div>
        </Reveal>

        <div className="tech-grid" aria-label="Technology stack">
          {technologies.map((tech, index) => (
            <Reveal key={tech} delay={index * 0.05}>
              <div className="tech-item">{tech}</div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
