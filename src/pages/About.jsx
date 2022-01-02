import Card from '../components/shared/Card'
import { Link } from 'react-router-dom'
function About() {
  return (
    <Card>
      <div className="about">
        <h1>About this project</h1>
        <p>This is a React app to leave feedback for a product or service.</p>
        <p>Versions: 1.0.0</p>
        <p>
          <Link to={{ pathname: '/', search: '?sort=name' }}>Back to home</Link>
        </p>
      </div>
     </Card>
  )
}

export default About
