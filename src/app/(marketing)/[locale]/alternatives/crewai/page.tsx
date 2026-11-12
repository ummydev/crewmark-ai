import { AlternativePage, alternativeMetadata } from "@/components/landing/alternative-page";

// /alternatives/crewai: Crewmark as a CrewAI alternative (copy in content/alternatives.ts).

export function generateMetadata() {
  return alternativeMetadata("crewai");
}

export default function Page() {
  return <AlternativePage product="crewai" />;
}
