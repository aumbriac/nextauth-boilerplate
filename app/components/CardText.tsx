import { ReactNode } from "react";

export default function CardText({
  children,
  color = "stone",
  className = "",
}: {
  children: ReactNode;
  color?: string;
  className?: string;
}) {
  return (
    <p className={`text-center text-${color}-300 ${className}`}>{children}</p>
  );
}
