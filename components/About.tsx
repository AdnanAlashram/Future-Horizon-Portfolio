import Reveal from "@/components/Reveal";

export default function About() {
  return (
    <section id="about" className="section section--about">
      <div className="shell about-grid">
        <Reveal>
          <div className="about-intro">
            <p className="eyebrow">Engineering philosophy</p>
            <h2>Technology is only useful when it solves the right problem.</h2>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="about-copy">
            <p>
              We work at the intersection of product strategy, interface craft and practical engineering.
              That means starting with the actual business problem, shaping a product that feels intuitive,
              and building systems that stay clean as complexity grows.
            </p>
            <p>
              The goal is not to chase trends. It is to create digital products that are thoughtful,
              usable, scalable and genuinely valuable for the people who rely on them every day.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
