import { Suspense } from "react";

import { ProjectView, ProjectViewSkeleton } from "@/components/projects/project-view";

export default function ProjectIssuesPage({ params }: PageProps<"/org/[slug]/projects/[id]/issues">) {
  return (
    <Suspense fallback={<ProjectViewSkeleton />}>
      {params.then(({ id }) => (
        <ProjectView projectId={decodeURIComponent(id)} tab="issues" />
      ))}
    </Suspense>
  );
}
