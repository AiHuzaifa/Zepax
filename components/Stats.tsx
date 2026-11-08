import { stats } from "@/content/site";

export function Stats() {
  return (
    <div className="stats" data-reveal>
      {stats.map((s) => (
        <div className="stat" key={s.label}>
          <strong>{s.value}</strong>
          <span>{s.label}</span>
        </div>
      ))}
    </div>
  );
}
