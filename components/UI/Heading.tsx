import { NextFontWithVariable } from "next/dist/compiled/@next/font";
import Link from "next/link";
import React from "react";
import ThemeToggle from "./ThemeToggle";

type Props = {
  font: NextFontWithVariable;
};

export default function Heading({ font }: Props) {
  return (
    <header className={`${font.variable} font-sans px-4 py-[1.875rem] dark:bg-neutral-100 lg:px-20 lg:py-6 `}>
      <div className="max-w-[79.875rem] flex justify-between mx-auto">
        <h1 className="font-extrabold text-sm text-neutral-300 dark:text-white lg:text-2xl">
          <Link href={"/"}>Where in the world?</Link>
        </h1>
        <ThemeToggle />
      </div>
    </header>
  );
}
