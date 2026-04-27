import { Check, Rocket, X } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { CountdownClock, SectionLabel } from "../components/global";
import { MissionInfoCard } from "../components/missions";
import {
  Button,
  Card,
  DialogCard,
  Divider,
  Input,
  Selector,
  TextArea,
} from "../components/ui";
import {
  eligibilityPlanets,
  launchInfoCards,
  type LaunchData,
} from "../consts";
import { useClickFeedback } from "../hooks";
import { useToast } from "../hooks/useToast";
import type { LaunchFormData } from "../schemas";

export default function Launch() {
  const [openDialog, setOpenDialog] = useState(false);
  const { showToast } = useToast();

  const { register, handleSubmit, watch } = useForm<LaunchFormData>();
  const formValues = watch();

  const navigate = useNavigate();

  const { trigger: audioTrigger } = useClickFeedback({
    audioPath: "/sound/success.mp3",
    duration: 100,
  });

  // Function used to launch a new mission
  const onSubmit = (data: LaunchFormData) => {
    audioTrigger();

    // Fill using the form data later
    showToast({
      id: 1,
      name: data.missionName,
      target: data.target,
      startDate: data.startDate,
      status: "success",
    });

    setOpenDialog(false);

    setTimeout(() => navigate("/upcoming"), 300);
  };

  const infoLaunchCardData: LaunchData = {
    planets: 8,
    nextMission: <CountdownClock targetDate={"2026-4-28"} />,
    activeMissions: 3,
    status: "Operational",
  };

  return (
    <>
      <div className="flex flex-col w-full gap-12 pb-8 ">
        {/* Info Cards */}
        <div className="md:flex grid grid-cols-2">
          {launchInfoCards.map((item, i) => (
            <MissionInfoCard
              key={i}
              title={item.title}
              text={infoLaunchCardData[item.key]}
              textColor={item.textColor}
              variant={item.variant}
            />
          ))}
        </div>

        <section
          className="flex flex-col w-full max-w-5xl mx-auto text-base sm:text-lg 
           gap-8 px-4 md:px-8 animate-fade-up"
        >
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

            <Card className="p-4 sm:p-6 text-cyber-cyan-text">
              {/* Form Fields */}
              <form
                className="flex flex-col gap-4 sm:gap-6"
                onSubmit={handleSubmit(() => setOpenDialog(true))}
              >
                <Divider type="label" label="Mission Parameters" />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <Input
                    id="mission-name"
                    type="text"
                    label="● Mission Name"
                    required={true}
                    placeholder="Enter mission name"
                    {...register("missionName")}
                  />

                  <Input
                    id="rocket"
                    type="text"
                    defaultValue={"Explorer IS1"}
                    label="● Rocket System"
                    {...register("rocket")}
                  />

                  <Selector
                    id="destination-exoplanet"
                    label="● Destination Exoplanet"
                    required={true}
                    {...register("target")}
                  >
                    <option value="">Select a planet</option>
                    <option value="">Exoplanet</option>
                    <option value="">Test</option>
                  </Selector>

                  <Selector
                    id="mission-type"
                    label="● Mission type"
                    required={true}
                    {...register("missionType")}
                  >
                    <option value="">Select a type</option>
                    <option value="">Exploration</option>
                    <option value="">Cargo</option>
                    <option value="">Research</option>
                    <option value="">Screwed</option>
                  </Selector>

                  <Input
                    id="start-mission-date"
                    type="date"
                    label="● Start Mission Date"
                    required={true}
                    {...register("startDate")}
                  />

                  <Input
                    id="end-mission-date"
                    type="date"
                    label="● End Mission Date"
                    required={true}
                    {...register("endDate")}
                  />

                  <TextArea
                    id="mission-description"
                    wrapperClassName="sm:col-span-2"
                    textAreaClassName="w-full"
                    label="● Mission Description"
                    variant="basic"
                    size="md"
                    required={true}
                    {...register("description")}
                  />
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
                    variant="success"
                    type="submit"
                  >
                    Launch Mission <Check className="size-4" />
                  </Button>
                </div>
              </form>
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
        description={formValues.description}
        mission={{
          id: 1,
          startDate: formValues.startDate,
          endDate: formValues.endDate,
          name: formValues.missionName,
          rocket: formValues.rocket,
          target: formValues.target,
          status: "success",
          type: formValues.missionType,
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
              onClick={handleSubmit(onSubmit)}
            >
              New Mission
            </Button>
          </div>
        }
      />
    </>
  );
}
