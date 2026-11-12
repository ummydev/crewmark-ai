import { AlternativePage, alternativeMetadata } from "@/components/landing/alternative-page";

// /alternatives/multica: Crewmark as a Multica alternative (copy in content/alternatives.ts).

export function generateMetadata() {
  return alternativeMetadata("multica");
}

export default function Page() {
  return <AlternativePage product="multica" />;
}
