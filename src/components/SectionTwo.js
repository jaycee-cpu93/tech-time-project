import React from 'react';
import "../styles/style.css";
import crown from "../assets/crown.svg";
import {GiSpeaker} from "react-icons/gi";
import {MdSettingsInputAntenna} from "react-icons/md";
import {IoDocumentTextSharp} from "react-icons/io5";
import readingLaptop from "../assets/reading-on-laptop.png";
import typingOnLaptop from "../assets/typing-on-laptop.png";
import smallFrameOne from "../assets/small-Frame-95.png";
import smallFrameTwo from "../assets/small-Frame-96.png";
import smallFrameThree from "../assets/small-Frame-97.png";
import smallFrameFour from "../assets/small-Frame-98.png";
import smallFrameFive from "../assets/small-Frame-99.png";
import bubbles from "../assets/bubbles.svg";
import ring from "../assets/ring.svg";
import zigzag from "../assets/zigzag-right.svg";

const SectionTwo = () => {
  return (
    <section className='section-two'>
        <div className='sectionTwo-container'>
            <img src={crown} alt="sketch crown"  className='crown'/>
            <h3 className='high-quality'>High quality video, audio &amp; live classes</h3>
            <p className='high-definition'>high-defination video is video of higher resolution and quality than standard definition. while there’s no standard meaning for high definition, generally any standard video image</p>
            <button className='view-btn'>View Courses</button>
            <div className='side-side'>
                <div className='shape'><GiSpeaker className="default-shape speaker" /><h5>Audio Classes</h5></div>
                <div className='shape'><MdSettingsInputAntenna className="default-shape antenna" /><h5>Live Classes</h5></div>
            </div>
            <div className='side-side'>
                <div className='shape grow'><svg className="default-shape autoplay-logo" width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.47019 9.31165V4.2179L9.43199 6.76478L5.47019 9.31165ZM6.88512 12.9905C5.86637 12.9905 4.91138 12.7569 4.02017 12.2898C3.12857 11.8231 2.38564 11.1699 1.79137 10.3304V11.8585H0.659424V8.4627H4.05526V9.59464H2.66863C3.1497 10.3021 3.76039 10.8564 4.50068 11.2575C5.24135 11.6582 6.03616 11.8585 6.88512 11.8585C7.9699 11.8585 8.95318 11.5472 9.83496 10.9247C10.7171 10.3021 11.3374 9.47673 11.6959 8.44855L12.7995 8.70323C12.375 9.9861 11.6204 11.0215 10.5356 11.8093C9.45086 12.5967 8.23402 12.9905 6.88512 12.9905ZM0.687722 6.19881C0.753752 5.5668 0.904678 4.96065 1.1405 4.38034C1.37632 3.80041 1.70176 3.26518 2.1168 2.77467L2.92331 3.58118C2.62146 3.96793 2.37621 4.38053 2.18755 4.81897C1.99889 5.25778 1.88098 5.71773 1.83382 6.19881H0.687722ZM3.71567 2.78882L2.90916 1.98231C3.40911 1.56727 3.94678 1.23938 4.52218 0.998654C5.09759 0.758304 5.69658 0.614547 6.31915 0.567383V1.69933C5.83807 1.74649 5.38058 1.8644 4.94666 2.05306C4.51275 2.24172 4.10242 2.48697 3.71567 2.78882ZM10.0687 2.78882C9.68196 2.48697 9.26937 2.24172 8.83093 2.05306C8.39211 1.8644 7.93217 1.74649 7.45109 1.69933V0.567383C8.08309 0.62398 8.68906 0.77019 9.26899 1.00601C9.8493 1.24183 10.3847 1.56727 10.8752 1.98231L10.0687 2.78882ZM11.9506 6.19881C11.9034 5.71773 11.7855 5.25778 11.5968 4.81897C11.4082 4.38053 11.1629 3.96793 10.8611 3.58118L11.6676 2.77467C12.0826 3.26518 12.4081 3.80041 12.6439 4.38034C12.8797 4.96065 13.0259 5.5668 13.0825 6.19881H11.9506Z" fill="#9269CD"/>
                    </svg><h5>Recorded Classes</h5>
                </div>
                <div className='shape'><IoDocumentTextSharp className="default-shape document" /><h5>50+ Notes</h5></div>
            </div>
        </div>
        <div className='images'>
            <img src={readingLaptop} alt="a guy reading on his laptop" />
            <img src={typingOnLaptop} alt="a guy typing on his laptop" className='typing' />
            <div className='small-images'>
                <p className='enrolled'>255+ enrolled student </p>
                <img src={smallFrameOne} alt="potrait of a lady" className='small-frameone' />
                <img src={smallFrameTwo} alt="potrait of a man" className='small-frame' />
                <img src={smallFrameThree} alt="potrait of a lady" className='small-frame' />
                <img src={smallFrameFour} alt="potrait of a man"  className='small-frame'/>
                <img src={smallFrameFive} alt="potrait of a lady" className='small-frame' />
            </div>
            <img src={bubbles} alt="bubbles" className='bubbles' />
        </div>
        <img src={zigzag} alt="zig zag" className="right-zigzag"/>
        <img src={ring}  alt="ring"  className='right-ring'/>
        <div className='sectiontwo-ring'></div>
    </section>
  )
}

export default SectionTwo