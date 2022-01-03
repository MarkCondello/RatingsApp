function AuthorSelector({select}) {
  const handleChange = (ev) => {
    console.log('reached handleChange, val', ev.target.value)
    select(`${ev.target.value.charAt(0).toUpperCase()}${ev.target.value.slice(1)}`)
  }

  return (
    <div>
      <select name="author" onChange={handleChange}>
        <option value="joe">Joe</option>
        <option value="bloggs">Bloggs</option>
        <option value="henry">Henry</option>
        <option value="hoe">Hoe</option>
      </select>
    </div>
  )
}

export default AuthorSelector
