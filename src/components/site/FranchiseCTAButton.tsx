import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

type Props = {
  label?: string;
  variant?: "solid" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  animated?: boolean;
};

const sizes = {
  sm: "px-3 py-1.5 text-xs sm:px-4 sm:py-2 sm:text-sm",
  md: "px-5 py-2.5 text-sm md:text-base",
  lg: "px-7 py-3.5 text-base md:text-lg",
};

const variants = {
  solid:
    "bg-primary text-primary-foreground shadow-warm hover:brightness-105 active:brightness-95",
  outline:
    "border border-primary/70 text-primary bg-transparent hover:bg-primary/10 active:bg-primary/20",
  ghost: "bg-cream text-espresso hover:bg-gold-soft active:brightness-95",
};

export function FranchiseCTAButton({
  label = "Apply for Franchise",
  variant = "solid",
  size = "md",
  className = "",
  animated = false,
}: Props) {
  const button = (
    <Link
      to="/franchise"
      hash="enquiry"
      className={`group inline-flex items-center justify-center gap-1.5 sm:gap-2 rounded-full font-semibold transition-all duration-200 ${sizes[size]} ${variants[variant]} ${animated ? "animate-z-pop" : "hover:-translate-y-0.5"} ${!animated ? className : ""}`}
    >
      <span>{label}</span>
      <ArrowRight className="size-3.5 sm:size-4 transition-transform group-hover:translate-x-1" />
    </Link>
  );

  if (animated) {
    return (
      <div className={`perspective-container ${className ? className : "inline-flex"}`}>
        {button}
      </div>
    );
  }

  return button;
}

