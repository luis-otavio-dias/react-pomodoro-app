import "./global.css";
import { ThemeProvider } from "./components/ThemeProvider";
import { Container } from "./components/Container";
import { Logo } from "./components/Logo";
import { Menu } from "./components/Menu";
import { CountDown } from "./components/CountDown";
import { DefaultInput } from "./components/DefaultInput";
import { DefaultButton } from "./components/DefaultButton";
import { Cycles } from "./components/Cycles";
import { PlayCircleIcon } from "lucide-react";
import { Footer } from "./components/Footer";

export function App() {
  return (
    <ThemeProvider storageKey="storaged-theme">
      <Container>
        <Logo />
      </Container>

      <Container>
        <Menu />
      </Container>

      <Container>
        <CountDown />
      </Container>

      <Container>
        <form className="flex flex-col items-center justify-center gap-9">
          <div className="flex flex-col items-center justify-center gap-9 ">
            <DefaultInput
              id="myInput"
              type="text"
              labelText={"task"}
              placeholder="Write something..."
            />
          </div>

          <div className="flex flex-col items-center justify-center gap-9">
            <p>Lorem ipsum dolor sit amet.</p>
          </div>

          <div className="flex flex-col items-center justify-center gap-9">
            <Cycles />
          </div>

          <div className="flex flex-col items-center justify-center gap-9">
            <DefaultButton icon={<PlayCircleIcon />} color="primary" />
          </div>
        </form>
      </Container>

      <Container>
        <Footer />
      </Container>
    </ThemeProvider>
  );
}
