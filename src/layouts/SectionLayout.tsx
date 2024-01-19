import React, { ReactNode } from "react";
import Footer from "../components/Footer";

interface SectionLayoutProps {
  children: ReactNode;
}

export default function SectionLayout({ children }: SectionLayoutProps) {
  return (
    <div className="h-full w-full flex flex-col justify-between">
      {children}
      <Footer />
    </div>
  );
}
