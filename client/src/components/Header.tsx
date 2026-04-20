import { History, Rocket, Timer } from "lucide-react";
import { useLocation } from "react-router-dom";
import { useClickFeedback } from "../hooks";
import { Clock } from "./Clock";

const headerNavigation = [
  { nav: "/", icon: Rocket, label: "Launch" },
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
      className="w-full h-auto max-md:p-4 md:h-20 max-md:gap-4 flex max-md:flex-wrap items-center justify-center
       border-b border-bg-border"
    >
      <img src={"/favicon.png"} className="size-12" alt="website-logo" />

      <div className="h-full flex flex-col justify-center leading-8 md:px-4 mr-2 md:border-r-2 border-bg-border ">
        <span className="text-cyber-cyan-text text-3xl font-heading font-extrabold">
          NASA
        </span>
        <span className="text-xs text-cyan-muted uppercase font-semibold whitespace-nowrap">
          Mission Control
        </span>
      </div>

      <nav className="flex h-full justify-center font-semi text-cyan-muted">
        {headerNavigation.map((item, i) => {
          const currentActiveNav = location.pathname === item.nav;

          return (
            <div
              key={`nav_bar_${i}`}
              className="flex gap-2 text-xs uppercase font-semibold font-heading hover:text-cyber-cyan-text"
            >
              <a
                href={item.nav}
                aria-label="website-navigation"
                onClick={(e) => handleClick(i, item.nav, e)}
                className={`flex items-center justify-center gap-2 max-md:px-2 md:w-[8rem] max-md:h-13
                ${currentActiveNav && "bg-cyan-950/35 border-b-2 border-b-cyber-cyan-text text-cyber-cyan-text"}`}
              >
                {item.icon && <item.icon className="w-5 h-5" />}
                {item.label}
              </a>
            </div>
          );
        })}
      </nav>

      <div className="flex items-center w-[11rem] md:border-x ml-2 border-x-bg-border -tracking-wider">
        <div className="flex justify-between w-full p-2 md:p-5 text-cyan-muted ">
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
