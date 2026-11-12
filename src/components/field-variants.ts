// Select trigger styles shared by the issue and employee property fields.
// - "field": a full-width form field.
// - "pill": a compact chip, for a row of properties in a create dialog.
// - "ghost": borderless until hovered, for a properties panel beside a document.

export type FieldVariant = "field" | "pill" | "ghost";

export const FIELD_TRIGGER: Record<FieldVariant, string> = {
  field: "w-full",
  pill: "w-auto gap-1.5 px-2 text-[13px] shadow-none data-[size=default]:h-7 [&>svg:last-child]:hidden",
  ghost:
    "-ml-2 w-[calc(100%+0.5rem)] border-transparent px-2 text-[13px] shadow-none hover:bg-muted data-[size=default]:h-8 [&>svg:last-child]:hidden",
};
