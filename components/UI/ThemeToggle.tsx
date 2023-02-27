import { faMoon } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect } from "react";

export default function ThemeToggle() {
  function toggleTheme() {
    const docEl = document.getElementsByTagName("body")[0];
    if (docEl.classList.contains("dark")) {
      setLightTheme();
    } else {
      setDarkTheme();
    }
  }
  function setDarkTheme() {
    document.getElementsByTagName("body")[0].classList.add("dark");
  }

  function setLightTheme() {
    document.getElementsByTagName("body")[0].classList.remove("dark");
  }

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setDarkTheme();
    }
  }, []);

  return (
    <button className="flex items-center gap-x-[0.625rem]" onClick={toggleTheme}>
      <FontAwesomeIcon className="w-4 text-neutral-300 dark:text-white" icon={faMoon} />
      <span className="text-neutral-300 dark:text-white text-xs font-semibold">Dark Mode</span>
    </button>
  );
}
