import React from "react";

type HeadingProps = {
  children: React.ReactNode;
};

export function Heading({ children }: HeadingProps) {
  return (
    <h1 className="font-bold text-7xl flex items-center justify-center gap-9">
      {" "}
      {children}{" "}
    </h1>
  );
}
