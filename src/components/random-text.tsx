"use client";
import { useEffect, useState } from "react";

export function RandomText() {
  const arrayOfText = [
    "anime",
    "eroge",
    "otoge",
    "youtube",
    "k-pop",
    "j-pop",
    "pop",
  ];
  const [text, setText] = useState(arrayOfText[0]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => {
        const newIndex = (prevIndex + 1) % arrayOfText.length;
        setText(arrayOfText[newIndex]);
        return newIndex;
      });
    }, 1000);

    return () => clearInterval(intervalId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index]);

  return (
    <h1 className="w-[800px] text-8xl font-black tracking-tighter">
      Play your {text} music quiz. <br />
      Easily.
    </h1>
  );
}
