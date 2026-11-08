import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { trustPoints } from "@/content/site";

export function CTABand({
  eyebrow = "Free 30-minute strategy call",
  title = (
    <>
      Your next lead is already on its way.
      <br />
      <span className="accent">Is your system ready for it?</span>
    </>
  ),
  text = "Tell us where work gets stuck. In one call, we’ll map the quick wins and show you exactly what we’d build, with no obligation.",
  cta = "Book my free call",
  href = "/contact/",
}: {
  eyebrow?: string;
  title?: React.ReactNode;
  text?: string;
  cta?: string;
  href?: string;
}) {
  return (
    <section className="section">
      <div className="container">
        <div className="cta-band" data-reveal>
          <div>
            <span className="eyebrow">{eyebrow}</span>
            <h2 className="h2">{title}</h2>
            <p>{text}</p>
          </div>
          <div className="cta-side">
            <ul>
              {trustPoints.map((t) => (
                <li key={t}>
                  <Check size={18} strokeWidth={2.5} /> {t}
                </li>
              ))}
            </ul>
            <Link href={href} className="btn btn-primary">
              {cta} <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
