import { useState } from 'react'
import Card from './shared/Card'
import Button from './shared/Button'
import RatingSelect from './RatingSelect'
function FeedbackForm({handleAdd}) {
  const [text, setText] = useState('')
  const [rating, setRating] = useState(10)
  const [message, setMessage] = useState(null)
  const [btnDisabled, setBtnDisabled] = useState(true)

  const handleTextChange = (ev) => {
    setText(ev.target.value)
    if(text === '') {
      setMessage('')
      setBtnDisabled(true)
    } 
    else if (text !== '' && text.trim().length <= 10) {
      setMessage('Text must be at least 10 characters')
      setBtnDisabled(true)
    } 
    else {
      setMessage(null)
      setBtnDisabled(false)
    }
  }
  const handleSubmit = (ev) => {
    ev.preventDefault();
    if(text.trim().length > 10) {
      const newFeedback = {
        text,
        rating,
      }
      // console.log({newFeedback})
      handleAdd(newFeedback)
      setText('')
      setRating(10)
    }
  }
   return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate our service?</h2>
        {/* We receive the rating as a param from RatingSelect and set the updated value */}
        <RatingSelect select={(rating) => setRating(rating)} />
        <div className="input-group">
          <input 
            onChange={handleTextChange} 
            value={text} 
            type="text" 
            placeholder='Write a review'
          />
          <Button type='submit' isDisabled={btnDisabled}>Send</Button>
        </div>
        {message && <div className='message'>{message}</div>}
      </form>
    </Card>
  )
}

export default FeedbackForm
