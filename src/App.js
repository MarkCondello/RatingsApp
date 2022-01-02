import { v4 as uuidv4} from 'uuid'
import { useState } from 'react'
import FeedbackData from './data/Feedbackdata'
import Header from './components/Header'
import FeedbackList from './components/FeedbackList'
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'

function App() {
  const [feedback, setFeedback] = useState(FeedbackData)
  const deleteFeedback = ((id) => {
    // console.log('from App.js', {id})
    if(window.confirm('Are you sure you want to delete this item?')) {
      setFeedback(feedback.filter(item => item.id !== id))
    }
  })
  const addFeedback = (newFeedback => {
    newFeedback.id = uuidv4()
    console.log('From App: ', {newFeedback})
    setFeedback([newFeedback, ...feedback] )
  })
  return (
  <>
    <Header text='Ratings App' />
    <div className="container">
      <FeedbackForm handleAdd={addFeedback}/>
      <FeedbackStats feedback={feedback} />
      <FeedbackList 
        feedback={feedback}
        handleDelete={deleteFeedback}
      />
      </div>
   </>
  )
}

export default App