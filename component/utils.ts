import data from "./data.json";

export function getPlanetByName(name: string) {
  return data.find(
    (planet: { name: string }) => planet.name.toLowerCase() === name
  );
}
