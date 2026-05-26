import type { InputHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

type CheckboxVariant = "basic" | "error";

type CheckboxOption = {
  label: string;
  value: string;
};

export type CheckboxGroupProps = {
  label?: string;
  isRequired?: boolean;
  variant?: CheckboxVariant;
  error?: string;
  options: CheckboxOption[];
  wrapperClassName?: string;
  checkboxClassName?: string;
} & Omit<InputHTMLAttributes<HTMLInputElement>, "type">;

const variantStyles: Record<CheckboxVariant, string> = {
  basic: `
    border-bg-border
    accent-cyber-cyan-text
  `,
  error: `
    border-red-500
    accent-red-500
  `,
};

export function CheckboxGroup({
  label,
  isRequired,
  variant = "basic",
  error,
  options,
  wrapperClassName,
  checkboxClassName,
  ...props
}: CheckboxGroupProps) {
  const effectiveVariant = error ? "error" : variant;

  return (
    <div className={twMerge("flex flex-col gap-3 ", wrapperClassName)}>
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

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 whitespace-nowrap">
        {options.map((option) => (
          <label
            key={option.value}
            className="flex items-center gap-3 cursor-pointer"
          >
            <input
              type="checkbox"
              value={option.value}
              className={twMerge(
                `size-4 rounded-sm bg-input-color border cursor-pointer `,
                variantStyles[effectiveVariant],
                checkboxClassName,
              )}
              {...props}
            />

            <span className="text-sm text-white-light">{option.label}</span>
          </label>
        ))}
      </div>

      {error && <span className="pl-2 text-sm text-red-400/90">{error}</span>}
    </div>
  );
}
