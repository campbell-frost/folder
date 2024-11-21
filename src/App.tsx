import { useState } from "react";
import ToggleTheme from "./components/ToggleTheme";
import { FolderOpen, FolderClosed, File } from "lucide-react";
import { type Folder, file } from "./assets/file";
import * as React from "react";
import { twMerge } from "tailwind-merge";

function Item({
  children,
  className,
  isOpen,
  isFile
}: {
  children: React.ReactNode,
  className?: string,
  isOpen?: boolean,
  isFile?: boolean
}) {
  return (
    <div className="flex items-center">
      {isFile ? <File /> : isOpen ? <FolderOpen /> : <FolderClosed />}
      <h1 className={twMerge("ml-2 group-hover:text-secondary", className)}>{children}</h1>
    </div>
  );
}

function Folder({ folder, onSelect, selectedId }: {
  folder: Folder,
  onSelect: (label: string) => void,
  selectedId: string | null
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col justify-center gap-y-2 items-start w-full">
      <div className={twMerge("group flex items-center hover:bg-muted cursor-pointer w-full px-2 py-1 rounded", selectedId === folder.label ? "bg-muted" : "")}
        onClick={() => {
          setIsOpen(!isOpen);
          onSelect(folder.label);
        }}>
        <Item isOpen={isOpen} isFile={!folder.children} children={folder.label} />
      </div>
      {isOpen && folder.children?.map(child => (
        <div key={child.label} className="ml-4 w-[calc(100%-1rem)]">
          <Folder folder={child} onSelect={onSelect} selectedId={selectedId} />
        </div>
      ))}
    </div>
  )
}

function App() {
  const [folder, _] = useState(file);
  const [selectedId, setSelectedId] = useState<string | null>(null);

  return (
    <div className="bg-background flex-col flex h-screen justify-center text-foreground items-start">
      <div className="absolute top-0 right-0 m-3 ">
        <ToggleTheme />
      </div>
      <div className="p-3 flex flex-col gap-y-2 w-60 h-full border-r-2">
        {folder.map(folder => (
          <Folder
            key={folder.label}
            folder={folder}
            onSelect={setSelectedId}
            selectedId={selectedId}
          />
        ))}
      </div>
    </div>
  )
}

export default App;