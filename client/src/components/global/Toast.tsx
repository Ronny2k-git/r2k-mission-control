import { Check, CircleAlert, X, type LucideIcon } from "lucide-react";
import { energyVariants, type EnergyVariant } from "../../consts";
import type { Mission } from "../../types";
import { Card, type CardVariants } from "../ui";

export interface ToastProps extends Pick<
  Mission,
  "name" | "target" | "startDate" | "status"
> {
  id: number;
  className?: string;
}

type ToastConfig = {
  variant: CardVariants;
  icon: LucideIcon;
  energy: EnergyVariant;
};

const missionStatusMap: Record<
  NonNullable<ToastProps["status"]>,
  ToastConfig
> = {
  upcoming: { variant: "primary", icon: CircleAlert, energy: "cyan" },
  success: { variant: "success", icon: Check, energy: "green" },
  aborted: { variant: "warning", icon: X, energy: "red" },
  running: { variant: "waiting", icon: CircleAlert, energy: "orange" },
};

export function Toast({ name, target, startDate, status }: ToastProps) {
  const config = missionStatusMap[status!] ?? missionStatusMap.upcoming;

  const Icon = config.icon;
  const textStyle = energyVariants[config.energy].text;

  return (
    <Card
      variant={config.variant}
      className="gap-1 max-w-[17rem] p-3 font-body border-l-4"
      cornerBorders={false}
      role="alert"
      aria-live="assertive"
    >
      <div className="flex items-center gap-2">
        <Icon className={`size-5 ${textStyle}`} />

        <p className="text-white uppercase text-xs tracking-widest">
          Mission: {name}
        </p>
      </div>

      <p className="flex gap-2 text-xs text-cyan-muted">
        {target} • {startDate} •{" "}
        <span className={`capitalize ${textStyle}`}>{status}</span>
      </p>
    </Card>
  );
}

// CALL THIS COMPONENT GLOBALLY, LIKE: <ToastProvider> <App /> </ToastProvider>
