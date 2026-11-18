import { MessagesView } from "@/components/messages/messages-view";

// The same view as /messages: it reads which conversation is open from the address, so picking another employee
// there changes only the address (MC-235). This page is what a reload, or a link from elsewhere, opens.
export default function ConversationPage() {
  return <MessagesView />;
}
