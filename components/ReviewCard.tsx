import { BadgeCheck, Star } from "lucide-react";
import type { Review } from "@/content/reviews";

export function ReviewCard({ review }: { review: Review }) {
  const logo = review.platform === "Fiverr" ? "/logos/fiverr.svg" : "/logos/freelancer.svg";
  return (
    <article className="card review-card" data-reveal>
      <div className="review-top">
        <div className="stars" aria-label="5 out of 5 stars">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} size={16} fill="currentColor" strokeWidth={0} />
          ))}
        </div>
        <span className="platform-badge">
          <img src={logo} alt="" width={50} height={16} /> {review.platform}
        </span>
      </div>
      <blockquote>“{review.quote}”</blockquote>
      <div className="review-delivered">
        <strong>What we delivered</strong>
        {review.delivered}
      </div>
      <div className="review-meta">
        <span className="review-avatar" aria-hidden="true">
          <BadgeCheck size={20} />
        </span>
        <div>
          <strong>{review.project}</strong>
          <span>Verified client · {review.service}</span>
        </div>
      </div>
    </article>
  );
}
