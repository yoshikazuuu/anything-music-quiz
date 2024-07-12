import { cn } from "@/lib/utils";
import Link from "next/link";

export function TwitterLink({ className }: { className?: string }) {
  return (
    <Link
      className={cn("hover:underline text-primary", className)}
      href="https://x.com/yoshimoee"
      target="_blank"
    >
      @yoshimoee
    </Link>
  );
}
