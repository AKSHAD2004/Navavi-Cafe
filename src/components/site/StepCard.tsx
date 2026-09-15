import type { ReactNode } from "react";

type Props = {
  step: number | string;
  title: string;
  description: string;
  icon?: ReactNode;
};

export function StepCard({ step, title, description, icon }: Props) {
  return (
    <div className="card-glow-hover group relative h-full rounded-2xl border border-border bg-card p-6 shadow-sm">
      <div className="flex items-center gap-3">
        <span className="grid size-11 shrink-0 place-items-center rounded-full bg-primary font-display text-lg font-bold text-primary-foreground transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
          {step}
        </span>
        {icon ? <span className="text-primary">{icon}</span> : null}
      </div>
      <h3 className="mt-4 text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p>
    </div>
  );
}
