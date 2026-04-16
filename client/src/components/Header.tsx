import { CheckCircle, History, Timer } from "lucide-react";
import { useLocation } from "react-router-dom";
import { useClickFeedback } from "../hooks";
import { Clock } from "./Clock";

const headerNavigation = [
  { nav: "/", icon: CheckCircle, label: "Launch" },
  { nav: "/upcoming", icon: Timer, label: "Upcoming" },
  { nav: "/history", icon: History, label: "History" },
];

export function Header() {
  const { triggerIndex } = useClickFeedback({
    audioPath: "/sound/click.mp3",
    duration: 100,
  });
  const location = useLocation();

  // Animate navigation and play a sound when clicked.
  const handleClick = (index: number, nav: string, e: React.MouseEvent) => {
    e.preventDefault();

    triggerIndex(index);

    setTimeout(() => {
      window.location.href = nav;
    }, 100);
  };

  return (
    <header
      className="w-full h-auto max-md:p-4 md:h-20 max-md:gap-4 flex flex-wrap items-center justify-center border-b-3 border-cyber-cyan
       bg-light-background/70"
    >
      <img src={"/favicon.png"} className="size-12" />

      <div className="flex flex-col leading-8 md:px-4">
        <span className="text-cyber-cyan-text text-3xl font-heading">NASA</span>
        <span className="text-xs text-cyan-muted uppercase font-semibold">
          Mission Control
        </span>
      </div>

      <nav className="flex h-full justify-center font-semi text-cyan-text-light/70">
        {headerNavigation.map((item, i) => {
          const currentActiveNav = location.pathname === item.nav;

          return (
            <div className="flex gap-2 text-sm uppercase font-semibold -tracking-wider">
              <a
                key={i}
                href={item.nav}
                onClick={(e) => handleClick(i, item.nav, e)}
                className={`flex items-center justify-center gap-2 max-md:px-2 md:w-[8rem] max-md:h-13 border-x border-cyan-900/40 
                  ${currentActiveNav && "bg-cyan-950/35 border-t-3 border-t-cyan-600"}`}
              >
                {item.icon && <item.icon className="w-5 h-5" />}
                {item.label}
              </a>
            </div>
          );
        })}
      </nav>

      <div className="flex items-center w-[11rem] border-x border-x-cyan-900/40 -tracking-wider">
        <div className="flex justify-between w-full p-2 md:p-6 text-cyan-muted ">
          {/* System status */}
          <div className="flex flex-col text-xs">
            <span className="uppercase">system</span>
            <p className="flex items-center gap-1 text-cyber-cyan-text font-semibold">
              <span className="animate-pulse text-green-600">●</span> Nominal
            </p>
          </div>

          {/* Time */}
          <div className="flex flex-col text-xs ">
            <span className="uppercase">UTC</span>
            <Clock />
          </div>
        </div>
      </div>
    </header>
  );
}
