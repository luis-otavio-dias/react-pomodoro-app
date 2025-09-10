import "./global.css";
import { Home } from "./pages/Home";
import { ThemeProvider } from "./components/ThemeProvider";
import { TaskContextProvider } from "./contexts/TaskContext/TaskContextProvider";

export function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="storaged-theme">
      <TaskContextProvider>
        <Home />
      </TaskContextProvider>
    </ThemeProvider>
  );
}
