import React from 'react';
import "../styles/style.css"
import {FaStripe} from "react-icons/fa";
import {SiZoom} from "react-icons/si";
import {CgMonday} from "react-icons/cg";
import {SiSlack, SiDropbox} from "react-icons/si";
import monday from "../assets/monday.svg"
import dotCom from "../assets/dot-com.svg"
import letterS from "../assets/letter_s.svg"
import letterL from "../assets/letter_l.svg"
import letterA from "../assets/letter_a.svg"
import letterC from "../assets/letter_c.svg"
import letterK from "../assets/letter_k.svg"
import dropbox from "../assets/dropbox.svg"



const SectionOne = () => {
  return (
    <section className='section-one'>
        <SiZoom size={80} color={"white"}  className="zoom"/>
        <FaStripe size={80} color={"white"} className="stripe" />
        <div>
          <CgMonday size={35} color={"white"}  className="monday-logo"/>
          <img src={monday} alt="monday" />
          <img src={dotCom} alt="dot com"  className='dot-com'/>
        </div>
        <div className='slack'>
          <SiSlack size={35} color={"white"} className="slack-logo" />
          <img src={letterS} alt="letter s" />
          <img src={letterL} alt="letter l" />
          <img src={letterA} alt="letter a" />
          <img src={letterC} alt="letter c" />
          <img src={letterK} alt="letter k" />
        </div>
        <div className='dropbox'>
          <SiDropbox size={35} color={"white"} className="dropbox-logo" />
          <img src={dropbox} alt="dropbox" />

        </div>
    </section>
  )
}

export default SectionOne;