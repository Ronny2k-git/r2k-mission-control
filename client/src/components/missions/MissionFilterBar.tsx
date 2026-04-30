import { twMerge } from "tailwind-merge";
import { SectionLabel } from "../global";
import { Input } from "../ui";

export type MissionFilterBarProps = {
  title: string;
  searchValue?: string;
  onSearch: (value: string) => void;
  actions?: React.ReactNode;
  className?: string;
};

export function MissionFilterBar({
  title,
  searchValue,
  onSearch,
  actions,
  className,
}: MissionFilterBarProps) {
  return (
    <div
      className={twMerge(
        "w-full flex max-sm:flex-col items-center gap-4 p-4 sm:p-6",
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

      {actions && (
        <div className="flex justify-center max-sm:w-full">{actions}</div>
      )}
    </div>
  );
}
