import { faMoon } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function ThemeToggle() {
  function toggleTheme() {
    document.getElementsByTagName("body")[0].classList.toggle("dark");
  }

  return (
    <button className="flex items-center gap-x-[0.625rem]" onClick={toggleTheme}>
      <FontAwesomeIcon className="w-4 text-neutral-300 dark:text-white" icon={faMoon} />
      <span className="text-neutral-300 dark:text-white text-xs font-semibold">Dark Mode</span>
    </button>
  );
}
