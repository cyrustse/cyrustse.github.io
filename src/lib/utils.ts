import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function calculateExperienceYears(
  work: readonly { start: string; end: string | null }[],
) {
  const currentYear = new Date().getFullYear();
  return work.reduce((total, job) => {
    const startYear = parseInt(job.start);
    const endYear = job.end ? parseInt(job.end) : currentYear;
    return total + (endYear - startYear);
  }, 0);
}
