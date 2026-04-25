import { useEffect, useState } from "react";

export type CountdownProps = {
  className?: string;
  targetDate: string | number | Date;
};

export function CountdownClock({ targetDate }: CountdownProps) {
  const [now, setNow] = useState(new Date());

  const date = new Date(targetDate);
  const diffMs = date.getTime() - now.getTime();

  const seconds = Math.floor(diffMs / 1000) % 60;
  const minutes = Math.floor(diffMs / (1000 * 60)) % 60;
  const hours = Math.floor(diffMs / (1000 * 60 * 60)) % 24;
  const days = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  const twoDigits = (n: number) => String(n).padStart(2, "0");

  useEffect(() => {
    const interval = setInterval(() => {
      setNow(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex gap-1 font-heading text-xl font-bold text-cyber-cyan-text">
      {days > 0 && <span>{twoDigits(days)}:</span>}
      <span>{twoDigits(hours)}:</span>
      <span>{twoDigits(minutes)}:</span>
      <span>{twoDigits(seconds)}</span>
    </div>
  );
}
