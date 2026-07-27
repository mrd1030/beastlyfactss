export function getFactSaveAccessibility(saved: boolean, title: string): {
  label: string;
  selected: boolean;
} {
  return {
    label: saved ? `Unsave fact: ${title}` : `Save fact: ${title}`,
    selected: saved,
  };
}

export function getCategoryChipAccessibility(selected: boolean, label: string): {
  label: string;
  selected: boolean;
} {
  return { label, selected };
}

export function getPaginationAccessibility(atStart: boolean, atEnd: boolean): {
  previousDisabled: boolean;
  nextDisabled: boolean;
} {
  return {
    previousDisabled: atStart,
    nextDisabled: atEnd,
  };
}
