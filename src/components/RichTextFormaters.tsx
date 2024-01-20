import React from "react";
import { Button } from "./ui/button";
import { Tooltip } from "./ui/tooltip";
import { TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip";
import { Separator } from "./ui/separator";
import { Editor } from "@tiptap/react";
import { capitalizeAllWords } from "../lib/text_utils";
import { log } from "console";

interface RichTextFormatersProps {
  editor: Editor;
}
interface TooltipedButtonProps {
  triggerText: string;
  onClick?: () => void | undefined;
  tooltipText: string;
}

export default function RichTextFormaters({ editor }: RichTextFormatersProps) {
  function toUpercase() {
    const upercaseContent = editor.getHTML().toUpperCase();
    editor.chain().setContent(upercaseContent).run();
  }
  function toCaptilize() {
    const capitalizedContent = capitalizeAllWords(editor.getText());
    editor.chain().setContent(capitalizedContent).run();
  }

  return (
    <div className="flex gap-2 items-center">
      <small className="font-mono">FORMATERS:</small>
      <TooltipedButton
        triggerText="UPC"
        tooltipText="UPERCASE"
        onClick={toUpercase}
      />
      {/* <Separator orientation="vertical" />
      <TooltipedButton
        triggerText="CAP"
        tooltipText="Captilize"
        onClick={toCaptilize}
      /> */}
    </div>
  );
}

function TooltipedButton({
  triggerText,
  onClick,
  tooltipText,
}: TooltipedButtonProps) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline" size="sm" onClick={onClick}>
            {triggerText}
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>{tooltipText}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
