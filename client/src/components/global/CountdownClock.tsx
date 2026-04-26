import { useEffect, useState } from "react";
import { energyVariants, type EnergyVariant } from "../../consts";

export type CountdownProps = {
  className?: string;
  targetDate: string | number | Date;
  variant?: EnergyVariant;
};

export function CountdownClock({
  targetDate,
  variant = "cyan",
}: CountdownProps) {
  const [now, setNow] = useState(new Date());

  const textColor = energyVariants[variant].text;
  const date = new Date(targetDate);
  const diffMs = date.getTime() - now.getTime();
  const diffSeconds = Math.max(0, Math.floor(diffMs / 1000));

  const seconds = diffSeconds % 60;
  const minutes = Math.floor(diffSeconds / 60) % 60;
  const hours = Math.floor(diffSeconds / 3600) % 24;
  const days = Math.floor(diffSeconds / 86400);

  const twoDigits = (n: number) => String(n).padStart(2, "0");

  useEffect(() => {
    const interval = setInterval(() => {
      setNow(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={`flex gap-1 font-heading text-base sm:text-xl font-bold ${textColor}`}
    >
      {days > 0 && <span>{twoDigits(days)}:</span>}
      <span>{twoDigits(hours)}:</span>
      <span>{twoDigits(minutes)}:</span>
      <span>{twoDigits(seconds)}</span>
    </div>
  );
}
