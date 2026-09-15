import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import { siteConfig } from "@/data/site";

export default function Contact() {
  return (
    <section id="contact" className="section section--cta">
      <Reveal className="shell">
        <div className="cta-box">
          <p className="eyebrow eyebrow--dark">Start a conversation</p>
          <h2>Have an idea worth building?</h2>
          <p>
            Tell us what you&apos;re trying to create. We can turn the rough idea into a clear
            digital product plan.
          </p>
          <div className="cta-box__actions">
            <a href={`mailto:${siteConfig.email}`} className="button button--primary button--large">
              Start a Project
              <ArrowUpRight size={18} />
            </a>
            <a href={`mailto:${siteConfig.email}`} className="cta-box__email">
              {siteConfig.email}
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
