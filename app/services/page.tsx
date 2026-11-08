import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { services } from "@/content/services";
import { ServiceCard } from "@/components/ServiceCard";
import { SectionHead } from "@/components/SectionHead";
import { Process } from "@/components/Process";
import { FAQ } from "@/components/FAQ";
import { CTABand } from "@/components/CTABand";
import { LogoMarquee } from "@/components/LogoMarquee";

export const metadata: Metadata = {
  title: "Services: Automation, CRM, AI Agents & MCP",
  description:
    "Business automation with n8n, Make and Zapier, CRM setup for GoHighLevel, HubSpot and Zoho, AI receptionists and custom MCP integrations.",
  alternates: { canonical: "/services/" },
};

export default function ServicesPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Our services</span>
          <h1 className="display">
            Four ways to win back your time <span className="accent">and every lead.</span>
          </h1>
          <p className="lead">
            Whether it’s a single broken integration or a complete sales system, we build it properly: tested, documented
            and handed over so your team owns it.
          </p>
          <div className="hero-actions">
            <Link href="/contact/" className="btn btn-primary">
              Get a free recommendation <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid-2">
            {services.map((s) => (
              <ServiceCard key={s.slug} service={s} />
            ))}
          </div>
        </div>
      </section>

      <LogoMarquee />

      <section className="section">
        <div className="container">
          <SectionHead
            eyebrow="How every project runs"
            title={
              <>
                Clear scope. Fixed price. <span className="accent">No surprises.</span>
              </>
            }
          />
          <Process />
        </div>
      </section>

      <section className="section bg-surface">
        <div className="container faq-layout">
          <SectionHead eyebrow="FAQ" title="Before we begin." text="The questions we hear most often." />
          <FAQ />
        </div>
      </section>

      <CTABand
        eyebrow="Not sure which service you need?"
        title={
          <>
            Tell us the problem.
            <br />
            <span className="accent">We’ll recommend the fix.</span>
          </>
        }
      />
    </>
  );
}
