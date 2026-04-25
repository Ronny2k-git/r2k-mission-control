import { Rocket, RotateCcw } from "lucide-react";
import { energyVariants, type EnergyVariant } from "../../consts";
import { Button, Card, Divider, EnergyBadge, type ButtonProps } from "../ui";

export type EmptyBannerProps = {
  variant?: EnergyVariant;
  primaryActionVariant: ButtonProps["variant"];
  secondaryActionVariant: ButtonProps["variant"];

  onPrimaryAction?: () => void;
  onSecondaryAction?: () => void;
};

export function EmptyBanner({
  variant = "cyan",
  primaryActionVariant,
  secondaryActionVariant,
  onPrimaryAction,
  onSecondaryAction,
}: EmptyBannerProps) {
  return (
    <Card
      className="border-cyber-cyan-text/25 p-4 sm:p-8 items-center gap-8"
      cornerBorders={true}
    >
      <EnergyBadge className="mt-4" icon={<Rocket />} variant={variant} />

      <div className="flex flex-col text-center items-center gap-2">
        <span className="text-xs text-cyan-muted uppercase">
          // No data found
        </span>

        <div className="text-2xl text-white font-heading font-semibold ">
          No <span className={energyVariants[variant].text}>Results</span> Found
        </div>

        <p className="text-center text-cyan-muted text-sm max-w-sm">
          No missions match your current filters or search query. Try adjusting
          the <span className="text-white-light">search parameters</span> or
          launch a new mission.
        </p>
      </div>

      <Divider />

      {/* Action */}
      <div className="flex max-sm:flex-col max-sm:w-full gap-4">
        <Button
          className="py-2 text-base"
          variant={primaryActionVariant}
          iconLeft={<RotateCcw className="size-5" />}
          onClick={onPrimaryAction}
        >
          Clear Filters
        </Button>

        <Button
          className="py-2 text-base"
          variant={secondaryActionVariant}
          iconLeft={<Rocket className="size-5" />}
          onClick={onSecondaryAction}
        >
          Launch a Mission
        </Button>
      </div>
    </Card>
  );
}
