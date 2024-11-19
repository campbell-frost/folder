import { Moon, Sun } from "lucide-react";
import { useTheme } from "../hooks/Theme";

export default function ToggleTheme() {
  const { toggleTheme, dark } = useTheme();

  return (
    <button onClick={toggleTheme} className="mx-1 p-2 bg-card rounded-md text-foreground border-2">
      {dark ? <Moon /> : <Sun />}
    </button>
  )
}