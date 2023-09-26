import clsx, { ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/** Merge classes with tailwind-merge with clsx full feature */
export const cn = (...inputs: ClassValue[]): string => {
  return twMerge(clsx(inputs));
};
