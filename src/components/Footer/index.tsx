export function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center text-2xl text-muted-foreground gap-6">
      <a href="#" className="hover:underline">
        Saiba mais sobre a técnica pomodoro
      </a>
      <a href="#" className="hover:underline">
        Pomodoro App &copy; {new Date().getFullYear()}{" "}
      </a>
    </footer>
  );
}
