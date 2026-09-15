import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Check, ExternalLink } from "lucide-react";
import { notFound } from "next/navigation";
import ProjectGallery from "@/components/ProjectGallery";
import { getProjectBySlug, projects } from "@/data/projects";
import { siteConfig } from "@/data/site";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};

  // The root layout's title template already appends the site name, so the
  // bare project title is what belongs here.
  const title = `${project.title} | ${siteConfig.name}`;

  return {
    title: project.title,
    description: project.shortDescription,
    keywords: [project.title, project.category, ...project.technologies],
    alternates: {
      canonical: `/projects/${project.slug}`,
    },
    openGraph: {
      type: "article",
      url: `/projects/${project.slug}`,
      title,
      description: project.shortDescription,
      images: [project.images[0]?.src ?? project.coverImage],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: project.shortDescription,
      images: [project.images[0]?.src ?? project.coverImage],
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const projectIndex = projects.findIndex((item) => item.slug === project.slug);
  const previousProject = projects[(projectIndex - 1 + projects.length) % projects.length];
  const nextProject = projects[(projectIndex + 1) % projects.length];

  // The first screenshot is the full-bleed cover; the rest fill the gallery,
  // so neither section shows the same image twice.
  const [coverImage, ...galleryImages] = project.images;

  return (
    <main className="project-page">
      <div className="shell project-page__topbar">
        <Link href="/#work" className="back-link">
          <ArrowLeft size={16} /> Back to selected work
        </Link>
        <span className="project-page__index">
          Case study {String(projectIndex + 1).padStart(2, "0")} /{" "}
          {String(projects.length).padStart(2, "0")}
        </span>
      </div>

      <section className="shell project-hero">
        <div className="project-hero__copy">
          <p className="eyebrow">{project.category}</p>
          <h1>{project.title}</h1>
          {project.subtitle && <p className="project-hero__subtitle">{project.subtitle}</p>}
          <p className="project-hero__lead">{project.shortDescription}</p>
          <div className="project-hero__rule" />
          <div className="project-meta">
            <div>
              <span>Timeline</span>
              <strong>{project.year ?? "Documented project"}</strong>
            </div>
            {project.role && (
              <div>
                <span>Role</span>
                <strong>{project.role}</strong>
              </div>
            )}
            {project.platform && (
              <div>
                <span>Platform</span>
                <strong>{project.platform}</strong>
              </div>
            )}
          </div>
        </div>

        <aside className="project-hero__aside" aria-label="Project summary">
          <p className="eyebrow">At a glance</p>
          <p>{project.description}</p>
          <div className="project-hero__stack-label">Core technologies</div>
          <div className="project-hero__stack">
            {project.technologies.slice(0, 5).map((technology) => (
              <span key={technology}>{technology}</span>
            ))}
          </div>
        </aside>
      </section>

      {coverImage && (
        <section className="shell project-cover" aria-label={`${project.title} cover image`}>
          <ProjectGallery images={[coverImage]} priority />
        </section>
      )}

      <div className="project-page__rail" aria-hidden="true">
        <span>PROJECT STORY</span>
        <i />
      </div>

      <section className="section project-story">
        <div className="shell project-story__grid">
          <div className="project-section-marker">
            <span>01</span>
            <p className="eyebrow">Context</p>
          </div>
          <div className="project-story__content">
            <h2>{project.overview ?? project.description}</h2>
            <p>{project.description}</p>
          </div>
        </div>
      </section>

      {(project.challenge || project.solution) && (
        <section className="section project-story project-story--split">
          <div className="shell project-story__split-grid">
            {project.challenge && (
              <div className="project-story__chapter">
                <span className="project-story__number">02</span>
                <p className="eyebrow">The challenge</p>
                <h2>{project.challenge}</h2>
              </div>
            )}
            {project.solution && (
              <div className="project-story__chapter">
                <span className="project-story__number">03</span>
                <p className="eyebrow">The response</p>
                <h2>{project.solution}</h2>
              </div>
            )}
          </div>
        </section>
      )}

      {project.ecosystem && (
        <section className="section project-ecosystem">
          <div className="shell">
            <div className="section-heading">
              <div>
                <p className="eyebrow">The product system</p>
                <h2>One platform, several connected experiences.</h2>
              </div>
              <p className="section-lead">
                {project.title} is presented as an ecosystem because its value is in how the roles
                and operations work together.
              </p>
            </div>
            <div className="ecosystem-map">
              {project.ecosystem.map((part, index) => (
                <div className={`ecosystem-node ecosystem-node--${index + 1}`} key={part}>
                  <span>0{index + 1}</span>
                  <strong>{part}</strong>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {project.features && (
        <section className="section project-features">
          <div className="shell">
            <div className="section-heading">
              <div>
                <p className="eyebrow">Confirmed capabilities</p>
                <h2>What the product includes.</h2>
              </div>
              <p className="section-lead">
                A precise view of the functionality represented in this project, without invented
                metrics or claims.
              </p>
            </div>
            <div className="feature-list">
              {project.features.map((feature) => (
                <div className="feature-item" key={feature}>
                  <Check size={17} />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="section project-stack">
        <div className="shell project-stack__grid">
          <div>
            <p className="eyebrow">Technology stack</p>
            <h2>The engineering foundation behind the experience.</h2>
          </div>
          <div className="technology-list">
            {project.technologies.map((technology) => (
              <span key={technology}>{technology}</span>
            ))}
          </div>
        </div>
      </section>

      {project.engineering && (
        <section className="section project-engineering">
          <div className="shell">
            <div className="section-heading">
              <div>
                <p className="eyebrow">Engineering view</p>
                <h2>Designed as a system, delivered as a product.</h2>
              </div>
            </div>
            <div className="engineering-grid">
              {project.engineering.map((item) => (
                <div className="engineering-item" key={item.label}>
                  <span>{item.label}</span>
                  <strong>{item.value}</strong>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {galleryImages.length > 0 && (
        <section className="section project-gallery-section">
          <div className="shell">
            <div className="section-heading">
              <div>
                <p className="eyebrow">Project gallery</p>
                <h2>Inside the product.</h2>
              </div>
              <p className="section-lead">
                Original project imagery, presented with room to inspect the work.
              </p>
            </div>
            <ProjectGallery images={galleryImages} />
          </div>
        </section>
      )}

      {project.outcome && (
        <section className="section project-outcome">
          <div className="shell project-outcome__inner">
            <p className="eyebrow eyebrow--light">What was built</p>
            <h2>{project.outcome}</h2>
          </div>
        </section>
      )}

      <nav className="shell project-next-nav" aria-label="Project navigation">
        <Link href={`/projects/${previousProject.slug}`}>
          <span>
            <ArrowLeft size={16} /> Previous project
          </span>
          <strong>{previousProject.title}</strong>
        </Link>
        <Link href={`/projects/${nextProject.slug}`}>
          <span>
            Next project <ArrowRight size={16} />
          </span>
          <strong>{nextProject.title}</strong>
        </Link>
      </nav>

      <div className="shell project-page__footer-link">
        <Link href="/#contact">
          Start a conversation <ExternalLink size={15} />
        </Link>
      </div>
    </main>
  );
}
