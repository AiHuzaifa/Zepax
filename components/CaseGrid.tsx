"use client";

import { useState } from "react";
import { cases } from "@/content/cases";
import { CaseCard } from "./CaseCard";

const filters = ["All projects", "CRM", "Automation", "AI agents"];

export function CaseGrid() {
  const [filter, setFilter] = useState(filters[0]);
  const visible = cases.filter((c) => filter === filters[0] || c.category === filter);

  return (
    <>
      <div className="filters" role="group" aria-label="Filter case studies">
        {filters.map((f) => (
          <button key={f} type="button" aria-pressed={filter === f} onClick={() => setFilter(f)}>
            {f}
          </button>
        ))}
      </div>
      <div className="grid-3">
        {visible.map((c) => (
          <CaseCard key={c.slug} study={c} />
        ))}
      </div>
    </>
  );
}
