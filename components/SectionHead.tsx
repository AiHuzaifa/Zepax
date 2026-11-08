import type { ReactNode } from "react";

export function SectionHead({
  eyebrow,
  title,
  text,
  center = false,
}: {
  eyebrow: string;
  title: ReactNode;
  text?: ReactNode;
  center?: boolean;
}) {
  return (
    <div className={"section-head" + (center ? " center" : "")}>
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="h2">{title}</h2>
      {text && <p>{text}</p>}
    </div>
  );
}
