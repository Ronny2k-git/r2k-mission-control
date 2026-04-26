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
import type { Mission, MissionStatus } from "../../types";

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
  glow: { energy: "cyan" },
  warning: { energy: "red" },
  success: { energy: "green" },
  waiting: { energy: "orange" },
};

const descriptionTitles: Record<MissionStatus, string> = {
  success: "Mission Summary",
  upcoming: "Mission Brief",
  aborted: "Abort Report",
  running: "Live Status",
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
  const titleLabel = descriptionTitles[mission.status ?? "upcoming"];
  const energy = variantStyles[variant].energy;

  const missionFields = [
    { key: "name", label: "Mission Name", value: mission.name },
    { key: "rocket", label: "Rocket", value: mission.rocket },
    { key: "target", label: "Destination", value: mission.target },
    { key: "status", label: "Status", value: mission.status },
    { key: "start-date", label: "Start Date", value: mission.startDate },
    { key: "end-date", label: "End Date", value: mission.endDate },
  ];

  return (
    <Modal
      variant={variant}
      open={open}
      onClose={onClose}
      className={twMerge("items-center justify-center p-4 sm:p-8", className)}
    >
      <div className="flex flex-col w-full items-center gap-4">
        <EnergyBadge className="mt-4" icon={iconBadge} variant={energy} />

        {/* Title*/}
        <span className="text-2xl text-white font-heading font-semibold ">
          {title}
        </span>

        {/* Mission Data Cards*/}
        <div className="w-full grid grid-cols-2">
          {missionFields.map((m) => (
            <Card
              key={m.key}
              className="bg-transparent font-body p-2 sm:px-4 sm:py-3"
              variant={variant}
              cornerBorders={false}
            >
              <span
                className={`text-[10px] uppercase ${energyVariants[energy].text}`}
              >
                {m.label}
              </span>

              <span className="text-white/85 font-mono capitalize text-xs sm:text-sm">
                {m.value}
              </span>
            </Card>
          ))}
        </div>

        <Divider variant={energy} type="line" />

        {/* Description */}
        <div className="flex flex-col items-center gap-1 max-w-sm text-center">
          <span
            className={`text-[10px] uppercase tracking-widest ${energyVariants[energy].text}`}
          >
            {titleLabel}
          </span>

          <p className="text-white/80 text-sm leading-relaxed">{description}</p>
        </div>

        <Divider variant={energy} type="line" />

        {/* Actions */}
        {actions}
      </div>
    </Modal>
  );
}
