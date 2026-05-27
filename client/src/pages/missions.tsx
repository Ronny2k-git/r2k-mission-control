import type { MissionSlim } from "@common/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { CornerUpLeft, X } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useSearchParams } from "react-router-dom";
import { CountdownClock, PageHeader } from "../components/global";
import { MissionInfoCard } from "../components/missions";
import { MissionTableSection } from "../components/missions/MissionTableSection";
import { Button, DialogCard, Divider, TextArea } from "../components/ui";
import { upcomingInfoCards, type UpcomingData } from "../consts";
import {
  useAbortMission,
  useClickFeedback,
  useGetMissionGroups,
  useSearchMissions,
  useUpdateQuery,
} from "../hooks";

import { rockets } from "@common/consts";
import { useToast } from "../hooks/useToast";
import { abortMissionSchema, type AbortMissionFormData } from "../schemas";
import { getNextMissionDate, scrollToId } from "../utils";

export default function Missions() {
  const [openDialog, setOpenDialog] = useState(false);
  const { showToast } = useToast();
  const [selectedMission, setSelectedMission] = useState<MissionSlim>();
  const [searchParams] = useSearchParams();
  const { liveMissions, scheduledMissions } = useGetMissionGroups();
  const { mutate } = useAbortMission();

  const navigate = useNavigate();
  const updateQuery = useUpdateQuery();

  const abortAudio = useClickFeedback("/sound/abort.mp3", 100);
  const errorAudio = useClickFeedback("/sound/warning.mp3", 100);

  // Mission form validation
  const { register, handleSubmit, formState, reset, resetField } =
    useForm<AbortMissionFormData>({
      resolver: zodResolver(abortMissionSchema),
    });

  // Used to get the query params
  const livePage = Number(searchParams.get("missions_live_page") || 1);
  const scheduledPage = Number(
    searchParams.get("missions_scheduled_page") || 1,
  );
  const searchLive = searchParams.get("missions_search_live") || "";
  const searchScheduled = searchParams.get("missions_search_scheduled") || "";

  // Filter live and scheduled missions by search
  const { searchedMissions: searchedLive } = useSearchMissions(
    liveMissions,
    searchLive,
  );

  const { searchedMissions: searchedUpcoming } = useSearchMissions(
    scheduledMissions,
    searchScheduled,
  );

  // Function used to abort a selected mission.
  const onSubmit = () => {
    if (!selectedMission) return;

    mutate(selectedMission.id);

    abortAudio.trigger();

    // Show a toast message
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

  // Used to fill into the info mission cards data
  const launchedMissions = liveMissions.length + scheduledMissions.length;
  const nextMission = getNextMissionDate(scheduledMissions, "start");

  const infoUpcomingCardData: UpcomingData = {
    launchedMissions: launchedMissions,
    nextMission: <CountdownClock targetDate={nextMission?.startDate} />,
    rocketsReady: rockets.length,
    status: "Scheduling",
  };

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

          <div className="flex flex-col gap-4">
            <div className="flex flex-col w-full gap-30">
              {/* Live Missions */}
              <MissionTableSection
                titleId="live-missions-table"
                title="Live Missions"
                missions={searchedLive}
                search={searchLive}
                onSearch={(search) =>
                  updateQuery({ missions_search_live: search })
                }
                page={livePage}
                totalPages={11}
                onPageChange={(newPage) => {
                  updateQuery({ missions_live_page: newPage });
                  requestAnimationFrame(() =>
                    scrollToId("live-missions-table"),
                  );
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
                search={searchScheduled}
                onSearch={(search) =>
                  updateQuery({ missions_search_scheduled: search })
                }
                page={scheduledPage}
                totalPages={11}
                variant="scheduled"
                onPageChange={(newPage) => {
                  updateQuery({ missions_scheduled_page: newPage });
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

            <Divider />

            <span className="text-xs max-sm:text-center font-body text-cyan-muted">
              R2K MISSION CONTROL · RESTRICTED ACCESS
            </span>
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
                onClick={handleSubmit(onSubmit, () => errorAudio.trigger())}
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
