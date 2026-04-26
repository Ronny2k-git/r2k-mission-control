import type { ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import { energyVariants, type EnergyVariant } from "../../consts";

export type EnergyBadgeProps = {
  className?: string;
  icon: ReactNode;
  variant?: EnergyVariant;
};

export function EnergyBadge({
  className,
  icon,
  variant = "cyan",
}: EnergyBadgeProps) {
  return (
    <div
      className={twMerge(
        "flex items-center justify-center border relative z-10 h-14 w-14 p-4 rotate-45",
        className,
        energyVariants[variant].badge,
        energyVariants[variant].text,
      )}
    >
      <span className="-rotate-45">{icon}</span>
    </div>
  );
}
