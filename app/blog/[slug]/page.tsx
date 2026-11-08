import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowRight, ArrowUpRight, ChevronRight, Clock } from "lucide-react";
import { posts } from "@/content/blog";
import { getService } from "@/content/services";
import { BlogCard } from "@/components/BlogCard";
import { SectionHead } from "@/components/SectionHead";
import { CTABand } from "@/components/CTABand";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

const getPost = (slug: string) => posts.find((p) => p.slug === slug);

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const p = getPost((await params).slug);
  if (!p) return {};
  return {
    title: p.title,
    description: p.description,
    alternates: { canonical: `/blog/${p.slug}/` },
    openGraph: { type: "article" },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const p = getPost((await params).slug);
  if (!p) notFound();
  const service = getService(p.service);
  const more = posts.filter((o) => o.slug !== p.slug);

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/blog/">Blog</Link> <ChevronRight size={14} /> <span>{p.category}</span>
          </nav>
          <span className="eyebrow">{p.category}</span>
          <h1 className="h2" style={{ fontSize: "clamp(32px, 4.2vw, 50px)" }}>
            {p.title}
          </h1>
          <p className="lead">{p.description}</p>
          <p style={{ marginTop: 20, display: "flex", gap: 16, fontSize: 14 }}>
            <span>ZEPAX Technology</span>
            <span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
              <Clock size={14} /> {p.read}
            </span>
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container article-layout">
          <aside className="toc">
            <span>In this guide</span>
            {p.sections.map((s, i) => (
              <a key={s.title} href={`#section-${i}`}>
                {s.title}
              </a>
            ))}
            {service && (
              <Link href={`/services/${service.slug}/`} className="btn btn-primary btn-sm">
                {service.title}
              </Link>
            )}
          </aside>
          <article className="prose">
            {p.sections.map((s, i) => (
              <section id={`section-${i}`} key={s.title}>
                <h2>{s.title}</h2>
                {s.paragraphs.map((t) => (
                  <p key={t}>{t}</p>
                ))}
              </section>
            ))}
            <div className="source-box">
              <strong style={{ color: "var(--ink)" }}>Further reading: </strong>
              <a href={p.source.url} target="_blank" rel="noopener noreferrer">
                {p.source.label} <ArrowUpRight size={15} />
              </a>
            </div>
          </article>
        </div>
      </section>

      <CTABand
        eyebrow="Want this done for you?"
        title={
          <>
            Turn this guide into
            <br />
            <span className="accent">a working system.</span>
          </>
        }
        href={service ? `/contact/?service=${service.slug}` : "/contact/"}
      />

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-head-row">
            <SectionHead eyebrow="Keep reading" title="More guides." />
            <Link href="/blog/" className="btn btn-outline">
              All articles <ArrowRight size={16} />
            </Link>
          </div>
          <div className="grid-2">
            {more.map((m) => (
              <BlogCard key={m.slug} post={m} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
