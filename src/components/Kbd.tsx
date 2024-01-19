import React from "react";

interface KbdProps {
  children: React.ReactNode;
}

export default function Kbd({ children }: KbdProps) {
  return (
    <kbd className="pointer-events-none select-none rounded border 
     bg-muted px-1.5 font-mono font-medium opacity-100">
      {children}
    </kbd>
  );
}
