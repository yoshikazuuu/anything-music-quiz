import Link from "next/link";

export default function Page() {
  return (
    <div className="flex h-screen items-center justify-center flex-col">
      <h1 className="font-bold text-xl">🚧</h1>
      <h1 className="font-bold text-xl">App is under construction.</h1>

      <span className="text-sm text-muted-foreground">
        collab? hit me up on{" "}
        <Link
          className="hover:underline text-primary"
          href="https://x.com/yoshimoee"
          target="_blank"
        >
          @yoshimoee
        </Link>
      </span>
    </div>
  );
}
