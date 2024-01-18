import { Excalidraw, MainMenu } from "@excalidraw/excalidraw";
import React from "react";

export default function DrawnSection() {
  return (
    <div className="w-full h-full bg-red custom-styles">
      <Excalidraw langCode="pt-BR" theme="dark" zenModeEnabled/>
    </div>
  );
}
