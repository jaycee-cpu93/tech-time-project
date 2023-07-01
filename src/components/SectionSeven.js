import React, { useState } from "react";
import { HiMinus } from "react-icons/hi";
import { FiPlus } from "react-icons/fi";
const faqData = [
  {
    id: 1,
    question: "Is there a free trial available?",
    answer:
      "High-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. hbuild your future with our quality education. the best and largest all-in-one online tutoring platform in the worldd definition. ",
  },
  {
    id: 2,
    question: "Can i change my plan later?",
    answer:
      "High-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. hbuild your future with our quality education. the best and largest all-in-one online tutoring platform in the worldd definition. ",
  },
  {
    id: 3,
    question: "Are the courses lifetime?",
    answer:
      "High-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. hbuild your future with our quality education. the best and largest all-in-one online tutoring platform in the worldd definition. ",
  },
  {
    id: 4,
    question: "Do i get certified after taking courses?",
    answer:
      "High-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. hbuild your future with our quality education. the best and largest all-in-one online tutoring platform in the worldd definition. ",
  },
  {
    id: 5,
    question: "How do i reach out to mentors?",
    answer:
      "High-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. hbuild your future with our quality education. the best and largest all-in-one online tutoring platform in the worldd definition. ",
  },
  {
    id: 6,
    question: "Do we get job ready after taking courses?",
    answer:
      "High-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. hbuild your future with our quality education. the best and largest all-in-one online tutoring platform in the worldd definition. ",
  },
];

const SectionSeven = () => {
  const [showModal, setShowModal] = useState(null);
  const clickHandler = (currentIndex) => {
    setShowModal((prevState) => {
      //if the prevstate is 1 and the currentIndex = 1, do nothing and reset state,
      //else if the previous state i.e prevState 1 is not equal to the currentIndex(2) then currentIndex
      if (prevState === currentIndex) {
        return null;
      } else {
        return currentIndex;
      }
    });
  };
  return (
    <section className="section-seven">
      <div className="faq">
        <h3>frequently asked questions</h3>
        <p>
          high-defination video is video of higher resolution and quality than
          standard definition. while there’s no standard meaning for high
          definition, generally any standard video image
        </p>
      </div>
      <div className="faq-ring"></div>
      <div className="questions-ans">
        {faqData.map((item, id) => (
          <div key={item.id}>
            <div className="question">
              {showModal === id ? (
                <h5 onClick={() => clickHandler(id)}>{item.question}</h5>
              ) : (
                <p style={{ fontSize: "1.2rem", fontWeight: "600" }}>
                  {item.question}
                </p>
              )}
              <span onClick={() => clickHandler(id)}>
                {showModal === id ? <HiMinus color="#004DB3" /> : <FiPlus />}
              </span>
            </div>
            <div>
              {showModal === id ? (
                <p className="answer">{item.answer}</p>
              ) : (
                <p></p>
              )}
            </div>
            <div className="straight-line"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SectionSeven;
