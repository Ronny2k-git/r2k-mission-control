import type { ComponentPropsWithRef, ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import { CornerBorders } from "./CornerBorders";

export type ButtonProps = ComponentPropsWithRef<"button"> & {
  className?: string;
  children: ReactNode;
};

export function Button({ className, children, ...props }: ButtonProps) {
  return (
    <button
      className={twMerge(
        `flex relative px-4 py-2 items-center justify-center border border-green-400 text-green-400 bg-green-400/5
         font-semibold cursor-pointer`,
        className,
      )}
      {...props}
    >
      {/* Buttons border edges*/}
      <CornerBorders color="border-green-400" size="xs" />

      {children}
    </button>
  );
}
