"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

export function ModeToggle() {
  const { setTheme, theme } = useTheme();
  const themeInvert = theme === "dark" ? "light" : "dark";
  return (
    <Button
      onClick={() => setTheme(themeInvert)}
      variant="ghost"
      className="w-full text-left flex justify-between"
    >
      <span className="font-normal w-full">{`Set theme to ${themeInvert}`}</span>
      {theme === "dark" ? <Sun strokeWidth={1} /> : <Moon strokeWidth={1} />}
    </Button>
  );
}
