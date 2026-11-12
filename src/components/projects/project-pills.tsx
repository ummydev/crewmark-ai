"use client";

import Link from "next/link";

import { useCrewStore } from "@/components/crew-store";
import { ProjectAvatar } from "@/components/projects/project-avatar";
import { projectPath } from "@/components/projects/project-view";
import { cn } from "@/lib/utils";

const PILL = "flex shrink-0 items-center gap-1 rounded-full bg-foreground/[0.06] py-0.5 pr-2 pl-0.5 text-xs";

/**
 * The projects an employee works on, as small pills with their emoji, in the store's order. With `links`, each opens
 * its project; leave it off inside a row that is a link itself.
 */
export function ProjectPills({
  projectIds,
  links = false,
  className,
}: {
  projectIds: string[];
  links?: boolean;
  className?: string;
}) {
  const { projects, orgPath } = useCrewStore();
  const list = projects.filter((p) => projectIds.includes(p.id));
  if (list.length === 0) return <span className="text-[13px] text-muted-foreground">—</span>;
  return (
    <span className={cn("flex min-w-0 flex-wrap items-center gap-1", className)}>
      {list.map((project) => {
        const content = (
          <>
            <ProjectAvatar emoji={project.emoji} size="sm" className="bg-transparent" />
            <span className="truncate">{project.name}</span>
          </>
        );
        return links ? (
          <Link
            key={project.id}
            href={orgPath(projectPath(project.id))}
            className={cn(PILL, "text-foreground hover:bg-foreground/10")}
          >
            {content}
          </Link>
        ) : (
          <span key={project.id} className={cn(PILL, "text-muted-foreground")}>
            {content}
          </span>
        );
      })}
    </span>
  );
}
