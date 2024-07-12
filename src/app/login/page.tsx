import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { SiDiscord } from "react-icons/si";
import { providerMap, signIn } from "@/auth";

import { RandomText } from "@/components/random-text";
import Image from "next/image";
import { AMQLogo } from "@/components/logo";
import { TwitterLink } from "@/components/twitter";
import { Separator } from "@/components/ui/separator";

export default async function LoginPage() {
  return (
    <>
      <section className="flex h-screen w-screen justify-between bg-primary">
        <div className="flex flex-col justify-between p-5">
          <AMQLogo />
          <RandomText />
          <p>
            Made with 🩷 from <TwitterLink className="text-yellow-400" />
          </p>
        </div>
        <div className="relative flex h-full w-[500px] flex-col items-center justify-center bg-accent">
          <div className="relative flex h-full w-4/5 flex-col items-center justify-center">
            <div className="flex flex-col items-center justify-center gap-5">
              <p className="mb-4 text-4xl font-bold text-foreground">
                Welcome back!
              </p>
              <div className="flex flex-col w-full">
                {Object.values(providerMap).map((provider) => (
                  <form
                    key={provider.id}
                    action={async (formData) => {
                      "use server";
                      if (provider.id === "credentials") {
                        await signIn(provider.id, {
                          redirectTo: "/",
                          password: formData.get("password"),
                        });
                      } else {
                        await signIn(provider.id, { redirectTo: "/" });
                      }
                    }}
                  >
                    {provider.id === "credentials" && (
                      <div className="space-y-4 mb-4">
                        <Input
                          required
                          placeholder="Email"
                          name="email"
                          type="email"
                        />
                        <Input
                          required
                          placeholder="Password"
                          name="password"
                          type="password"
                        />
                      </div>
                    )}
                    {provider.id === "credentials" ? (
                      <Button className="w-full gap-2 text-center">
                        <p>Sign in</p>
                      </Button>
                    ) : (
                      <>
                        <div className="flex items-center justify-center w-full text-xs uppercase my-6">
                          <div className="flex-grow h-px bg-foreground/50"></div>
                          <span className="px-2">OR</span>
                          <div className="flex-grow h-px bg-foreground/50"></div>
                        </div>
                        <Button
                          variant="outline"
                          className="justify-start border-foreground/30 w-full gap-4 bg-foreground text-background"
                        >
                          <SiDiscord size={20} color="#5865F2" />
                          Lanjutkan dengan {provider.name}
                        </Button>
                      </>
                    )}
                  </form>
                ))}
              </div>

              <div className="flex gap-2">
                <p className="text-sm">Don&apos;t have an account?</p>
                <Link href="/signup" className="text-sm text-[#D36A7B]">
                  Register
                </Link>
              </div>
            </div>
            <div className="relative top-[25%] flex flex-col items-center">
              <div className="flex">
                <p className="text-lg">Anything Music Quiz</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
