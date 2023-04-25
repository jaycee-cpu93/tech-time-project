import React from 'react'
import '../styles/style.css'

const Header = () => {
  return (
    <React.Fragment>
        <nav className="menu">
            <a href="/"><h1>TechTime</h1></a>
            <ul>
                <li className="item"><a href={"/"}>Home</a></li>
                <li className="item"><a href={"/about"}>AboutUs</a></li>
                <li className="item"><a href={"/course"}>Courses</a></li>
                <li className="item"><a href={"/testimonial"}>Testimonial</a></li>
                <li className="item"><a href={"/community"}>Community</a></li>
                <li className="item"><a href={"/enroll"}><button className='_btn'>Enroll Now</button></a></li>
            </ul>
        </nav>
    </React.Fragment>
  )
}

export default Header