import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merge Tailwind classes safely, resolving conflicts.
 * @param {...any} inputs - Tailwind class strings / conditional expressions
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
