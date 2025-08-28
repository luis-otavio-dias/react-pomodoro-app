import { TimerIcon } from "lucide-react";

export function Logo() {
  return (
    <div className="flex items-center justify-center gap-9 pt-12">
      <a
        href="#"
        className="flex flex-col items-center justify-center gap-5 text-6xl font-bold text-primary hover:opacity-75 transition-all"
      >
        <TimerIcon size={64} />
        <span>Chronos</span>
      </a>
    </div>
  );
}
