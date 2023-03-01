import { TCountry } from "@/types/country";

export async function getAllCountries(): Promise<Array<TCountry>> {
  const response = await fetch("https://restcountries.com/v2/all");
  const data = await response.json();
  return data;
}

export async function getCountriesByName(name: string): Promise<Array<TCountry>> {
  const response = await fetch(`https://restcountries.com/v2/name/${name}`);
  const data = await response.json();
  return data;
}

export async function getCountryByName(name: string): Promise<TCountry> {
  const response = await fetch(`https://restcountries.com/v2/name/${name}?fullText=true`);
  const data = await response.json();
  return data[0];
}

export async function getCountriesByRegion(region: string): Promise<Array<TCountry>> {
  const response = await fetch(`https://restcountries.com/v2/region/${region}`);
  const data = await response.json();
  return data;
}

export async function getAllNames() {
  const response = await fetch("https://restcountries.com/v2/all");
  const data: TCountry[] = await response.json();
  const test = data.map((country) => {
    return {
      params: {
        name: country.name,
      },
    };
  });

  console.log(test);

  return test;
}
