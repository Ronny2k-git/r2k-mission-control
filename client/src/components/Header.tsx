import { useLocation } from "react-router-dom";
import { headerNavigation } from "../consts";
import { useClickFeedback } from "../hooks";
import { Clock } from "./Clock";
import { NavItem } from "./NavItem";

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
      className="flex md:justify-between items-center max-md:flex-col h-44 md:h-20 w-full max-md:py-2 
       border-b border-bg-border px-4 gap-4"
    >
      {/* Content */}
      <div className="flex h-full items-center w-full max-md:flex-col max-md:gap-4">
        <div className="flex items-center gap-4 h-full">
          <img src={"/favicon.png"} className="size-12" alt="website-logo" />

          <div className="h-full flex flex-col justify-center md:pr-4 md:border-r-2 border-bg-border ">
            <span className="text-cyber-cyan-text text-2xl font-heading font-extrabold">
              NASA
            </span>
            <span className="text-xs text-cyan-muted uppercase font-semibold whitespace-nowrap">
              Mission Control
            </span>
          </div>
        </div>

        {/* Mobile Nav */}
        <nav className="flex md:hidden h-full">
          {headerNavigation.map((item, i) => {
            return (
              <NavItem
                key={`navigation_bar_${i}`}
                index={i}
                item={item}
                variant="mobile"
                isActive={location.pathname === item.nav}
                onClick={handleClick}
              />
            );
          })}
        </nav>

        {/* Desktop Nav */}
        <nav className="flex max-md:hidden h-full ">
          {headerNavigation.map((item, i) => {
            return (
              <NavItem
                key={`navigation_bar_${i}`}
                index={i}
                item={item}
                variant="desktop"
                isActive={location.pathname === item.nav}
                onClick={handleClick}
              />
            );
          })}
        </nav>
      </div>

      <div className="flex items-center gap-4 lg:gap-6 text-cyan-muted whitespace-nowrap">
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
    </header>
  );
}
