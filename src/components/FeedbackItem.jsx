import React from 'react';
import PropTypes from 'prop-types'
import {FaTimes} from 'react-icons/fa'
import Button from '../UI/Button';
import Card from '../UI/Card';
function FeedbackItem({item,handleClick}) {
  return (
    <Card>
        <div className="num-display">{item.rating}</div>
        <div className="text-display">{item.text}</div>
        <Button version="close" click={()=> handleClick(item.id)}>
          <FaTimes color='red'/>
        </Button>
    </Card>
  )
}
FeedbackItem.propType = {
  item: PropTypes.object
}
export default FeedbackItem