import clsx from "clsx";
import type React from "react";

type DefaultInputProps = {
  id: string;
  labelText: string;
} & React.ComponentProps<"input">;

export function DefaultInput({
  id,
  type,
  labelText,
  ...rest
}: DefaultInputProps) {
  return (
    <>
      <label htmlFor={id}> {labelText} </label>
      <input
        id={id}
        type={type}
        {...rest}
        className={clsx([
          "bg-transparent",
          "text-center",
          "text-3xl",
          "p-3.5",
          "outline-none",
          "border-2",
          "border-transparent",
          "border-b-primary",
          "transition-all",
          "ease-in-out",
          "placeholder:text-gray-500",
          "placeholder:italic",
          "placeholder:text-2xl",
          "focus:border-2",
          "focus:border-primary",
          "focus:rounded-2xl",
          "disabled:opacity-50",
          "disabled:border-b-zinc-400",
        ])}
      />
    </>
  );
}
