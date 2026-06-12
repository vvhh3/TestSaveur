export function Section({ title, items }) {
  return (
    <div className="bg-[#f5f5f3] px-8 py-4 ">
      <div className="text-lg font-bold text-[#111] mb-3 border-b-2 w-fit border-b-[#c9a84c]">{title}</div>
      <div className="flex flex-col gap-1">
        {items.map((item, i) => (
          <div key={i} className="flex gap-2 text-[#222]">
            <span className="mt-2 w-1 h-1 rounded-full bg-[#c9a84c]"/>
            {item}
          </div>
        ))}
      </div>
    </div>
  )
}