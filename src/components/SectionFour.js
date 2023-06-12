import React from 'react'
import plus from "../assets/star.svg";
import readingOnBoard from "../assets/reading_on_board.png";
import clock from "../assets/clock.svg";
import menu from "../assets/menu_book.svg";
import smallestPicOne from "../assets/smallest_pic_one.png";
import audience from "../assets/audience.png";
import smallestPicTwo from "../assets/smallest_pic_two.png";
import readingOnLaptop from "../assets/reading_on_laptop.png";
import smallestPicThree from "../assets/smallest_pic_three.png";
import codingOnLaptop from "../assets/coding_on_laptop.png";
import smallestPicFour from "../assets/smallest_pic_four.png";
import meeting from "../assets/boarding_room_meeting.png";
import smallestPicFive from "../assets/smallest_pic_five.png";
import typing from "../assets/typing.png";
import smallestPicSix from "../assets/smallest_pic_six.png";




const dataItem = [
    {
        id: 1,
        img: readingOnBoard,
        box: "Design",
        rating: "4.7 ⭐️ (32.7k)",
        description: "Introduction to user research in UX design",
        schedule: clock,
        time:  "23hrs 50mins",
        book: menu,
        lesson: "15 Lessons",
        smallestImg: smallestPicOne,
        name: "Leonard Victor",  
        price: "$15.00"
    },
    {
        id: 2,
        img: audience,
        box: "Marketing",
        rating: "4.7 ⭐️ (8.7k)",
        description: "Introduction to  new marketing audience ",
        schedule: clock,
        time:  "22hrs 30mins",
        book: menu,
        lesson: "12 Lessons",
        smallestImg: smallestPicTwo,
        name: "Jeffrey Williams",  
        price: "$32.00"
    },
    {
        id: 3,
        img: readingOnLaptop,
        box: "Development",
        rating: "4.7 ⭐️ (12.7k)",
        description: "Introduction to  HTML, CSS & Bootstrap",
        schedule: clock,
        time:  "22hrs 30mins",
        book: menu,
        lesson: "12 Lessons",
        smallestImg: smallestPicThree,
        name: "Claretta Mason",  
        price: "$55.00"
    },
    {
        id: 4,
        img: codingOnLaptop,
        box: "Development",
        rating: "4.7 ⭐️ (32.7k)",
        description: "Introduction to javascript, Git & GitHub",
        schedule: clock,
        time:  "30hrs 50mins",
        book: menu,
        lesson: "22 Lessons",
        smallestImg: smallestPicFour,
        name: "Jessica Duke",  
        price: "$45.00"
    },
    {
        id: 5,
        img: meeting,
        box: "Marketing",
        rating: "4.7 ⭐️ (4.7k)",
        description: "Introduction to outroom  marketing analysis",
        schedule: clock,
        time:  "33hrs 50mins",
        book: menu,
        lesson: "26 Lessons",
        smallestImg: smallestPicFive,
        name: "Samuel Jacobs",  
        price: "$25.00"
    },
    {
        id: 6,
        img: typing,
        box: "Development",
        rating: "4.7 ⭐️ (15.7k)",
        description: "Introduction to live  marketing analysis",
        schedule: clock,
        time:  "10hrs 50mins",
        book: menu,
        lesson: "32 Lessons",
        smallestImg: smallestPicSix,
        name: "Adam Smith",  
        price: "$25.00" 
    }

]

const SectionFour = () => {
  return (
    <section className='section-four'>
        <h2 className='browse'>browse our popular courses</h2>
        <div className='defination'><p className='high-defi defi'>high-defination video is video of higher resolution and quality than standard definition. while there’s no standard meaning for high definition, generally any standard video image</p></div>
        <div><img src={plus} alt="plus" /></div>
        <div className='categories'>
            <h5 className='all-cat'> All Categories</h5>
            <h5>Design</h5>
            <h5> Development</h5>
            <h5>Marketing</h5>
        </div>
        <div className='grid-container'>
            {dataItem.map((element, id) => (
                <div className='box' key={element.id}>
                    <img src={element.img} alt="imagess" className='grid-pic' />
                    <div className='des-rating'>
                        <h5 className='design'>{element.box}</h5>
                        <p className='rating'>{element.rating}</p>
                    </div>
                    <h2 className='intro'>{element.description}</h2>
                    <div className='clock-time-lesson'>
                        <div className='schedule'>
                            <img src={element.schedule} alt="clock" className='clock' />
                            <h4>{element.time}</h4>
                        </div>
                        <div className='schedule'>
                            <img src={element.book} alt='menu book' />
                            <h4>{element.lesson}</h4>
                        </div>
                    </div>
                    <div className='picname-price'>
                        <div className='pic-name'>
                                <img src={element.smallestImg} alt="portrait" />
                                <h4>{element.name}</h4>
                        </div>
                        <h3>{element.price}</h3>
                    </div>
            </div>
            ))}
        </div>
        <div className='explore-btn'>Explore All Course</div>
       
    </section>
  )
}

export default SectionFour