import React from "react";
import Image from "next/image";
import CountryField from "./CountryField";
import Link from "next/link";

type Props = {
  name: string;
  population: number;
  region: string;
  capital: string;
  flag: string;
};

export default function CountryCard({ flag, capital, name, population, region }: Props) {
  return (
    <Link
      href={`/${name}`}
      className="block mt-6 mb-12 rounded-md shadow-lg w-[16.5rem] min-h-[21rem] h-fit dark:bg-neutral-100 hover:-translate-y-2 transition-transform"
    >
      <div className="relative w-full h-[10rem]">
        <Image className="rounded-t-md object-cover" src={flag} alt={`flag of ${name}`} fill />
      </div>
      <div className="mx-6 mt-6">
        <h2 className="text-lg font-extrabold text-neutral-300 dark:text-white mb-4">{name}</h2>
        <CountryField label="Population">
          <span className="text-sm xl:text-base font-light text-neutral-300 dark:text-white">
            {population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
          </span>
        </CountryField>
        <CountryField className={"mt-2"} label="Region">
          <span className="text-sm xl:text-base font-light text-neutral-300 dark:text-white">{region}</span>
        </CountryField>
        <CountryField className={"mt-2"} label="Capital">
          <span className="text-sm xl:text-base font-light text-neutral-300 dark:text-white">{capital}</span>
        </CountryField>
      </div>
    </Link>
  );
}
