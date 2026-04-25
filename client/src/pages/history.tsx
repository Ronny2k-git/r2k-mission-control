import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { EmptyBanner, Pagination, SectionLabel } from "../components/global";
import {
  MissionInfoCard,
  MissionRowCard,
  MissionStatusBar,
} from "../components/missions";
import { Button, Card, Divider, Input } from "../components/ui";
import { filters, historyInfoCards, type HistoryData } from "../consts";
import { useFilterMissions, useSearchMissions } from "../hooks";

export default function History() {
  const [page, setPage] = useState(1);

  const { searchedMissions, search, setSearch } = useSearchMissions();
  const { filteredMissions, filter, setFilter } =
    useFilterMissions(searchedMissions);

  const navigate = useNavigate();

  const infoHistoryCardData: HistoryData = {
    totalLaunches: 20,
    successfull: 85,
    firstLaunch: "2006",
    status: "Verified",
  };

  // TO DO LIST:

  // 1 CREATE A COUNTDOWN COMPONENT.

  // 2 IMPLEMENT THE ERROR MESSAGES IN THE INPUT COMPONENT.

  // 3 CREATE A FUNCTION TO GET ELEMENTS BY ID AND SCROLL TO TOP OF THE PAGE.

  // TO DO LATER ------------------

  // 5 FIND OUT A WAY TO UPDATE THE URL WHEN THE USER FILTERS SOMETHING.
  // IMPLEMENT WHEN THE USER STARTS A LAUNCH AND NAVIGATE TO THE UPCOMING PAGE.

  // 6 CREATE OR IMPLEMENT ANIMATIONS FOR EVERY PAGE (-Y using CSS).

  // 7 VALIDATE THE FORM USING ZOD AND REACT HOOK FORM.

  return (
    <div className="flex flex-col w-full gap-12 pb-8">
      {/* Info Cards */}
      <div className="md:flex grid grid-cols-2">
        {historyInfoCards.map((item, i) => (
          <MissionInfoCard
            key={i}
            title={item.title}
            text={infoHistoryCardData[item.key]}
            textColor={item.textColor}
          />
        ))}
      </div>

      <section className="flex flex-col w-full max-w-5xl mx-auto text-base sm:text-lg gap-8 px-4 md:px-8">
        {/* Title */}
        <h1 className="font-extrabold text-white text-2xl sm:text-4xl font-heading leading-10">
          Mission <span className="text-cyber-cyan-text">History</span>
        </h1>

        <Divider type="thick" />

        <div className="flex flex-col gap-4">
          <Card className="text-cyber-cyan-text">
            <div className="flex max-md:flex-col items-center gap-4 p-4 sm:p-6">
              <SectionLabel>Launch archive</SectionLabel>

              <Input
                value={search}
                inputClassName="h-9"
                wrapperClassName="w-full"
                placeholder="Search mission, rocket, customer..."
                onChange={(e) => setSearch(e.target.value)}
              />

              {/* Mission filters*/}
              <div className="flex gap-2">
                {filters.map((item, i) => (
                  <Button
                    key={`${item.value}_${i}`}
                    className={`text-xs uppercase gap-1 h-9`}
                    variant={filter === item.value ? item.variant : "ghost"}
                    size="lg"
                    onClick={() => setFilter(item.value)}
                  >
                    {item.icon && (
                      <item.icon className={`size-4 ${item.iconColor}`} />
                    )}
                    {item.label}
                  </Button>
                ))}
              </div>
            </div>

            {/* Table */}
            <div className="w-full flex flex-col overflow-y-auto max-md:pb-2">
              <table className="w-full text-base text-cyan-text-light min-w-[43.5rem]">
                <thead className="bg-cyan-400/5 border-y text-cyber-cyan-text border-bg-border">
                  <tr>
                    <th className="p-3">Launch Date</th>
                    <th>Mission</th>
                    <th>Rocket</th>
                    <th>Customers</th>
                    <th>Status</th>
                  </tr>
                </thead>

                {filteredMissions.length > 0 && (
                  <tbody>
                    {filteredMissions.map((item, i) => (
                      <MissionRowCard
                        key={i}
                        id={item.id}
                        date={item.date}
                        name={item.name}
                        rocket={item.rocket}
                        target={item.target}
                        status={item.status}
                      />
                    ))}
                  </tbody>
                )}
              </table>
            </div>

            {/* Display this banner when the table is empty */}
            {filteredMissions.length === 0 && (
              <div className="flex flex-col gap-6 m-4 sm:m-6">
                <EmptyBanner
                  key="history-empty-banner"
                  variant="cyan"
                  primaryActionVariant="ghost"
                  secondaryActionVariant="basic"
                  onPrimaryAction={() => {
                    setSearch("");
                    setFilter("all");
                  }}
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
                totalPages={8}
                onChange={(newPage) => setPage(newPage)}
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2">
              <MissionStatusBar
                title="Mission success rate"
                status="success"
                missions={14}
                totalMissions={20}
              />

              <MissionStatusBar
                title="Abort rate"
                status="aborted"
                missions={6}
                totalMissions={20}
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
  );
}
