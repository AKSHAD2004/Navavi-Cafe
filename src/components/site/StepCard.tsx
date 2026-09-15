import type { ReactNode } from "react";

type Props = {
  step: number | string;
  title: string;
  description: string;
  icon?: ReactNode;
};

export function StepCard({ step, title, description, icon }: Props) {
  return (
    <div className="group relative h-full rounded-2xl border border-border bg-card p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-warm">
      <div className="flex items-center gap-3">
        <span className="grid size-11 shrink-0 place-items-center rounded-full bg-primary font-display text-lg font-bold text-primary-foreground">
          {step}
        </span>
        {icon ? <span className="text-primary">{icon}</span> : null}
      </div>
      <h3 className="mt-4 text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p>
    </div>
  );
}
