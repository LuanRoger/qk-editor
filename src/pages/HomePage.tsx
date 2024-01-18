import React from "react";
import RichTextEditor from "../components/RichTextEditor";
import { Bold, Moon } from "lucide-react";
import { useEditor } from "@tiptap/react";
import Document from "@tiptap/extension-document";
import Paragraph from "@tiptap/extension-paragraph";
import Highlight from "@tiptap/extension-highlight";
import Text from "@tiptap/extension-text";
import TaskItem from "@tiptap/extension-task-item";
import TaskList from "@tiptap/extension-task-list";
import { Button } from "../components/ui/button";
import StarterKit from "@tiptap/starter-kit";
import { Separator } from "@radix-ui/react-separator";

export default function HomePage() {
  const editor = useEditor({
    editorProps: {
      attributes: {
        class: `prose dark:prose-invert max-w-none`,
      },
    },
    extensions: [
      Document.extend({
        content: "taskList",
      }),

      Paragraph,
      Text,
      Highlight,
      TaskList,
      TaskItem.extend({
        content: "inline*",
      }),
      StarterKit,
    ],
  });

  function toggleTheme() {
    const root = document.documentElement;
    root.classList.toggle("dark");
  }

  function toggleBold() {
    editor.chain().focus().toggleBold().run();
  }

  return (
    <>
      <div className="h-screen flex flex-col justify-stretch p-3 bg-background">
        <div>
          <Button variant="ghost" size="icon" onClick={toggleBold}>
            <Bold />
          </Button>
        </div>
        <Separator className="my-1" />
        <RichTextEditor editor={editor} />
        <Separator className="my-1" />
        <footer className="mb-6">
          <aside className="flex flex-row-reverse">
            <Button variant="ghost" size="icon" onClick={toggleTheme}>
              <Moon size={16} />
            </Button>
          </aside>
        </footer>
      </div>
    </>
  );
}
