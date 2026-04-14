type BorderColor =
  | "border-cyan-400"
  | "border-cyan-500"
  | "border-green-400"
  | "border-red-400";

type Size = "xs" | "sm" | "md" | "lg";

type CornerBordersProps = {
  color: BorderColor;
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
        className={`absolute -top-[2.8px] ${sizeClass} -left-[2.8px] border-t-2 border-l-2 ${color}`}
      />
      <span
        className={`absolute -top-[2.8px] ${sizeClass} -right-[2.8px] border-r-2 border-t-2 ${color}`}
      />
      <span
        className={`absolute -bottom-[2.8px] ${sizeClass} -left-[2.8px] border-b-2 border-l-2 ${color}`}
      />
      <span
        className={`absolute -bottom-[2.8px] ${sizeClass} -right-[2.8px] border-b-2 border-r-2 ${color}`}
      />
    </>
  );
}
