const Select: React.FC = () => {
  return (
    <div>
      <label className="block">First name:</label>
      <select name="cars" id="cars" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none rounded-3xl w-full">
        <option value="volvo">Volvo</option>
        <option value="saab">Saab</option>
        <option value="opel">Opel</option>
        <option value="audi">Audi</option>
      </select>
    </div>
  )
}

export default Select
