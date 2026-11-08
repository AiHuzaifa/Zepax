"use client";

import { useEffect, useState, type FormEvent } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { MAKE_WEBHOOK_URL } from "@/content/site";
import { services } from "@/content/services";

type Status = "idle" | "sending" | "success";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");
  const [service, setService] = useState("");

  // Pre-select a service when arriving from /contact/?service=<slug or name>
  useEffect(() => {
    const q = new URLSearchParams(window.location.search).get("service");
    if (!q) return;
    const match = services.find((s) => s.slug === q || s.title === q);
    // eslint-disable-next-line react-hooks/set-state-in-effect -- reading the URL only works on the client
    setService(match ? match.title : "");
  }, []);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form)) as Record<string, string>;

    // Bots fill hidden fields. Pretend success and send nothing.
    if (data.website) {
      setStatus("success");
      return;
    }

    const name = (data.name || "").trim();
    const email = (data.email || "").trim();
    const message = (data.message || "").trim();
    if (!name || name.length > 120) return setError("Please enter your name.");
    if (!EMAIL_RE.test(email) || email.length > 254) return setError("Please enter a valid email address.");
    if (!data.service) return setError("Please choose what we can help with.");
    if (message.length < 10) return setError("Please tell us a little more about your project (at least 10 characters).");

    if (!data.consent) return setError("Please tick the box so we can reply to you.");

    if (!MAKE_WEBHOOK_URL) {
      return setError("The form isn’t connected yet. Please email or message us on LinkedIn instead.");
    }

    const params = new URLSearchParams(window.location.search);
    const payload = new URLSearchParams({
      name,
      email,
      phone: (data.phone || "").trim(),
      company: (data.company || "").trim(),
      service: data.service,
      budget: data.budget || "",
      message,
      source_page: window.location.href,
      referrer: document.referrer,
      utm_source: params.get("utm_source") || "",
      utm_medium: params.get("utm_medium") || "",
      utm_campaign: params.get("utm_campaign") || "",
      submitted_at: new Date().toISOString(),
    });

    setStatus("sending");
    try {
      // URL-encoded body = a "simple" CORS request, so no preflight is needed for Make.com.
      const res = await fetch(MAKE_WEBHOOK_URL, { method: "POST", body: payload });
      if (!res.ok) throw new Error(String(res.status));
      form.reset();
      setStatus("success");
    } catch {
      setStatus("idle");
      setError("Something went wrong sending your message. Please try again in a moment.");
    }
  }

  if (status === "success") {
    return (
      <div className="form-success" role="status">
        <CheckCircle2 size={56} />
        <h2>Thanks, we’ve got it.</h2>
        <p>Your enquiry is with our team. We’ll reply within 24 hours to arrange your free consultation.</p>
        <button type="button" className="btn btn-outline" onClick={() => setStatus("idle")}>
          Send another message
        </button>
      </div>
    );
  }

  return (
    <>
      <h2>Book your free 30-minute call</h2>
      <p>Two minutes to fill in. No preparation or technical knowledge needed.</p>
      <form className="form" onSubmit={handleSubmit} noValidate>
        <div className="form-row">
          <div className="field">
            <label htmlFor="name">Full name *</label>
            <input id="name" name="name" autoComplete="name" placeholder="Jane Smith" required maxLength={120} />
          </div>
          <div className="field">
            <label htmlFor="email">Work email *</label>
            <input id="email" name="email" type="email" autoComplete="email" placeholder="jane@company.com" required maxLength={254} />
          </div>
        </div>
        <div className="form-row">
          <div className="field">
            <label htmlFor="company">
              Company <small>(optional)</small>
            </label>
            <input id="company" name="company" autoComplete="organization" placeholder="Company name" maxLength={200} />
          </div>
          <div className="field">
            <label htmlFor="phone">
              Phone / WhatsApp <small>(optional)</small>
            </label>
            <input id="phone" name="phone" type="tel" autoComplete="tel" placeholder="+1 555 000 0000" maxLength={40} />
          </div>
        </div>
        <div className="form-row">
          <div className="field">
            <label htmlFor="service">What do you need help with? *</label>
            <select id="service" name="service" required value={service} onChange={(e) => setService(e.target.value)}>
              <option value="">Choose a service</option>
              {services.map((s) => (
                <option key={s.slug}>{s.title}</option>
              ))}
              <option>Not sure yet, let’s talk</option>
            </select>
          </div>
          <div className="field">
            <label htmlFor="budget">
              Estimated budget <small>(optional)</small>
            </label>
            <select id="budget" name="budget" defaultValue="">
              <option value="">Select a range</option>
              <option>Under $500</option>
              <option>$500 – $1,500</option>
              <option>$1,500 – $5,000</option>
              <option>$5,000+</option>
              <option>Not sure yet</option>
            </select>
          </div>
        </div>
        <div className="field">
          <label htmlFor="message">What would you like to improve? *</label>
          <textarea
            id="message"
            name="message"
            required
            minLength={10}
            maxLength={5000}
            rows={5}
            placeholder="E.g. We get leads from Facebook ads but follow-up is manual and slow. We use HubSpot and Gmail."
          />
        </div>
        <div className="honeypot" aria-hidden="true">
          <label htmlFor="website">Website</label>
          <input id="website" name="website" tabIndex={-1} autoComplete="off" />
        </div>
        <label className="consent">
          <input type="checkbox" name="consent" required />
          <span>I agree that ZEPAX Technology may contact me about this enquiry.</span>
        </label>
        {error && (
          <p className="form-error" role="alert">
            {error}
          </p>
        )}
        <button className="btn btn-primary btn-block" type="submit" disabled={status === "sending"}>
          {status === "sending" ? "Sending…" : "Request my free consultation"} <ArrowRight size={18} />
        </button>
        <p className="form-note">We never share your details. Please don’t include passwords or sensitive data.</p>
      </form>
    </>
  );
}
