import { cn } from "@/lib/utils";

export function Prose({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "prose prose-neutral max-w-none dark:prose-invert",
        "prose-headings:font-semibold prose-headings:tracking-tight",
        "prose-a:text-blue-600 dark:prose-a:text-blue-400",
        "prose-code:before:content-none prose-code:after:content-none",
        className
      )}
    >
      {children}
    </div>
  );
}
