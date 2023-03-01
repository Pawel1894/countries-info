import React from "react";

type Props = {
  children: JSX.Element;
  label: string;
  className?: string;
};

export default function CountryField({ children, className, label }: Props) {
  return (
    <div className={className + " text-sm grid grid-cols-[auto_1fr] gap-2"}>
      <span className="font-semibold text-sm dark:text-white">{label}: </span>
      {children}
    </div>
  );
}
