import { RedirectTo } from "@/components/RedirectTo";

// Retired concept pages, now shown as "Example workflow" sections on the service pages.
const targets: Record<string, string> = {
  "meta-leads-response-follow-up": "/services/business-automations/",
  "appointment-follow-up-pipeline": "/services/crm-setup-integrations/",
  "invoice-reconciliation-workflow": "/services/custom-mcp-setups/",
};

export const dynamicParams = false;
export const metadata = { robots: { index: false } };

export function generateStaticParams() {
  return Object.keys(targets).map((slug) => ({ slug }));
}

export default async function SolutionExampleRedirect({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <RedirectTo href={targets[slug] ?? "/services/"} />;
}
