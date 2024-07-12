import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { UserProfile } from "./components/user-profile";
import Image from "next/image";

interface GamemodeProps {
  title: string;
  description: string;
  image: string;
}

const games: GamemodeProps[] = [
  {
    title: "Solo Q",
    description: `Go it alone and rock the game solo! Pick from our cool lists or whip
          up your own custom challenge. It&apos;s you vs. the world!`,
    image: "/sprites/mizuki.png",
  },
  {
    title: "Join a Room",
    description: `Hop into a friend&apos;s room and join the fun! Don&apos;t forget
              to grab the secret password (if there is one). Get ready for some
              awesome team action!`,
    image: "/sprites/miku.png",
  },
  {
    title: "Be the Host",
    description: `Set up your own hangout spot for you and your crew! Invite up to 9
              buddies for maximum mayhem. Want to keep it exclusive? Slap a
              password on that room and make it VIP-only!`,
    image: "/sprites/ena.png",
  },
];

export default async function Page() {
  return (
    <div className="flex h-screen items-center justify-between flex-col p-10">
      <p className="text-balance h-16 w-[102%] bg-gradient-to-r from-purple-400 to-yellow-400 bg-clip-text text-center text-5xl font-extrabold tracking-tighter text-transparent  dark:bg-gradient-to-r dark:from-teal-400 dark:to-yellow-200">
        Anything Music Quiz
      </p>
      <div className="grid grid-cols-3 w-8/12 gap-4">
        {games.map((game, idx) => (
          <GameModeSelector
            key={idx}
            title={game.title}
            description={game.description}
            image={game.image}
          />
        ))}
      </div>
      <div className="place-content-end">
        <UserProfile />
      </div>
    </div>
  );
}

const GameModeSelector = ({ title, description, image }: GamemodeProps) => {
  return (
    <Card className="justify-around items-center flex flex-col scale-100 hover:scale-[1.05] active:scale-[0.98] cursor-pointer hover:bg-secondary duration-200 ease-in-out">
      <CardHeader className="text-center w-4/5">
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex justify-center">
        <Image src={image} width={200} height={100} alt="" />
      </CardContent>
    </Card>
  );
};
