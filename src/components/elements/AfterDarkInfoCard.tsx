export default function AfterDarkInfoCard({ text }: { text: string }) {
  return (
    <div
      className="afterdark-card py-2 px-3 text-gray-300 font-sans text-pretty"
      style={{
        borderColor: '#00689d',
        boxShadow: '0 0 15px 2px #00689d',
        borderWidth: '2px',
        borderStyle: 'solid',
      }}
    >
      <p>{text}</p>
    </div>
  )
}
