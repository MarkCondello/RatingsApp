import { v4 as uuidv4} from 'uuid'
import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import About from './pages/About'
import FeedbackData from './data/Feedbackdata'
import Header from './components/Header'
import FeedbackList from './components/FeedbackList'
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'
import AboutIconLink from './components/AboutIconLink'
import Post from './components/Post'

import { FeedbackProvider } from './context/FeedbackContext'

function App() {
  const [feedback, setFeedback] = useState(FeedbackData)
  const deleteFeedback = ((id) => {
    if(window.confirm('Are you sure you want to delete this item?')) {
      setFeedback(feedback.filter(item => item.id !== id))
    }
  })
  const addFeedback = (newFeedback => {
    newFeedback.id = uuidv4()
    setFeedback([newFeedback, ...feedback] )
  })
  return (
    <FeedbackProvider>
      <Router>
        <Header text='Ratings App' />
        <div className="container">
          <Routes> 
            <Route exact path='/' element={
              <>
                <FeedbackForm handleAdd={addFeedback} />
                <FeedbackStats />
                <FeedbackList handleDelete={deleteFeedback} />
              </>
            }> 
            </Route>
            <Route path='/about' element={<About />} />
            <Route path='/post/*' element={<Post />} />
            {/* <Route path='/post/:id/:name' element={<Post />} /> */}
          </Routes>
          <AboutIconLink />
          </div>
      </Router>
    </FeedbackProvider>
  )
}

export default App