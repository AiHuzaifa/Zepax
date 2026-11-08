import { getTool } from "@/content/tools";

export function ToolLogos({ ids }: { ids: string[] }) {
  return (
    <div className="tool-logos">
      {ids.map((id) => {
        const t = getTool(id);
        if (!t) return null;
        return (
          <span key={id} title={t.name}>
            <img src={`/logos/${t.file}`} alt={t.name} width={20} height={20} loading="lazy" />
          </span>
        );
      })}
    </div>
  );
}
