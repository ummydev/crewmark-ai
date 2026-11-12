import { toNextJsHandler } from "better-auth/next-js";

import { auth } from "@/lib/auth";

// Better Auth's endpoints: starting a Google sign-in, its callback, reading and ending the session.
export const { GET, POST } = toNextJsHandler(auth);
