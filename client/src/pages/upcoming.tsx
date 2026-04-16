import { X } from "lucide-react";
import { InfoCard } from "../components";
import { upcomingInfoCards, type UpcomingData } from "../consts";
import { Card, Divider } from "../ui/components";

export default function Upcoming() {
  // TO DO TOMORROW:

  // 1 FINISH UPCOMING PAGE DESIGN MOCK
  // 2 FINISH HISTORY PAGE DESIGN MOCK
  const infoUpcomingCardData: UpcomingData = {
    launchedMissions: 6,
    nextWindow: "May 13, 2026",
    rocketsReady: 3,
    status: "Scheduling",
  };

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

            <h3 className="flex items-center">
              Warning! Clicking on the <X className="text-red-500 size-6" />
              aborts the mission.
            </h3>

            <table className="w-full text-base text-cyan-text-light mb-8">
              <thead className="border-b  border-cyber-cyan">
                <tr>
                  <th>No.</th>
                  <th>Date</th>
                  <th>Mission</th>
                  <th>Rocket</th>
                  <th>Customers</th>
                </tr>
              </thead>

              <tbody>
                <tr></tr>
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
