import ToggleTheme from "./components/ToggleTheme";

const root: Folder[] = [
  {
    label: "Home",
    icon: "home",
    children: []
  },
  {
    label: "Settings",
    icon: "settings",
    children: [
      {
        label: "Profile",
        icon: "user",
        children: []
      },
    ]
  }

]

type Folder = {
  label: string;
  icon?: string;
  children?: Folder[];
}

function App() {
  return (
    <div className="bg-background flex h-screen justify-center text-foreground items-center m-0 p-0">
      <div className="absolute top-0 right-0 m-3 ">
        <ToggleTheme />
      </div>
      <h1>hi</h1>
    </div>
  )
}

export default App
