import {useState, useContext, useEffect} from 'react'
import FeedbackContext from '../context/FeedbackContext'

function RatingSelect({ select }) {
  const [selected, setSelected] = useState(10)
  
  const { feedbackEdit } = useContext(FeedbackContext)
  useEffect(() => {
    setSelected(feedbackEdit.item.rating)
  }, [feedbackEdit])

  const handleChange = (ev) => {
    // console.log('Reached handleChange, val:', parseInt(ev.currentTarget.value))
    setSelected(parseInt(ev.currentTarget.value))
    select(parseInt(ev.currentTarget.value)) // select function passed in from FeedbackForm as a prop gets the updated rating value selected
  }
  return (
    <ul className="rating">
      <li><input value="1" type="radio" name="rating" id="num1" checked={selected === 1} onChange={handleChange} /><label htmlFor="num1">1</label></li>
      <li><input value="2" type="radio" name="rating" id="num2" checked={selected === 2} onChange={handleChange} /><label htmlFor="num2">2</label></li>
      <li><input value="3" type="radio" name="rating" id="num3" checked={selected === 3} onChange={handleChange} /><label htmlFor="num3">3</label></li>
      <li><input value="4" type="radio" name="rating" id="num4" checked={selected === 4} onChange={handleChange} /><label htmlFor="num4">4</label></li>
      <li><input value="5" type="radio" name="rating" id="num5" checked={selected === 5} onChange={handleChange} /><label htmlFor="num5">5</label></li>
      <li><input value="6" type="radio" name="rating" id="num6" checked={selected === 6} onChange={handleChange} /><label htmlFor="num6">6</label></li>
      <li><input value="7" type="radio" name="rating" id="num7" checked={selected === 7} onChange={handleChange} /><label htmlFor="num7">7</label></li>
      <li><input value="8" type="radio" name="rating" id="num8" checked={selected === 8} onChange={handleChange} /><label htmlFor="num8">8</label></li>
      <li><input value="9" type="radio" name="rating" id="num9" checked={selected === 9} onChange={handleChange} /><label htmlFor="num9">9</label></li>
      <li><input value="10" type="radio" name="rating" id="num10" checked={selected === 10} onChange={handleChange} /><label htmlFor="num10">10</label></li>
    </ul>
  )
}

export default RatingSelect
