import { useNavigate } from "react-router-dom";
import { headerNavigation } from "../../../consts";
import { useClickFeedback } from "../../../hooks";
import { Clock } from "../../Clock";
import { Logo } from "../Logo";
import { NavItem } from "./NavItem";

export function Header() {
  const { triggerIndex } = useClickFeedback({
    audioPath: "/sound/click.mp3",
    duration: 100,
  });
  const navigate = useNavigate();

  // Animate navigation and play a sound when clicked.
  const handleClick = (index: number, nav: string, e: React.MouseEvent) => {
    e.preventDefault();

    triggerIndex(index);

    setTimeout(() => {
      navigate(nav);
    }, 100);
  };

  return (
    <header className="flex justify-between items-center h-32 md:h-20 border-b border-bg-border md:px-4 gap-4">
      <div className="flex h-full max-md:flex-col max-md:w-full">
        {/* Logo and Name */}
        <div className="flex h-full w-full items-center p-2 gap-4 border-b border-b-bg-border ">
          <Logo />

          <div className="h-full flex flex-col justify-center md:pr-4 md:border-r-2 border-bg-border">
            <span className="text-cyber-cyan-text text-2xl font-heading font-black">
              R2K
            </span>

            <span className="text-sm text-cyan-muted font-body uppercase whitespace-nowrap">
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

      {/* Additional infos */}
      <div className="hidden md:flex items-center gap-4 lg:gap-6 text-cyan-muted whitespace-nowrap">
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
