import { useState } from "react";
import ToggleTheme from "./components/ToggleTheme";
import { FolderOpen, FolderClosed, File } from "lucide-react";

const root: Folder[] = [
  {
    label: "src",
    children: [
      {
        label: "components",
        children: [
          {
            label: "ToggleTheme.tsx",
          }
        ]
      },
      {
        label: "hooks",
        children: [
          {
            label: "Theme.tsx",
          }
        ]
      },
      {
        label: "App.tsx",
      },
      {
        label: "index.css",
      },
      {
        label: "main.tsx",
      },
      {
        label: "vite-env.d.ts",
      }
    ]
  },
  {
    label: ".gitignore",
  },
  {
    label: "eslint.config.js",
  },
  {
    label: "index.html",
  },
  {
    label: "package-lock.json",
  },
  {
    label: "package.json",
  },
  {
    label: "postcss.config.js",
  },
  {
    label: "README.md",
  },
  {
    label: "tailwind.config.js",
  },
  {
    label: "tsconfig.json",
  },
  {
    label: "vite.config.ts",
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
        <div className="flex items-center rounded px-2 py-1 hover:bg-muted cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
          {!folder.children ? <File className="icon-sm" /> : isOpen ? <FolderOpen className="icon-sm" /> : <FolderClosed className="icon-sm" />}
          <p className="ml-2 group-hover:text-primary">
            {folder.label}
          </p>
        </div>
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
  // for any snoopers im going to add state eventually
  const [folder, _] = useState(root);
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