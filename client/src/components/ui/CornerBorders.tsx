export type BorderColors =
  | "border-cyber-cyan-text"
  | "border-green-500"
  | "border-red-500"
  | "border-orange-300";

type Size = "xs" | "sm" | "md" | "lg";

type CornerBordersProps = {
  color: BorderColors;
  size: Size;
};

const sizeMap = {
  xs: "h-2 w-2",
  sm: "h-4 w-4",
  md: "h-6 w-6",
  lg: "h-8 w-8",
};

export function CornerBorders({ color, size = "md" }: CornerBordersProps) {
  const sizeClass = sizeMap[size];

  return (
    <>
      <span
        className={`absolute z-1 top-0 ${sizeClass} left-0 border-t-2 border-l-2 ${color}`}
      />

      <span
        className={`absolute z-1 -bottom-0 ${sizeClass} right-0 border-b-2 border-r-2 ${color}`}
      />
    </>
  );
}
