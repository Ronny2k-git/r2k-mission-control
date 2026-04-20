import { InfoCard, MissionRowCard, SectionLabel } from "../components";
import { upcomingInfoCards, type UpcomingData } from "../consts";
import { useSearchMissions } from "../hooks";
import { Card, Divider, Input } from "../ui/components";

export default function Upcoming() {
  const { searchedMissions, search, setSearch } = useSearchMissions();

  const infoUpcomingCardData: UpcomingData = {
    launchedMissions: 6,
    nextWindow: "May 13, 2026",
    rocketsReady: 3,
    status: "Scheduling",
  };

  // TO DO TOMORROW:

  // 1 CREATE A PAGINATION COMPONENT
  // 2 CREATE A BANNER TO BE USED WHEN THE TABLE IS EMPTY OR WHEN
  //  THE FILTERS RETURN NOTHING
  // 3 CREATE A MODAL COMPONENT
  // 4 CREATE A CARD DIALOG TO CONFIRM THE MISSION LAUNCH

  return (
    <div className="flex w-full h-full justify-center px-4 py-8 sm:px-8">
      <div className="flex flex-col w-full max-w-3xl gap-8 text-base sm:text-lg">
        {/* Info Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4">
          {upcomingInfoCards.map((item, i) => (
            <InfoCard
              key={i}
              title={item.title}
              text={infoUpcomingCardData[item.key]}
              textColor={item.textColor}
            />
          ))}
        </div>

        {/* Title */}
        <h1 className="font-extrabold text-white/85 text-2xl sm:text-4xl font-heading leading-10">
          Upcoming a <span className="text-cyber-cyan-text">Missions</span>
        </h1>

        <Divider variant="thick" />

        <section className="flex flex-col w-full gap-4">
          <Card className="gap-4 sm:gap-6 text-cyber-cyan-text ">
            <div className="flex flex-col gap-4 sm:gap-6 p-4 sm:p-6">
              <SectionLabel>Active launch missions</SectionLabel>

              <Divider variant="label" label="Active Launch Mission" />

              <div className="flex max-sm:flex-col items-center gap-4 text-xs uppercase">
                <Input
                  inputClassName="h-9"
                  wrapperClassName="w-full"
                  placeholder="Search mission, rocket, destination..."
                  defaultValue={search}
                  onChange={(e) => setSearch(e.target.value)}
                />

                <div className="flex justify-center max-sm:w-full p-2 text-red-400/90 border border-red-400/50 bg-red-500/10">
                  <h3 className="flex items-center whitespace-nowrap">
                    Click X to abort Mission
                  </h3>
                </div>
              </div>
            </div>

            <div className="w-full flex flex-col justify-center overflow-y-auto bg-cyan-800/20">
              <table className="w-full text-base text-cyan-text-light min-w-[45rem]">
                <thead className="bg-cyan-400/30 border-b text-cyber-cyan-text border-cyber-cyan">
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
