// Central place for site-wide settings and copy you may want to edit.

export const site = {
  name: "ZEPAX Technology",
  url: "https://zepaxtechnology.com",
  description:
    "ZEPAX Technology builds business automations, CRM systems, AI receptionists and custom MCP integrations that capture, follow up and convert more of your leads.",
  linkedin: "https://www.linkedin.com/company/zepaxtechnology",
  freelancer: "https://www.freelancer.com/u/huzaifa306",
  fiverr: "https://www.fiverr.com/afzalriaz",
};

/**
 * Make.com webhook that receives contact form submissions.
 * Set NEXT_PUBLIC_MAKE_WEBHOOK_URL at build time, or paste the URL below.
 * Example: https://hook.eu2.make.com/abc123xyz
 */
export const MAKE_WEBHOOK_URL =
  process.env.NEXT_PUBLIC_MAKE_WEBHOOK_URL ||
  "https://hook.eu1.make.com/6oaz2ek8w9gcuq7odauerxsbt7vjwypk";

export const nav = [
  { label: "Services", href: "/services/" },
  { label: "Case studies", href: "/case-studies/" },
  { label: "Clients", href: "/our-clients/" },
  { label: "About", href: "/about/" },
  { label: "Blog", href: "/blog/" },
];

/** Short trust facts shown under the hero and near the contact form. Keep them true. */
export const trustPoints = [
  "Free 30-min strategy call",
  "Fixed scope & price before we start",
  "You own every workflow & account",
];

export const stats = [
  { value: "6", label: "Published client case studies" },
  { value: "4", label: "Core services, one partner" },
  { value: "10+", label: "Platforms we build with" },
  { value: "24h", label: "Typical reply to new enquiries" },
];

export const painPoints = [
  {
    pain: "Leads wait hours for a reply",
    fix: "Instant acknowledgement, owner assigned, follow-up scheduled automatically.",
  },
  {
    pain: "Data copied between five tabs",
    fix: "Your apps talk to each other, so every record updates once, everywhere.",
  },
  {
    pain: "Calls go to voicemail after 5pm",
    fix: "An AI receptionist answers, qualifies and books the appointment 24/7.",
  },
  {
    pain: "Nobody knows where a deal stands",
    fix: "One clean CRM pipeline with clear stages, owners and next steps.",
  },
];

export const processSteps = [
  {
    title: "Discover",
    text: "A free call to map how you work today, where leads and hours leak, and what “better” looks like.",
  },
  {
    title: "Scope & quote",
    text: "A clear written plan: what we build, which tools, timeline and a fixed price. No surprises.",
  },
  {
    title: "Build & test",
    text: "We build in your accounts, test every path (including the failures) and keep you updated.",
  },
  {
    title: "Launch & hand over",
    text: "Go live with documentation and a walkthrough, so your team owns and understands the system.",
  },
];

export const faqs = [
  {
    q: "Can you work with the tools we already use?",
    a: "Yes. We start by reviewing your current setup and the integrations available, and we recommend changes only when they serve a clear business need.",
  },
  {
    q: "Do we need to know exactly what to automate?",
    a: "No. Bring us the process that takes too much time, creates errors or makes follow-up difficult. We'll map the workflow with you on the free call.",
  },
  {
    q: "How are projects priced?",
    a: "Each project is scoped around your requirements, integrations and complexity. You get the deliverables and a fixed price in writing before any work starts. Software subscriptions are billed by the vendors directly.",
  },
  {
    q: "Who owns the workflows and accounts?",
    a: "You do. We build inside your accounts wherever possible and hand over full access and documentation at the end of the project.",
  },
  {
    q: "What happens after launch?",
    a: "Every project includes a handover and documentation. Ongoing monitoring, fixes and improvements are available as an optional support plan.",
  },
];
