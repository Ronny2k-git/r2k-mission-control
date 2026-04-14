import type { ComponentPropsWithRef } from "react";
import { twMerge } from "tailwind-merge";

export type InputProps = ComponentPropsWithRef<"input"> & {
  className?: string;
};

export function Input({ className, ...props }: InputProps) {
  return (
    <input
      className={twMerge("bg-cyan-900/40 text-white text-base pl-2", className)}
      {...props}
    />
  );
}
