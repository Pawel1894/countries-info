import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";

type Props = {};

export default function Filter({}: Props) {
  const [isOpen, setIsOpen] = useState(false);

  function toggleList() {
    setIsOpen((prevState) => !prevState);
  }

  return (
    <div className="mt-10 w-52">
      <button
        onClick={toggleList}
        className="flex items-center justify-between w-full px-6 py-4 bg-white dark:bg-neutral-100 dark:text-white text-xs rounded-md shadow-sm"
      >
        <span>Filter by Region</span>
        <div className="ml-16">
          <FontAwesomeIcon
            className={`w-[0.625rem] transition-transform ${isOpen ? "rotate-180" : ""}`}
            icon={faAngleDown}
          />
        </div>
      </button>
      {isOpen ? (
        <ul className="py-4 px-6 mt-1 bg-white dark:bg-neutral-100 dark:text-white text-xs rounded-md shadow-sm">
          <li className="cursor-pointer">Africa</li>
          <li className="mt-2 cursor-pointer">America</li>
          <li className="mt-2 cursor-pointer">Asia</li>
          <li className="mt-2 cursor-pointer">Europe</li>
          <li className="mt-2 cursor-pointer">Oceania</li>
        </ul>
      ) : null}
    </div>
  );
}
