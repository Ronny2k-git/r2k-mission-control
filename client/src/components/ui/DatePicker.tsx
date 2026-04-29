import { format } from "date-fns";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { DayPicker } from "react-day-picker";
import { twMerge } from "tailwind-merge";
type DatePickerVariant = "basic" | "warn" | "error";
export type DatePickerProps = {
  label?: string;
  isRequired?: boolean;
  value?: Date;
  onChange?: (date: Date | undefined) => void;
  error?: string;
  variant?: DatePickerVariant;
  wrapperClassName?: string;
  className?: string;
};
const variantStyles: Record<DatePickerVariant, string> = {
  basic: "border-bg-border focus-within:border-cyber-cyan-text",
  warn: "border-red-500/70 focus-within:border-red-500",
  error: "shadow-error-glow border-0",
};
export function DatePicker({
  label,
  isRequired,
  value,
  onChange,
  error,
  variant = "basic",
  wrapperClassName,
  className,
}: DatePickerProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const effectiveVariant = error ? "error" : variant;
  const formattedDate = value ? format(value, "dd/MM/yyyy") : "";

  // Close the calendar when click outside
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div
      className={twMerge("flex flex-col gap-2 text-[15px]", wrapperClassName)}
      ref={ref}
    >
      {/* Label */}
      {(label || isRequired) && (
        <div className="flex items-center gap-2">
          {label && (
            <span className="text-[13px] text-cyan-text-light uppercase font-mono tracking-widest">
              {label}
            </span>
          )}
          {isRequired && (
            <strong className="text-[11px] text-orange-300 font-mono tracking-tighter">
              REQ
            </strong>
          )}
        </div>
      )}
      <div className="relative">
        {/* Fake input */}
        <div
          onClick={() => setOpen((prev) => !prev)}
          className={twMerge(
            "bg-input-color border h-10 flex items-center px-2 text-white cursor-pointer",
            variantStyles[effectiveVariant],
            className,
          )}
        >
          {formattedDate || <span className="text-cyan-muted">dd/mm/yyyy</span>}
        </div>

        {/* Calendar */}
        {open && (
          <div className="absolute z-50 mt-2 right-0">
            <div className="bg-card-background border-2 border-cyan-950 rounded-md p-3">
              <DayPicker
                mode="single"
                selected={value}
                onSelect={(date) => {
                  onChange?.(date);
                  setOpen(false);
                }}
                startMonth={new Date(2024, 0)}
                endMonth={new Date(2035, 0)}
                className="text-white"
                classNames={{
                  root: "rdp",
                  caption: "rdp-caption",
                  caption_label: "rdp-caption",
                  day: "rdp-day",
                  day_button: "rdp-day_button",
                  day_today: "rdp-day_today",
                  day_selected: "rdp-day_selected",
                }}
                components={{
                  PreviousMonthButton: (props) => (
                    <button {...props} className="rdp-nav_button">
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                  ),
                  NextMonthButton: (props) => (
                    <button {...props} className="rdp-nav_button">
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  ),
                }}
              />
            </div>
          </div>
        )}
      </div>

      {/* Error */}
      {error && <span className="text-sm text-red-400 pl-2">{error}</span>}
    </div>
  );
}
