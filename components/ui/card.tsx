import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type CardProps = {
  children: ReactNode;
  className?: string;
  interactive?: boolean;
};

export function Card({ children, className, interactive = false }: CardProps) {
  return (
    <article
      className={cn(
        "group rounded-md border border-kyn-border bg-kyn-background-elevated p-6",
        interactive &&
          "transition duration-300 ease-out hover:-translate-y-0.5 hover:border-kyn-border-strong hover:shadow-[0_8px_18px_rgba(0,0,0,0.45),0_0_24px_rgba(124,58,237,0.14)]",
        className
      )}
    >
      {children}
    </article>
  );
}
