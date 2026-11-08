// Client quotes are copied word-for-word from public Freelancer.com / Fiverr reviews.
// "delivered" is our own short summary of the project (not the client's words).

export type Review = {
  platform: "Freelancer.com" | "Fiverr";
  project: string;
  service: string;
  quote: string;
  delivered: string;
};

export const reviews: Review[] = [
  {
    platform: "Freelancer.com",
    project: "n8n Workflow Creation for SMS Booking Agent",
    service: "AI agents",
    quote:
      "He explained everything clearly while walking me through each step and really demystified the process. Whenever challenges came up, he was right on point with solutions and kept a calm, “no worries, we’ll work it out” attitude.",
    delivered:
      "Built an n8n workflow behind an SMS booking agent, connecting incoming messages to availability checks and booking steps, then walked the client through how it all works.",
  },
  {
    platform: "Freelancer.com",
    project: "Urgent Debugging: AI Booking System Integration",
    service: "AI agents",
    quote:
      "His attention to detail, reliability, and dedication to delivering top-tier results are truly impressive. Working with him has been a pleasure, and I highly recommend his services to anyone looking for excellence and professionalism.",
    delivered:
      "Traced and fixed failures in a live AI booking integration under a tight deadline, so appointments flowed reliably from the assistant into the booking system again.",
  },
  {
    platform: "Fiverr",
    project: "Zoho CRM Automation Fix",
    service: "CRM",
    quote:
      "Great to work with. Professional, proactive in communication, and an overall great partner. Would definitely recommend.",
    delivered:
      "Diagnosed and repaired broken Zoho CRM automation rules, restoring the workflow the sales team relied on and keeping the client informed at every step.",
  },
  {
    platform: "Freelancer.com",
    project: "Automate MS Form Data Processing",
    service: "Automation",
    quote:
      "Super easy to communicate with, understands everything you’re asking for, no need to repeat anything, understands exactly what you need and delivers a finished project!",
    delivered:
      "Replaced manual copy-paste of Microsoft Forms responses with an automated workflow that processes each submission and sends the data where the team needs it.",
  },
  {
    platform: "Freelancer.com",
    project: "Zoho Payment Integration",
    service: "CRM",
    quote: "Clear communication and deliver as promised.",
    delivered:
      "Connected payments to the client’s Zoho setup so payment activity is recorded against the right records without manual updates. Delivered on the agreed scope and timeline.",
  },
  {
    platform: "Freelancer.com",
    project: "GoHighLevel Website Build",
    service: "CRM",
    quote: "He always responds quickly and does excellent work.",
    delivered:
      "Built the client’s website inside GoHighLevel, so pages, forms and lead capture live in the same platform as their CRM and follow-up automations.",
  },
];
