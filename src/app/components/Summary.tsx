import { RESUME_DATA } from "@/data/resume-data";
import { Section } from "../../components/ui/section";
import { calculateExperienceYears } from "@/lib/utils";

interface AboutProps {
  summary: typeof RESUME_DATA.summary;
  className?: string;
}

/**
 * Summary section component
 * Displays a summary of professional experience and goals
 */
export function Summary({ summary, className }: AboutProps) {
  const years = calculateExperienceYears(RESUME_DATA.work);

  return (
    <Section className={className}>
      <h2 className="text-xl font-bold" id="about-section">
        About
      </h2>
      <div
        className="text-pretty font-mono text-sm text-foreground/80 print:text-[12px]"
        aria-labelledby="about-section"
      >
        {typeof summary === "function" ? summary({ years }) : summary}
      </div>
    </Section>
  );
}
