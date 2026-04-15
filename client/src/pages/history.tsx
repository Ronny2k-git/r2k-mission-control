import { Card } from "../ui/components";

export default function History() {
  return (
    <div className="flex w-full h-full justify-center px-4 py-8 sm:px-8">
      <div className="w-full max-w-3xl text-base sm:text-description">
        <Card className="sm:gap-6 text-cyber-cyan-text">
          <h1>
            History of mission launches including SpaceX launches starting from
            the year 2006.
          </h1>

          <table className="w-full text-base text-cyan-text-light mb-8">
            <thead className="border-b border-cyber-cyan">
              <tr>
                <th>No.</th>
                <th>Date</th>
                <th>Mission</th>
                <th>Rocket</th>
                <th>Customers</th>
              </tr>
            </thead>

            <tbody>
              <tr></tr>
            </tbody>
          </table>
        </Card>
      </div>
    </div>
  );
}
