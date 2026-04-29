import { zodResolver } from "@hookform/resolvers/zod";
import { CornerUpLeft, X } from "lucide-react";
import { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { CountdownClock, PageHeader } from "../components/global";
import { MissionInfoCard } from "../components/missions";
import { MissionTableSection } from "../components/missions/MissionTableSection";
import { Button, DialogCard, TextArea } from "../components/ui";
import { missions, upcomingInfoCards, type UpcomingData } from "../consts";
import { useClickFeedback, useSearchMissions } from "../hooks";
import { useToast } from "../hooks/useToast";
import { upcomingSchema, type UpcomingFormData } from "../schemas";
import type { Mission } from "../types";
import { scrollToId } from "../utils";

export default function Missions() {
  const [livePage, setLivePage] = useState(1);
  const [upcomingPage, setUpcomingPage] = useState(1);
  const [openDialog, setOpenDialog] = useState(false);
  const { showToast } = useToast();
  const [selectedMission, setSelectedMission] = useState<Mission>();

  const liveMissions = useMemo(() => {
    return missions.filter((m) => m.status === "running");
  }, []);

  const scheduledMissions = useMemo(() => {
    return missions.filter((m) => m.status === "upcoming");
  }, []);

  // Filter live and upcoming missions
  const {
    searchedMissions: searchedLive,
    search: searchLive,
    setSearch: setSearchLive,
  } = useSearchMissions(liveMissions);

  const {
    searchedMissions: searchedUpcoming,
    search: searchUpcoming,
    setSearch: setSearchUpcoming,
  } = useSearchMissions(scheduledMissions);

  const { register, handleSubmit, formState, reset, resetField } =
    useForm<UpcomingFormData>({
      resolver: zodResolver(upcomingSchema),
    });

  const { trigger: audioTrigger } = useClickFeedback({
    audioPath: "/sound/abort.mp3",
    duration: 100,
  });

  const navigate = useNavigate();

  // Function used to abort a selected mission.
  const onSubmit = () => {
    audioTrigger();

    showToast({
      id: selectedMission!.id,
      name: selectedMission!.name,
      target: selectedMission!.target,
      startDate: selectedMission!.startDate,
      status: "aborted",
    });

    setOpenDialog(false);

    // clean the description field
    reset();
  };

  const infoUpcomingCardData: UpcomingData = {
    launchedMissions: 10,
    nextMission: <CountdownClock targetDate={"2026-5-27"} />,
    rocketsReady: 3,
    status: "Scheduling",
  };

  // TO DO LIST:

  // 1 FILTER THE MISSIONS ON THE "MISSIONS PAGE" USING "getMissionStatus" FUNCTION
  // AND AVOID FILTERING USING STATUS DIRECTLY.

  // 1 FIND OUT A WAY TO UPDATE THE URL WHEN THE USER PAGINATE OR
  // FILTER SOMETHING.

  return (
    <>
      <div className="flex flex-col w-full gap-12 pb-8">
        {/* Info Cards */}
        <div className="md:flex grid grid-cols-2">
          {upcomingInfoCards.map((item, i) => (
            <MissionInfoCard
              key={i}
              title={item.title}
              text={infoUpcomingCardData[item.key]}
              textColor={item.textColor}
              variant={item.variant}
            />
          ))}
        </div>

        <div className="flex flex-col w-full px-4 md:px-8 gap-16 max-w-5xl mx-auto">
          <PageHeader
            tag="// MOD-7 · Mission Operations Division"
            title="Mission"
            highlight="Control"
            description="Monitor live, scheduled and historical space missions."
          />

          <div className="flex flex-col w-full gap-30">
            {/* Live Missions */}
            <MissionTableSection
              titleId="live-missions-table"
              title="Live Missions"
              missions={searchedLive}
              search={searchLive}
              onSearch={setSearchLive}
              page={livePage}
              totalPages={11}
              onPageChange={(p) => {
                setLivePage(p);
                requestAnimationFrame(() => scrollToId("live-missions-table"));
              }}
              variant="live"
              onAbort={(mission) => {
                setSelectedMission(mission);
                setOpenDialog(true);
              }}
              emptyVariant="green"
              navigateOnEmpty={() => navigate("/")}
            />

            {/* Scheduled Missions */}
            <MissionTableSection
              titleId="scheduled-missions-table"
              title="Scheduled Missions"
              missions={searchedUpcoming}
              search={searchUpcoming}
              onSearch={setSearchUpcoming}
              page={upcomingPage}
              totalPages={11}
              variant="scheduled"
              onPageChange={(p) => {
                setUpcomingPage(p);
                requestAnimationFrame(() =>
                  scrollToId("scheduled-missions-table"),
                );
              }}
              onAbort={(mission) => {
                setSelectedMission(mission);
                setOpenDialog(true);
              }}
              emptyVariant="orange"
              navigateOnEmpty={() => navigate("/")}
            />
          </div>
        </div>
      </div>

      {/* Dialog card */}
      {selectedMission && (
        <DialogCard
          className="max-w-md"
          open={openDialog}
          onClose={() => {
            setOpenDialog(false);
            resetField("abortDescription");
          }}
          variant="warning"
          iconBadge={<X />}
          title="Abort Mission ?"
          mission={selectedMission}
          actions={
            <div className="w-full flex gap-2 justify-center">
              <Button
                className="w-full text-sm"
                variant="neutral"
                size={"lg"}
                iconLeft={<X className="size-4" />}
                onClick={() => {
                  setOpenDialog(false);
                  resetField("abortDescription");
                }}
              >
                Cancel
              </Button>

              <Button
                className="w-full text-sm"
                variant="warning"
                iconLeft={<CornerUpLeft className="size-4" />}
                onClick={handleSubmit(onSubmit)}
              >
                Abort
              </Button>
            </div>
          }
          extraContent={
            <TextArea
              aria-label="abort-mission-reason"
              placeholder="Enter abort reason..."
              variant="warn"
              size="md"
              wrapperClassName="w-full"
              error={formState.errors.abortDescription?.message}
              {...register("abortDescription")}
            />
          }
        />
      )}
    </>
  );
}
