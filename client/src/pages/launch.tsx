import { Check } from "lucide-react";
import { useClickFeedback } from "../hooks";
import { Button, Card, Input, Selector } from "../ui/components";

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
      <div className="w-full max-w-3xl text-base sm:text-description">
        <Card>
          <h1>
            Schedule a mission launch for interstellar travel to one of the
            Kepler Exoplanets.
          </h1>

          <h2>
            Only confirmed planets matching the following criteria are available
            for the earliest scheduled missions:
          </h2>

          <ul className="list-disc pl-5 sm:pl-10 marker:text-2xl">
            <li>Planetary radius &lt; 1.6 times Earth's radius</li>
            <li>
              Effective stellar flux &gt; 0.36 times Earth's value and &lt; 1.11
              times Earth's value
            </li>
          </ul>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <span>Launch Date</span>

            <Input className="sm:w-50 h-8 " type="date" />

            <span>Mission Name</span>
            <Input className="sm:w-50 h-8 " type="text" />

            <span>Rocket Type</span>
            <Input
              className="sm:w-50 h-8 "
              type="text"
              defaultValue={"Explorer IS1"}
            />

            <span>Destination Exoplanet</span>
            <Selector className="sm:w-50 h-8">
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
