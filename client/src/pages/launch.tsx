import { zodResolver } from "@hookform/resolvers/zod";
import { Check, Rocket, RotateCcwIcon, X } from "lucide-react";
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
  missionTypeValues,
  type LaunchData,
} from "../consts";
import { useClickFeedback } from "../hooks";
import { useToast } from "../hooks/useToast";
import { launchSchema, type LaunchFormData } from "../schemas";

export default function Launch() {
  const [openDialog, setOpenDialog] = useState(false);
  const [formData, setFormData] = useState<LaunchFormData | null>(null);
  const { showToast } = useToast();

  const { register, handleSubmit, formState, reset } = useForm<LaunchFormData>({
    resolver: zodResolver(launchSchema),
  });

  const inputError = formState.errors;

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
                onSubmit={handleSubmit((data) => {
                  setFormData(data);
                  setOpenDialog(true);
                })}
              >
                <Divider type="label" label="Mission Parameters" />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <Input
                    id="mission-name"
                    type="text"
                    label="● Mission Name"
                    placeholder="Enter mission name"
                    isRequired={true}
                    error={inputError.missionName?.message}
                    {...register("missionName")}
                  />

                  <Input
                    id="rocket"
                    type="text"
                    defaultValue={"Explorer IS1"}
                    label="● Rocket System"
                    error={inputError.rocket?.message}
                    {...register("rocket")}
                  />

                  <Selector
                    id="destination-exoplanet"
                    label="● Destination Exoplanet"
                    isRequired={true}
                    error={inputError.target?.message}
                    {...register("target")}
                  >
                    <option value="">Select a planet</option>
                    <option value="exoplanet">Exoplanet</option>
                    <option value="test">Test</option>
                  </Selector>

                  <Selector
                    id="mission-type"
                    label="● Mission type"
                    isRequired={true}
                    error={inputError.missionType?.message}
                    {...register("missionType")}
                  >
                    <option value="">Select a type</option>

                    {missionTypeValues.map((mission) => (
                      <option key={mission.value} value={mission.value}>
                        {mission.label}
                      </option>
                    ))}
                  </Selector>

                  <Input
                    id="start-mission-date"
                    type="date"
                    label="● Start Mission Date"
                    isRequired={true}
                    error={inputError.startDate?.message}
                    {...register("startDate")}
                  />

                  <Input
                    id="end-mission-date"
                    type="date"
                    label="● End Mission Date"
                    isRequired={true}
                    error={inputError.endDate?.message}
                    {...register("endDate")}
                  />

                  <TextArea
                    id="mission-description"
                    wrapperClassName="sm:col-span-2"
                    textAreaClassName="w-full"
                    label="● Mission Description"
                    variant="basic"
                    size="md"
                    isRequired={true}
                    error={inputError.description?.message}
                    {...register("description")}
                  />
                </div>

                <Divider />

                {/* Warning  + Button*/}
                <div className="flex w-full max-md:flex-col gap-4 justify-between">
                  <p className="text-xs max-w-[15rem] text-cyan-muted">
                    All fields marked{" "}
                    <span className="text-orange-300 px-1 font-mono tracking-tighter">
                      REQ
                    </span>{" "}
                    are mandatory. Mission will be queued for director
                    authorization upon submission.
                  </p>

                  <div className="flex max-sm:flex-col max-md:w-full gap-4">
                    <Button
                      className="w-full md:w-[10rem] py-2 gap-2"
                      variant="ghost"
                      onClick={() => reset()}
                    >
                      Clear Form <RotateCcwIcon className="size-4" />
                    </Button>

                    <Button
                      className="w-full md:w-[14rem] py-2 gap-2"
                      variant="success"
                      type="submit"
                    >
                      Launch Mission <Check className="size-4" />
                    </Button>
                  </div>
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
      {formData && (
        <DialogCard
          className="max-w-md"
          open={openDialog}
          onClose={() => setOpenDialog(false)}
          variant="success"
          iconBadge={<Rocket />}
          title="Launch a Mission?"
          description={formData?.description}
          mission={{
            id: 1,
            startDate: formData?.startDate,
            endDate: formData?.endDate,
            name: formData?.missionName,
            rocket: formData?.rocket,
            target: formData?.target,
            status: "success",
            type: formData?.missionType,
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
      )}
    </>
  );
}
