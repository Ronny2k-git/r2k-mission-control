import type { ComponentPropsWithRef, ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import { Button, type ButtonVariant } from "./Button";
import { Card, type CardVariants } from "./Card";
import { Portal } from "./Portal";

export type ModalProps = ComponentPropsWithRef<"div"> & {
  className?: string;
  variant?: CardVariants;
  open: boolean;
  onClose: () => void;
  children: ReactNode;
};

const buttonVariantMap: Record<CardVariants, ButtonVariant> = {
  primary: "primary",
  secondary: "primary",
  glow: "primary",
  warning: "warning",
  success: "success",
  waiting: "waiting",
};

export function Modal({
  variant = "primary",
  open,
  onClose,
  children,
  className,
  ...props
}: ModalProps) {
  return open ? (
    <Portal>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50"
        onClick={onClose}
      />

      <Card
        role="dialog"
        aria-modal="true"
        variant={variant}
        className={twMerge(
          "w-[calc(100%-1.5rem)] gap-4 fixed z-50 p-4 top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 ",
          className,
        )}
        onClick={(e) => e.stopPropagation()}
        {...props}
      >
        {/* Close modal */}
        <Button
          className="absolute size-8 top-4 right-4"
          variant={buttonVariantMap[variant]}
          onClick={onClose}
        >
          X
        </Button>

        {children}
      </Card>
    </Portal>
  ) : null;
}
