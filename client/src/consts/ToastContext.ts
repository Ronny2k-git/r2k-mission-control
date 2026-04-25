import { createContext } from "react";
import type { ToastProps } from "../components/global/Toast";

type ToastContextType = {
  showToast: (toast: ToastProps) => void;
};

export const ToastContext = createContext<ToastContextType | null>(null);
