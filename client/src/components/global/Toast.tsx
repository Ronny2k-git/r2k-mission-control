import type { Mission } from "../../types";
import { Card, type CardVariants } from "../ui";

export interface ToastProps extends Omit<Mission, "rocket"> {
  className?: string;
}

const toastVariantMap: Record<
  NonNullable<ToastProps["status"]>,
  CardVariants
> = {
  upcoming: "primary",
  success: "success",
  aborted: "warning",
};

// CALL THIS COMPONENT GLOBALLY, LIKE: <ToastProvider> <App /> </ToastProvider>

export function Toast({ name, target, date, status }: ToastProps) {
  const variant = status ? toastVariantMap[status] : "primary";

  return (
    <Card variant={variant}>
      <span>{name}</span>
    </Card>
  );
}
