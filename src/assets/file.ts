export type Folder = {
  label: string;
  selected?: boolean;
  children?: Folder[];
}

export const file: Folder[] = [
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