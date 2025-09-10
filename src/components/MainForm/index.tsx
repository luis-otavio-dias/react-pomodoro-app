import { DefaultInput } from "../DefaultInput";
import { DefaultButton } from "../DefaultButton";
import { Cycles } from "../Cycles";
import { PlayCircleIcon } from "lucide-react";
import { useTaskContext } from "@/contexts/TaskContext/useTaskContext";

export function MainForm() {
  const { setState } = useTaskContext();

  function handleClick() {
    setState((prevState) => {
      return {
        ...prevState,
        formattedSecondsRemaining: "25:00",
      };
    });
  }

  return (
    <form className="flex flex-col items-center justify-center gap-9">
      <button onClick={handleClick} type="button">
        Click
      </button>
      <div className="flex flex-col items-center justify-center gap-9 ">
        <DefaultInput
          id="myInput"
          type="text"
          labelText={"task"}
          placeholder="Write something..."
        />
      </div>

      <div className="flex flex-col items-center justify-center gap-9">
        <p> Next break will have 5 min </p>
      </div>

      <div className="flex flex-col items-center justify-center gap-9">
        <Cycles />
      </div>

      <div className="flex flex-col items-center justify-center gap-9">
        <DefaultButton icon={<PlayCircleIcon />} color="primary" />
      </div>
    </form>
  );
}
