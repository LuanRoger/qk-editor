import React from "react";
import { Tabs, TabsList, TabsTrigger } from "./ui/tabs";
import { Edit2, Presentation } from "lucide-react";

interface NavBarProps {
  onChange?: (value: string) => void;
}
interface NavBarItemProps {
  value: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
}

export default function NavBar({ onChange }: NavBarProps) {
  return (
    <Tabs className="w-[400px]" onValueChange={onChange}>
      <TabsList defaultValue={"editor"} className="grid grid-cols-2">
        <NavBarItem value="editor" icon={<Edit2 size={16} />}>
          Editor
        </NavBarItem>
        <NavBarItem value="whiteboard" icon={<Presentation size={16} />}>
          Whiteboard
        </NavBarItem>
      </TabsList>
    </Tabs>
  );
}

function NavBarItem({ value, children, icon }: NavBarItemProps) {
  return (
    <TabsTrigger value={value} className="flex flex-row gap-2">
      {icon && icon}
      {children}
    </TabsTrigger>
  );
}
