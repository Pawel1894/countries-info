import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faClose } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";

type Props = {
  region: string | null;
  setRegion: React.Dispatch<React.SetStateAction<string | null>>;
};

export default function Filter({ region, setRegion }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  function toggleList() {
    setIsOpen((prevState) => !prevState);
  }

  function selectRegion(e: React.MouseEvent<HTMLElement | SVGSVGElement, MouseEvent>, value: string | null) {
    e.stopPropagation();
    setRegion(value);
    setIsOpen(false);
  }

  return (
    <div className="mt-10 w-52 relative lg:mt-0">
      <button
        onClick={toggleList}
        className="flex items-center justify-between w-full px-6 py-4 bg-white dark:bg-neutral-100 dark:text-white text-xs rounded-md shadow-sm"
      >
        <span>{region ? region : "Filter by Region"}</span>
        <div className="ml-16 flex items-center gap-4">
          {region ? (
            <FontAwesomeIcon
              onClick={(e) => selectRegion(e, null)}
              className={`w-[0.625rem] rounded-full`}
              icon={faClose}
            />
          ) : null}
          <FontAwesomeIcon
            className={`w-[0.625rem] transition-transform ${isOpen ? "rotate-180" : ""}`}
            icon={faAngleDown}
          />
        </div>
      </button>
      {isOpen ? (
        <ul className="absolute top-full z-10 w-full left-0 py-4 px-6 mt-1 bg-white dark:bg-neutral-100 dark:text-white text-xs rounded-md shadow-sm">
          <li onClick={(e) => selectRegion(e, "Africa")} className="cursor-pointer">
            Africa
          </li>
          <li onClick={(e) => selectRegion(e, "America")} className="mt-2 cursor-pointer">
            America
          </li>
          <li onClick={(e) => selectRegion(e, "Asia")} className="mt-2 cursor-pointer">
            Asia
          </li>
          <li onClick={(e) => selectRegion(e, "Europe")} className="mt-2 cursor-pointer">
            Europe
          </li>
          <li onClick={(e) => selectRegion(e, "Oceania")} className="mt-2 cursor-pointer">
            Oceania
          </li>
        </ul>
      ) : null}
    </div>
  );
}
