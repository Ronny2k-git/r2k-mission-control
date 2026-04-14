import { CheckCircle, History, Timer } from "lucide-react";
import { useClickFeedback } from "../hooks";

const headerNavigation = [
  { nav: "/", icon: CheckCircle, label: "Launch" },
  { nav: "/upcoming", icon: Timer, label: "Upcoming" },
  { nav: "/history", icon: History, label: "History" },
];

export function Header() {
  const { activeIndex, triggerIndex } = useClickFeedback({
    audioPath: "/sound/click.mp3",
    duration: 100,
  });

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
      className="w-full h-20 px-4 flex items-center gap-2 sm:gap-4 justify-center border-b-5 border-solid border-cyber-cyan
        backdrop-blur-[1px] bg-light-background"
    >
      <img src={"/favicon.png"} className="size-12" />
      <span className="max-md:hidden font-semibold text-cyber-cyan-text text-3xl tracking-tight">
        NASA Mission Control
      </span>

      <nav className="flex h-full justify-center gap-2 font-semi text-cyan-text-light">
        {headerNavigation.map((item, i) => {
          return (
            <a
              key={i}
              href={item.nav}
              onClick={(e) => handleClick(i, item.nav, e)}
              className={`flex items-center gap-2 sm:px-1 lg:px-3 text-base sm:text-xl ${activeIndex === i ? "bg-cyan-400/95" : "bg-transparent"}`}
            >
              {item.icon && <item.icon className="w-5 h-5" />}
              {item.label}
            </a>
          );
        })}
      </nav>
    </header>
  );
}
