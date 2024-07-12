import { signIn } from "@/auth";
import { Button } from "@/components/ui/button";
import { SiDiscord } from "react-icons/si";

export function SignIn() {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("discord");
      }}
    >
      <Button className="bg-[#5865F2] space-x-2" type="submit">
        <SiDiscord />
        <span>Sign in using Discord</span>
      </Button>
    </form>
  );
}
