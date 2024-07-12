import { auth, signIn, signOut } from "@/auth";
import { ModeToggle } from "@/components/theme/theme-toggle";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader } from "@/components/ui/card";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { GripVerticalIcon, LogInIcon, LogOutIcon } from "lucide-react";

export async function UserProfile() {
  const session = await auth();
  return (
    <Card>
      <CardHeader>
        <div className="flex gap-4 justify-center items-center">
          <Avatar>
            <AvatarFallback>AMQ</AvatarFallback>
            <AvatarImage src={session?.user?.image || ""} />
          </Avatar>
          <div>
            <p className="font-semibold">{session?.user?.name}</p>
            <CardDescription>{session?.user?.email}</CardDescription>
          </div>
          <Popover>
            <PopoverTrigger>
              <GripVerticalIcon className="cursor-pointer" />
            </PopoverTrigger>
            <PopoverContent
              className="flex flex-col p-2 gap-1"
              sideOffset={40}
              side="right"
              collisionPadding={40}
            >
              <ModeToggle />

              <form
                action={async () => {
                  "use server";
                  await signOut();
                }}
              >
                <Button
                  type="submit"
                  variant="ghost"
                  className={cn(
                    "flex items-center justify-between font-normal w-full"
                  )}
                >
                  <p>Log out</p>
                  <LogOutIcon strokeWidth={1} />
                </Button>
              </form>
            </PopoverContent>
          </Popover>
        </div>
      </CardHeader>
    </Card>
  );
}
