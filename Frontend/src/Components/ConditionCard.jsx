export function ConditionCard({ title, label, lines }) {
  return (
    <div className="bg-white border border-[#e0e0dc] rounded-xl py-4">
      <div className="border-l-3 border-l-[#c9a84c] px-5">
        <div className="text-sm font-medium text-[#111] ">{title}</div>
        <div className="text-xs text-zinc-400 mb-2">{label}</div>
        {lines.map((line, i) => (
          <div key={i} className="text-black">{line}</div>
        ))}
      </div>
    </div>
  );
}