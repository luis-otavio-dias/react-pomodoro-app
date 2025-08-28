// import React from "react";
import "./global.css";
import { ThemeProvider } from "./components/ThemeProvider";
import { Container } from "./components/Container";
import { Logo } from "./components/Logo";
import { Menu } from "./components/Menu";
import { CountDown } from "./components/CountDown";
// import { TimerIcon } from "lucide-react";

export function App() {
  return (
    <ThemeProvider defaultTheme="dark">
      <Container>
        <Logo />
      </Container>
      <Container>
        <Menu />
      </Container>
      <Container>
        <CountDown />
      </Container>
      {/* <Heading>
        Olá Mundo, pqpeofoipaofjapojefnaajdsnv
        <button className="bg-amber-50">
          <TimerIcon color="black" />
        </button>
      </Heading> */}
    </ThemeProvider>
  );
}
