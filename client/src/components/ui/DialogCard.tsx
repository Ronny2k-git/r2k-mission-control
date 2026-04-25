import type { ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import {
  Card,
  Divider,
  EnergyBadge,
  Modal,
  type CardVariants,
  type ModalProps,
} from ".";
import { energyVariants, type EnergyVariant } from "../../consts";
import type { Mission } from "../../types";

export interface DialogCardProps extends Omit<ModalProps, "children"> {
  iconBadge?: ReactNode;
  title: string;
  description: string;
  mission: Mission;
  actions?: ReactNode;
}

const variantStyles: Record<CardVariants, { energy: EnergyVariant }> = {
  primary: { energy: "cyan" },
  secondary: { energy: "cyan" },
  warning: { energy: "red" },
  success: { energy: "green" },
};

export function DialogCard({
  variant = "primary",
  open,
  onClose,
  iconBadge,
  title,
  description,
  mission,
  actions,
  className,
}: DialogCardProps) {
  const energy = variantStyles[variant].energy;

  const missionFields = [
    { key: "id", label: "Mission Id", value: mission.id },
    { key: "name", label: "Mission Name", value: mission.name },
    { key: "rocket", label: "Rocket", value: mission.rocket },
    { key: "target", label: "Destination", value: mission.target },
    { key: "date", label: "Launch Date", value: mission.date },
    { key: "status", label: "Status", value: mission.status },
  ];

  return (
    <Modal
      variant={variant}
      open={open}
      onClose={onClose}
      className={twMerge("items-center justify-center p-4 sm:p-8", className)}
    >
      <div className="flex flex-col w-full items-center gap-8">
        <EnergyBadge className="mt-4" icon={iconBadge} variant={energy} />

        {/* Title and Description */}
        <div className="flex flex-col text-center items-center gap-2 ">
          <span className="text-2xl text-white font-heading font-semibold ">
            {title}
          </span>

          <p
            className={`text-center text-sm max-w-sm ${energyVariants[energy].text}`}
          >
            {description}
          </p>
        </div>

        {/* Mission Data */}
        <div className="w-full grid grid-cols-2">
          {missionFields.map((m) => (
            <Card
              key={m.key}
              className="bg-transparent font-body p-2 sm:px-4 sm:py-3 font-semibold uppercase"
              variant={variant}
              cornerBorders={false}
            >
              <span className={`text-[10px] ${energyVariants[energy].text}`}>
                {m.label}
              </span>

              <span className="text-white/85 font-mono text-xs sm:text-sm">
                {m.value}
              </span>
            </Card>
          ))}
        </div>

        <Divider variant={energy} type="line" />

        {/* Actions */}
        {actions}
      </div>
    </Modal>
  );
}
