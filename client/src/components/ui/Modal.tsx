import type { ComponentPropsWithRef } from "react";
import { twMerge } from "tailwind-merge";
import { Card } from "./Card";

type ModalProps = ComponentPropsWithRef<"div"> & {
  className?: string;
  children: React.ReactNode;
};

export function Modal({ className, children, ...props }: ModalProps) {
  return (
    <Card className={twMerge("", className)} {...props}>
      {children}
    </Card>
  );
}
