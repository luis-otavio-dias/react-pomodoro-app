import { useTaskContext } from "@/contexts/TaskContext/useTaskContext";

export function CountDown() {
  const { state } = useTaskContext();

  return (
    <div className="text-9xl md:text-[16rem] font-bold text-center leading-[1.3]">
      {state.formattedSecondsRemaining}
    </div>
  );
}
