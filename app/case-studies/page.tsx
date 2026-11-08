import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { CaseGrid } from "@/components/CaseGrid";
import { CTABand } from "@/components/CTABand";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Real client projects: AI receptionists, Zoho CRM and Books automation, GoHighLevel sales systems and Meta Ads lead tracking, with original screenshots.",
  alternates: { canonical: "/case-studies/" },
};

export default function CaseStudiesPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Case studies</span>
          <h1 className="display">
            Real systems. Real screenshots. <span className="accent">Real results.</span>
          </h1>
          <p className="lead">
            A behind-the-scenes look at the CRMs, automations and AI agents we’ve built for clients, from the problem to
            the finished system.
          </p>
          <div className="hero-actions">
            <Link href="/contact/" className="btn btn-primary">
              Discuss a similar project <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <CaseGrid />
        </div>
      </section>
      <CTABand
        eyebrow="Your project could be next"
        title={
          <>
            Have a similar challenge?
            <br />
            <span className="accent">Let’s solve it together.</span>
          </>
        }
      />
    </>
  );
}
