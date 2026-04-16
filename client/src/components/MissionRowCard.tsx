export type MissionRowCardProps = {
  id: number;
  date: string;
  mission: string;
  rocket: string;
  destination: string;
};

export function MissionRowCard({
  id,
  date,
  mission,
  rocket,
  destination,
}: MissionRowCardProps) {
  return (
    <tr className="h-12 bg-cyan-800/20 border-b border-b-cyan-muted">
      <td>{id}</td>
      <td>{date}</td>
      <td>{mission}</td>
      <td>{rocket}</td>
      <td>{destination}</td>
      <td>
        <button
          aria-label="Abort mission"
          className="px-2 border border-red-400/50 bg-red-500/10 font-semibold hover:border-red-400/80 
          hover:bg-red-500/15"
        >
          <span className="text-xs text-red-400">X</span>
        </button>
      </td>
    </tr>
  );
}
