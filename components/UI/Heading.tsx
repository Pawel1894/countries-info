import { NextFontWithVariable } from "next/dist/compiled/@next/font";
import React from "react";

type Props = {
  font: NextFontWithVariable;
};

export default function Heading({ font }: Props) {
  return <div className={`${font.variable} font-sans`}>Header</div>;
}
