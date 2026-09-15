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
  return (
    <div className="marquee-wrap" aria-label="Core capabilities">
      <div className="marquee-track" aria-hidden="true">
        {[...items, ...items].map((item, index) => (
          <span key={`${item}-${index}`} className="marquee-item">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
