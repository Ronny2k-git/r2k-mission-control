import { ShieldCheck, ShieldX } from "lucide-react";
import { InfoCard, MissionRowCard, SectionLabel } from "../components";
import { historyInfoCards, type HistoryData } from "../consts";
import { useFilterMissions, useSearchMissions } from "../hooks";
import type { FilterType } from "../types";
import { Button, Card, Divider, Input } from "../ui/components";

const filters: {
  value: FilterType;
  label: string;
  icon?: React.ElementType;
  iconColor?: string;
}[] = [
  { value: "all", label: "All" },
  {
    value: "success",
    icon: ShieldCheck,
    iconColor: "text-green-500",
    label: "Success",
  },
  {
    value: "aborted",
    icon: ShieldX,
    iconColor: "text-red-400",
    label: "Aborted",
  },
];

export default function History() {
  const { searchedMissions, search, setSearch } = useSearchMissions();
  const { filteredMissions, filter, setFilter } =
    useFilterMissions(searchedMissions);

  const infoHistoryCardData: HistoryData = {
    totalLaunches: 20,
    successfull: 85,
    firstLaunch: "2006",
    status: "Verified",
  };

  return (
    <div className="flex w-full h-full justify-center px-4 py-8 sm:px-8">
      <div className="flex flex-col w-full max-w-3xl gap-8 text-base sm:text-lg">
        {/* Info Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4">
          {historyInfoCards.map((item, i) => (
            <InfoCard
              key={i}
              title={item.title}
              text={infoHistoryCardData[item.key]}
              textColor={item.textColor}
            />
          ))}
        </div>

        {/* Title */}
        <h1 className="font-extrabold text-white/85 text-2xl sm:text-4xl font-heading leading-10">
          Mission <span className="text-cyber-cyan-text">History</span>
        </h1>

        <Divider />

        <section className="flex flex-col gap-4">
          <Card className="gap-4 sm:gap-6 text-cyber-cyan-text">
            <div className="flex flex-col gap-4 sm:gap-6 p-4 sm:p-6">
              {/* <h2>
                History of mission launches including SpaceX launches starting
                from the year 2006.
              </h2>

              <Divider label="Launch Archive" /> */}

              <div className="flex max-sm:flex-col sm:items-center gap-2">
                <SectionLabel>Launch archive</SectionLabel>

                <Input
                  inputClassName="h-9"
                  wrapperClassName="w-full"
                  placeholder="Search mission, rocket, customer..."
                  defaultValue={search}
                  onChange={(e) => setSearch(e.target.value)}
                />

                <div className="flex gap-2">
                  {filters.map((item, i) => (
                    <Button
                      key={`${item.value}_${i}`}
                      className={`text-xs uppercase gap-1 h-9 ${
                        filter === item.value &&
                        "bg-cyan-500/20 border-cyber-cyan-text"
                      }`}
                      variant="ghost"
                      onClick={() => setFilter(item.value)}
                    >
                      {item.icon && (
                        <item.icon className={`size-4 ${item.iconColor}`} />
                      )}
                      {item.label}
                    </Button>
                  ))}
                </div>
              </div>
            </div>

            <div className="w-full overflow-y-auto pb-3">
              <table className="w-full text-base text-cyan-text-light min-w-[45rem]">
                <thead className="bg-cyan-400/5 border-b text-cyber-cyan-text border-cyber-cyan-text">
                  <tr>
                    <th className="p-2">No.</th>
                    <th>Date</th>
                    <th>Mission</th>
                    <th>Rocket</th>
                    <th>Customers</th>
                    <th>Status</th>
                  </tr>
                </thead>

                <tbody>
                  {filteredMissions.map((item, i) => (
                    <MissionRowCard
                      key={i}
                      id={item.id}
                      date={item.date}
                      mission={item.mission}
                      rocket={item.rocket}
                      target={item.target}
                      status={item.status}
                    />
                  ))}
                </tbody>
              </table>

              <Divider variant="line" />

              <span className="text-xs p-3">
                Showing {searchedMissions.length} missions
              </span>
            </div>
          </Card>

          <Divider />

          <span className="text-xs max-sm:text-center text-cyan-muted">
            NASA MISSION CONTROL · RESTRICTED ACCESS
          </span>
        </section>
      </div>
    </div>
  );
}
