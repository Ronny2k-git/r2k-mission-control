import { InfoCard, MissionRowCard } from "../components";
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
        <h1 className="text-white/80 text-2xl sm:text-[32px] sm:max-w-[24rem] font-heading leading-10">
          Upcoming a <span className="text-cyber-cyan-text">Missions</span>
        </h1>

        <Divider />

        <div className="flex flex-col gap-4">
          <Card className="gap-4 sm:gap-6 p-6 text-cyber-cyan-text">
            <h2>
              Upcoming missions including both SpaceX launches and newly
              scheduled Zero to Mastery rockets.
            </h2>

            <div className="flex max-sm:flex-col items-center gap-4 text-xs uppercase">
              <Divider label="Active Launch Mission" />

              <div className="flex justify-center max-sm:w-full w-[16rem] p-1.5 text-red-400/90 border border-red-400/50 bg-red-500/10">
                <h3 className="flex items-center">Click X to abort Mission</h3>
              </div>
            </div>

            <Input
              className="h-9"
              placeholder="Search mission, rocket, destination..."
              defaultValue={search}
              onChange={(e) => setSearch(e.target.value)}
            />

            <table className="w-full text-base text-cyan-text-light min-w-[45rem]">
              <thead className="bg-cyan-400/5 border-b text-cyber-cyan-text border-cyber-cyan">
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
                  />
                ))}
              </tbody>
            </table>
          </Card>

          <Divider />

          <span className="text-xs max-sm:text-center text-cyan-muted">
            NASA MISSION CONTROL · RESTRICTED ACCESS
          </span>
        </div>
      </div>
    </div>
  );
}
