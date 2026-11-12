import { getSetupTarget } from "@/lib/agent-auth";
import { setupInstructions } from "@/lib/agent-setup";

const HEADERS = {
  "Cache-Control": "no-store",
  "X-Robots-Tag": "noindex",
};

// The page a setup prompt points an AI agent at. Reading it doesn't use the token up; `crewmark setup` does.
export async function GET(request: Request, { params }: RouteContext<"/setup/[token]">) {
  const { token } = await params;
  const target = await getSetupTarget(token);
  if (!target) {
    return new Response(
      "This Crewmark setup link is invalid, already used or expired (links last an hour). Ask the user to make a new " +
        "one from the employee's page in Crewmark and paste the new prompt.\n",
      { status: 404, headers: { ...HEADERS, "Content-Type": "text/plain; charset=utf-8" } },
    );
  }
  return new Response(setupInstructions(target, token, new URL(request.url).origin), {
    headers: { ...HEADERS, "Content-Type": "text/markdown; charset=utf-8" },
  });
}
