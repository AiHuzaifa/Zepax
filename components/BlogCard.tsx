import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { posts } from "@/content/blog";
import { getService } from "@/content/services";

type Post = (typeof posts)[number];

export function BlogCard({ post }: { post: Post }) {
  const image = getService(post.service)?.image;
  return (
    <Link href={`/blog/${post.slug}/`} className="card case-card" data-reveal>
      {image && (
        <div className="case-thumb">
          <img src={image} alt="" loading="lazy" width={1600} height={1000} />
        </div>
      )}
      <div className="case-body">
        <div className="blog-meta">
          <span className="pill">{post.category}</span>
          <span style={{ display: "inline-flex", alignItems: "center", gap: 5 }}>
            <Clock size={14} /> {post.read}
          </span>
        </div>
        <h3>{post.title}</h3>
        <p>{post.description}</p>
        <span className="text-link">
          Read the guide <ArrowRight size={16} />
        </span>
      </div>
    </Link>
  );
}
