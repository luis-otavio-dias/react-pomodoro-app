import { MainTemplate } from "../../templates/MainTemplate";
import { Container } from "../../components/Container";
import { GenericHtml } from "../../components/GenericHtml";
import { Heading } from "../../components/Heading";

export function NotFound() {
  return (
    <MainTemplate>
      <Container>
        <GenericHtml>
          <Heading>404 - Página não encontrada 🚀</Heading>

          <p className="text-3x1 mt-1 mb-7">
            Opa! Parece que a página que você está tentando acessar não existe.
            Talvez ela tenha tirado férias, resolvido explorar o universo ou se
            perdido em algum lugar entre dois buracos negros. 🌌
          </p>

          <p className="text-3x1 mt-1 mb-7">
            Mas calma, você não está perdido no espaço (ainda). Dá pra voltar em
            segurança para a{" "}
            <a
              className="text-2xl text-primary font-bold hover:underline"
              href="/"
            >
              página principal
            </a>{" "}
            ou{" "}
            <a
              className="text-2xl text-primary font-bold hover:underline"
              href="/history"
            >
              para o histórico
            </a>{" "}
            — ou pode ficar por aqui e fingir que achou uma página secreta que
            só os exploradores mais legais conseguem acessar. 🧭✨
          </p>

          <p className="text-3x1 mt-1 mb-7">
            Se você acha que essa página deveria existir (ou se quiser bater um
            papo sobre viagem no tempo e buracos de minhoca), é só entrar em
            contato. Caso contrário, use o menu para voltar ao mundo real.
          </p>

          <p className="text-3x1 mt-1 mb-7">
            Enquanto isso, fica aqui uma reflexão: "Se uma página não existe na
            internet, será que ela existiu de verdade?" 🤔💭
          </p>
        </GenericHtml>
      </Container>
    </MainTemplate>
  );
}
