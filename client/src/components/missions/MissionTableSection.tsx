import type { EnergyVariant } from "../../consts";
import type { Mission } from "../../types";
import { EmptyBanner, Pagination } from "../global";
import { Card, Divider, type ButtonVariant } from "../ui";
import { MissionFilterBar } from "./MissionFilterBar";
import { MissionRowCard } from "./MissionRowCard";

type MissionTableVariant = "live" | "scheduled" | "history";

interface MissionTableSectionProps {
  titleId: string;
  title: string;
  missions: Mission[];

  search: string;
  onSearch: (value: string) => void;

  page: number;
  totalPages: number;
  onPageChange: (page: number) => void;

  variant: MissionTableVariant;
  onAbort?: (mission: Mission) => void;

  emptyVariant?: EnergyVariant;
  navigateOnEmpty?: () => void;
}

const actionVariant: Record<EnergyVariant, ButtonVariant> = {
  cyan: "basic",
  green: "success",
  orange: "waiting",
  red: "warning",
};

export function MissionTableSection({
  titleId,
  title,
  missions,
  search,
  onSearch,
  page,
  totalPages,
  onPageChange,
  onAbort,
  variant,
  emptyVariant = "orange",
  navigateOnEmpty,
}: MissionTableSectionProps) {
  return (
    <section className="flex flex-col gap-8 text-base sm:text-lg animate-fade-up">
      {/* Title */}
      <h2
        id={titleId}
        className="font-extrabold text-white text-2xl sm:text-3xl font-heading leading-10"
      >
        {title.split(" ")[0]}{" "}
        <span className="text-cyber-cyan-text">
          {title.split(" ").slice(1).join(" ")}
        </span>
      </h2>

      <Divider type="thick" />

      <Card className="text-cyber-cyan-text">
        {/* Filter */}
        <MissionFilterBar
          title="Launch Schedule"
          searchValue={search}
          onSearch={onSearch}
          actions={
            <div className="w-full flex items-center justify-center p-2 text-red-500/80 border border-red-500/50 bg-red-500/10">
              <h3 className="font-heading font-semibold text-xs whitespace-nowrap">
                X Abort the Mission
              </h3>
            </div>
          }
        />

        {/* Table */}
        <div className="w-full flex flex-col overflow-y-auto max-md:pb-2">
          <table className="w-full text-base text-cyan-text-light min-w-[48rem]">
            <thead className="bg-secondary-card border-y text-cyber-cyan-text border-bg-border">
              <tr>
                <th className="p-3">Launch Date</th>
                <th>Mission</th>
                <th>Rocket</th>
                <th>Destination</th>
                <th>Abort</th>
              </tr>
            </thead>

            <tbody>
              {missions.length > 0 &&
                missions.map((item) => (
                  <MissionRowCard
                    key={item.id}
                    {...item}
                    variant={variant}
                    onAbort={onAbort}
                  />
                ))}
            </tbody>
          </table>
        </div>

        {/* Empty state */}
        {missions.length === 0 && (
          <div className="flex flex-col gap-6 m-4 sm:m-6">
            <EmptyBanner
              variant={emptyVariant}
              primaryActionVariant="ghost"
              secondaryActionVariant={actionVariant[emptyVariant]}
              onPrimaryAction={() => onSearch("")}
              onSecondaryAction={navigateOnEmpty}
            />

            <Divider type="line" />
          </div>
        )}

        {/* Pagination */}
        <div className="flex bg-secondary-card h-16 sm:h-12 sm:px-6 gap-2 items-center justify-center sm:justify-between">
          <span className="hidden sm:block text-xs">
            Showing {missions.length} missions
          </span>

          <Pagination
            page={page}
            totalPages={totalPages}
            onChange={onPageChange}
          />
        </div>
      </Card>
    </section>
  );
}
