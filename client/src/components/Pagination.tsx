import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./ui";

export type PaginationProps = {
  page: number;
  totalPages: number;
  onChange: () => void;
};

export function Pagination({ page, totalPages, onChange }: PaginationProps) {
  return (
    <div className="flex items-center gap-1 text-base">
      <Button
        className="uppercase px-2"
        variant="primary"
        size="sm"
        iconLeft={<ChevronLeft className="size-4" />}
        disabled={page === 1}
      >
        Prev
      </Button>

      <Button variant="primary" size="sm">
        {page}
      </Button>

      <Button variant="primary" size="sm">
        {page + 1}
      </Button>

      <Button variant="primary" size="sm">
        {page + 2}
      </Button>

      <Button
        className="uppercase px-2"
        variant="primary"
        size="sm"
        iconRight={<ChevronRight className="size-4" />}
        disabled={page === totalPages}
      >
        Next
      </Button>
    </div>
  );
}
