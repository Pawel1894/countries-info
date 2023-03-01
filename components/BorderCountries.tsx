import { TCountry } from "@/types/country";
import Link from "next/link";
import React, { useCallback, useEffect, useState } from "react";

type Props = {
  borders: string[];
};

export default function BorderCountries({ borders }: Props) {
  const [borderCountries, setBorderCountries] = useState<TCountry[]>();

  const fetchBorderCountries = useCallback(async () => {
    const url = "https://restcountries.com/v2/alpha?codes=";
    let query = borders.join(",");

    try {
      const response = await fetch(url + query);
      const data = await response.json();
      setBorderCountries(data);
    } catch (error) {}
  }, [borders]);

  useEffect(() => {
    fetchBorderCountries();
  }, [fetchBorderCountries]);

  return (
    <div className="mt-8 pb-8">
      <h2 className="text-neutral-300 dark:text-white font-semibold">Border Countries:</h2>
      <div className="flex flex-wrap gap-[0.625rem] mt-4">
        {borderCountries
          ? borderCountries.map((country) => {
              return (
                <Link
                  href={`/${country.name}`}
                  className="bg-white text-xs dark:bg-neutral-100 dark:text-white py-2 px-7 rounded-sm drop-shadow-md"
                  key={country.name}
                >
                  {country.name}
                </Link>
              );
            })
          : null}
      </div>
    </div>
  );
}
