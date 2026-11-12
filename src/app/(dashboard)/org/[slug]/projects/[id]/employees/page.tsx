import { Suspense } from "react";

import { ProjectView, ProjectViewSkeleton } from "@/components/projects/project-view";

export default function ProjectEmployeesPage({ params }: PageProps<"/org/[slug]/projects/[id]/employees">) {
  return (
    <Suspense fallback={<ProjectViewSkeleton />}>
      {params.then(({ id }) => (
        <ProjectView projectId={decodeURIComponent(id)} tab="employees" />
      ))}
    </Suspense>
  );
}
