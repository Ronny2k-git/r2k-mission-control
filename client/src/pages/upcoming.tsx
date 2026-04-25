import { CornerUpLeft, X } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  CountdownClock,
  EmptyBanner,
  Pagination,
  SectionLabel,
} from "../components/global";
import { MissionInfoCard, MissionRowCard } from "../components/missions";
import { Button, Card, DialogCard, Divider, Input } from "../components/ui";
import { upcomingInfoCards, type UpcomingData } from "../consts";
import { useClickFeedback, useSearchMissions } from "../hooks";
import { useToast } from "../hooks/useToast";
import type { Mission } from "../types";
import { scrollToId } from "../utils";

export default function Upcoming() {
  const [page, setPage] = useState(1);
  const [openDialog, setOpenDialog] = useState(false);
  const { showToast } = useToast();

  const [selectedMission, setSelectedMission] = useState<Mission>();
  const { searchedMissions, search, setSearch } = useSearchMissions();

  const { trigger: audioTrigger } = useClickFeedback({
    audioPath: "/sound/abort.mp3",
    duration: 100,
  });

  const navigate = useNavigate();

  // Function used to abort a selected mission.
  const handleAbortMission = (e: React.MouseEvent) => {
    e.preventDefault();
    audioTrigger();

    showToast({
      id: selectedMission!.id,
      name: selectedMission!.name,
      target: selectedMission!.target,
      date: selectedMission!.date,
      status: "aborted",
    });

    setOpenDialog(false);
  };

  const infoUpcomingCardData: UpcomingData = {
    launchedMissions: 10,
    nextMission: <CountdownClock targetDate={"2026-4-28"} />,
    rocketsReady: 3,
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

        <section className="flex flex-col w-full max-w-5xl mx-auto text-base sm:text-lg gap-8 px-4 md:px-8">
          {/* Title */}
          <h1
            id="upcoming_page_title"
            className="font-extrabold text-white text-2xl sm:text-4xl font-heading leading-10"
          >
            Upcoming <span className="text-cyber-cyan-text">Missions</span>
          </h1>

          <Divider type="thick" />

          <div className="flex flex-col w-full gap-4">
            <Card className="text-cyber-cyan-text">
              <div className="flex max-sm:flex-col items-center gap-4 p-4 sm:p-6">
                <SectionLabel>Launch Schedule</SectionLabel>

                <Input
                  value={search}
                  inputClassName="h-9"
                  wrapperClassName="w-full"
                  placeholder="Search mission, rocket, destination..."
                  onChange={(e) => setSearch(e.target.value)}
                />

                <div className="flex justify-center max-sm:w-full p-2 text-red-500/80 border border-red-500/50 bg-red-500/10">
                  <h3 className="font-heading font-semibold whitespace-nowrap text-xs">
                    X Abort the Mission
                  </h3>
                </div>
              </div>

              {/* Table */}
              <div className="w-full flex flex-col justify-center overflow-y-auto max-md:pb-2">
                <table className="w-full text-base text-cyan-text-light min-w-[43.5rem]">
                  <thead className="bg-secondary-card border-y text-cyber-cyan-text border-bg-border">
                    <tr>
                      <th className="p-3">Launch Date</th>
                      <th>Mission</th>
                      <th>Rocket</th>
                      <th>Destination</th>
                      <th>Abort</th>
                    </tr>
                  </thead>

                  <tbody>
                    {searchedMissions.length > 0 &&
                      searchedMissions.map((item, i) => (
                        <MissionRowCard
                          key={i}
                          id={item.id}
                          date={item.date}
                          name={item.name}
                          rocket={item.rocket}
                          target={item.target}
                          status="upcoming"
                          onAbort={(mission) => {
                            setSelectedMission(mission);
                            setOpenDialog(true);
                          }}
                        />
                      ))}
                  </tbody>
                </table>
              </div>

              {/* Display this banner when the table is empty */}
              {searchedMissions.length === 0 && (
                <div className="flex flex-col gap-6 m-4 sm:m-6">
                  <EmptyBanner
                    key="upcoming-empty-banner"
                    variant="orange"
                    primaryActionVariant="ghost"
                    secondaryActionVariant="waiting"
                    onPrimaryAction={() => setSearch("")}
                    onSecondaryAction={() => {
                      navigate("/");
                    }}
                  />

                  <Divider type="line" />
                </div>
              )}

              {/* Total mission + Paginantion */}
              <div className="flex bg-secondary-card h-16 sm:h-12 sm:px-6 gap-2 items-center justify-center sm:justify-between">
                <span className="hidden sm:block text-xs">
                  Showing {searchedMissions.length} missions
                </span>

                <Pagination
                  page={page}
                  totalPages={11}
                  onChange={(newPage) => {
                    setPage(newPage);
                    requestAnimationFrame(() =>
                      scrollToId("upcoming_page_title"),
                    );
                  }}
                />
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
      {selectedMission && (
        <DialogCard
          className="max-w-md"
          open={openDialog}
          onClose={() => setOpenDialog(false)}
          variant="warning"
          iconBadge={<X />}
          title="Abort Mission ?"
          description="This action will immediately halt all systems and terminate the
            mission sequence. This operation cannot be undone."
          mission={selectedMission}
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
                variant="warning"
                iconLeft={<CornerUpLeft className="size-4" />}
                onClick={(e) => handleAbortMission(e)}
              >
                Abort
              </Button>
            </div>
          }
        />
      )}
    </>
  );
}
