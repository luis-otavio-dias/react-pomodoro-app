import type { TaskModel } from "@/models/Task/TaskModel";

export function getNextCycleType(currentCycle: number): TaskModel["type"] {
  if (currentCycle === 8) return "longBreakTime";
  if (currentCycle % 2 === 0) return "shortBreakTime";
  return "workTime";
}
