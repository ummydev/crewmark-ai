import { DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";

/** The header of one step in a dialog that walks through several, e.g. "Step 2 of 3". */
export function StepHeader({
  step,
  steps,
  title,
  description,
}: {
  step: number;
  steps: number;
  title: string;
  description: string;
}) {
  return (
    <DialogHeader>
      <p className="text-xs text-muted-foreground">
        Step {step} of {steps}
      </p>
      <DialogTitle>{title}</DialogTitle>
      <DialogDescription>{description}</DialogDescription>
    </DialogHeader>
  );
}
