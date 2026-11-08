import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { reviews } from "@/content/reviews";
import { site } from "@/content/site";
import { ReviewCard } from "@/components/ReviewCard";
import { CTABand } from "@/components/CTABand";

export const metadata: Metadata = {
  title: "Client Reviews",
  description:
    "Verified 5-star client reviews from Freelancer.com and Fiverr for ZEPAX Technology’s automation, CRM and AI agent projects.",
  alternates: { canonical: "/our-clients/" },
};

export default function ClientsPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Client reviews</span>
          <h1 className="display">
            Don’t take our word for it. <span className="accent">Take theirs.</span>
          </h1>
          <p className="lead">
            Every review below is copied word for word from our verified Freelancer.com and Fiverr profiles, alongside a
            short note on what we delivered.
          </p>
          <div className="hero-actions">
            <a href={site.freelancer} target="_blank" rel="noopener noreferrer" className="btn btn-ghost-light">
              Verify on Freelancer <ArrowUpRight size={16} />
            </a>
            <a href={site.fiverr} target="_blank" rel="noopener noreferrer" className="btn btn-ghost-light">
              Verify on Fiverr <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container grid-3">
          {reviews.map((r) => (
            <ReviewCard key={r.project} review={r} />
          ))}
        </div>
      </section>
      <CTABand
        eyebrow="Become our next success story"
        title={
          <>
            Want results like these?
            <br />
            <span className="accent">Start with a free call.</span>
          </>
        }
      />
    </>
  );
}
