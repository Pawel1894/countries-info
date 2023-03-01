import { TCountry } from "@/types/country";
import Image from "next/image";
import React from "react";
import CountryField from "./CountryField";

export default function Country(props: TCountry) {
  return (
    <div className="mt-16 mx-auto md:flex justify-between">
      <div className="relative w-80 h-[14.3125rem]">
        <Image className="rounded-md object-cover" src={props.flags.svg} alt={`flag of ${props.name}`} fill />
      </div>
      <div className="mt-11">
        <h1 className="font-extrabold text-neutral-300 dark:text-white text-[1.375rem]">{props.name}</h1>
        <div className="mt-4 md:flex">
          <ul className="flex flex-col gap-2">
            <li>
              <CountryField label={"Native Name"}>
                <span className="text-sm font-light text-neutral-300 dark:text-white">
                  {props.nativeName}
                </span>
              </CountryField>
            </li>
            <li>
              <CountryField label={"Population"}>
                <span className="text-sm font-light text-neutral-300 dark:text-white">
                  {props.population}
                </span>
              </CountryField>
            </li>
            <li>
              <CountryField label={"Region"}>
                <span className="text-sm font-light text-neutral-300 dark:text-white">{props.region}</span>
              </CountryField>
            </li>
            <li>
              <CountryField label={"Sub Region"}>
                <span className="text-sm font-light text-neutral-300 dark:text-white">{props.subregion}</span>
              </CountryField>
            </li>
            <li>
              <CountryField label={"Capital"}>
                <span className="text-sm font-light text-neutral-300 dark:text-white">{props.capital}</span>
              </CountryField>
            </li>
          </ul>
          <ul className="mt-8 md:mt-0 flex flex-col gap-2">
            <li>
              <CountryField label={"Top Level Domain"}>
                <span className="text-sm font-light text-neutral-300 dark:text-white">
                  {props.topLevelDomain}
                </span>
              </CountryField>
            </li>
            <li>
              <CountryField label={"Currencies"}>
                <span className="text-sm font-light text-neutral-300 dark:text-white">currencies</span>
              </CountryField>
            </li>
            <li>
              <CountryField label={"Languages"}>
                <div>
                  {props.languages.map((lang, i) => (
                    <span
                      key={lang.iso639_1}
                      className={`text-sm font-light text-neutral-300 dark:text-white`}
                    >
                      {i > 0 ? ", " : ""} {lang.name}
                    </span>
                  ))}
                </div>
              </CountryField>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
