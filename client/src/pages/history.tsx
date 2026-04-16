import { InfoCard, MissionRowCard } from "../components";
import { historyInfoCards, type HistoryData } from "../consts";
import { Card, Divider, Input } from "../ui/components";

export default function History() {
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
        <h1 className="text-white/80 text-2xl sm:text-[32px] sm:max-w-[24rem] font-heading leading-10">
          Mission <span className="text-cyber-cyan-text">History</span>
        </h1>

        <Divider />

        <div className="flex flex-col gap-4">
          <Card className="gap-4 sm:gap-6 p-6 text-cyber-cyan-text">
            <h2>
              History of mission launches including SpaceX launches starting
              from the year 2006.
            </h2>

            <Divider label="Launch Archive" />

            <Input
              className="h-9"
              placeholder="Search mission, rocket, customer..."
            />

            <table className="w-full text-base text-cyan-text-light mb-8">
              <thead className="bg-cyan-400/5 border-b border-cyber-cyan">
                <tr>
                  <th>No.</th>
                  <th>Date</th>
                  <th>Mission</th>
                  <th>Rocket</th>
                  <th>Customers</th>
                  <th>Abort</th>
                </tr>
              </thead>

              <tbody>
                <MissionRowCard
                  id={1}
                  date="May 16 2026"
                  mission="FalconSat"
                  rocket="Falcon 1"
                  destination="Kepler-443 b"
                />
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
