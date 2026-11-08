import Link from "next/link";

/** Static-export-friendly redirect for retired URLs (meta refresh + canonical). */
export function RedirectTo({ href }: { href: string }) {
  return (
    <>
      <meta httpEquiv="refresh" content={`0; url=${href}`} />
      <link rel="canonical" href={href} />
      <section className="section">
        <div className="container" style={{ textAlign: "center" }}>
          <p className="lead">
            This page has moved. <Link className="text-link" href={href}>Continue</Link>
          </p>
        </div>
      </section>
    </>
  );
}
