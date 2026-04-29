import { twMerge } from "tailwind-merge";
import { SectionLabel } from "../global";
import { Input } from "../ui";

export type MissionFilterBarProps = {
  title: string;
  searchValue?: string;
  onSearch: (value: string) => void;
  className?: string;
};

export function MissionFilterBar({
  title,
  searchValue,
  onSearch,
  className,
}: MissionFilterBarProps) {
  return (
    <div
      className={twMerge(
        "flex max-sm:flex-col items-center gap-4 p-4 sm:p-6",
        className,
      )}
    >
      <SectionLabel>{title}</SectionLabel>

      <Input
        value={searchValue ?? ""}
        size="sm"
        wrapperClassName="w-full"
        placeholder="Search mission, rocket, destination..."
        onChange={(e) => onSearch(e.target.value)}
      />

      <div className="flex justify-center max-sm:w-full p-2 text-red-500/80 border border-red-500/50 bg-red-500/10">
        <h3 className="font-heading font-semibold whitespace-nowrap text-xs">
          X Abort the Mission
        </h3>
      </div>
    </div>
  );
}
