import { parse } from "csv-parse";
import fs from "fs";
import { type Planet } from "../../../common/types";

interface KeplerPlanet {
  koi_disposition: string;
  koi_insol: number;
  koi_prad: number;
  kepler_name: string;
}

export const planets: Planet[] = [];

export const habitablePlanets: Planet[] = [];

{
  /* 
  The CSV file is a stream because it's very large.it would be too 
  large to load the intire file into memory, so Node.js reads the 
  data piece by piece.
  */
}

function isHabitablePlanet(planet: KeplerPlanet) {
  return (
    planet["koi_disposition"] === "CONFIRMED" &&
    planet["koi_insol"] > 0.36 &&
    planet["koi_insol"] < 1.11 &&
    planet["koi_prad"] < 1.6 &&
    planet["koi_prad"]
  );
}

export function loadPlanetsData() {
  return new Promise<void>((resolve, reject) => {
    fs.createReadStream("./data/kepler_data.csv")
      .pipe(
        parse({
          comment: "#",
          columns: true,
        }),
      )
      .on("data", (data: KeplerPlanet) => {
        if (isHabitablePlanet(data)) {
          habitablePlanets.push({
            id: data.kepler_name.toLowerCase().replace(/\s/g, "-"),
            name: data.kepler_name,
            solarFlux: data.koi_insol,
            radius: data.koi_prad,
          });
        }
      })
      .on("error", (err: Error) => {
        console.log(err);
        reject(err);
      })
      .on("end", () => {
        console.log(`${habitablePlanets.length} habitable planets found!.`);
        resolve();
      });
  });
}
