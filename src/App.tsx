import { useState } from "react";
import ToggleTheme from "./components/ToggleTheme";
import { FolderOpen, FolderClosed, File } from "lucide-react";
import { type Folder, file } from "./assets/file";
import * as React from "react";
import { twMerge } from "tailwind-merge";

function Item({
  children,
  className
}: {
  children: React.ReactNode,
  className?: string
}) {
  return (
    <div className="flex items-center">
      <FolderOpen />
      <h1 className={twMerge("ml-2 group-hover:text-secondary", className)}>{children}</h1>
    </div>
  );
}

function Folder({ folder }: { folder: Folder }) {
  const [isOpen, setIsOpen] = useState(false);


  return (
    <div className="flex flex-col justify-center gap-y-2 items-start w-full" >
      <div className="group flex items-center hover:bg-muted cursor-pointer w-full px-2 py-1 rounded " onClick={() => { setIsOpen(!isOpen); folder.selected = !folder.selected }}>
        <Item className={folder.selected ? "text-primary" : ""}>
          <p className="ml-2 group-hover:text-secondary">
            {folder.label}
          </p>
        </Item>
      </div>
      {isOpen && folder.children?.map(child => (
        <div className="ml-4 w-[calc(100%-1rem)]">
          {/* ml-4 = 1rem */}
          <Folder folder={child} />
        </div>
      ))}
    </div>
  )
}

function App() {
  // for any snoopers im going to add state eventually
  const [folder, _] = useState(file);
  return (
    <div className="bg-background flex-col flex h-screen justify-center text-foreground items-start">
      <div className="absolute top-0 right-0 m-3 ">
        <ToggleTheme />
      </div>
      <div className=" p-3 flex flex-col gap-y-2 w-60 h-full border-r-2">
        {folder.map(folder => (
          <Folder folder={folder} />
        ))}
      </div>
    </div>
  )
}

export default App;