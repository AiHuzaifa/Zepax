import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import type { Service } from "@/content/services";
import { ToolLogos } from "./ToolLogos";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <Link href={`/services/${service.slug}/`} className="card service-card" data-reveal>
      <div className="service-thumb">
        <img src={service.image} alt={service.imageAlt} width={1600} height={1000} loading="lazy" />
      </div>
      <div className="service-body">
        <h3>{service.title}</h3>
        <p>{service.short}</p>
        <ul className="check-list">
          {service.bullets.map((b) => (
            <li key={b}>
              <Check size={16} strokeWidth={2.5} /> {b}
            </li>
          ))}
        </ul>
        <div className="service-footer">
          <ToolLogos ids={service.toolIds} />
          <span className="text-link">
            Learn more <ArrowRight size={16} />
          </span>
        </div>
      </div>
    </Link>
  );
}
