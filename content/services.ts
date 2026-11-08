export type Service = {
  slug: string;
  title: string;
  short: string;
  hook: string;
  eyebrow: string;
  headline: string;
  headlineAccent: string;
  intro: string;
  image: string;
  imageAlt: string;
  bullets: string[];
  toolIds: string[];
  overview: string;
  body: string;
  audience: string;
  builds: { title: string; text: string }[];
  toolGroups: { ids: string[]; title: string; text: string }[];
  noteTitle: string;
  note: string;
  stages: string[];
  example: {
    title: string;
    tag: string;
    challenge: string;
    steps: string[];
    metric: string;
    math: string;
  };
  relatedCase: string;
};

export const services: Service[] = [
  {
    slug: "business-automations",
    title: "Business Automations",
    short: "Connect your apps and let workflows handle the repetitive admin, from new enquiry to next action.",
    hook: "If your team copies data between tabs, you’re paying for the same work twice.",
    eyebrow: "Less repetition. More momentum.",
    headline: "Let the workflow do",
    headlineAccent: "the busywork.",
    intro:
      "Connect the apps you already use and turn disconnected tasks into dependable, end-to-end processes that run while you sleep.",
    image: "/images/services/business-automations.webp",
    imageAlt: "Automation workflow canvas connecting a webhook, filter, CRM and email steps",
    bullets: ["Lead routing & instant follow-up", "Document and data workflows", "Notifications & reporting"],
    toolIds: ["n8n", "make", "zapier"],
    overview: "When your tools connect, your team can move.",
    body: "If your day involves copying data, chasing updates or sending the same message again, there is usually a better way. We build automation around your real process, with clear rules and a plan for exceptions.",
    audience: "For growing teams, service businesses and operations teams managing work across several apps.",
    builds: [
      { title: "Lead-to-CRM workflows", text: "Capture an enquiry, check the details, assign an owner and start the right follow-up." },
      { title: "Document intake", text: "Collect files, extract relevant information and route each document for review." },
      { title: "Customer communication", text: "Send timely updates, reminders and handover messages from your business systems." },
      { title: "Connected operations", text: "Sync records, create tasks and bring reporting data together without repeated entry." },
    ],
    toolGroups: [
      { ids: ["n8n", "make", "zapier"], title: "The right engine for your workflow", text: "n8n, Make and Zapier connect everyday apps. We choose the platform around your logic, hosting preferences and maintenance needs." },
      { ids: ["crm", "books", "mail"], title: "Keep business information moving", text: "Connect CRM activity with Zoho Books and Zoho Mail where your process needs financial records or customer communication." },
      { ids: ["openai", "claude"], title: "Add intelligence where it helps", text: "Use GPT or Claude for classification and extraction, with validation and human review before important actions." },
    ],
    noteTitle: "A workflow needs a plan for the unexpected.",
    note: "We consider failed requests, duplicate records, retries, logs and manual review. APIs and webhooks connect the steps; clear rules keep the process understandable.",
    stages: ["Map the repetitive work", "Define triggers and rules", "Build the workflow", "Connect apps and data", "Test success and exceptions", "Launch, monitor and refine"],
    example: {
      title: "From Meta lead to a tracked conversation",
      tag: "n8n · Meta Lead Ads · CRM",
      challenge: "A service business receives leads from multiple Meta forms. Records are copied manually, follow-up is inconsistent and repeat submissions create duplicates.",
      steps: [
        "Capture each lead with its source ID and available campaign context.",
        "Validate the details and create or update the CRM contact and opportunity.",
        "Assign the right owner and send an acknowledgement where contact permissions allow it.",
        "Check for replies, bookings and opt-outs before each scheduled follow-up.",
        "Send failed runs to a review queue and keep a log of each action.",
      ],
      metric: "≈ 25 hours saved / month",
      math: "Illustrative: 300 leads × 5 minutes of manual entry avoided ÷ 60 = 25 staff hours. A modelled scenario, not a measured client result.",
    },
    relatedCase: "zoho-membership-billing-automation",
  },
  {
    slug: "crm-setup-integrations",
    title: "CRM Setup & Integrations",
    short: "A CRM that fits how you sell: clean pipelines, connected lead sources and dashboards your team actually uses.",
    hook: "If nobody knows where a deal stands, the deal is already slipping.",
    eyebrow: "One clear view of your business.",
    headline: "Every relationship.",
    headlineAccent: "One clear picture.",
    intro:
      "Give your team a CRM that reflects how you sell, follow up and support customers, with the right information in the right place.",
    image: "/images/services/crm-setup-integrations.webp",
    imageAlt: "CRM pipeline dashboard with lead stages and performance tiles",
    bullets: ["Pipeline design & configuration", "Data migration & app connections", "Dashboards & team onboarding"],
    toolIds: ["highlevel", "hubspot", "crm"],
    overview: "From scattered records to a shared way of working.",
    body: "We configure pipelines, fields, reporting and integrations around your customer journey. The aim is a system your team understands and uses, with fewer gaps between enquiry, conversation and next action.",
    audience: "For sales teams, agencies and service businesses setting up their first CRM or improving an existing one.",
    builds: [
      { title: "Pipelines that fit your sales process", text: "Define stages, ownership, required information and the next action at each step." },
      { title: "Lead capture and follow-up", text: "Bring enquiries into one place and automate routing, reminders and agreed communications." },
      { title: "Data migration and cleanup", text: "Map fields, check duplicates and validate the information before moving it into your CRM." },
      { title: "Reporting your team can use", text: "Create dashboards for pipeline health, activity and the metrics relevant to your business." },
    ],
    toolGroups: [
      { ids: ["highlevel", "hubspot", "crm"], title: "Choose the CRM around your process", text: "GoHighLevel, HubSpot and Zoho CRM support different sales and service workflows. We configure the chosen platform around your requirements." },
      { ids: ["books", "analytics", "mail"], title: "Make the Zoho ecosystem work together", text: "Use Zoho Books for accounting workflows, Zoho Analytics for connected reporting and Zoho Mail for business email, alongside your CRM." },
      { ids: ["n8n", "make", "zapier"], title: "Connect the rest of your stack", text: "Automation platforms, APIs and webhooks link forms, calendars, communication tools and other systems to your customer records." },
    ],
    noteTitle: "A successful setup includes the people using it.",
    note: "We plan field ownership, access roles, documentation and team handover alongside the configuration. Pipedrive and other CRM platforms can also be included when they fit your stack.",
    stages: ["Understand the customer journey", "Map fields and pipelines", "Configure the CRM", "Migrate and connect data", "Validate records and workflows", "Launch and onboard the team"],
    example: {
      title: "A booking pipeline that remembers the next step",
      tag: "GoHighLevel · Calendar · Follow-up",
      challenge: "An appointment-based business has enquiries in several inboxes. Staff cannot easily see who is booked, who needs a reply or which opportunities have stalled.",
      steps: [
        "Capture each enquiry in one pipeline with an assigned owner.",
        "Connect available calendar slots and record the confirmed booking.",
        "Schedule relevant reminders and stop them when the booking changes.",
        "Route cancellations and no-shows to the team with a clear next task.",
        "Report booked, attended and won outcomes separately.",
      ],
      metric: "$2,000 revenue scenario",
      math: "Illustrative: 20 additional qualified conversations × 20% assumed close rate × $500 average sale. Example inputs, not observed uplift or a forecast.",
    },
    relatedCase: "automotive-ghl-crm-sales-automation",
  },
  {
    slug: "ai-agent-development",
    title: "AI Agent Development",
    short: "AI receptionists and voice agents that answer every call, qualify the lead and book the appointment 24/7.",
    hook: "Every missed call is a customer calling your competitor next.",
    eyebrow: "A helpful first conversation.",
    headline: "An extra hand.",
    headlineAccent: "A natural conversation.",
    intro:
      "AI voice agents, receptionists and business assistants that answer, qualify and act, with your tools and your team in the loop.",
    image: "/images/services/ai-agent-development.webp",
    imageAlt: "AI receptionist conversation booking an appointment with a voice waveform",
    bullets: ["AI receptionist & lead capture", "Appointment booking & reminders", "CRM & calendar integration"],
    toolIds: ["vapi", "retell", "openai"],
    overview: "Build an assistant around a real job.",
    body: "We start with the task: answering enquiries, arranging appointments or helping a team find information. Then we connect the agent to the knowledge and tools it needs, with clear boundaries and a route to a person.",
    audience: "For businesses handling recurring calls, enquiries, booking requests or internal support questions.",
    builds: [
      { title: "AI receptionists and voice agents", text: "Answer common questions, capture caller intent and hand off when a person is needed." },
      { title: "Lead qualification and booking", text: "Ask relevant questions, check calendar availability and record an agreed appointment." },
      { title: "Customer support assistants", text: "Use your approved knowledge to respond to routine enquiries and escalate uncertain answers." },
      { title: "Internal and workflow agents", text: "Help teams find information, prepare work and take approved actions across business systems." },
    ],
    toolGroups: [
      { ids: ["vapi", "retell"], title: "Natural voice, real phone numbers", text: "Vapi and Retell AI power voice agents that answer calls, transfer to a person and trigger workflows mid-conversation." },
      { ids: ["openai", "claude"], title: "Choose models for the job", text: "OpenAI and Claude support reasoning, language and tool use. We evaluate the fit against your task, response quality and budget." },
      { ids: ["highlevel", "crm", "make"], title: "Connect conversations to customer records", text: "CRM and automation connections let an agent look up details, capture an enquiry and give your team useful context." },
    ],
    noteTitle: "Know when to act, and when to hand over.",
    note: "We test realistic conversations, ambiguous requests and failed tool calls. Important actions can require confirmation, and requests outside the agent’s scope are routed to your team.",
    stages: ["Define the agent’s role", "Plan knowledge and boundaries", "Build prompts and tools", "Connect CRM and calendars", "Test conversations and actions", "Launch and review performance"],
    example: {
      title: "A receptionist that never sends callers to voicemail",
      tag: "Retell AI · Make · Calendar",
      challenge: "A local service business misses calls while the team is on site. Callers leave, voicemails pile up and booking requests are returned hours later.",
      steps: [
        "Answer every call with a voice agent trained on the business’s services and FAQs.",
        "Collect the caller’s details and the job they need, then check calendar availability.",
        "Book the slot, create or update the contact and send an SMS confirmation.",
        "Transfer the call to a person for urgent or unusual requests.",
        "Log each call with a summary so the team sees what happened.",
      ],
      metric: "Every call answered",
      math: "Illustrative: the agent is available outside working hours and during busy periods. Actual outcomes depend on call volume, configuration and the booking rules agreed.",
    },
    relatedCase: "new-leaf-landscapes-ai-receptionist",
  },
  {
    slug: "custom-mcp-setups",
    title: "Custom MCP Setups",
    short: "Connect AI assistants to your CRM, data and internal tools through Model Context Protocol, with safe permissions.",
    hook: "AI that can only chat is a demo. AI connected to your systems is a teammate.",
    eyebrow: "Connect intelligence to action.",
    headline: "The right tools.",
    headlineAccent: "The right access.",
    intro:
      "Connect AI models and agents to business applications through Model Context Protocol, with permissions and behaviour designed around your use case.",
    image: "/images/services/custom-mcp-setups.webp",
    imageAlt: "AI assistant connected to business tools through an MCP server with permission controls",
    bullets: ["MCP server setup & configuration", "Business tool & data access", "Permission controls & testing"],
    toolIds: ["mcp", "claude", "openai"],
    overview: "A consistent way for AI to work with your systems.",
    body: "MCP gives compatible AI applications a structured way to discover and use tools and resources. We design and configure the connections to your APIs, data and internal systems, so useful actions are available within defined limits.",
    audience: "For teams moving beyond standalone AI chat into connected assistants, internal tools and custom agent workflows.",
    builds: [
      { title: "Custom MCP servers", text: "Expose selected business functions as clearly defined tools for compatible AI clients." },
      { title: "API and database connections", text: "Provide scoped access to approved records, searches and operations in your systems." },
      { title: "Internal knowledge access", text: "Connect an assistant to the information it needs without opening every data source." },
      { title: "Controlled business actions", text: "Define validation, permissions and approval steps for actions that change business records." },
    ],
    toolGroups: [
      { ids: ["mcp"], title: "Model Context Protocol", text: "A shared interface between compatible AI clients and tools. We define clear tool inputs, outputs and access boundaries." },
      { ids: ["claude", "openai"], title: "Connect compatible AI clients", text: "Configure Claude or supported OpenAI-based applications according to their MCP capabilities and your authentication setup." },
      { ids: ["n8n", "crm", "books"], title: "Bring your own business systems", text: "Connect internal APIs, databases, CRM records and workflow tools, scoped to the data and actions the assistant actually needs." },
    ],
    noteTitle: "MCP is a connection standard. Security is part of the implementation.",
    note: "We plan authentication, least-privilege access, input validation, logging and approval flows. Sensitive credentials stay server-side, and write access is granted only where the agreed workflow requires it.",
    stages: ["Identify tools and data", "Design access and tool contracts", "Build or configure servers", "Connect clients and systems", "Test permissions and failures", "Deploy and document the setup"],
    example: {
      title: "Payment updates without the spreadsheet chase",
      tag: "Claude · MCP · Zoho Books · CRM",
      challenge: "Staff check invoice and payment status in several places, and the sales team can’t easily tell whether a customer needs a follow-up.",
      steps: [
        "Expose read-only invoice lookups from the accounting platform as MCP tools.",
        "Map customer and invoice identifiers to the CRM records.",
        "Let the assistant answer “has this customer paid?” in plain language.",
        "Require human approval before any action that changes a record.",
        "Log every tool call for review and auditing.",
      ],
      metric: "≈ 10 hours saved / month",
      math: "Illustrative: 200 invoice checks × 3 minutes avoided ÷ 60 = 10 staff hours. Actual value depends on volume and the final implementation.",
    },
    relatedCase: "zoho-books-saudi-e-invoicing",
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
