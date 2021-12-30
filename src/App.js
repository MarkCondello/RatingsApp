import {useState} from 'react'
import FeedbackData from './data/Feedbackdata'
import Header from './components/Header'
import FeedbackList from './components/FeedbackList'

function App() {
  const [feedback, setFeeback] = useState(FeedbackData)
  return (
  <>
    <Header text='Ratings App' />
    <FeedbackList feedback={feedback}/>
   </>
  )
}

export default App