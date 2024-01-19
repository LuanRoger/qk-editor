import React from "react";
import DragWindowRegion from "../components/DragWindowRegion";

export default function BaseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <DragWindowRegion />
      <main className="h-screen p-3 bg-background">{children}</main>
    </>
  );
}
