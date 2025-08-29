export function Cycles() {
  return (
    <div className="flex flex-col items-center justify-center gap-5">
      <span>Cycles:</span>
      <div className="flex gap-3">
        <span className="w-8 h-8 bg-amber-300 rounded-full"></span>
        <span className="w-8 h-8 bg-primary rounded-full"></span>
        <span className="w-8 h-8 bg-amber-300 rounded-full"></span>
        <span className="w-8 h-8 bg-emerald-500 rounded-full"></span>
      </div>
    </div>
  );
}
