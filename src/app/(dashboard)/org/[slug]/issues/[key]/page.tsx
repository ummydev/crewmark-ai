import { Suspense } from "react";

import { IssueDetail, IssueDetailSkeleton } from "@/components/issues/issue-detail";

export default function IssuePage({ params }: PageProps<"/org/[slug]/issues/[key]">) {
  return (
    <Suspense fallback={<IssueDetailSkeleton />}>
      {params.then(({ key }) => (
        <IssueDetail issueKey={decodeURIComponent(key)} />
      ))}
    </Suspense>
  );
}
