import { Check } from "lucide-react";
import { LaunchInfoCard } from "../components";
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
  // const clickSound = useRef(new Audio("/sound/warning.mp3"));

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();

    trigger();
  };

  return (
    <div className="flex w-full h-full justify-center px-4 py-8 sm:px-8">
      <div className="flex flex-col w-full max-w-3xl gap-8 text-base sm:text-description">
        {/* Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
          <LaunchInfoCard
            title="Eligible Planets"
            text={8}
            textColor="text-cyber-cyan-text"
          />
          <LaunchInfoCard
            title="Next Launch Window"
            text={"Apr 20, 2026"}
            textColor="text-cyber-cyan-text"
          />
          <LaunchInfoCard
            title="Active Missions"
            text={"3"}
            textColor="text-cyber-cyan-text"
          />
          <LaunchInfoCard
            title="Fleet Status"
            text={"Operational"}
            textColor="text-green-600"
          />
        </div>

        {/* Title */}
        <h1 className="text-white/90 text-[35px] max-w-[21.2rem] font-semibold leading-10">
          Schedule a <span className="text-cyber-cyan-text">Launch</span> to
          Kepler Exoplanets
        </h1>

        <Divider />

        {/* Card */}
        <Card className="gap-4 sm:gap-6 text-cyber-cyan-text">
          <Divider label="Eligibility Criteria" />

          <h2 className="text-cyan-text-light/40">
            Only confirmed planets matching the following criteria are available
            for the earliest scheduled missions:
          </h2>

          <div className="flex flex-col gap-2">
            {eligibilityPlanets.map((planet) => (
              <div className="flex gap-2 p-2 text-sm sm:text-lg border-l-2 border border-cyan-900/70 border-l-cyber-cyan-text text-cyan-text-light bg-cyan-950/50">
                <span className="text-cyan-800">0{planet.id}</span>
                <p>{planet.description}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <Input
              className="h-10 "
              type="date"
              label="● Launch Date"
              required={true}
            />

            <Input
              className="h-10 "
              type="text"
              label="● Mission Name"
              required={true}
            />

            <Input
              className="h-10 "
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
            <p className="text-xs max-w-[15rem] text-cyan-text-light/40">
              All fields marked{" "}
              <span className="text-orange-300 px-1 font-mono tracking-tighter">
                REQ
              </span>{" "}
              are mandatory. Mission will be queued for director authorization
              upon submission.
            </p>

            <Button
              className={`sm:w-[14rem] text-base gap-1 ${active ? "bg-green-500/30" : ""}`}
              onClick={(e) => handleClick(e)}
            >
              Launch Mission <Check className="size-4" />
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}
