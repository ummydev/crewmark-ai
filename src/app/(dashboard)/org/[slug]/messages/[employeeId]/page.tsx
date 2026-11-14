import { Suspense } from "react";

import { MessagesView } from "@/components/messages/messages-view";

export default function ConversationPage({ params }: PageProps<"/org/[slug]/messages/[employeeId]">) {
  return (
    <Suspense fallback={<MessagesView />}>
      {params.then(({ employeeId }) => (
        <MessagesView employeeId={decodeURIComponent(employeeId)} />
      ))}
    </Suspense>
  );
}
