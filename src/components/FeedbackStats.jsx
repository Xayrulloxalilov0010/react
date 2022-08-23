import React from 'react'
import PropTypes from 'prop-types'
function FeedbackStats({feedback}) {
  return (
    <div className='feedback-stats'>
        <h3>{feedback.length} Reviews</h3>
    </div>
  )
}

FeedbackStats.propTypes = {
  feedback: PropTypes.array
}

export default FeedbackStats