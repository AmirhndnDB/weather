import { useMemo } from "react";

export default function useRoundedNumber(value) {
  const rounded = useMemo(() => {
    if (value == null || isNaN(value)) return null;
    return Math.round(value);
  }, [value]);

  return rounded;
}
