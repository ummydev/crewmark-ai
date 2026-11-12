import { AlternativePage, alternativeMetadata } from "@/components/landing/alternative-page";

// /alternatives/paperclip: Crewmark as a Paperclip alternative (copy in content/alternatives.ts).

export function generateMetadata() {
  return alternativeMetadata("paperclip");
}

export default function Page() {
  return <AlternativePage product="paperclip" />;
}
