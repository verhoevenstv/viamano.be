import { type ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  className?: string;
  size?: "default" | "narrow";
};

/** Centrale inhoudsbreedte met consistente marges. */
export function Container({
  children,
  className = "",
  size = "default",
}: ContainerProps) {
  const max = size === "narrow" ? "max-w-3xl" : "max-w-6xl";
  return (
    <div className={`mx-auto w-full ${max} px-6 sm:px-8 ${className}`}>
      {children}
    </div>
  );
}
