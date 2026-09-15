const items = [
  "WEB DEVELOPMENT",
  "✦",
  "MOBILE APPS",
  "✦",
  "CUSTOM SOFTWARE",
  "✦",
  "PRODUCT DESIGN",
  "✦",
];

export default function Marquee() {
  // Decorative: the same capabilities are listed properly in the Services
  // section, so this is hidden from assistive tech rather than read twice.
  return (
    <div className="marquee-wrap" aria-hidden="true">
      <div className="marquee-track">
        {[...items, ...items].map((item, index) => (
          <span key={`${item}-${index}`} className="marquee-item">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
