import { Separator } from "@radix-ui/react-separator";
import { useEditor } from "@tiptap/react";
import { Bold } from "lucide-react";
import React from "react";
import RichTextEditor from "../../components/RichTextEditor";
import { Button } from "../../components/ui/button";
import Document from "@tiptap/extension-document";
import Paragraph from "@tiptap/extension-paragraph";
import Highlight from "@tiptap/extension-highlight";
import Text from "@tiptap/extension-text";
import TaskItem from "@tiptap/extension-task-item";
import TaskList from "@tiptap/extension-task-list";
import StarterKit from "@tiptap/starter-kit";

export default function EditorSection() {
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

  function toggleBold() {
    editor.chain().focus().toggleBold().run();
  }

  return (
    <>
      <div>
        <Button variant="ghost" size="icon" onClick={toggleBold}>
          <Bold />
        </Button>
      </div>
      <Separator className="my-1" />
      <RichTextEditor editor={editor} />
      <Separator className="my-1" />
    </>
  );
}
