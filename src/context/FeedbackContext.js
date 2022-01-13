import { v4 as uuidv4} from 'uuid'
import { createContext, useState } from 'react'
import FeedbackData from '../data/Feedbackdata'

const FeedbackContext = createContext()

export const FeedbackProvider = ({children}) => {
  const [feedback, setFeedback] = useState(FeedbackData)
  const deleteFeedback = ((id) => {
    if(window.confirm('Are you sure you want to delete this item?')) {
      setFeedback(feedback.filter(item => item.id !== id))
    }
  })
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false
  }) 
  //Set Item to be updated
  const editFeedback = (item => {
    // console.log('editFeedback: ', {item})
    setFeedbackEdit({
      item,
      edit: true
    })
  })
  //Update feedbackEdit item which is set
  const updateFeedback = (id, updatedItem) => {
    //console.log({id, updatedItem})
    setFeedback(feedback.map(item => {
      return item.id === id ? { ...item, ...updatedItem } : item
      })
    )
  }
  //Set new Feedback item
  const addFeedback = (newFeedback => {
    newFeedback.id = uuidv4()
    setFeedback([newFeedback, ...feedback] )
  })
  return <FeedbackContext.Provider 
    value={{
      feedback,
      deleteFeedback,
      feedbackEdit,
      addFeedback,
      editFeedback,
      updateFeedback
    }}>
    {children}
  </FeedbackContext.Provider>
}

export default FeedbackContext