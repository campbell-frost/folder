import { createContext, useContext, useState, ReactNode, FC, useEffect } from "react";

type ThemeContextProps = {
  toggleTheme: () => void;
  dark: boolean;
}

export const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}

type ThemeProviderProps = {
  children: ReactNode;
}

export const ThemeProvider: FC<ThemeProviderProps> = ({ children }: ThemeProviderProps) => {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const isDark = localStorage.getItem('dark') === 'true';
    isDark ? document.documentElement.classList.add('dark') : document.documentElement.classList.remove('dark');
    setDark(isDark);
  }, []);

  const toggleTheme = () => {
    const isDark = document.documentElement.classList.contains('dark');
    isDark ? document.documentElement.classList.remove('dark') : document.documentElement.classList.add('dark');
    setDark(!isDark);

    localStorage.setItem('dark', JSON.stringify(!isDark));
  }

  return (
    <ThemeContext.Provider value={{ toggleTheme, dark }}>
      {children}
    </ThemeContext.Provider>
  )
}