import { createContext, useState } from 'react'

const FeedbackContext = createContext()

export const FeedbackProvider = ({children}) => {
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      text: 'This item is from Context',
      rating: 6,
    },
    {
      id: 2,
      text: 'This second item is from Context',
      rating: 2,
    }
  ])
  return <FeedbackContext.Provider value={{feedback}}>
    {children}
  </FeedbackContext.Provider>
}

export default FeedbackContext