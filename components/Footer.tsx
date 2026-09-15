import Image from "next/image";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="shell footer-inner">
                <div className="footer-item footer-item--center footer-brand">
                    <Image src="/images/cececec.png" alt="Future Horizon" width={42} height={42} />
                </div>
                {/* <div className="footer-item footer-item--center">Software Engineer</div> */}
                {/* <div className="footer-item footer-item--right">{siteConfig.location}</div> */}

                {/* <div className="footer-links" aria-label="Social links"> */}
                {/* {socialLinks.map((link) => (
            <a key={link.label} href={link.href} target={link.href.startsWith("http") ? "_blank" : undefined} rel={link.href.startsWith("http") ? "noreferrer" : undefined}>
              {link.label}
            </a>
          ))} */}
                {/* </div> */}
            </div>
        </footer>
    );
}
