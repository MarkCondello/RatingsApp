import { useState, useContext, useEffect } from 'react'
import Card from './shared/Card'
import Button from './shared/Button'
import RatingSelect from './RatingSelect'
import FeedbackContext from '../context/FeedbackContext'

function FeedbackForm() {
  const [text, setText] = useState('')
  const [rating, setRating] = useState(10)
  const [message, setMessage] = useState(null)
  const [btnDisabled, setBtnDisabled] = useState(true)
  
  const { addFeedback, feedbackEdit, updateFeedback } = useContext(FeedbackContext)

  useEffect(() => {
    if (feedbackEdit.edit === true) {
      setBtnDisabled(false)
      setText(feedbackEdit.item.text)
      setRating(feedbackEdit.item.rating)
    }
  }, [feedbackEdit])

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
      const feedbackRating = {
        text,
        rating,
      }
      // console.log({feedbackRating})
      if (feedbackEdit.edit === true) {
        updateFeedback(feedbackEdit.item.id, feedbackRating)
      } else {
        addFeedback(feedbackRating)
      }
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
