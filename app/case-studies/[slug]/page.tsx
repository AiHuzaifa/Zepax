import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowRight, ArrowUpRight, CheckCircle2, ChevronRight } from "lucide-react";
import { cases, getCase, coverImage } from "@/content/cases";
import { CaseCard } from "@/components/CaseCard";
import { SectionHead } from "@/components/SectionHead";
import { CTABand } from "@/components/CTABand";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return cases.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const c = getCase((await params).slug);
  if (!c) return {};
  return {
    title: c.title,
    description: c.summary,
    alternates: { canonical: `/case-studies/${c.slug}/` },
    openGraph: { images: [coverImage(c)] },
  };
}

const toc = [
  ["overview", "Overview"],
  ["challenge", "The challenge"],
  ["solution", "The solution"],
  ["screenshots", "Screenshots"],
  ["results", "Results"],
];

export default async function CaseStudyPage({ params }: Props) {
  const c = getCase((await params).slug);
  if (!c) notFound();
  const more = cases.filter((o) => o.slug !== c.slug).slice(0, 3);
  const coverAlt = c.screenshots.find((i) => i.src === c.cover)?.caption ?? c.title;

  return (
    <>
      <section className="page-hero" style={{ paddingBottom: 120 }}>
        <div className="container">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/case-studies/">Case studies</Link> <ChevronRight size={14} /> <span>{c.category}</span>
          </nav>
          <span className="eyebrow">{c.kicker}</span>
          <h1 className="h2" style={{ fontSize: "clamp(32px, 4.2vw, 50px)" }}>
            {c.title}
          </h1>
          <p className="lead">{c.summary}</p>
          {c.clientWebsite && (
            <p style={{ marginTop: 18 }}>
              <a className="text-link" style={{ color: "var(--cyan)" }} href={c.clientWebsite} target="_blank" rel="noopener noreferrer">
                Visit {c.clientName} <ArrowUpRight size={16} />
              </a>
            </p>
          )}
          <div className="fact-row">
            <div>
              <span>Our role</span>
              <p>{c.role}</p>
            </div>
            <div>
              <span>Technologies</span>
              <p>{c.tools.join(" · ")}</p>
            </div>
          </div>
        </div>
      </section>

      <div className="container cover-shot">
        <img src={coverImage(c)} alt={coverAlt} width={1600} height={1000} />
      </div>

      <section className="section">
        <div className="container article-layout">
          <aside className="toc">
            <span>In this case study</span>
            {toc.map(([id, label]) => (
              <a key={id} href={`#${id}`}>
                {label}
              </a>
            ))}
            <Link href="/contact/" className="btn btn-primary btn-sm">
              Discuss a similar project
            </Link>
          </aside>

          <div className="prose">
            <section id="overview">
              <span className="eyebrow">Overview</span>
              <h2>Project overview</h2>
              {c.overview.map((p) => (
                <p key={p}>{p}</p>
              ))}
              <ul className="check-list" style={{ marginTop: 22 }}>
                {c.highlights.map((h) => (
                  <li key={h}>
                    <CheckCircle2 size={18} /> {h}
                  </li>
                ))}
              </ul>
            </section>

            <section id="challenge">
              <span className="eyebrow">The challenge</span>
              <h2>What needed to change</h2>
              {c.challenge.map((p) => (
                <p key={p}>{p}</p>
              ))}
              <h3>Project goals</h3>
              <ul className="check-list">
                {c.objectives.map((o) => (
                  <li key={o}>
                    <CheckCircle2 size={18} /> {o}
                  </li>
                ))}
              </ul>
            </section>

            <section id="solution">
              <span className="eyebrow">The solution</span>
              <h2>How we built it</h2>
              {c.steps.map((st, i) => (
                <div className="impl-step" key={st.title}>
                  <span>{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <h3>{st.title}</h3>
                    {st.text.map((t) => (
                      <p key={t}>{t}</p>
                    ))}
                  </div>
                </div>
              ))}
              <h3>Tools & implementation areas</h3>
              <div className="stack-list">
                {c.stack.map((t) => {
                  const [name, ...rest] = t.split(" — ");
                  return (
                    <div key={t}>
                      <b>{name}</b>
                      <span>{rest.join(" — ")}</span>
                    </div>
                  );
                })}
              </div>
            </section>

            <section id="screenshots">
              <span className="eyebrow">Inside the system</span>
              <h2>Original project screenshots</h2>
              <p>Select an image to view it at full size.</p>
              <div className="gallery">
                {c.screenshots.map((img) => (
                  <figure key={img.src}>
                    <a href={img.src} target="_blank" rel="noopener noreferrer" aria-label={`View full size: ${img.caption}`}>
                      <img src={img.src} alt={img.caption} loading="lazy" />
                    </a>
                    <figcaption>{img.caption}</figcaption>
                  </figure>
                ))}
              </div>
            </section>

            <section id="results">
              <span className="eyebrow">Results</span>
              <h2>What changed for the business</h2>
              <ul className="results-list">
                {c.results.map((r) => (
                  <li key={r}>
                    <CheckCircle2 size={20} /> {r}
                  </li>
                ))}
              </ul>
              <h3>Our contribution</h3>
              {c.contribution.map((p) => (
                <p key={p}>{p}</p>
              ))}
              <p className="disclaimer">{c.note.replace(/^(Compliance )?[Nn]ote: /, "")}</p>
            </section>
          </div>
        </div>
      </section>

      <CTABand
        eyebrow="Have a similar challenge?"
        title={
          <>
            We’ve built this before.
            <br />
            <span className="accent">Let’s build yours.</span>
          </>
        }
      />

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-head-row">
            <SectionHead eyebrow="More projects" title="Explore other case studies." />
            <Link href="/case-studies/" className="btn btn-outline">
              View all <ArrowRight size={16} />
            </Link>
          </div>
          <div className="grid-3">
            {more.map((m) => (
              <CaseCard key={m.slug} study={m} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
