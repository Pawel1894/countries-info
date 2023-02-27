import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

type Props = {
  searchTerm: string | undefined;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
};

export default function SearchCountry({ searchTerm, setSearchTerm }: Props) {
  function onChangeHandler(e: React.ChangeEvent<HTMLInputElement>) {
    setSearchTerm(e.target.value);
  }

  return (
    <div className="relative w-full">
      <label className="sr-only" htmlFor="search">
        Search for a country
      </label>
      <FontAwesomeIcon
        className="absolute top-1/2 left-8 -translate-y-1/2 w-4 text-neutral-700 dark:text-white"
        icon={faSearch}
      />
      <input
        className="w-full pl-[4.625rem] pr-8 py-4 placeholder:text-neutral-700 text-xs rounded-md shadow-sm outline-none text-neutral-300 dark:text-white dark:bg-neutral-100"
        placeholder="Search for a country..."
        type={"text"}
        id="search"
        name="search"
        onChange={onChangeHandler}
        value={searchTerm}
      />
    </div>
  );
}
