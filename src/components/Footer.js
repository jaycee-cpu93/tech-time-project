import React from 'react'
import facebook from "../assets/facebook.svg";
import twitter from "../assets/twitter.svg";
import youtube from "../assets/youtube.svg";
import instagram from "../assets/instagram.svg";
import discord from "../assets/discord.svg"
const Footer = () => {
  return (
    <footer className='footer-container'>
        <div className='footer-content'>
            <h1>Tech Time</h1>
            <p>reach out to us on any of our social media networks</p>
            <div className='socials'>
              <img src={facebook} alt='facebook logo'/>
              <img src={twitter} alt='twitter logo' />
              <img src={youtube} alt='youtube logo' />
              <img src={instagram} alt='instagram logo' />
              <img src={discord} alt='discord logo' />
            </div>
        </div>
        <div className='links'>
          <h4>Useful Links</h4>
          <p>Home</p>
          <p>About Us</p>
          <p>Our Courses</p>
          <p>Testimonials</p>
          <p>Our Community</p>
        </div>
        <div className='links'>
          <h4>Community</h4>
          <p>Help Centers</p>
          <p>Partners</p>
          <p>Suggestion</p>
          <p>Blog</p>
          <p>Newsletter</p>
        </div>
        <div className='links'>
          <h4>Subscribe Us</h4>
            <input type='text' />
            <button>Send Message</button>
        </div>
    </footer>
  )
}

export default Footer