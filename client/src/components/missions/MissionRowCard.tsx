import type { Mission } from "../../types";
import { formatDate } from "../../utils";
import { Button, StatusBadge, type BadgeStatus } from "../ui";

type MissionRowVariant = "live" | "scheduled" | "history";

export interface MissionRowCardProps extends Mission {
  className?: string;
  onAbort?: (mission: Mission) => void;
  variant?: MissionRowVariant;
}

const nameStyles: Record<MissionRowVariant, string> = {
  live: "text-green-400/90",
  scheduled: "text-orange-300",
  history: "text-white",
};

export function MissionRowCard({
  id,
  startDate,
  endDate,
  name,
  rocket,
  target,
  status,
  type,
  onAbort,
  variant = "scheduled",
}: MissionRowCardProps) {
  const showAbortButton = variant !== "history";
  const isLive = variant === "live";

  return (
    <tr className="h-12 border-b border-bg-border hover:bg-secondary-card text-xs md:text-sm text-cyan-muted">
      <td align="center" className="text-white-light">
        {/* Pulse indicator só para live */}
        <div className="flex items-center justify-center gap-2">
          {isLive && (
            <span className="relative flex size-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full size-2 bg-green-500" />
            </span>
          )}

          <span className="font-heading text-xs mr-6 text-cyan-muted">
            {String(id).padStart(2, "0")}
          </span>

          {formatDate(startDate)}
        </div>
      </td>

      <td
        align="center"
        className={`${nameStyles[variant]} font-semibold tracking-tight `}
      >
        {name}
      </td>

      <td align="center">{rocket}</td>

      <td align="center" className="text-cyber-cyan-text">
        {target}
      </td>

      <td align="center">
        {showAbortButton && status !== "aborted" && status !== "success" ? (
          <Button
            className="size-5 text-xs"
            aria-label="Abort mission"
            variant="warning"
            size="md"
            onClick={() =>
              onAbort?.({
                id,
                startDate,
                endDate,
                name,
                rocket,
                target,
                status,
                type,
              })
            }
          >
            X
          </Button>
        ) : (
          <StatusBadge status={status as BadgeStatus} />
        )}
      </td>
    </tr>
  );
}
