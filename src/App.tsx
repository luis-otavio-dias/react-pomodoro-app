import "./global.css";
import { ThemeProvider } from "./components/ThemeProvider";
import { Container } from "./components/Container";
import { Logo } from "./components/Logo";
import { Menu } from "./components/Menu";
import { CountDown } from "./components/CountDown";
import { DefaultInput } from "./components/DefaultInput";
import { Cycles } from "./components/Cycles";

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
      <Container>
        <form className="flex flex-col items-center justify-center gap-9">
          <div className="flex flex-col items-center justify-center gap-9 ">
            <DefaultInput
              id="myInput"
              type="text"
              labelText="Teste"
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
            <button>Enviar</button>
          </div>
        </form>
      </Container>
    </ThemeProvider>
  );
}
