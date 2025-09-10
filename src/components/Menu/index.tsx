import {
  HomeIcon,
  HistoryIcon,
  SettingsIcon,
  SunIcon,
  MoonIcon,
} from "lucide-react";
import { useTheme } from "../ThemeProvider";

export function Menu() {
  const { theme, changeTheme } = useTheme();

  const nextThemeIcon = {
    dark: <SunIcon />,
    light: <MoonIcon />,
    system: theme === "dark" ? <MoonIcon /> : <SunIcon />,
  };

  function handleThemeChange(
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) {
    event.preventDefault();
    changeTheme();
  }

  return (
    <nav className="flex items-center justify-center gap-6">
      <a
        href="#"
        aria-label="Home"
        title="Home"
        className="inline items-center justify-center bg-primary rounded-2xl text-destructive-foreground p-5 hover:opacity-75 transition-all"
      >
        <HomeIcon size={24} />
      </a>
      <a
        href="#"
        aria-label="History"
        title="History"
        className="inline items-center justify-center bg-primary rounded-2xl text-destructive-foreground p-5 hover:opacity-75 transition-all"
      >
        <HistoryIcon size={24} />
      </a>
      <a
        href="#"
        aria-label="Settings"
        title="Settings"
        className="inline items-center justify-center bg-primary rounded-2xl text-destructive-foreground p-5 hover:opacity-75 transition-all"
      >
        <SettingsIcon size={24} />
      </a>
      <a
        href="#"
        aria-label="Change Theme"
        title="Change Theme"
        className="inline items-center justify-center bg-primary rounded-2xl text-destructive-foreground p-5 hover:opacity-75 transition-all"
        onClick={handleThemeChange}
      >
        {nextThemeIcon[theme]}
      </a>
    </nav>
  );
}
