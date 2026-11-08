import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { site } from "@/content/site";
import { services } from "@/content/services";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <img src="/zepax-light.png" alt="ZEPAX Technology" width={108} height={36} />
            <p>Automations, CRMs and AI agents that capture every lead and keep your business moving.</p>
            <div className="footer-social">
              <a href={site.linkedin} target="_blank" rel="noopener noreferrer">
                LinkedIn <ArrowUpRight size={14} />
              </a>
              <a href={site.freelancer} target="_blank" rel="noopener noreferrer">
                Freelancer <ArrowUpRight size={14} />
              </a>
              <a href={site.fiverr} target="_blank" rel="noopener noreferrer">
                Fiverr <ArrowUpRight size={14} />
              </a>
            </div>
          </div>

          <div className="footer-col">
            <h4>Services</h4>
            {services.map((s) => (
              <Link key={s.slug} href={`/services/${s.slug}/`}>
                {s.title}
              </Link>
            ))}
          </div>

          <div className="footer-col">
            <h4>Company</h4>
            <Link href="/about/">About us</Link>
            <Link href="/case-studies/">Case studies</Link>
            <Link href="/our-clients/">Client reviews</Link>
            <Link href="/blog/">Blog</Link>
            <Link href="/contact/">Contact</Link>
          </div>

          <div className="footer-col footer-cta">
            <h4>Ready when you are</h4>
            <p>Tell us what slows you down. We’ll show you how to fix it, free.</p>
            <Link href="/contact/" className="btn btn-primary btn-sm">
              Book a free call <ArrowRight size={16} />
            </Link>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} ZEPAX Technology. All rights reserved.</span>
          <span>Automation · CRM · AI agents · MCP</span>
        </div>
      </div>
    </footer>
  );
}
