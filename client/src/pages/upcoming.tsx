import { InfoCard, MissionRowCard, SectionLabel } from "../components";
import { Card, Divider, Input } from "../components/ui";
import { upcomingInfoCards, type UpcomingData } from "../consts";
import { useSearchMissions } from "../hooks";

export default function Upcoming() {
  const { searchedMissions, search, setSearch } = useSearchMissions();

  const infoUpcomingCardData: UpcomingData = {
    launchedMissions: 6,
    nextWindow: "May 13, 2026",
    rocketsReady: 3,
    status: "Scheduling",
  };

  return (
    <div className="flex w-full h-full">
      <div className="flex flex-col w-full gap-12 pb-8">
        {/* Info Cards */}
        <div className="md:flex grid grid-cols-2">
          {upcomingInfoCards.map((item, i) => (
            <InfoCard
              key={i}
              title={item.title}
              text={infoUpcomingCardData[item.key]}
              textColor={item.textColor}
            />
          ))}
        </div>

        <section className="flex flex-col w-full max-w-5xl mx-auto text-base sm:text-lg gap-8 px-4 md:px-8">
          {/* Title */}
          <h1 className="font-extrabold text-white text-2xl sm:text-4xl font-heading leading-10">
            Upcoming <span className="text-cyber-cyan-text">Missions</span>
          </h1>

          <Divider variant="thick" />

          <div className="flex flex-col w-full gap-4">
            <Card className="text-cyber-cyan-text">
              <div className="flex max-sm:flex-col items-center gap-2 p-4 sm:p-6">
                <SectionLabel>Launch Schedule</SectionLabel>

                <Input
                  inputClassName="h-9"
                  wrapperClassName="w-full"
                  placeholder="Search mission, rocket, destination..."
                  defaultValue={search}
                  onChange={(e) => setSearch(e.target.value)}
                />

                <div className="flex justify-center max-sm:w-full p-2 text-red-400/90 border border-red-400/50 bg-red-500/10">
                  <h3 className="flex items-center whitespace-nowrap text-xs uppercase">
                    Click X to abort Mission
                  </h3>
                </div>
              </div>

              {/* Table */}
              <div className="w-full flex flex-col justify-center overflow-y-auto">
                <table className="w-full text-base text-cyan-text-light min-w-[43.5rem]">
                  <thead className="bg-cyan-400/5 border-y text-cyber-cyan-text border-bg-border">
                    <tr>
                      <th className="p-2">No.</th>
                      <th>Date</th>
                      <th>Mission</th>
                      <th>Rocket</th>
                      <th>Destination</th>
                      <th>Abort</th>
                    </tr>
                  </thead>

                  <tbody>
                    {searchedMissions.map((item, i) => (
                      <MissionRowCard
                        key={i}
                        id={item.id}
                        date={item.date}
                        mission={item.mission}
                        rocket={item.rocket}
                        target={item.target}
                        status="upcoming"
                      />
                    ))}
                  </tbody>
                </table>

                <span className="text-xs p-3">
                  Showing {searchedMissions.length} missions
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
