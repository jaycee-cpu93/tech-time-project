import React from 'react';
import readingScreen from "../assets/reading_screen.png";
import invertedGreenTriangle from "../assets/inverted-green-triangle.svg"

const SectionThree = () => {
  return (
    <section className='section-three'>
        <div className='best-high'>
            <div className='section-circle'></div>
            <h3 className='we-best'>This is why we are best from others</h3>
            <p className='high-defi'>High-defination video is video of higher resolution and quality than standard definition. while there’s no standard meaning for high definition, generally any standard video image</p>
            <img src={readingScreen} alt="a man reading on a laptop" />
            <img src={invertedGreenTriangle} alt="inverted green triangle" className='green-triangle' />
        </div>
        <div>
            <div>D</div>
        </div>
        
    </section>
  )
}

export default SectionThree