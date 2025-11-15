export default function Button({ id, text }: { id: string; text: string }) {
  return (
    <button id={id} className="w-[15rem] h-[4rem] bg-[var(--color-primary)] rounded cursor-pointer">
      <h2 className="text-base font-bold text-black text-balance text-center">{text}</h2>
    </button>
  )
}
