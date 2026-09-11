import { Loader2 } from "lucide-react";

export function PageLoader() {
  return (
    <div
      role="status"
      aria-live="polite"
      className="flex min-h-[60vh] items-center justify-center"
    >
      <Loader2 className="h-6 w-6 animate-spin text-secondary" aria-hidden="true" />
      <span className="sr-only">Loading page…</span>
    </div>
  );
}
