import type { Metadata } from "next";
import { Clock, FileSignature, KeyRound, ShieldCheck } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Book a Free Consultation",
  description:
    "Tell us what you want to automate or improve. Book a free 30-minute consultation with ZEPAX Technology. We reply within 24 hours.",
  alternates: { canonical: "/contact/" },
};

const steps = [
  { title: "We review your request", text: "Within 24 hours we read your message and reply to schedule a call." },
  { title: "Free 30-minute call", text: "We map your current process, the bottlenecks and the quick wins." },
  { title: "Clear proposal", text: "You get a written scope, timeline and fixed price. No obligation." },
];

const badges = [
  { icon: Clock, text: "Reply within 24 hours" },
  { icon: FileSignature, text: "NDA on request" },
  { icon: KeyRound, text: "You own every account" },
  { icon: ShieldCheck, text: "No spam, ever" },
];

export default function ContactPage() {
  return (
    <section className="section bg-surface">
      <div className="container contact-layout">
        <div className="contact-info">
          <span className="eyebrow">Free consultation</span>
          <h1 className="display" style={{ fontSize: "clamp(36px, 4.6vw, 54px)" }}>
            Let’s fix what’s <span className="accent">slowing you down.</span>
          </h1>
          <p className="lead">
            Tell us about the process that eats your time or the leads slipping through the cracks. We’ll show you
            exactly how we’d solve it, free.
          </p>
        </div>
        <div className="card form-card">
          <ContactForm />
        </div>
        <div className="contact-extra">
          <div className="next-steps">
            {steps.map((s, i) => (
              <div key={s.title}>
                <span>{i + 1}</span>
                <div>
                  <strong>{s.title}</strong>
                  <p>{s.text}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="trust-badges">
            {badges.map((b) => (
              <span key={b.text}>
                <b.icon size={16} /> {b.text}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
