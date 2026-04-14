import { Card, Input, Selector } from "../components";

export default function Launch() {
  return (
    <main className="flex w-full h-full justify-center p-8">
      <div className="w-full max-w-3xl text-description">
        <Card>
          <h1>
            Schedule a mission launch for interstellar travel to one of the
            Kepler Exoplanets.
          </h1>

          <h2>
            Only confirmed planets matching the following criteria are available
            for the earliest scheduled missions:
          </h2>

          <ul className="list-disc pl-10 marker:text-2xl">
            <li>Planetary radius &lt; 1.6 times Earth's radius</li>
            <li>
              Effective stellar flux &gt; 0.36 times Earth's value and &lt; 1.11
              times Earth's value
            </li>
          </ul>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <span>Launch Date</span>

            <Input className="sm:w-50 h-8 " type="date" />

            <span>Mission Name</span>
            <Input className="sm:w-50 h-8 " type="text" />

            <span>Rocket Type</span>
            <Input
              className="sm:w-50 h-8 "
              type="text"
              defaultValue={"Explorer IS1"}
            />

            <span>Destination Exoplanet</span>
            <Selector className="sm:w-50 h-8">
              <option value="">Exoplanets</option>
              <option value="">Test</option>
            </Selector>
            <input />
          </div>
        </Card>
      </div>
    </main>
  );
}
