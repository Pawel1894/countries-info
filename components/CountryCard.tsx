import React from "react";
import { TName } from "@/types/country";
import Image from "next/image";
import CountryField from "./CountryField";

type Props = {
  name: TName;
  population: number;
  region: string;
  capital: string[];
  flag: string;
};

export default function CountryCard({ flag, capital, name, population, region }: Props) {
  return (
    <div className="mt-6 mb-12 rounded-md shadow-lg w-[16.5rem] h-[21rem] dark:bg-neutral-100">
      <div className="relative w-full h-[160px]">
        <Image className="rounded-t-md object-cover" src={flag} alt={`flag of ${name.official}`} fill />
      </div>
      <div className="mx-6 mt-6">
        <h2 className="text-lg font-extrabold text-neutral-300 dark:text-white mb-4">{name.official}</h2>
        <CountryField label="Population">
          <span className="text-sm font-light text-neutral-300 dark:text-white">{population}</span>
        </CountryField>
        <CountryField className={"mt-2"} label="Region">
          <span className="text-sm font-light text-neutral-300 dark:text-white">{region}</span>
        </CountryField>
        <CountryField className={"mt-2"} label="Capital">
          <span className="text-sm font-light text-neutral-300 dark:text-white">
            {capital?.length && capital.map((c, i) => (i === 0 ? c : `, ${c}`))}
          </span>
        </CountryField>
      </div>
    </div>
  );
}
