import { useState } from "react";
import ToggleTheme from "./components/ToggleTheme";
import { FolderOpen, FolderClosed, File } from "lucide-react";

const root: Folder[] = [
  {
    label: "Home",
    children: [
      {
        label: "Documents",
        children: []
      },
      {
        label: "Pictures",
        children: []
      }
    ]
  },
  {
    label: "Settings",
    children: [
      {
        label: "Profile",
        children: [],
      },
      {
        label: "Appearance",
        children: [],
      },
      {
        label: "Security",
        children: [
          {
            label: "Password",
            children: []
          },
          {
            label: "2FA",
            children: []
          }
        ]
      }
    ]
  },
  {
    label: "Help",
    children: []
  }
];

type Folder = {
  label: string;
  children?: Folder[];
}

function Folder({ folder }: { folder: Folder }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="gap-y-2 flex flex-col items-start">
      <div className="flex items-center">
        {folder.children?.length === 0 ? <File /> : isOpen ? <FolderOpen /> : <FolderClosed />}
        <button className="ml-2" onClick={() => setIsOpen(!isOpen)}>
          {folder.label}
        </button>
      </div>
      {isOpen && folder.children?.map(child => (
        <div className="ml-4">
          <Folder folder={child} />
        </div>
      ))}
    </div>
  )
}

function App() {
  const [folder, setFolder] = useState(root);
  return (
    <div className="bg-background flex-col flex h-screen justify-center text-foreground items-center">
      <div className="absolute top-0 right-0 m-3 ">
        <ToggleTheme />
      </div>
      <div className="border-2 border-foreground rounded-md p-3 flex flex-col gap-y-2">
        {folder.map(folder => (
          <Folder folder={folder} />
        ))}
      </div>
    </div>
  )
}

export default App;