import { Excalidraw, MainMenu } from "@excalidraw/excalidraw";
import React from "react";
import SectionLayout from "../../layouts/SectionLayout";

export default function DrawnSection() {
  return (
    <SectionLayout>
      <div className="w-full h-full bg-red custom-styles">
        <Excalidraw langCode="pt-BR" theme="dark" zenModeEnabled />
      </div>
    </SectionLayout>
  );
}
