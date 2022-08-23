import React from 'react'
import { useState } from 'react'
import Button from '../UI/Button'
import Card from '../UI/Card'

function FeedbackForm({feedbackAdd}) {
  const [text, setText] = useState('')
  const [btnDisabled, setbtnDisabled] = useState(true)
  const [message, setMessage] = useState(null)
  const handleTextChange = (e)=>{
    if (text === '') {
      setbtnDisabled(true)
    }else if (text !== '' && text.length < 10) {
      setbtnDisabled(true)
      setMessage('Write more than 10 letters')
    }else if (text.length >= 10) {
      setbtnDisabled(false)
      setMessage(null)
    }
    setText(e.target.value)
  }
  const handleSubmit = (e)=>{
    e.preventDefault()
    if (text.length >= 10) {
      const newFeedback = {
        text,
      }
      feedbackAdd(newFeedback)
      setbtnDisabled(true)
      setText('')
    }
  }
  return (
    <Card>
        <form onSubmit={handleSubmit}>
            <div className="input-group">
                <input type="text" placeholder='typing...' onChange={handleTextChange} value={text}/>
                <Button version="btn btn-primary" type='submit' Disabled={btnDisabled}>Send</Button>
            </div>
            <p style={{textAlign:'center', color:'red'}}>{message}</p>
        </form>
    </Card>
  )
}

export default FeedbackForm