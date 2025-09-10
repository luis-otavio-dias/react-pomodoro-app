import { MainTemplate } from "../../templates/MainTemplate";
import { Container } from "../../components/Container";
import { GenericHtml } from "../../components/GenericHtml";
import { Heading } from "../../components/Heading";

export function AboutPomodoro() {
  return (
    <MainTemplate>
      <Container>
        <GenericHtml>
          <Heading>A Técnica Pomodoro</Heading>
          <p className="text-3x1 mt-1 mb-7">
            A Técnica Pomodoro é uma metodologia de produtividade criada por{" "}
            <strong>Francesco Cirillo</strong>, que consiste em dividir o
            trabalho em blocos de tempo (os famosos "Pomodoros") intercalados
            com pausas. O objetivo é manter o foco total por um período curto e
            garantir descansos para evitar o cansaço mental.
          </p>

          <img
            className="max-w-full h-auto rounded-xl block mx-[1.6rem]"
            src="https://placehold.co/1920x1080"
            alt=""
          />

          <h2 className="text-4xl my-5 font-bold">
            Como funciona o Pomodoro tradicional?
          </h2>

          <ul className="pl-10 list-disc">
            <li className="mb-2">
              <strong>1. Defina uma tarefa</strong> que você deseja realizar.
            </li>

            <li className="mb-2">
              <strong>2. Trabalhe nela por 25 minutos</strong> sem interrupções.
            </li>

            <li className="mb-2">
              <strong>3. Faça uma pausa curta de 5 minutos</strong>.
            </li>

            <li className="mb-2">
              <strong>4. A cada 4 ciclos, faça uma pausa longa</strong>{" "}
              (geralmente 15 a 30 minutos).
            </li>
          </ul>

          <h2 className="text-4xl mb-5">
            Mas no <strong>Chronos Pomodoro</strong> tem um diferencial 🚀
          </h2>

          <p className="text-3x1 mb-7">
            Nosso app segue o conceito original, mas com algumas melhorias e
            personalizações pra deixar o processo ainda mais eficiente:
          </p>

          <h3 className="text-3xl mb-4">⚙️ Personalização do tempo</h3>

          <p className="text-3x1 mb-7">
            Você pode configurar o tempo de foco, descanso curto e descanso
            longo do jeito que quiser! Basta acessar a{" "}
            <a
              className="text-2xl text-primary font-bold hover:underline"
              href="/settings"
            >
              página de configurações
            </a>{" "}
            e ajustar os minutos como preferir.
          </p>

          <h3 className="text-3xl mb-4">🔁 Ciclos organizados em sequência</h3>

          <p className="text-3x1 mb-7">
            A cada ciclo completado, uma nova task é adicionada automaticamente
            ao seu histórico, e o app já sugere o próximo ciclo (foco ou
            descanso).
          </p>

          <p className="text-3x1 mb-7">
            <strong>Nosso padrão:</strong>
          </p>

          <ul className="pl-10 list-disc">
            <li className="mb-2">
              Ciclos <strong>ímpares</strong>: Trabalho (foco).
            </li>

            <li className="mb-2">
              Ciclos <strong>pares</strong>: Descanso curto.
            </li>

            <li className="mb-2">
              Ciclo <strong>8</strong>: Descanso longo especial, pra resetar o
              ciclo completo.
            </li>
          </ul>

          <h3 className="text-3xl mb-4">🍅 Visualização dos ciclos</h3>

          <p className="text-3x1 mb-7">
            Logo abaixo do cronômetro, você verá bolinhas coloridas
            representando os ciclos:
          </p>

          <ul className="pl-10 list-disc">
            <li className="mb-2">🟡 Amarelo: Ciclo de trabalho (foco).</li>

            <li className="mb-2">🟢 Verde: Descanso curto.</li>

            <li className="mb-2">
              🔵 Azul: Descanso longo (aparece a cada 8 ciclos).
            </li>
          </ul>

          <p className="text-3x1 mb-7">
            Assim, você sempre sabe em que parte do processo está e o que vem a
            seguir. Não precisa mais anotar no papel ou ficar calculando de
            cabeça!
          </p>

          <h3 className="text-3xl mb-4">📊 Histórico automático</h3>

          <p className="text-3x1 mb-7">
            Todas as suas tarefas e ciclos concluídos ficam salvos no{" "}
            <a
              className="text-2xl text-primary font-bold hover:underline"
              href="/history"
            >
              histórico
            </a>
            , com status de completas ou interrompidas. Assim, você consegue
            acompanhar sua evolução ao longo do tempo.
          </p>

          <h2 className="text-4xl mb-5">Por que usar o Chronos Pomodoro?</h2>

          <ul className="pl-10 list-disc">
            <li className="mb-2">✅ Organize seu foco com clareza.</li>

            <li className="mb-2">✅ Trabalhe e descanse na medida certa.</li>

            <li className="mb-2">
              ✅ Personalize seus próprios ciclos e tempos.
            </li>

            <li className="mb-2">
              ✅ Acompanhe seu histórico automaticamente.
            </li>
          </ul>

          <p className="text-3x1 mb-7">
            <strong>Pronto pra focar?</strong> Bora lá{" "}
            <a
              className="text-2xl text-primary font-bold hover:underline"
              href="/"
            >
              voltar para a página inicial
            </a>{" "}
            e iniciar seus Pomodoros! 🍅🚀
          </p>

          <p className="text-3x1 mb-7">
            <em>"Foco total, sem pressa, sem pausa, só vai!"</em> 💪🧘‍♂️
          </p>
        </GenericHtml>
      </Container>
    </MainTemplate>
  );
}
