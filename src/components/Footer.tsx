import React, { ReactElement, useContext } from "react";
import ShortcutsList from "./ShortcutsList";
import Shortcut from "./Shortcut";
import Kbd from "./Kbd";
import { SectionContext } from "../App";
import ToggleThemeButton from "./ToggleThemeButton";

const editorShortcuts: ReactElement<typeof Shortcut>[] = [
  <Shortcut name="Exit">
    <Kbd>Alt</Kbd>
    <Kbd>F4</Kbd>
  </Shortcut>,
  <Shortcut name="Bold">
    <Kbd>Ctrl</Kbd>
    <Kbd>b</Kbd>
  </Shortcut>,
  <Shortcut name="Italic">
    <Kbd>Ctrl</Kbd>
    <Kbd>i</Kbd>
  </Shortcut>,
  <Shortcut name="Highlight">
    <Kbd>Ctrl</Kbd>
    <Kbd>Shift</Kbd>
    <Kbd>h</Kbd>
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
        <ToggleThemeButton/>
      </aside>
    </footer>
  );
}
