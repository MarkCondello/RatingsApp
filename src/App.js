import { v4 as uuidv4} from 'uuid'
import { useState } from 'react'
import { BrowserRouter as Router , Route } from 'react-router-dom'

import About from './pages/About'
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
  <Router>
    <Header text='Ratings App' />
    <div className="container">
      <Route exact path='/'> 
        <FeedbackForm handleAdd={addFeedback}/>
        <FeedbackStats feedback={feedback} />
        <FeedbackList 
          feedback={feedback}
          handleDelete={deleteFeedback}
          />
      </Route>
      <Route path='/about' component={About} />
      </div>
   </Router>
  )
}

export default App