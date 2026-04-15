import { Check } from "lucide-react";
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
      <div className="flex flex-col w-full max-w-3xl sm:gap-8 text-base sm:text-description">
        <h1 className="text-white/90 text-[35px] max-w-[21.2rem] font-semibold leading-10">
          Schedule a <span className="text-cyber-cyan-text">Launch</span> to
          Kepler Exoplanets
        </h1>

        <Divider />

        <Card className="sm:gap-6 text-cyber-cyan-text">
          <Divider label="Eligibility Criteria" />

          <h2>
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
            <Input className="h-10 " type="date" label="● Launch Date" />

            <Input className="h-10 " type="text" label="● Mission Name" />

            <Input
              className="h-10 "
              type="text"
              defaultValue={"Explorer IS1"}
              label="● Rocket Type"
            />

            <Selector className="h-10" label="● Destination Exoplanet">
              <option value="">Exoplanets</option>
              <option value="">Test</option>
            </Selector>

            <Button
              className={`sm:w-[11rem] mt-4 text-base gap-1 ${active ? "bg-green-500/30" : ""}`}
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
