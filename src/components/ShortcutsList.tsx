import React, { ReactElement } from "react";
import Shortcut from "./Shortcut";
import { Separator } from "./ui/separator";

interface ShortcutsListProps {
  kbdList: ReactElement<typeof Shortcut>[];
}

export default function ShortcutsList({ kbdList }: ShortcutsListProps) {
  return (
    <ul className="flex flex-row items-center gap-2 transition-opacity duration-300 
    opacity-40 hover:opacity-100">
      {kbdList.map((kbd, index) => (
        <>
          <li key={index}>{kbd}</li>
          <Separator orientation="vertical" />
        </>
      ))}
    </ul>
  );
}
