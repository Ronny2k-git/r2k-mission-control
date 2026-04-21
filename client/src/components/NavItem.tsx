import { twMerge } from "tailwind-merge";
import type { headerNavigation } from "../consts";

type NavItemProps = {
  item: (typeof headerNavigation)[number];
  index: number;
  isActive: boolean;
  onClick: (index: number, nav: string, e: React.MouseEvent) => void;
  variant: "mobile" | "desktop";
};

export function NavItem({
  item,
  index,
  isActive,
  onClick,
  variant,
}: NavItemProps) {
  const styles = {
    mobile: `flex-1 flex-col text-[10px] tracking-widest ${
      isActive
        ? "text-cyber-cyan-text bg-cyan-900/40 border-t-2 border-t-cyber-cyan-text"
        : "text-cyan-muted hover:text-cyber-cyan-text"
    }`,
    desktop: `w-[8rem] text-xs ${
      isActive
        ? "text-cyber-cyan-text bg-cyan-900/40 border-b-2 border-b-cyber-cyan-text"
        : "text-cyan-muted hover:text-cyber-cyan-text"
    }`,
  };

  return (
    <a
      href={item.nav}
      aria-label="website-navigation"
      onClick={(e) => onClick(index, item.nav, e)}
      className={twMerge(
        "flex items-center justify-center font-heading gap-2 uppercase font-semibold",
        styles[variant],
      )}
    >
      {item.icon && <item.icon className="w-5 h-5" />}
      {item.label}
    </a>
  );
}
