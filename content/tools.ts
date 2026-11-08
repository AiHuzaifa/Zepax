export type Tool = { id: string; name: string; file: string };

export const tools: Tool[] = [
  { id: "n8n", name: "n8n", file: "n8n.png" },
  { id: "make", name: "Make", file: "make.svg" },
  { id: "zapier", name: "Zapier", file: "zapier.svg" },
  { id: "highlevel", name: "GoHighLevel", file: "highlevel.png" },
  { id: "hubspot", name: "HubSpot", file: "hubspot.svg" },
  { id: "crm", name: "Zoho CRM", file: "crm.svg" },
  { id: "books", name: "Zoho Books", file: "books.svg" },
  { id: "analytics", name: "Zoho Analytics", file: "analytics.svg" },
  { id: "mail", name: "Zoho Mail", file: "mail.svg" },
  { id: "openai", name: "OpenAI", file: "openai.svg" },
  { id: "claude", name: "Claude", file: "claude.svg" },
  { id: "vapi", name: "Vapi", file: "vapi.svg" },
  { id: "retell", name: "Retell AI", file: "retell.svg" },
  { id: "mcp", name: "Model Context Protocol", file: "mcp.svg" },
];

export const getTool = (id: string) => tools.find((t) => t.id === id);
