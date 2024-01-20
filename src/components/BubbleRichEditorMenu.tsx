import { Editor } from "@tiptap/react";
import { Button } from "./ui/button";
import { Bold, Italic, Strikethrough } from "lucide-react";
import React from "react";

interface BubbleRichEditorMenuProps {
  editor: Editor;
}

export default function BubbleRichEditorMenu({
  editor,
}: BubbleRichEditorMenuProps) {
  function toggleBold() {
    editor.chain().focus().toggleBold().run();
  }
  function toggleItalic() {
    editor.chain().focus().toggleItalic().run();
  }
  function toggleStrikethrough() {
    editor.chain().focus().toggleStrike().run();
  }

  return (
    <div className="flex flex-row gap-2 p-2 rounded-md bg-muted-foreground shadow-md">
      <Button variant="outline" size="sm" onClick={toggleBold}>
        <Bold size={12} />
      </Button>
      <Button variant="outline" size="sm" onClick={toggleItalic}>
        <Italic size={12} />
      </Button>
      <Button variant="outline" size="sm" onClick={toggleStrikethrough}>
        <Strikethrough size={12} />
      </Button>
    </div>
  );
}
