import { InfoCard, MissionRowCard, SectionLabel } from "../components";
import { Button, Card, Divider, Input } from "../components/ui";
import { filters, historyInfoCards, type HistoryData } from "../consts";
import { useFilterMissions, useSearchMissions } from "../hooks";

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
    <div className="flex w-full h-full">
      <div className="flex flex-col w-full gap-12 pb-8">
        {/* Info Cards */}
        <div className="md:flex grid grid-cols-2">
          {historyInfoCards.map((item, i) => (
            <InfoCard
              key={i}
              title={item.title}
              text={infoHistoryCardData[item.key]}
              textColor={item.textColor}
            />
          ))}
        </div>

        <section className="flex flex-col w-full max-w-4xl mx-auto text-base sm:text-lg gap-8 px-4 md:px-8">
          {/* Title */}
          <h1 className="font-extrabold text-white/85 text-2xl sm:text-4xl font-heading leading-10">
            Mission <span className="text-cyber-cyan-text">History</span>
          </h1>

          <Divider />

          <div className="flex flex-col gap-4">
            <Card className="text-cyber-cyan-text">
              <div className="flex max-md:flex-col items-center gap-2 p-4 sm:p-6">
                <SectionLabel>Launch archive</SectionLabel>

                <Input
                  inputClassName="h-9"
                  wrapperClassName="w-full"
                  placeholder="Search mission, rocket, customer..."
                  defaultValue={search}
                  onChange={(e) => setSearch(e.target.value)}
                />

                {/* Mission filters*/}
                <div className="flex gap-2">
                  {filters.map((item, i) => (
                    <Button
                      key={`${item.value}_${i}`}
                      className={`text-xs uppercase gap-1 h-9`}
                      variant={filter === item.value ? item.value : "ghost"}
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

              {/* Table */}
              <div className="w-full flex flex-col overflow-y-auto">
                <table className="w-full text-base text-cyan-text-light min-w-[43.5rem]">
                  <thead className="bg-cyan-400/5 border-y text-cyber-cyan-text border-bg-border">
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

                <span className="text-xs p-3">
                  Showing {filteredMissions.length} missions
                </span>
              </div>
            </Card>

            <Divider />

            <span className="text-xs max-sm:text-center text-cyan-muted">
              R2K MISSION CONTROL · RESTRICTED ACCESS
            </span>
          </div>
        </section>
      </div>
    </div>
  );
}
