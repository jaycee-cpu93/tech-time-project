import React from "react";
import '../styles/style.css';
import {BsArrowUpRight} from 'react-icons/bs';
import {CgShapeZigzag} from 'react-icons/cg';
import frameOne from "../assets/Frame-95.png";
import frameTwo from "../assets/Frame-96.png";
import frameThree from "../assets/Frame-97.png";
import frameFour from "../assets/Frame-98.png";
import frameFive from "../assets/Frame-99.png";
import heroImage from "../assets/HERO-IMAGE.png";
import induction from "../assets/Induction-Hub-Artwork_Admin.svg";
import figmaLogo from "../assets/figma-logo.svg";
import zigzagArrow from "../assets/zig-arrow.svg";
import visualStudioLogo from "../assets/Visual-Studio-Code.svg";
import wikiLogo from "../assets/wiki.svg";
import invertedYellowTriangle from "../assets/hero-yellow-triangle.svg"


const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-container">
            <div className="ring-circle">
                <div className="my-ring"></div>
                <div className="circle"></div>
            </div>
            <h2 className="grow-skills">Grow your skills to advance your career path</h2>
            <div className="zig-zag"><CgShapeZigzag size={50} color={"#5588CC"}/></div>
            <p className="build">
            build your future with our quality education. the best and largest
            all-in-one online tutoring platform in the world
            </p>
            <button className="get-started-btn">Get Started Now <BsArrowUpRight color="white" size={16} /></button>
            <button className="_btn">Enroll now</button>
            <div className="img-previews">
                <img src={frameOne} alt="potrait of a lady"  />
                <img src={frameTwo} alt="potrait of a man" className="frame"/>
                <img src={frameThree} alt="potrait of a lady" className="frame" />
                <img src={frameFour} alt="potrait of a man"  className="frame"/>
                <img src={frameFive} alt="potrait of a lady" className="frame" />
                <div className="previews">
                    <h3>255k+</h3>
                    <p>Previews</p>
                </div>
            </div>      
       </div>
      <div className="hero-images">
            <img src={induction} alt="a lightened bulb" className="bulb" />
            <div className="bigger-ring"></div>
            <img src={figmaLogo} alt="a figma logo"  className="figma-logo"/>
            <img src={zigzagArrow} alt="zigzag arrow"  className="zig-arrow"/>
            <div className="position-circle"></div>
            <img src={heroImage} alt="a smiling lady" className="smiling-lady" />
            <img src={visualStudioLogo} alt="visual studio code logo" className="visual-studio-logo"/>
            <img src={invertedYellowTriangle} alt="inverted yellow triangle" className="yellow-triangle" />
            <img src={wikiLogo} alt="wiki logo" className="wiki-logo" />
      </div>
    </section>
  );
};

export default Hero;
