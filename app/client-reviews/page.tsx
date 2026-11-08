import { RedirectTo } from "@/components/RedirectTo";

export const metadata = { robots: { index: false } };

export default function ClientReviewsRedirect() {
  return <RedirectTo href="/our-clients/" />;
}
