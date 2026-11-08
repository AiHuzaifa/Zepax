import { processSteps } from "@/content/site";

export function Process() {
  return (
    <div className="process">
      {processSteps.map((step, i) => (
        <div className="process-step" key={step.title} data-reveal>
          <span className="process-num">{String(i + 1).padStart(2, "0")}</span>
          <h3>{step.title}</h3>
          <p>{step.text}</p>
        </div>
      ))}
    </div>
  );
}
