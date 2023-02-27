import { TCountry } from "@/types/country";

export async function getAllCountries(): Promise<Array<TCountry>> {
  const response = await fetch("https://restcountries.com/v3.1/all");
  const data = await response.json();
  return data;
}

export async function getCountriesByName(name: string): Promise<Array<TCountry>> {
  const response = await fetch(`https://restcountries.com/v3.1/name/${name}`);
  const data = await response.json();
  return data;
}

export async function getCountriesByRegion(region: string): Promise<Array<TCountry>> {
  const response = await fetch(`https://restcountries.com/v3.1/region/${region}`);
  const data = await response.json();
  return data;
}
