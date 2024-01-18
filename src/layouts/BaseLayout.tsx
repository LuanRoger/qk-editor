import React from "react";
import DragWindowRegion from "../components/DragWindowRegion";
import Footer from "../components/Footer";

export default function BaseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <DragWindowRegion />
      <div className="h-screen flex flex-col justify-stretch p-3 bg-background">
      {children}
        <Footer />
      </div>
    </>
  );
}
