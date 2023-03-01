import { TCountry } from "@/types/country";
import Image from "next/image";
import React from "react";
import BorderCountries from "./BorderCountries";
import CountryField from "./CountryField";

export default function Country(props: TCountry) {
  return (
    <div className="mt-16 mx-auto md:grid md:grid-cols-2 gap-8 xl:gap-36  overflow-y-auto overflow-x-hidden h-[calc(100vh-14rem)] md:h-auto scrollbar">
      <div className="relative w-80 h-[14.3125rem] xl:w-[35rem] xl:h-[25.0625rem]">
        <Image
          className="rounded-md object-cover"
          src={props.flags?.svg}
          alt={`flag of ${props.name}`}
          fill
        />
      </div>
      <div className="mt-11">
        <h1 className="font-extrabold text-neutral-300 dark:text-white text-[1.375rem] xl:text-3xl">
          {props.name}
        </h1>
        <div className="mt-4 md:grid md:grid-cols-2 md:gap-x-4">
          <ul className="flex flex-col gap-2">
            <li>
              <CountryField label={"Native Name"}>
                <span className="text-sm xl:text-base font-light text-neutral-300 dark:text-white">
                  {props.nativeName}
                </span>
              </CountryField>
            </li>
            <li>
              <CountryField label={"Population"}>
                <span className="text-sm xl:text-base font-light text-neutral-300 dark:text-white">
                  {props.population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                </span>
              </CountryField>
            </li>
            <li>
              <CountryField label={"Region"}>
                <span className="text-sm xl:text-base font-light text-neutral-300 dark:text-white">
                  {props.region}
                </span>
              </CountryField>
            </li>
            <li>
              <CountryField label={"Sub Region"}>
                <span className="text-sm xl:text-base font-light text-neutral-300 dark:text-white">
                  {props.subregion}
                </span>
              </CountryField>
            </li>
            <li>
              <CountryField label={"Capital"}>
                <span className="text-sm xl:text-base font-light text-neutral-300 dark:text-white">
                  {props.capital}
                </span>
              </CountryField>
            </li>
          </ul>
          <ul className="mt-8 md:mt-0 flex flex-col gap-2">
            <li>
              <CountryField label={"Top Level Domain"}>
                <span className="text-sm xl:text-base font-light text-neutral-300 dark:text-white">
                  {props.topLevelDomain}
                </span>
              </CountryField>
            </li>
            <li>
              <CountryField label={"Currencies"}>
                <div>
                  {props.currencies?.map((cur, i) => (
                    <span
                      key={cur.name}
                      className={`text-sm xl:text-base font-light text-neutral-300 dark:text-white`}
                    >
                      {i > 0 ? ", " : ""} {cur.name}
                    </span>
                  ))}
                </div>
              </CountryField>
            </li>
            <li>
              <CountryField label={"Languages"}>
                <div>
                  {props.languages?.map((lang, i) => (
                    <span
                      key={lang.iso639_1}
                      className={`text-sm xl:text-base font-light text-neutral-300 dark:text-white`}
                    >
                      {i > 0 ? ", " : ""} {lang.name}
                    </span>
                  ))}
                </div>
              </CountryField>
            </li>
          </ul>
        </div>
        {props.borders?.length ? <BorderCountries borders={props.borders} /> : null}
      </div>
    </div>
  );
}
