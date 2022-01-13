import {useState} from 'react'
import { Navigate, useNavigate, Routes, Route } from 'react-router-dom'
// import { useParams, Navigate, useNavigate, Routes, Route } from 'react-router-dom'
import AuthorSelector from './AuthorSelector'
function Post() {
  const [author, setAuthor] = useState('Anonymouse')
  // const params = useParams()
  const status = 200
 
  const navigate = useNavigate()
  const onClick = (ev) => {
    ev.preventDefault()
    console.log('Hello')
    navigate('/about')
  }
  if(status === 404) {
    return <Navigate to='not-found' />
  }
  return (
    <div>
      <h1>Post foo</h1>
      <h2>Authored by: {author}</h2>
      {/* <h1>Post {params.id}</h1> */}
      {/* <p>Name: {params.name}</p> */}
      <AuthorSelector select={(author => setAuthor(author))}/>

      <button onClick={onClick}>About</button>
      <Routes>
        <Route path="/show" element={<h1>Hello Show post</h1>}/>
      </Routes>
    </div>
  )
}

export default Post
