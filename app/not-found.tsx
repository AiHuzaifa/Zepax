import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <section className="section">
      <div className="container" style={{ textAlign: "center", maxWidth: 640 }}>
        <span className="eyebrow">404</span>
        <h1 className="h2" style={{ marginTop: 14 }}>
          This page took a wrong turn.
        </h1>
        <p className="lead" style={{ marginTop: 16 }}>
          The page you’re looking for doesn’t exist or has moved.
        </p>
        <div className="hero-actions" style={{ justifyContent: "center" }}>
          <Link href="/" className="btn btn-primary">
            Back to home <ArrowRight size={18} />
          </Link>
          <Link href="/contact/" className="btn btn-outline">
            Contact us
          </Link>
        </div>
      </div>
    </section>
  );
}
