import { ScrollArea } from "../components/ui/scroll-area";
import { Editor, EditorContent } from "@tiptap/react";
import React from "react";

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
      <EditorContent editor={editor} content="Digite aqui..." />
    </div>
  );
}
