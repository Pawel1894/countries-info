import React from "react";

type Props = {
  size: string;
};

export default function LoadIndicator() {
  return (
    <div className="border border-t-neutral-600 border-neutral-100 dark:border-neutral-600 dark:border-t-neutral-200 animate-spin w-10 h-10 rounded-full"></div>
  );
}
