import React from 'react'
import {Link} from 'react-router-dom'
function About() {
  return (
    <div className='container'>
        <h1>About</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat a nostrum alias officiis tenetur iure. Ipsa totam excepturi, eaque libero aperiam eum quod debitis inventore, ipsum omnis nam molestias accusantium est corrupti laborum dolorum error rerum voluptas similique, magnam sint optio expedita placeat? Tempora quasi quia optio voluptate animi dolore rerum vero consequuntur obcaecati, debitis non necessitatibus blanditiis deleniti tempore et rem nostrum, sint fugiat ipsa distinctio possimus dolores ratione quis inventore. Tenetur eligendi quo ea tempore culpa, quaerat doloremque non in incidunt! Provident cum explicabo molestiae alias, illo sapiente rem! Est ratione velit iure neque qui alias suscipit harum.</p>
        <ul>
            <li>My Homework</li>
            <li>My website</li>
            <li>My gmail: xayrulloxalilov0010@gmail.com</li>
        </ul>
        <Link to="/">HOME</Link>
        
    </div>
  )
}

export default About