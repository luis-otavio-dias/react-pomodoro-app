import type { TaskStateModel } from "@/models/Task/TaskStateModel";
import { initialTaskState } from "./initialTaskState";
import { createContext } from "react";
import type { TaskActionModel } from "./taskActions";

type TaskContextProps = {
  state: TaskStateModel;
  dispatch: React.Dispatch<TaskActionModel>;
};

const initialContextValue = {
  state: initialTaskState,
  dispatch: () => {},
};

export const TaskContext = createContext<TaskContextProps>(initialContextValue);
