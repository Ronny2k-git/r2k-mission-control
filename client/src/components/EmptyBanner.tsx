import { Card } from "./ui";

export function EmptyBanner() {
  return (
    <Card className="p-4" cornerBorders={false}>
      <span className="uppercase"> No data found</span>

      <p>Title</p>
    </Card>
  );
}
