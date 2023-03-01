import { faArrowLeft, IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

type Props = {
  onClick: (e?: any) => void;
  text: string;
  icon?: IconDefinition;
};

export default function BackButton({ onClick, text, icon }: Props) {
  return (
    <button
      className="bg-white text-neutral-300 font-light rounded-md drop-shadow-3xl text-sm py-2 px-6 flex items-center justify-center gap-2"
      onClick={onClick}
    >
      {icon ? <FontAwesomeIcon width={12} icon={icon} /> : null}
      <span>{text}</span>
    </button>
  );
}
