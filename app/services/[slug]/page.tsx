import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowRight, ChevronRight, ShieldCheck, Sparkles, Users } from "lucide-react";
import { services, getService } from "@/content/services";
import { getCase } from "@/content/cases";
import { SectionHead } from "@/components/SectionHead";
import { ToolLogos } from "@/components/ToolLogos";
import { CaseCard } from "@/components/CaseCard";
import { ServiceCard } from "@/components/ServiceCard";
import { CTABand } from "@/components/CTABand";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const s = getService((await params).slug);
  if (!s) return {};
  return {
    title: s.title,
    description: s.intro,
    alternates: { canonical: `/services/${s.slug}/` },
    openGraph: { images: [s.image] },
  };
}

export default async function ServicePage({ params }: Props) {
  const s = getService((await params).slug);
  if (!s) notFound();
  const related = getCase(s.relatedCase);
  const others = services.filter((o) => o.slug !== s.slug).slice(0, 2);

  return (
    <>
      <section className="page-hero">
        <div className="container page-hero-grid">
          <div>
            <nav className="breadcrumb" aria-label="Breadcrumb">
              <Link href="/services/">Services</Link> <ChevronRight size={14} /> <span>{s.title}</span>
            </nav>
            <span className="eyebrow">{s.eyebrow}</span>
            <h1 className="display">
              {s.headline} <span className="accent">{s.headlineAccent}</span>
            </h1>
            <p className="lead">{s.intro}</p>
            <div className="hook-line">
              <Sparkles size={20} style={{ color: "var(--cyan)", flex: "none", marginTop: 3 }} />
              {s.hook}
            </div>
            <div className="hero-actions">
              <Link href={`/contact/?service=${s.slug}`} className="btn btn-primary">
                Discuss my project <ArrowRight size={18} />
              </Link>
              {related && (
                <Link href={`/case-studies/${related.slug}/`} className="btn btn-ghost-light">
                  See a real example
                </Link>
              )}
            </div>
          </div>
          <img src={s.image} alt={s.imageAlt} width={1600} height={1000} fetchPriority="high" />
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <div>
            <span className="eyebrow">Overview</span>
            <h2 className="h2" style={{ marginTop: 14 }}>
              {s.overview}
            </h2>
          </div>
          <div>
            <p className="lead">{s.body}</p>
            <div className="audience">
              <Users size={20} />
              <span>{s.audience}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-surface">
        <div className="container">
          <SectionHead eyebrow="What we build" title="Practical systems, built around your process." />
          <div className="grid-4">
            {s.builds.map((b, i) => (
              <div className="card build-card" key={b.title} data-reveal>
                <span className="icon-box">{String(i + 1).padStart(2, "0")}</span>
                <h3>{b.title}</h3>
                <p>{b.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead eyebrow="Tools & platforms" title="The right tools, chosen for your business." />
          <div className="grid-3">
            {s.toolGroups.map((g) => (
              <div className="card tool-group" key={g.title} data-reveal>
                <ToolLogos ids={g.ids} />
                <h3>{g.title}</h3>
                <p>{g.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-surface">
        <div className="container">
          <SectionHead eyebrow="Example workflow" title="Here’s what this could look like for you." />
          <div className="card example-box" data-reveal>
            <div className="example-main">
              <span className="pill">{s.example.tag}</span>
              <h3>{s.example.title}</h3>
              <p>
                <strong style={{ color: "var(--ink)" }}>The challenge: </strong>
                {s.example.challenge}
              </p>
              <ol className="steps-list">
                {s.example.steps.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ol>
            </div>
            <div className="example-side">
              <span className="eyebrow">Potential impact</span>
              <strong>{s.example.metric}</strong>
              <p>{s.example.math}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-navy">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">How we deliver</span>
            <h2 className="h2" style={{ marginTop: 14 }}>
              From first call to <span className="accent">confident launch.</span>
            </h2>
          </div>
          <ol className="stages">
            {s.stages.map((st, i) => (
              <li key={st}>
                <span>{String(i + 1).padStart(2, "0")}</span>
                {st}
              </li>
            ))}
          </ol>
          <div className="note-box">
            <ShieldCheck size={22} />
            <div>
              <h3>{s.noteTitle}</h3>
              <p>{s.note}</p>
            </div>
          </div>
        </div>
      </section>

      {related && (
        <section className="section">
          <div className="container">
            <SectionHead eyebrow="Proof, not promises" title="A real project we delivered." />
            <CaseCard study={related} wide />
          </div>
        </section>
      )}

      <CTABand
        eyebrow={s.title}
        title={
          <>
            Ready to put this to work?
            <br />
            <span className="accent">The first call is on us.</span>
          </>
        }
        href={`/contact/?service=${s.slug}`}
      />

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <SectionHead eyebrow="Explore more" title="Other ways we can help." />
          <div className="grid-2">
            {others.map((o) => (
              <ServiceCard key={o.slug} service={o} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
