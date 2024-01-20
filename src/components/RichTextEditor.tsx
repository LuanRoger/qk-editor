import { ScrollArea } from "../components/ui/scroll-area";
import { BubbleMenu, Editor, EditorContent } from "@tiptap/react";
import React from "react";
import BubbleRichEditorMenu from "./BubbleRichEditorMenu";

interface EditorProps {
  editor: Editor;
}

export default function RichTextEditor({ editor }: EditorProps) {
  return (
    <div
      className="max-w-full h-full scrollbar rounded-md overflow-y-scroll border border-input bg-background
      px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2
      focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
    >
      <BubbleMenu
        editor={editor}
        tippyOptions={{ duration: 300, animation: "fade" }}
      >
        <BubbleRichEditorMenu editor={editor} />
      </BubbleMenu>
      <EditorContent editor={editor} content="Digite aqui..." />
    </div>
  );
}
