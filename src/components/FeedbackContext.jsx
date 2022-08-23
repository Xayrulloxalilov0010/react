import { createContext, useState } from "react";
 
const FeedbackContext = createContext()

export const FeedbackProvider = ({children})=>{
     const [feedback, setfeedback] = useState([
        {
            id:1,
            rating:10,
            text:"Badboy"
        }
     ])
    return(
        <FeedbackContext.Provider
        value={{
            feedback 
        }}
        >
             {children}
        </FeedbackContext.Provider>
    )
}
export default FeedbackContext