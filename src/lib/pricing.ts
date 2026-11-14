// Crewmark's plans, as Alex set them on 2026-11-07. The /pricing page, llms.txt and structured data read them from
// here so the numbers can't drift apart. Billing isn't built yet: `available` is false for the paid plans until it
// is, and the pricing page says they're coming soon; until then nothing is enforced and every account can use Crewmark
// free. Prices are in US dollars per month and don't include the agent's own usage, which customers pay their agent
// provider for directly.

export type PlanId = "free" | "pro" | "team";

export type Plan = {
  id: PlanId;
  /** Monthly price in US dollars. */
  price: number;
  /** null means unlimited. */
  projects: number | null;
  employees: number | null;
  /** Whether more than one person can be in the organization. */
  members: "one" | "many";
  /** Whether people can buy the plan today. */
  available: boolean;
};

export const plans: readonly Plan[] = [
  { id: "free", price: 0, projects: 1, employees: 3, members: "one", available: true },
  { id: "pro", price: 5, projects: null, employees: null, members: "one", available: false },
  { id: "team", price: 10, projects: null, employees: null, members: "many", available: false },
];

export const plan = (id: PlanId) => plans.find((p) => p.id === id)!;
