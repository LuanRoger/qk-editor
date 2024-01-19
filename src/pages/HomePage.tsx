import React, { ReactNode } from "react";

interface HomePageProps {
  children: ReactNode;
}

export default function HomePage({ children }: HomePageProps) {
  return (
    <div className="h-full w-full pt-3">
      {children}
    </div>
  );
}
