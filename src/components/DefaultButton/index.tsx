import clsx from "clsx";
import React from "react";

type DefaultButtonProps = {
  icon: React.ReactNode;
  color: "primary" | "red";
} & React.ComponentProps<"button">;

export function DefaultButton({ icon, color, ...props }: DefaultButtonProps) {
  return (
    <>
      <button
        {...props}
        className={clsx(
          [
            "default-button",
            "flex",
            "items-center",
            "justify-center",
            "border-none",
            "rounded-2xl",
            "text-background",
            "min-w-96",
            "p-3.5",
            "my-17",
            "cursor-pointer",
            "transition-all",
            "ease-in-out",
            "hover:opacity-75",
          ],
          {
            "bg-primary": color === "primary",
            "bg-red-800": color === "red",
          }
        )}
      >
        {icon}
      </button>
    </>
  );
}
