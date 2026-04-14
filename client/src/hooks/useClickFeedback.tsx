import { useRef, useState } from "react";

export type useClickFeedbackProps = {
  duration?: number;
  audioPath: string;
};

export function useClickFeedback({
  audioPath,
  duration = 100,
}: useClickFeedbackProps) {
  const [active, setActive] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const soundRef = useRef(new Audio(audioPath));

  const playSound = () => {
    soundRef.current.currentTime = 0;
    soundRef.current
      .play()
      .catch((e) => console.error("Error playing sound", e));
  };

  // Simple function
  const trigger = () => {
    setActive(true);

    playSound();

    setTimeout(() => {
      setActive(false);
    }, duration ?? 100);
  };

  // Function used for lists
  const triggerIndex = (index: number) => {
    setActiveIndex(index);

    playSound();

    setTimeout(() => {
      setActiveIndex(null);
    }, duration ?? 100);
  };

  return { active, activeIndex, trigger, triggerIndex };
}
