// Links to uploaded images. Crewmark keeps them as /api/attachments/<id>, which members open with their session;
// what agents read carries signed, full ones that open without signing in for an hour (src/lib/attachments.ts).

/**
 * Signed links put back as the plain ones Crewmark keeps: in a person's words as they reached the agent (MC-271), so
 * they read and compare as the person wrote them; and in what an agent writes (MC-267), so an image it copied from
 * what it read doesn't stop working when the signature runs out.
 */
export function unsignAttachmentLinks(markdown: string) {
  return markdown.replace(
    /https?:\/\/[^\s()<>]+?\/api\/attachments\/([0-9a-f-]{36})\?expires=\d+&signature=[\w-]+/g,
    "/api/attachments/$1",
  );
}
