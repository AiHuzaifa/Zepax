import type { Metadata } from "next";
import { posts } from "@/content/blog";
import { BlogCard } from "@/components/BlogCard";
import { CTABand } from "@/components/CTABand";

export const metadata: Metadata = {
  title: "Blog: Automation, CRM & AI Guides",
  description: "Practical guides on lead follow-up automation, CRM setup and AI receptionists from the ZEPAX Technology team.",
  alternates: { canonical: "/blog/" },
};

export default function BlogPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Guides & insights</span>
          <h1 className="display">
            Practical playbooks for <span className="accent">smarter operations.</span>
          </h1>
          <p className="lead">
            No fluff, just what we’ve learned building automations, CRMs and AI agents for real businesses.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="container grid-3">
          {posts.map((p) => (
            <BlogCard key={p.slug} post={p} />
          ))}
        </div>
      </section>
      <CTABand />
    </>
  );
}
