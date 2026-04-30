import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "../ui";

export type PaginationProps = {
  page: number;
  totalPages: number;
  onChange: (newPage: number) => void;
};

export function Pagination({ page, totalPages, onChange }: PaginationProps) {
  return (
    <div className="flex items-center gap-1 text-base">
      <Button
        className="uppercase px-2 rounded-lg"
        variant="primary"
        size="sm"
        iconLeft={<ChevronLeft className="size-4" />}
        disabled={page === 1}
        onClick={() => onChange(page - 1)}
      >
        Prev
      </Button>

      {/* First page */}
      <Button
        className="rounded-lg"
        variant={page === 1 ? "glow" : "primary"}
        size="sm"
        onClick={() => onChange(1)}
      >
        {String(1).padStart(2, "0")}
      </Button>

      {/* Current page */}
      {page > 1 && page < totalPages && (
        <Button
          className="hidden sm:inline-flex rounded-lg"
          variant={"glow"}
          size="sm"
          onClick={() => onChange(page)}
        >
          {String(page).padStart(2, "0")}
        </Button>
      )}

      {/* Ellipsis or current page */}
      {totalPages > 2 && (
        <>
          {/* Mobile version */}
          <span className="sm:hidden px-2 text-sm border-b-3 rounded-sm font-semibold ">
            {page} / {totalPages}
          </span>

          {/* Desktop version */}
          <span className="px-1 hidden sm:inline-flex ">...</span>
        </>
      )}

      {/* Last page */}
      {totalPages > 1 && (
        <Button
          className="rounded-lg"
          variant={page === totalPages ? "glow" : "primary"}
          size="sm"
          onClick={() => onChange(totalPages)}
        >
          {String(totalPages).padStart(2, "0")}
        </Button>
      )}

      <Button
        className="uppercase px-2 rounded-lg"
        variant="primary"
        size="sm"
        iconRight={<ChevronRight className="size-4" />}
        disabled={page === totalPages}
        onClick={() => onChange(page + 1)}
      >
        Next
      </Button>
    </div>
  );
}
