import { twMerge } from "tailwind-merge";
import { type ClassValue, clsx } from "clsx";

export function cn(...classNames: ClassValue[]) {
  return twMerge(clsx(classNames));
}
