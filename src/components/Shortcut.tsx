import React, { ReactElement, ReactNode } from "react";
import Kbd from "./Kbd";

interface ShortcutProps {
  children: ReactElement<typeof Kbd> | ReactElement<typeof Kbd>[];
  name: string;
}

export default function Shortcut({ children, name }: ShortcutProps) {
  return (
    <small className="flex gap-1">
      <span className="flex gap-1 items-center">
        {children instanceof Array
          ? children.map((child, index) => (
              <>
                {child}
                {index !== children.length - 1 && <span>+</span>}
              </>
            ))
          : children}{" "}
        {name}
      </span>
    </small>
  );
}
