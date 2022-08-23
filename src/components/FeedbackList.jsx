import React from 'react';
import {motion, AnimatePresence} from 'framer-motion'; 
import {useContext} from 'react'
import PropTypes from 'prop-types';
import FeedbackItem from './FeedbackItem';
import FeedbackContext from './FeedbackContext'
function FeedbackList({feedback,feedbackDelete}) {
  
  
  if (feedback.length === 0 || !feedback) {
    
  }
  return (
    <div>
      <AnimatePresence>
        {feedback.map((item)=>{
           return <motion.div 
           key={item.id}
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           exit={{ opacity: 0 }} >
               <FeedbackItem key={item.id} item={item} handleClick={feedbackDelete}/>
           </motion.div>
        })}
      </AnimatePresence>
        
    </div>
  )
}
FeedbackList.propTypes = {
  feedback: PropTypes.array
}
export default FeedbackList