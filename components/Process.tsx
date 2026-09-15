import Reveal from "@/components/Reveal";

const steps = [
  {
    id: "01",
    title: "Discovery",
    text: "Understand the problem, users, goals and technical constraints.",
  },
  {
    id: "02",
    title: "UX / UI",
    text: "Turn requirements into a clear, premium and usable product experience.",
  },
  {
    id: "03",
    title: "Development",
    text: "Build the product with clean architecture, responsive interfaces and tested interactions.",
  },
  {
    id: "04",
    title: "Launch & Support",
    text: "Ship confidently and keep improving the product after launch.",
  },
];

export default function Process() {
  return (
    <section id="process" className="section section--process">
      <div className="shell">
        <Reveal>
          <div className="section-heading section-heading--stacked">
            <p className="eyebrow">Process</p>
            <h2>A clear path from brief to launch.</h2>
          </div>
        </Reveal>

        <div className="process-grid">
          {steps.map((step, index) => (
            <Reveal key={step.id} delay={index * 0.08}>
              <article className="process-card">
                <div className="process-card__index">{step.id}</div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
