import {useState} from 'react'
import FeedbackData from './data/Feedbackdata'
import Header from './components/Header'
import FeedbackList from './components/FeedbackList'
import FeedbackStats from './components/FeedbackStats'

function App() {
  const [feedback, setFeeback] = useState(FeedbackData)
  const deleteFeedback = ((id) => {
    // console.log('from App.js', {id})
    if(window.confirm('Are you sure you want to delete this item?')) {
      setFeeback(feedback.filter(item => item.id !== id))
    }
  })
  
  return (
  <>
    <Header text='Ratings App' />
    <div className="container">
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