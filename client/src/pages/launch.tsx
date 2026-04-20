import { Check } from "lucide-react";
import { InfoCard } from "../components";
import { launchInfoCards, type LaunchData } from "../consts";
import { useClickFeedback } from "../hooks";
import { Button, Card, Divider, Input, Selector } from "../ui/components";

const eligibilityPlanets = [
  {
    id: 1,
    description:
      "Planetary radius < 1.6× Earth's radius — ensures terrestrial-class surface conditions.",
  },
  {
    id: 2,
    description:
      "Effective stellar flux in range 0.36 – 1.11× Earth's value — conservative habitable zone boundary.",
  },
];

export default function Launch() {
  const { active, trigger } = useClickFeedback({
    audioPath: "/sound/warning.mp3",
    duration: 100,
  });

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();

    trigger();
  };

  const infoLaunchCardData: LaunchData = {
    planets: 8,
    nextWindow: "Apr 20, 2026",
    activeMissions: 3,
    status: "Operational",
  };

  return (
    <div className="flex w-full h-full justify-center px-4 py-8 sm:px-8">
      <div className="flex flex-col w-full max-w-3xl gap-8 text-base sm:text-lg">
        {/* Info Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4">
          {launchInfoCards.map((item, i) => (
            <InfoCard
              key={i}
              title={item.title}
              text={infoLaunchCardData[item.key]}
              textColor={item.textColor}
            />
          ))}
        </div>

        {/* Title */}
        <h1 className="font-extrabold text-white/85 text-2xl sm:text-4xl sm:max-w-[27.2rem] font-heading leading-10">
          Schedule a <span className="text-cyber-cyan-text">Launch</span> to
          Kepler Exoplanets.
        </h1>

        <Divider variant="thick" />

        <div className="flex flex-col gap-4">
          {/* Eligibility Criteria  */}
          <Card className="gap-4 sm:gap-6 p-4 sm:p-6 text-cyber-cyan-text">
            <Divider variant="label" label="Eligibility Criteria" />

            <h2 className="text-cyan-muted">
              Only confirmed planets matching the following criteria are
              available for the earliest scheduled missions:
            </h2>

            <div className="flex flex-col gap-2">
              {eligibilityPlanets.map((planet, i) => (
                <div
                  key={i}
                  className="flex gap-2 p-2 text-sm sm:text-base border-l-2 border-l-cyber-cyan-text text-cyan-text-light bg-cyan-950/50"
                >
                  <span className="text-cyan-muted">0{planet.id}</span>
                  <p>{planet.description}</p>
                </div>
              ))}
            </div>
          </Card>

          {/* Card Form */}
          <Card className="gap-4 sm:gap-6 p-4 sm:p-6 text-cyber-cyan-text ">
            <Divider variant="label" label="Mission Parameters" />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <Input
                inputClassName="h-10"
                type="date"
                label="● Launch Date"
                required={true}
              />

              <Input
                inputClassName="h-10"
                type="text"
                label="● Mission Name"
                required={true}
              />

              <Input
                inputClassName="h-10"
                type="text"
                defaultValue={"Explorer IS1"}
                label="● Rocket System"
              />

              <Selector
                className="h-10"
                label="● Destination Exoplanet"
                required={true}
              >
                <option value="">Exoplanets</option>
                <option value="">Test</option>
              </Selector>
            </div>

            <Divider />

            <div className="flex w-full max-sm:flex-col gap-4 justify-between">
              <p className="text-xs max-w-[15rem] text-cyan-muted">
                All fields marked{" "}
                <span className="text-orange-300 px-1 font-mono tracking-tighter">
                  REQ
                </span>{" "}
                are mandatory. Mission will be queued for director authorization
                upon submission.
              </p>

              <Button
                className={`sm:w-[14rem] gap-2 ${active ? "bg-green-500/30" : ""}`}
                onClick={(e) => handleClick(e)}
              >
                Launch Mission <Check className="size-4" />
              </Button>
            </div>
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
