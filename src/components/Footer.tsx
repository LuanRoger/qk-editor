import React from "react";
import { Button } from "./ui/button";
import { Moon } from "lucide-react";

export default function Footer() {
  function toggleTheme() {
    const root = document.documentElement;
    root.classList.toggle("dark");
  }

  return (
    <footer className="mb-6">
      <aside className="flex flex-row-reverse">
        <Button variant="ghost" size="icon" onClick={toggleTheme}>
          <Moon size={16} />
        </Button>
      </aside>
    </footer>
  );
}
