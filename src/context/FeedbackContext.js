// import { v4 as uuidv4} from 'uuid'
import { createContext, useState, useEffect } from 'react'
// import FeedbackData from '../data/Feedbackdata'
import axios from 'axios'

const FeedbackContext = createContext()

export const FeedbackProvider = ({children}) => {
  const [isLoading, setIsLoading] = useState(true)
  const [feedback, setFeedback] = useState([])
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false
  }) 

  useEffect(() => {
    fetchFeedback()
  }, [])

  const fetchFeedback = async () => {
    axios.get('http://localhost:5000/feedback?_sort=id&_order=desc')
      .then(resp => {
        setIsLoading(false)
        setFeedback(resp.data)
      })
  }
  const deleteFeedback = ((id) => {
    if(window.confirm('Are you sure you want to delete this item?')) {
      axios.delete(`http://localhost:5000/feedback/${id}`)
        .then(resp => {
          // console.log("reached deleteFeedback,", {resp})
          setFeedback(feedback.filter(item => item.id !== id))
        })
    }
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
    axios.put(`http://localhost:5000/feedback/${id}`, updatedItem)
      .then(resp => {
        // console.log('updateFeedback method reached,', {resp})
        setFeedback(feedback.map(item => {
          return item.id === id ? { ...item, ...updatedItem } : item
        }))
      })
  }
  //Set new Feedback item
  const addFeedback = (newFeedback => {
    axios.post('http://localhost:5000/feedback', newFeedback)
      .then(resp => {
        // console.log('addFeedback method reached,', {resp})
        setFeedback([newFeedback, ...feedback] )
      })
    // newFeedback.id = uuidv4()
  })
  return <FeedbackContext.Provider 
    value={{
      feedback,
      deleteFeedback,
      feedbackEdit,
      isLoading,
      addFeedback,
      editFeedback,
      updateFeedback
    }}>
    {children}
  </FeedbackContext.Provider>
}

export default FeedbackContext