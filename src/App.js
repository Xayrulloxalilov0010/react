import React, { useState } from "react";
import {v4 as uuidv4} from 'uuid'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Abouticon from "./components/Abouticon";
import FeedbackForm from "./components/FeedbackForm";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackData from "./data/FeedbackData";
import Header from './Header';
import About from "./components/About";
import { FeedbackProvider } from "./components/FeedbackContext";
function App() {
    const [feedback,setFeedback] = useState(FeedbackData)
    function feedbackDelete(id) {
        setFeedback(feedback.filter((item)=> item.id !== id))
    }
    function feedbackAdd(newFeedback) {
        newFeedback.id = uuidv4()
        setFeedback([newFeedback,...feedback])
    }
    return (
        <>
            <FeedbackProvider>
            <Router>
                <Header />
                <Routes>
                     <Route exact path="/" element={
                    <div className="container">
                        <FeedbackForm  feedbackAdd={feedbackAdd}/>
                        <FeedbackStats feedback={feedback} />
                        <FeedbackList feedback={feedback} feedbackDelete={feedbackDelete}/>
                    </div>
                     } />
                    <Route path="/About" element={<About />}/>
                </Routes>
                <Abouticon />
            </Router>
            </FeedbackProvider>
        </>
    )
}

export default App