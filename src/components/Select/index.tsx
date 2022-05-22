interface ISelectProps {
  title?: string,
  onChange(value: string): void
}


const Select: React.FC<ISelectProps> = ({ title, onChange }) => {
  return (
    <div>
      <label className="block">{title}</label>
      <select 
        name="cars" 
        id="cars" 
        className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none rounded-3xl w-full"
        onChange={(e) => onChange(e.target.value)}
      >
        <option>กรุณาเลือกประเทศ</option>
        <option value="Thailand">Thailand</option>
      </select>
    </div>
  )
}

export default Select
