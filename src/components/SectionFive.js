import React from 'react'
import bellaPortrait from "../assets/bella_portrait.png";
import samuelPortrait from "../assets/samuel_portrait.png";
import brycePortrait from "../assets/bryce_portrait.png";

const SectionFive = () => {
    const paragraph = [
        {
            id: 1,
            sentence: "high-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. hbuild your future with our quality education. the best and largest all-in-one online tutoring platform in the worldd definition. high-defination video is video of higher resolution and quality than standard definition. build your future with our quality education. the best and largest all-in-one online tutoring platform in the world",
            img: samuelPortrait,
            name: "Samuel Fortune",
            role: "Product Design"
        },
        {
            id: 2,
            sentence: "high-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. hbuild your future with our quality education. the best and largest all-in-one online tutoring platform in the worldd definition. high-defination video is video of higher resolution and quality than standard definition. build your future with our quality education. the best and largest all-in-one online tutoring platform in the world",
            img: bellaPortrait,
            name: "Bella Moon",
            role: "Product Design"
            
        },
        {
            id: 3,
            sentence: "high-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. hbuild your future with our quality education. the best and largest all-in-one online tutoring platform in the worldd definition. high-defination video is video of higher resolution and quality than standard definition. build your future with our quality education. the best and largest all-in-one online tutoring platform in the world",
            img: samuelPortrait,
            name: "Samuel Fortune",
            role: "Product Design"
        },
        {
            id: 4,
            sentence: "high-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. hbuild your future with our quality education. the best and largest all-in-one online tutoring platform in the worldd definition. high-defination video is video of higher resolution and quality than standard definition. build your future with our quality education. the best and largest all-in-one online tutoring platform in the world",
            img: brycePortrait,
            name: "Bryce Jason",
            role: "Product Design"
        }

    ]
  return (
    <section className='section-five'>
            <h3 className='browse'>What our client are saying</h3>
            <div className='defination'><p className='high-defi defina'>high-defiation video is video of higher resolution and quality than standard definition. while there’s no standard meaning for high definition, generally any standard video image</p></div>
            <div className='testimony-box'>
                    {paragraph.map((text, id) => (
                        <div className='testimony'>
                            <p>{text.sentence}</p>
                            <div className='img-name'>
                                <img src={text.img} alt="portrait" />
                                <div className='name-role'>
                                    <h5>{text.name}</h5>
                                    <h6>{text.role}</h6>
                                </div>
                            </div>
                        </div>))}
            </div>
            <div className='scroll-buttons'>
                <div className='scroll-btn'></div>   
                <div className='scroll-btn diff'></div>   
                <div className='scroll-btn'></div>   
                <div className='scroll-btn'></div>   
            </div>
    </section>
  )
}

export default SectionFive