"use client";
import { useSearchParams } from "next/navigation";
import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";

export function ErrorLoginMessage() {
  const searchParams = useSearchParams();
  const error = searchParams.get("error");
  let message;

  switch (error) {
    case "OAuthAccountNotLinked":
      message = "Your email already used. Change it to another provider.";
      break;

    default:
      message = error;
      break;
  }

  return (
    error && (
      <Card className="w-full bg-red-500/30 border-red-400">
        <CardHeader className="p-3">
          <CardTitle className="text-lg">Error</CardTitle>
          <CardDescription className="text-balance">{message}</CardDescription>
        </CardHeader>
      </Card>
    )
  );
}
