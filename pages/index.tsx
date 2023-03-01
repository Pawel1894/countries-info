import CountryCard from "@/components/CountryCard";
import Filter from "@/components/Filter";
import SearchCountry from "@/components/SearchCountry";
import LoadIndicator from "@/components/UI/LoadIndicator";
import { useDebounce } from "@/hooks/useDebounce";
import { getAllCountries, getCountriesByName, getCountriesByRegion } from "@/lib/restcountries";
import { TCountry } from "@/types/country";
import Head from "next/head";
import { useCallback, useEffect, useState } from "react";

export async function getStaticProps() {
  const data = await getAllCountries();

  return {
    props: { data },
  };
}

type Props = {
  data: TCountry[];
};

export default function Home({ data }: Props) {
  const [countries, setCountries] = useState(data);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [region, setRegion] = useState<string | null>(null);
  const debounceTerm = useDebounce(searchTerm, 500);
  const [isLoading, setIsLoading] = useState(false);

  const filterCountries = useCallback(
    async function filterCountries(region: string | null, search: string) {
      setIsLoading(true);
      if (!region && !search) return;

      if (region) {
        try {
          const response = await getCountriesByRegion(region);
          if (search) {
            setCountries(filterCountriesByName(response, search));
            return;
          }

          setCountries(response);
        } catch (error) {}

        return;
      }

      setCountries(filterCountriesByName(data, search));
    },
    [data]
  );

  useEffect(() => {
    if (!debounceTerm && !region) setCountries(data);
    else filterCountries(region, debounceTerm);
    setIsLoading(false);
  }, [debounceTerm, data, region, filterCountries]);

  function filterCountriesByName(items: TCountry[], search: string) {
    return items.filter((item) => item.name.toLowerCase().includes(search?.toLowerCase()));
  }

  return (
    <>
      <Head>
        <title>Countries info</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="pt-6 mb-8 px-4 mx-auto lg:flex justify-between items-center max-w-[79.875rem]">
        <SearchCountry searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <Filter region={region} setRegion={setRegion} />
      </div>
      {isLoading ? (
        <div className="w-screen flex justify-center items-center h-[calc(100vh-17.0625rem)] lg:h-[calc(100vh-11.4375rem)]">
          <LoadIndicator />
        </div>
      ) : (
        <div className="mx-auto px-4 2xl:px-0 max-w-[88rem] h-[calc(100vh-17.5rem)] lg:h-[calc(100vh-12rem)] xl:justify-items-start grid justify-items-center  gap-10 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 overflow-y-auto scrollbar">
          {countries?.length
            ? countries.map((country) => {
                return (
                  <CountryCard
                    key={country.name}
                    capital={country.capital}
                    name={country.name}
                    population={country.population}
                    region={country.region}
                    flag={country.flags.svg}
                  />
                );
              })
            : null}
        </div>
      )}
    </>
  );
}
