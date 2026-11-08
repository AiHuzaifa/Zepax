import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, Compass, FileCheck2, Handshake, Link2, ShieldCheck, Target } from "lucide-react";
import { SectionHead } from "@/components/SectionHead";
import { Stats } from "@/components/Stats";
import { CTABand } from "@/components/CTABand";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "ZEPAX Technology is a hands-on automation, CRM and AI integration partner. We listen first, build with purpose and hand over systems your team owns.",
  alternates: { canonical: "/about/" },
};

const values = [
  { icon: Target, title: "Useful over complicated", text: "Every workflow should solve a real problem. We keep the solution focused on what your team actually needs." },
  { icon: Link2, title: "Connected from the start", text: "We consider the whole journey: the tools, the data and the people on either side of every integration." },
  { icon: FileCheck2, title: "Built for the handover", text: "A good system is understandable. Documentation, testing and a clear path to support come as standard." },
  { icon: ShieldCheck, title: "Your data, your accounts", text: "We build inside your accounts with least-privilege access, and hand everything over when we’re done." },
  { icon: Handshake, title: "Straight communication", text: "Quick replies, honest timelines and no jargon. If something isn’t worth automating, we’ll tell you." },
  { icon: Compass, title: "Long-term thinking", text: "We design for the business you’re growing into, so today’s system doesn’t become tomorrow’s bottleneck." },
];

export default function AboutPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">About ZEPAX Technology</span>
          <h1 className="display">
            Technology that works <span className="accent">the way you do.</span>
          </h1>
          <p className="lead">
            We help growing businesses replace manual busywork with connected systems: automations, CRMs and AI agents
            that capture every lead and keep work moving.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <div>
            <span className="eyebrow">Why we exist</span>
            <h2 className="h2" style={{ marginTop: 14 }}>
              Your business is unique. <span className="accent">Your systems should fit.</span>
            </h2>
          </div>
          <div>
            <p className="lead">
              Growing businesses often reach a familiar point: too many tabs, too much manual entry and important
              follow-ups scattered across different tools.
            </p>
            <p style={{ marginTop: 16 }}>
              ZEPAX Technology brings those pieces together. Our work spans connected sales pipelines, appointment
              booking, billing workflows and AI receptionists, and we bring the same care to a single broken integration
              as we do to a complete system.
            </p>
            <p style={{ marginTop: 16 }}>
              We start with your existing tools and the people who use them. Together, we decide what to automate, where
              a person should stay involved and how your team will take ownership after launch.
            </p>
          </div>
        </div>
        <div className="container" style={{ marginTop: 56 }}>
          <Stats />
        </div>
      </section>

      <section className="section bg-surface">
        <div className="container">
          <SectionHead
            eyebrow="How we work"
            title={
              <>
                Clear thinking. <span className="accent">Considered work.</span>
              </>
            }
          />
          <div className="grid-3">
            {values.map((v) => (
              <div className="card value-card" key={v.title} data-reveal>
                <span className="icon-box">
                  <v.icon size={22} />
                </span>
                <h3>{v.title}</h3>
                <p>{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container founder">
          <img
            src="/team/muhammad-afzal-blue.webp"
            alt="Muhammad Afzal, Co-Founder of ZEPAX Technology"
            width={1000}
            height={1000}
            loading="lazy"
          />
          <div>
            <span className="eyebrow">The people behind ZEPAX</span>
            <blockquote>
              “We’re building ZEPAX around a simple idea: technology should make running a business easier, not add
              another thing to manage.”
            </blockquote>
            <div className="founder-name">
              <strong>Muhammad Afzal</strong>
              <span>Co-Founder, ZEPAX Technology</span>
            </div>
            <div className="hero-actions">
              <Link href="/our-clients/" className="btn btn-outline">
                Hear from our clients <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}
