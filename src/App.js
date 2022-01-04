import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import About from './pages/About'
import Header from './components/Header'
import FeedbackList from './components/FeedbackList'
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'
import AboutIconLink from './components/AboutIconLink'
import Post from './components/Post'

import { FeedbackProvider } from './context/FeedbackContext'

function App() {
  return (
    <FeedbackProvider>
      <Router>
        <Header text='Ratings App' />
        <div className="container">
          <Routes> 
            <Route exact path='/' element={
              <>
                <FeedbackForm />
                <FeedbackStats />
                <FeedbackList />
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