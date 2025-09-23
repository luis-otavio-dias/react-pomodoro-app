import "./global.css";
import { Home } from "./pages/Home";
// import { ThemeProvider, useTheme } from "./components/ThemeProvider";
import { TaskContextProvider } from "./contexts/TaskContext/TaskContextProvider";
import { ThemeProvider } from "./contexts/ThemeContext/ThemeProviderContext";
// import { use } from "react";

export function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="storaged-theme">
      <TaskContextProvider>
        <Home />
      </TaskContextProvider>
    </ThemeProvider>
  );
}
