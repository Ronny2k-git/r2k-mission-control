export const energyVariants = {
  cyan: {
    text: "text-cyber-cyan-text",
    badge: "bg-secondary-card border-cyber-cyan-text",
  },
  orange: {
    text: "text-orange-300",
    badge: "bg-orange-300/10 border-orange-300",
  },
  green: {
    text: "text-green-500",
    badge: "bg-green-500/10 border-green-500",
  },
  red: {
    text: "text-red-500/85",
    badge: "bg-red-500/10 border-red-500",
  },
} as const;

export type EnergyVariant = keyof typeof energyVariants;
