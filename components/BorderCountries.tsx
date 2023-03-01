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
    <div className="mt-8 md:mt-14 pb-8 md:grid md:grid-cols-[auto_1fr] md:gap-x-4 md:pb-0">
      <h2 className="text-neutral-300 dark:text-white font-semibold">Border Countries:</h2>
      <div className="flex flex-wrap gap-[0.625rem] mt-4 md:mt-0">
        {borderCountries?.length
          ? borderCountries.map((country) => {
              return (
                <Link
                  href={`/${country.name}`}
                  className="bg-white text-xs xl:text-sm dark:bg-neutral-100 dark:text-white py-2 px-7 rounded-sm drop-shadow-md xl:py-1 xl:px-6"
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
