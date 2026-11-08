import { Plus } from "lucide-react";
import { faqs } from "@/content/site";

export function FAQ() {
  return (
    <div className="faq-list">
      {faqs.map((f, i) => (
        <details className="faq-item" key={f.q} open={i === 0}>
          <summary>
            {f.q}
            <Plus size={20} />
          </summary>
          <p>{f.a}</p>
        </details>
      ))}
    </div>
  );
}
