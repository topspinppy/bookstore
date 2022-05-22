interface IInputProps {
  title?: string
  onChange?(value: string): void
}

const Input: React.FC<IInputProps> = ({ title, onChange }) => {
  return (
    <div>
      <label className="block">{title}</label>
      <input
        className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none rounded-3xl w-full"
        onChange={(e) => {
          onChange && onChange(e.target.value)
        }}
      />
    </div>
  )
}

export default Input
