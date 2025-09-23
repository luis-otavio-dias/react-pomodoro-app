import { useTaskContext } from "@/contexts/TaskContext/useTaskContext";
import { getNextCycle } from "@/utils/getNextCycle";
import { getNextCycleType } from "@/utils/getNextCycleType";
import clsx from "clsx";

export function Cycles() {
  const { state } = useTaskContext();

  const cycleStep = Array.from({ length: state.currentCycle });

  const cycleDescriptionMap = {
    workTime: "Work time",
    shortBreakTime: "Short break",
    longBreakTime: "Long break",
  };

  const cycleColorMap = {
    workTime: "bg-amber-300",
    shortBreakTime: "bg-emerald-500",
    longBreakTime: "bg-primary",
  };

  return (
    <div className="flex flex-col items-center justify-center gap-5">
      <span>Cycles:</span>
      <div className="flex gap-3">
        {cycleStep.map((_, index) => {
          const nextCycle = getNextCycle(index);
          const nextCycleType = getNextCycleType(nextCycle);

          return (
            <span
              key={`${nextCycleType}_${nextCycle}`}
              className={clsx(["w-8", "h-8", "rounded-full"], {
                [cycleColorMap[nextCycleType]]: true,
              })}
              aria-label={`${cycleDescriptionMap[nextCycleType]} cycle`}
              title={`${cycleDescriptionMap[nextCycleType]} cycle`}
            ></span>
          );
        })}
      </div>
    </div>
  );
}
