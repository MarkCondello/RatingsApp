import PropTypes from 'prop-types'

function FeedbackStats({ feedback }) {
  let average = (feedback.reduce((acc, curr) => { return acc + curr.rating}, 0) / feedback.length).toFixed(1).replace(/[.,]0$/, '')
  // console.log({average})
  return (
    <div className="feedback-stats">
      <h4>{feedback.length} Reviews</h4>
      <h4>Average Rating: {!average || average === 'NaN' ? 0 : average} </h4>
    </div>
  )
}

FeedbackStats.propTypes = {
  feedback: PropTypes.array.isRequired,
}

export default FeedbackStats