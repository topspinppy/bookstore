
interface IInputProps {
  title?: string
}

const Input: React.FC<IInputProps> = ({ title }) => {
  return (
    <div>
      <label className="block">{title}</label>
      <input className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none rounded-3xl w-full" />
    </div>
  )
}

export default Input
