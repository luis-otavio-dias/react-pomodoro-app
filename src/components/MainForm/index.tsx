import { DefaultInput } from "../DefaultInput";
import { DefaultButton } from "../DefaultButton";
import { Cycles } from "../Cycles";
import { PlayCircleIcon, StopCircleIcon } from "lucide-react";
import { useRef } from "react";
import type { TaskModel } from "@/models/Task/TaskModel";
import { useTaskContext } from "@/contexts/TaskContext/useTaskContext";
import { getNextCycle } from "@/utils/getNextCycle";
import { getNextCycleType } from "@/utils/getNextCycleType";
import { TaskActionTypes } from "@/contexts/TaskContext/taskActions";

export function MainForm() {
  const { state, dispatch } = useTaskContext();
  const taskNameInput = useRef<HTMLInputElement>(null);

  const nextCycle = getNextCycle(state.currentCycle);
  const nextCycleType = getNextCycleType(nextCycle);

  function handleCreateNewTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (taskNameInput.current === null) return;

    const taskName = taskNameInput.current.value.trim();

    if (!taskName) {
      alert("Please enter a task name.");
      return;
    }

    const newTask: TaskModel = {
      id: Date.now().toString(),
      name: taskName,
      startDate: Date.now(),
      completeDate: null,
      interruptDate: null,
      duration: state.config[nextCycleType],
      type: nextCycleType,
    };

    dispatch({ type: TaskActionTypes.START_TASK, payload: newTask });
  }

  function handleInterruptTask() {
    dispatch({ type: TaskActionTypes.INTERRUPT_TASK });
  }

  return (
    <form
      onSubmit={handleCreateNewTask}
      className="flex flex-col items-center justify-center gap-9"
    >
      <div className="flex flex-col items-center justify-center gap-9 ">
        <DefaultInput
          id="myInput"
          type="text"
          labelText={"Task Name"}
          placeholder="Write something..."
          ref={taskNameInput}
          disabled={!!state.activeTask}
        />
      </div>

      <div className="flex flex-col items-center justify-center gap-9">
        <p> Next break will have 5 min </p>
      </div>

      {state.currentCycle > 0 && (
        <div className="flex flex-col items-center justify-center gap-9">
          <Cycles />
        </div>
      )}

      <div className="flex flex-col items-center justify-center gap-9">
        {!state.activeTask && (
          <DefaultButton
            aria-label="Start new task"
            title="Start new task"
            type="submit"
            icon={<PlayCircleIcon />}
            color="primary"
            key="start-task-button"
          />
        )}

        {!!state.activeTask && (
          <DefaultButton
            aria-label="Stop current task"
            title="Stop current task"
            type="button"
            icon={<StopCircleIcon />}
            color="red"
            onClick={handleInterruptTask}
            key="stop-task-button"
          />
        )}
      </div>
    </form>
  );
}
