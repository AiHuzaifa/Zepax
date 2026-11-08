import Link from "next/link";
import { ArrowRight, TrendingUp } from "lucide-react";
import { type CaseStudy, coverImage } from "@/content/cases";

export function CaseCard({ study, wide = false }: { study: CaseStudy; wide?: boolean }) {
  const alt = study.screenshots.find((s) => s.src === study.cover)?.caption ?? study.title;
  return (
    <Link href={`/case-studies/${study.slug}/`} className={"card case-card" + (wide ? " case-wide" : "")} data-reveal>
      <div className="case-thumb">
        <img src={coverImage(study)} alt={alt} loading="lazy" width={1200} height={750} />
      </div>
      <div className="case-body">
        <span className="pill">{study.kicker}</span>
        <h3>{study.title}</h3>
        <p>{study.summary}</p>
        <div className="case-result">
          <TrendingUp size={16} /> {study.results[0]}
        </div>
        <span className="text-link">
          Read the case study <ArrowRight size={16} />
        </span>
      </div>
    </Link>
  );
}
