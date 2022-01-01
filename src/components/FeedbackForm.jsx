import { useState } from 'react'
import Card from './shared/Card'
import Button from './shared/Button'
function FeedbackForm() {
  const [text, setText] = useState('')
  const [message, setMessage] = useState(null)
  const [btnDisabled, setBtnDisabled] = useState(true)

  let handleTextChange = (ev) => {
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
   return (
    <Card>
      <form>
        <h2>How would you rate your service with us?</h2>
        {/* @todo - rating select component */}
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
