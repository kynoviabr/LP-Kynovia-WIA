import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type BaseProps = {
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
};

type ButtonAsButtonProps = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    as?: "button";
  };

type ButtonAsAnchorProps = BaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    as: "a";
  };

type ButtonProps = ButtonAsButtonProps | ButtonAsAnchorProps;

const variantClasses: Record<NonNullable<BaseProps["variant"]>, string> = {
  primary:
    "border border-white/18 bg-[linear-gradient(180deg,rgba(255,255,255,0.16),rgba(255,255,255,0.08))] text-white shadow-[0_18px_40px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.14)] backdrop-blur-2xl hover:bg-[linear-gradient(180deg,rgba(255,255,255,0.22),rgba(255,255,255,0.1))]",
  secondary:
    "border border-white/16 bg-[linear-gradient(180deg,rgba(12,14,20,0.72),rgba(12,14,20,0.52))] text-kyn-text-primary shadow-[0_18px_40px_rgba(0,0,0,0.28),inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-2xl hover:border-white/22 hover:bg-[linear-gradient(180deg,rgba(18,20,28,0.82),rgba(18,20,28,0.58))]",
};

const baseClasses =
  "inline-flex min-h-12 items-center justify-center rounded-2xl px-6 py-3 text-center text-sm font-semibold leading-[1.15] whitespace-nowrap transition";

function withoutAsProp<T extends { as?: string }>(props: T): Omit<T, "as"> {
  const rest = { ...props };
  delete rest.as;
  return rest;
}

export function Button(props: ButtonProps) {
  if (props.as === "a") {
    const { children, variant = "primary", className } = props;
    const rest = withoutAsProp(props);
    const classes = cn(baseClasses, variantClasses[variant], className);

    return (
      <a className={classes} {...rest}>
        {children}
      </a>
    );
  }

  const { children, variant = "primary", className } = props;
  const rest = withoutAsProp(props);
  const classes = cn(baseClasses, variantClasses[variant], className);

  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}
