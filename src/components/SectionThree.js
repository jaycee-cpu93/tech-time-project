import React from "react";
import readingScreen from "../assets/reading_screen.png";
import invertedGreenTriangle from "../assets/inverted-green-triangle.svg";
import yellowZigZag from "../assets/yellow-zigzag.svg";
import education from "../assets/cast_for_education.svg";
import clock from "../assets/schedule.svg";
import groups from "../assets/groups.svg";
import dollarSign from "../assets/local_atm.svg"

const data = [
  {
    id: 1,
    icon: education,
    color: "#4C7FBD",
    heading: "experienced mentors",
    paragraph:
      "high-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition.",
  },
  {
    id: 2,
    icon: clock,
    color: "#AECD5E",
    heading: "one-on-one meetings",
    paragraph:
      "high-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition.",
  },
  {
    id: 3,
    icon: groups,
    color: "#ED6BA6",
    heading: "one-on-one meetings",
    paragraph:
    "high-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition.",
  },
  {
    id: 4,
    icon: dollarSign,
    color: "#EA6B45",
    heading: "Affordable prices",
    paragraph:
    "high-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition.",
  }

];
const SectionThree = () => {
  return (
    <section className="section-three">
      <div className="best-high">
        <div className="section-circle"></div>
        <h3 className="we-best">This is why we are best from others</h3>
        <p className="high-defi">
          High-defination video is video of higher resolution and quality than
          standard definition. while there’s no standard meaning for high
          definition, generally any standard video image
        </p>
        <img src={readingScreen} alt="a man reading on a laptop" />
        <img
          src={invertedGreenTriangle}
          alt="inverted green triangle"
          className="green-triangle"
        />
      </div>
      <img src={yellowZigZag} alt="yellow zig zag" className='yellow-zigzag' />
      <div className="frame-z">
        {data.map((item, id) => (
          <div className="main-box" key={id}>
            <div
              style={{
                padding: "3px",
                width: "50px",
                height: "50px",
                borderRadius: "3px",
                backgroundColor: `${item.color}`,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginBlock: "1em",
              }}
            >
              <img src={item.icon} alt={"images"} />
            </div>
            <h3 className="heading">{item.heading}</h3>
            <p className="paragh">{item.paragraph}</p>
          </div>
        ))}
      </div>
      <div className="purple-ring"></div>
    </section>
  );
};

export default SectionThree;
