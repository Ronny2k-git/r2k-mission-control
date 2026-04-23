import type { Mission } from "../../types";

export interface MissionRowCardProps extends Mission {
  className?: string;
}

export function MissionRowCard({
  id,
  date,
  mission,
  rocket,
  target,
  status,
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
        {mission}
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
          <button
            aria-label="Abort mission"
            className="size-6 border border-red-500/50 bg-red-500/10 font-semibold hover:border-red-500/80 
          hover:bg-red-500/15"
          >
            <span className="text-xs text-red-500">X</span>
          </button>
        )}
      </td>
    </tr>
  );
}
