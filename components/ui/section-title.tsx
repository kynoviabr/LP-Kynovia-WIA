import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionTitleProps = {
  eyebrow?: string;
  title: string;
  description?: ReactNode;
  className?: string;
};

export function SectionTitle({
  eyebrow,
  title,
  description,
  className,
}: SectionTitleProps) {
  return (
    <div className={cn("mb-10", className)}>
      {eyebrow ? (
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-kyn-text-muted">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-3xl font-semibold tracking-[-0.02em] md:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-3 max-w-2xl text-kyn-text-secondary">{description}</p>
      ) : null}
    </div>
  );
}
