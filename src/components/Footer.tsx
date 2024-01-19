import React, { ReactElement } from "react";
import { Button } from "./ui/button";
import { Moon } from "lucide-react";
import ShortcutsList from "./ShortcutsList";
import Shortcut from "./Shortcut";
import Kbd from "./Kbd";

const shortcuts: ReactElement<typeof Shortcut>[] = [
  <Shortcut name="Exit">
    <Kbd>Alt</Kbd>
    <Kbd>F4</Kbd>
  </Shortcut>,
];

export default function Footer() {
  function toggleTheme() {
    const root = document.documentElement;
    root.classList.toggle("dark");
  }

  return (
    <footer className="flex items-center justify-between mb-16">
      <aside>
        <ShortcutsList kbdList={shortcuts} />
      </aside>
      <aside>
        <Button variant="ghost" size="icon" onClick={toggleTheme}>
          <Moon size={16} />
        </Button>
      </aside>
    </footer>
  );
}
