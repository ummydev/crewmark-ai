"use client";

import { useSearchParams } from "next/navigation";

import { useCrewStore } from "@/components/crew-store";
import { SegmentCount, segmentClass } from "@/components/page-header";
import { ProjectAvatar } from "@/components/projects/project-avatar";
import { cn } from "@/lib/utils";

const PARAM = "project";

/**
 * The project an organization-wide list is filtered to, kept in `?project=` so it survives a reload and a
 * trip to a detail page. Unknown ids (a deleted project) read as no filter.
 */
export function useProjectFilter(): [string | undefined, (projectId: string | undefined) => void] {
  const { projects } = useCrewStore();
  const param = useSearchParams().get(PARAM) ?? undefined;
  const projectId = projects.some((p) => p.id === param) ? param : undefined;

  function setProjectId(next: string | undefined) {
    const url = new URL(window.location.href);
    if (next) url.searchParams.set(PARAM, next);
    else url.searchParams.delete(PARAM);
    // Next.js syncs useSearchParams with the History API, so this filters without a server round trip.
    window.history.replaceState(null, "", url);
  }

  return [projectId, setProjectId];
}

/** "All" plus one toggle per project, each with how many items it holds. */
export function ProjectFilter({
  value,
  onChange,
  count,
}: {
  value: string | undefined;
  onChange: (projectId: string | undefined) => void;
  /** How many items are in a project, or in total when the id is undefined. */
  count: (projectId: string | undefined) => number;
}) {
  const { projects } = useCrewStore();
  const options = [{ id: undefined, name: "All", emoji: undefined }, ...projects];

  return (
    <div role="group" aria-label="Filter by project" className="flex items-center gap-1.5">
      {options.map((option) => (
        <button
          key={option.id ?? "all"}
          type="button"
          aria-pressed={value === option.id}
          onClick={() => onChange(option.id)}
          className={cn(segmentClass(value === option.id), option.emoji && "pl-1.5")}
        >
          {option.emoji && <ProjectAvatar emoji={option.emoji} size="sm" />}
          {option.name}
          <SegmentCount>{count(option.id)}</SegmentCount>
        </button>
      ))}
    </div>
  );
}
