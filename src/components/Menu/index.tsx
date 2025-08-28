import { HomeIcon, HistoryIcon, SettingsIcon, SunIcon } from "lucide-react";

export function Menu() {
  return (
    <nav className="flex items-center justify-center gap-6">
      <a
        href="#"
        className="inline items-center justify-center bg-primary rounded-2xl text-destructive-foreground p-5 hover:opacity-75 transition-all"
      >
        <HomeIcon size={24} />
      </a>
      <a
        href="#"
        className="inline items-center justify-center bg-primary rounded-2xl text-destructive-foreground p-5 hover:opacity-75 transition-all"
      >
        <HistoryIcon size={24} />
      </a>
      <a
        href="#"
        className="inline items-center justify-center bg-primary rounded-2xl text-destructive-foreground p-5 hover:opacity-75 transition-all"
      >
        <SettingsIcon size={24} />
      </a>
      <a
        href="#"
        className="inline items-center justify-center bg-primary rounded-2xl text-destructive-foreground p-5 hover:opacity-75 transition-all"
      >
        <SunIcon size={24} />
      </a>
    </nav>
  );
}
