import type { Mission } from "../types";

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
    <tr className="h-11 border-b border-bg-border text-[15px]">
      <td align="center" className="font-heading text-xs ">
        {String(id).padStart(2, "0")}
      </td>
      <td align="center">{date}</td>
      <td align="center" className="text-white/85 font-semibold">
        {mission}
      </td>
      <td align="center">{rocket}</td>
      <td align="center">{target}</td>
      <td align="center">
        {status === "aborted" ? (
          <div className="size-5 bg-red-500/90" />
        ) : status === "success" ? (
          <div className="size-5 bg-green-500/90" />
        ) : (
          <button
            aria-label="Abort mission"
            className="size-6 border border-red-400/50 bg-red-500/10 font-semibold hover:border-red-400/80 
          hover:bg-red-500/15"
          >
            <span className="text-xs text-red-400">X</span>
          </button>
        )}
      </td>
    </tr>
  );
}
