import type { Mission } from "../../types";
import { Button } from "../ui";

export interface MissionRowCardProps extends Mission {
  className?: string;
  onAbort?: (mission: Mission) => void;
}

export function MissionRowCard({
  id,
  date,
  name,
  rocket,
  target,
  status,
  onAbort,
}: MissionRowCardProps) {
  return (
    <tr className="h-12 border-b border-bg-border hover:bg-secondary-card text-xs md:text-sm text-cyan-muted">
      <td align="center" className="text-white-light">
        <span className="font-heading text-xs mr-6 text-cyan-muted">
          {String(id).padStart(2, "0")}
        </span>

        {date}
      </td>

      <td align="center" className="text-white font-semibold tracking-tight">
        {name}
      </td>

      <td align="center">{rocket}</td>

      <td align="center" className="text-cyber-cyan-text">
        {target}
      </td>

      <td align="center">
        {status === "aborted" ? (
          <div className="size-5 bg-red-500/90" />
        ) : status === "success" ? (
          <div className="size-5 bg-green-500/90" />
        ) : (
          <Button
            className="size-5 text-xs"
            aria-label="Abort mission"
            variant="warning"
            size="md"
            onClick={() =>
              onAbort?.({ id, date, name, rocket, target, status })
            }
          >
            X
          </Button>
        )}
      </td>
    </tr>
  );
}
