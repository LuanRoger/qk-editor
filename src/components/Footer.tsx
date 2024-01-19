import React, { ReactElement, useContext } from "react";
import { Button } from "./ui/button";
import { Moon } from "lucide-react";
import ShortcutsList from "./ShortcutsList";
import Shortcut from "./Shortcut";
import Kbd from "./Kbd";
import { SectionContext } from "../App";

const editorShortcuts: ReactElement<typeof Shortcut>[] = [
  <Shortcut name="Exit">
    <Kbd>Alt</Kbd>
    <Kbd>F4</Kbd>
  </Shortcut>,
];
const whiteboardShortcuts: ReactElement<typeof Shortcut>[] = [
  <Shortcut name="Exit">
    <Kbd>Alt</Kbd>
    <Kbd>F4</Kbd>
  </Shortcut>,
];

export default function Footer() {
  const section = useContext(SectionContext);

  function toggleTheme() {
    const root = document.documentElement;
    root.classList.toggle("dark");
  }

  return (
    <footer className="flex items-center justify-between mb-16">
      <aside>
        {
          <ShortcutsList
            kbdList={
              section === "editor" ? editorShortcuts : whiteboardShortcuts
            }
          />
        }
      </aside>
      <aside>
        <Button variant="ghost" size="icon" onClick={toggleTheme}>
          <Moon size={16} />
        </Button>
      </aside>
    </footer>
  );
}
