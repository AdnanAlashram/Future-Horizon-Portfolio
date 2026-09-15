import Image from "next/image";
import { siteConfig, socialLinks } from "@/data/site";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="shell footer-inner">
        <div className="footer-item footer-brand">
          <Image src="/images/logo.png" alt="" width={30} height={30} />
          <span>{siteConfig.name}</span>
        </div>

        <div className="footer-item footer-item--center">{siteConfig.location}</div>

        <div className="footer-item footer-item--right">
          © {new Date().getFullYear()} {siteConfig.owner}
        </div>

        <div className="footer-links" aria-label="Social links">
          {socialLinks.map((link) => {
            const isExternal = link.href.startsWith("http");
            return (
              <a
                key={link.label}
                href={link.href}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noreferrer" : undefined}
              >
                {link.label}
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
