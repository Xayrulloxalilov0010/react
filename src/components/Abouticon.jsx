import React from 'react'
import {Link} from 'react-router-dom'
import {FaQuestion} from 'react-icons/fa'
function Abouticon() {
  return (
    <div className='about-link' style={{position:"fixed", bottom:'5%', right:'5%'}}>
        <Link to="/about">
            <FaQuestion color='red' style={{fontSize:"35px"}}/>
        </Link>
    </div>
  )
}
 
export default Abouticon