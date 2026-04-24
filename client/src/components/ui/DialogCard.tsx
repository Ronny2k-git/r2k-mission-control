import type { ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import {
  Card,
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
  className,
}: DialogCardProps) {
  const energy = variantStyles[variant].energy;

  const missionFields = [
    { label: "Mission Id", value: mission?.id },
    { label: "Mission", value: mission?.mission },
    { label: "Rocket", value: mission?.rocket },
    { label: "Destination", value: mission?.target },
    { label: "Launch Date", value: mission?.date },
    { label: "Status", value: mission?.status },
  ];

  return (
    <Modal
      variant={variant}
      open={open}
      onClose={onClose}
      className={twMerge("items-center justify-center p-8", className)}
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
              className="bg-transparent font-body px-4 py-3 font-semibold uppercase"
              variant={variant}
              cornerBorders={false}
            >
              <span className="text-[10px] text-red-500/70">{m.label}</span>

              <span className="text-white/80 text-sm -tracking-wide">
                {m.value}
              </span>
            </Card>
          ))}
        </div>
      </div>
    </Modal>
  );
}
