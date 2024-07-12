import { signOut } from "@/auth";
import { Button } from "@/components/ui/button";
import { SiDiscord } from "react-icons/si";

export function SignOut() {
  return (
    <form
      action={async () => {
        "use server";
        await signOut();
      }}
    >
      <Button className="space-x-2" variant="destructive" type="submit">
        <span>Sign out</span>
      </Button>
    </form>
  );
}
