import Link from "next/link";
import { ArrowRight, CalendarCheck, Check, X, Zap } from "lucide-react";
import { services } from "@/content/services";
import { cases } from "@/content/cases";
import { reviews } from "@/content/reviews";
import { painPoints, trustPoints } from "@/content/site";
import { ServiceCard } from "@/components/ServiceCard";
import { CaseCard } from "@/components/CaseCard";
import { ReviewCard } from "@/components/ReviewCard";
import { LogoMarquee } from "@/components/LogoMarquee";
import { SectionHead } from "@/components/SectionHead";
import { Process } from "@/components/Process";
import { Stats } from "@/components/Stats";
import { FAQ } from "@/components/FAQ";
import { CTABand } from "@/components/CTABand";

export const metadata = { alternates: { canonical: "/" } };

const featuredCases = ["new-leaf-landscapes-ai-receptionist", "meta-ads-zoho-crm-cpl-automation", "automotive-ghl-crm-sales-automation"];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <span className="eyebrow">Automation · CRM · AI agents</span>
            <h1 className="display">
              Stop losing leads to <span className="accent">slow follow-ups.</span>
            </h1>
            <p className="lead">
              We build the automations, CRMs and AI receptionists that answer, book and follow up for you, 24/7, so
              your team can focus on closing.
            </p>
            <div className="hero-actions">
              <Link href="/contact/" className="btn btn-primary">
                Book a free 30-min call <ArrowRight size={18} />
              </Link>
              <Link href="/case-studies/" className="btn btn-ghost-light">
                See real client work
              </Link>
            </div>
            <ul className="hero-trust">
              {trustPoints.map((t) => (
                <li key={t}>
                  <Check size={16} strokeWidth={3} /> {t}
                </li>
              ))}
            </ul>
          </div>
          <div className="hero-visual">
            <img
              src="/images/hero-workflow.webp"
              alt="A ZEPAX workflow: a new lead is captured, added to the CRM, followed up and booked automatically"
              width={1600}
              height={1200}
              fetchPriority="high"
            />
            <div className="hero-badge one">
              <span className="badge-icon" style={{ background: "#e8f7f1", color: "#12a37a" }}>
                <CalendarCheck size={20} />
              </span>
              <span>
                <strong>Appointment booked</strong>
                <small>by your AI receptionist, 9:42 PM</small>
              </span>
            </div>
            <div className="hero-badge two">
              <span className="badge-icon" style={{ background: "#eaf2fd", color: "#0757c7" }}>
                <Zap size={20} />
              </span>
              <span>
                <strong>Lead followed up</strong>
                <small>in under 60 seconds</small>
              </span>
            </div>
          </div>
        </div>
      </section>

      <LogoMarquee />

      {/* Services */}
      <section className="section" id="services">
        <div className="container">
          <div className="section-head-row">
            <SectionHead
              eyebrow="What we build"
              title={
                <>
                  Pick the bottleneck. <span className="accent">We’ll build the fix.</span>
                </>
              }
              text="Four services, one goal: more leads captured, fewer hours lost and a business that runs smoothly without you chasing every task."
            />
            <Link href="/services/" className="btn btn-outline">
              All services <ArrowRight size={16} />
            </Link>
          </div>
          <div className="grid-2">
            {services.map((s) => (
              <ServiceCard key={s.slug} service={s} />
            ))}
          </div>
        </div>
      </section>

      {/* Pain → fix */}
      <section className="section bg-surface">
        <div className="container">
          <SectionHead
            center
            eyebrow="Sound familiar?"
            title={
              <>
                Every missed call is a missed customer.
                <br />
                <span className="accent">We fix the leaks.</span>
              </>
            }
            text="Most growing businesses don’t have a lead problem. They have a follow-up problem. Here’s what changes when your systems work together."
          />
          <div className="pain-grid">
            {painPoints.map((p) => (
              <div className="card pain-card" key={p.pain} data-reveal>
                <div className="pain">
                  <span className="icon-dot red">
                    <X size={16} strokeWidth={3} />
                  </span>
                  {p.pain}
                </div>
                <div className="fix">
                  <Check size={20} strokeWidth={3} />
                  {p.fix}
                </div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 40 }}>
            <Stats />
          </div>
        </div>
      </section>

      {/* Case studies */}
      <section className="section">
        <div className="container">
          <div className="section-head-row">
            <SectionHead
              eyebrow="Case studies"
              title={
                <>
                  Real systems. Real screenshots. <span className="accent">Real clients.</span>
                </>
              }
              text="No stock mock-ups. These are live client builds, with the challenge, the solution and what changed."
            />
            <Link href="/case-studies/" className="btn btn-outline">
              All case studies <ArrowRight size={16} />
            </Link>
          </div>
          <div className="grid-3">
            {featuredCases.map((slug) => {
              const c = cases.find((x) => x.slug === slug)!;
              return <CaseCard key={slug} study={c} />;
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section bg-surface">
        <div className="container">
          <SectionHead
            eyebrow="How we work"
            title={
              <>
                No black boxes. <span className="accent">You own everything we build.</span>
              </>
            }
            text="A simple, transparent process. You know the price before we start, you see progress as we build, and you keep full access when we’re done."
          />
          <Process />
        </div>
      </section>

      {/* Reviews */}
      <section className="section">
        <div className="container">
          <SectionHead
            center
            eyebrow="Client reviews"
            title={
              <>
                Don’t take our word for it.
                <br />
                <span className="accent">Take theirs.</span>
              </>
            }
            text="Verified 5-star reviews from Freelancer.com and Fiverr clients, word for word."
          />
          <div className="grid-3">
            {reviews.slice(0, 3).map((r) => (
              <ReviewCard key={r.project} review={r} />
            ))}
          </div>
          <div className="verify-row">
            <Link href="/our-clients/" className="btn btn-outline">
              Read all reviews <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section bg-surface">
        <div className="container faq-layout">
          <div>
            <SectionHead
              eyebrow="FAQ"
              title="Questions before we start?"
              text="Straight answers to what clients usually ask on the first call."
            />
            <Link href="/contact/" className="btn btn-primary">
              Ask us anything <ArrowRight size={18} />
            </Link>
          </div>
          <FAQ />
        </div>
      </section>

      <CTABand />
    </>
  );
}
