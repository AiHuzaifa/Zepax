import { tools } from "@/content/tools";

const iconOnly = ["hubspot", "claude"];

export function LogoMarquee() {
  const items = tools.filter((t) => t.id !== "mcp");
  return (
    <section className="logo-strip" aria-label="Platforms we work with">
      <div className="container">
        <p>We build on the platforms your business already runs on</p>
      </div>
      <div className="marquee">
        <div className="marquee-track">
          {[...items, ...items].map((t, i) => (
            <span className="marquee-item" key={i} aria-hidden={i >= items.length}>
              <img src={`/logos/${t.file}`} alt={t.name} height={30} />
              {iconOnly.includes(t.id) && t.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
