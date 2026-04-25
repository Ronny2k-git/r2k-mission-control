import { Check, Rocket, X } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SectionLabel } from "../components/global";
import { MissionInfoCard } from "../components/missions";
import {
  Button,
  Card,
  DialogCard,
  Divider,
  Input,
  Selector,
} from "../components/ui";
import {
  eligibilityPlanets,
  launchInfoCards,
  type LaunchData,
} from "../consts";
import { useClickFeedback } from "../hooks";

export default function Launch() {
  const [openDialog, setOpenDialog] = useState(false);

  const { trigger: audioTrigger } = useClickFeedback({
    audioPath: "/sound/success.mp3",
    duration: 100,
  });

  const navigate = useNavigate();

  // Function used to launch a new mission
  const handleNewMission = (e: React.MouseEvent) => {
    e.preventDefault();
    audioTrigger();

    setOpenDialog(false);

    setTimeout(() => {
      navigate("/upcoming");
    }, 300);
  };

  const infoLaunchCardData: LaunchData = {
    planets: 8,
    nextMission: "Apr 20, 2026",
    activeMissions: 3,
    status: "Operational",
  };

  return (
    <>
      <div className="flex flex-col w-full gap-12 pb-8">
        {/* Info Cards */}
        <div className="md:flex grid grid-cols-2">
          {launchInfoCards.map((item, i) => (
            <MissionInfoCard
              key={i}
              title={item.title}
              text={infoLaunchCardData[item.key]}
              textColor={item.textColor}
            />
          ))}
        </div>

        <section className="flex flex-col w-full max-w-5xl mx-auto text-base sm:text-lg gap-8 px-4 md:px-8">
          {/* Title */}
          <h1 className="font-extrabold text-white text-2xl sm:text-4xl sm:max-w-[27.2rem] font-heading leading-10">
            Schedule a <span className="text-cyber-cyan-text">Launch</span> to
            Kepler Exoplanets.
          </h1>

          <Divider type="thick" />

          <div className="flex flex-col gap-4">
            {/* Eligibility Criteria  */}
            <Card className="gap-4 sm:gap-6 p-4 sm:p-6 text-cyber-cyan-text">
              <SectionLabel>Eligibility Criteria</SectionLabel>

              <h2 className="text-white-light text-base">
                Only confirmed planets matching the following criteria are
                available for the earliest scheduled missions:
              </h2>

              <div className="flex flex-col gap-2">
                {eligibilityPlanets.map((planet, i) => (
                  <div
                    key={i}
                    className="flex items-center bg-secondary-card gap-2 p-4 text-sm  border-l-2 border-l-cyber-cyan-text 
                    hover:bg-secondary-card/70
                    "
                  >
                    <span className="text-cyber-cyan-text text-xs">
                      {String(planet.id).padStart(2, "0")}
                    </span>
                    <p className=" text-white-light">{planet.description}</p>
                  </div>
                ))}
              </div>
            </Card>

            {/* Form Card */}
            <Card className="gap-4 sm:gap-6 p-4 sm:p-6 text-cyber-cyan-text ">
              <Divider type="label" label="Mission Parameters" />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <Input
                  id="launch-date"
                  inputClassName="h-10"
                  type="date"
                  label="● Launch Date"
                  required={true}
                />

                <Input
                  id="mission-name"
                  inputClassName="h-10"
                  type="text"
                  label="● Mission Name"
                  required={true}
                  placeholder="Enter mission name"
                />

                <Input
                  id="rocket"
                  inputClassName="h-10"
                  type="text"
                  defaultValue={"Explorer IS1"}
                  label="● Rocket System"
                />

                <Selector
                  id="destination-exoplanet"
                  className="h-10"
                  label="● Destination Exoplanet"
                  required={true}
                >
                  <option value="">Exoplanets</option>
                  <option value="">Test</option>
                </Selector>
              </div>

              <Divider />

              {/* Warning  + Button*/}
              <div className="flex w-full max-sm:flex-col gap-4 justify-between">
                <p className="text-xs max-w-[15rem] text-cyan-muted">
                  All fields marked{" "}
                  <span className="text-orange-300 px-1 font-mono tracking-tighter">
                    REQ
                  </span>{" "}
                  are mandatory. Mission will be queued for director
                  authorization upon submission.
                </p>

                <Button
                  className="sm:w-[14rem] py-2 gap-2"
                  onClick={() => setOpenDialog(true)}
                  variant="success"
                >
                  Launch Mission <Check className="size-4" />
                </Button>
              </div>
            </Card>

            <Divider />

            <span className="text-xs max-sm:text-center font-body text-cyan-muted">
              R2K MISSION CONTROL · RESTRICTED ACCESS
            </span>
          </div>
        </section>
      </div>

      {/* Dialog card */}
      <DialogCard
        className="max-w-md"
        open={openDialog}
        onClose={() => setOpenDialog(false)}
        variant="success"
        iconBadge={<Rocket />}
        title="Launch a Mission?"
        description="Your mission has been submitted and is pending director authorization. You will be notified once clearance is granted."
        mission={{
          id: 1,
          date: "Apr 24, 2026",
          mission: "Starlink Batch 12",
          rocket: "Explorer IS1",
          target: "Kepler-452 b",
          status: "success",
        }}
        actions={
          <div className="w-full flex gap-2 justify-center">
            <Button
              className="w-full text-sm"
              variant="neutral"
              size={"lg"}
              iconLeft={<X className="size-4" />}
              onClick={() => setOpenDialog(false)}
            >
              Cancel
            </Button>

            <Button
              className="w-full text-sm"
              variant="success"
              iconLeft={<Rocket className="size-4" />}
              onClick={(e) => handleNewMission(e)}
            >
              New Mission
            </Button>
          </div>
        }
      />
    </>
  );
}
